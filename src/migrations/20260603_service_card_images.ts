import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "services_content_sections"
      ADD COLUMN IF NOT EXISTS "card1_image_id" integer,
      ADD COLUMN IF NOT EXISTS "card2_image_id" integer,
      ADD COLUMN IF NOT EXISTS "card3_image_id" integer,
      ADD COLUMN IF NOT EXISTS "card4_image_id" integer;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_content_sections_card1_image_id_media_id_fk') THEN
        ALTER TABLE "services_content_sections"
          ADD CONSTRAINT "services_content_sections_card1_image_id_media_id_fk"
          FOREIGN KEY ("card1_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_content_sections_card2_image_id_media_id_fk') THEN
        ALTER TABLE "services_content_sections"
          ADD CONSTRAINT "services_content_sections_card2_image_id_media_id_fk"
          FOREIGN KEY ("card2_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_content_sections_card3_image_id_media_id_fk') THEN
        ALTER TABLE "services_content_sections"
          ADD CONSTRAINT "services_content_sections_card3_image_id_media_id_fk"
          FOREIGN KEY ("card3_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_content_sections_card4_image_id_media_id_fk') THEN
        ALTER TABLE "services_content_sections"
          ADD CONSTRAINT "services_content_sections_card4_image_id_media_id_fk"
          FOREIGN KEY ("card4_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "services_content_sections"
      DROP COLUMN IF EXISTS "card1_image_id",
      DROP COLUMN IF EXISTS "card2_image_id",
      DROP COLUMN IF EXISTS "card3_image_id",
      DROP COLUMN IF EXISTS "card4_image_id";
  `)
}
