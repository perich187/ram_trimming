import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Renames form_submissions → enquiries in case the previous migration ran
// under the old collection slug before it was renamed to avoid conflicts with
// the Payload form-builder plugin which also uses 'form-submissions'.
export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Rename the enum type
  await db.execute(sql`
    DO $$ BEGIN
      IF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_form_submissions_source')
         AND NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_enquiries_source') THEN
        ALTER TYPE "public"."enum_form_submissions_source" RENAME TO "enum_enquiries_source";
      END IF;
    END $$;
  `)

  // Rename the table
  await db.execute(sql`
    DO $$ BEGIN
      IF EXISTS (
            SELECT 1 FROM information_schema.tables
            WHERE table_schema = 'public' AND table_name = 'form_submissions'
          )
         AND NOT EXISTS (
            SELECT 1 FROM information_schema.tables
            WHERE table_schema = 'public' AND table_name = 'enquiries'
          ) THEN
        ALTER TABLE "public"."form_submissions" RENAME TO "enquiries";
      END IF;
    END $$;
  `)

  // Rename FK column in payload_locked_documents_rels
  await db.execute(sql`
    DO $$ BEGIN
      IF EXISTS (
            SELECT 1 FROM information_schema.columns
            WHERE table_name = 'payload_locked_documents_rels' AND column_name = 'form_submissions_id'
          )
         AND NOT EXISTS (
            SELECT 1 FROM information_schema.columns
            WHERE table_name = 'payload_locked_documents_rels' AND column_name = 'enquiries_id'
          ) THEN
        ALTER TABLE "payload_locked_documents_rels"
          RENAME COLUMN "form_submissions_id" TO "enquiries_id";
      END IF;
    END $$;
  `)

  // Drop old FK constraint and add new one pointing to enquiries
  await db.execute(sql`
    DO $$ BEGIN
      IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payload_locked_documents_rels_form_submissions_fk') THEN
        ALTER TABLE "payload_locked_documents_rels"
          DROP CONSTRAINT "payload_locked_documents_rels_form_submissions_fk";
      END IF;
    END $$;
  `)

  // Ensure the enquiries_id column and FK exist (handles all states)
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels"
      ADD COLUMN IF NOT EXISTS "enquiries_id" integer;

    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_enquiries_id_idx"
      ON "payload_locked_documents_rels" USING btree ("enquiries_id");

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payload_locked_documents_rels_enquiries_fk') THEN
        ALTER TABLE "payload_locked_documents_rels"
          ADD CONSTRAINT "payload_locked_documents_rels_enquiries_fk"
          FOREIGN KEY ("enquiries_id") REFERENCES "public"."enquiries"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payload_locked_documents_rels_enquiries_fk') THEN
        ALTER TABLE "payload_locked_documents_rels"
          DROP CONSTRAINT "payload_locked_documents_rels_enquiries_fk";
      END IF;
    END $$;
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "enquiries_id";
  `)
}
