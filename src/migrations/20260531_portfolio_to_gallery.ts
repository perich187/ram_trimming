import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Rename enum first (must be outside transaction)
  await db.execute(sql`ALTER TYPE "public"."enum_portfolio_category" RENAME TO "enum_gallery_category"`)

  await db.execute(sql`
    -- Rename portfolio table to gallery
    ALTER TABLE "portfolio" RENAME TO "gallery";

    -- Drop old FK and index on gallery.image_id
    ALTER TABLE "gallery" DROP CONSTRAINT IF EXISTS "portfolio_image_id_media_id_fk";
    DROP INDEX IF EXISTS "portfolio_image_idx";
    DROP INDEX IF EXISTS "portfolio_updated_at_idx";
    DROP INDEX IF EXISTS "portfolio_created_at_idx";

    CREATE INDEX IF NOT EXISTS "gallery_image_idx" ON "gallery" USING btree ("image_id");
    CREATE INDEX IF NOT EXISTS "gallery_updated_at_idx" ON "gallery" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "gallery_created_at_idx" ON "gallery" USING btree ("created_at");

    -- Update payload_locked_documents_rels: rename column and FK
    ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "portfolio_id" TO "gallery_id";
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_portfolio_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_portfolio_id_idx";
    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_gallery_id_idx"
      ON "payload_locked_documents_rels" USING btree ("gallery_id");
  `)

  // Add new FK constraints via idempotent DO blocks
  await db.execute(sql`
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'gallery_image_id_media_id_fk') THEN
        ALTER TABLE "gallery"
          ADD CONSTRAINT "gallery_image_id_media_id_fk"
          FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payload_locked_documents_rels_gallery_fk') THEN
        ALTER TABLE "payload_locked_documents_rels"
          ADD CONSTRAINT "payload_locked_documents_rels_gallery_fk"
          FOREIGN KEY ("gallery_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`ALTER TYPE "public"."enum_gallery_category" RENAME TO "enum_portfolio_category"`)

  await db.execute(sql`
    ALTER TABLE "gallery" RENAME TO "portfolio";
    ALTER TABLE "gallery" DROP CONSTRAINT IF EXISTS "gallery_image_id_media_id_fk";
    DROP INDEX IF EXISTS "gallery_image_idx";
    DROP INDEX IF EXISTS "gallery_updated_at_idx";
    DROP INDEX IF EXISTS "gallery_created_at_idx";
    ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "gallery_id" TO "portfolio_id";
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_gallery_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_gallery_id_idx";
  `)
}
