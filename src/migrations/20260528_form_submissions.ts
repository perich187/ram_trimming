import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_form_submissions_source') THEN
        CREATE TYPE "public"."enum_form_submissions_source" AS ENUM('home-quote', 'contact');
      END IF;
    END $$;

    CREATE TABLE IF NOT EXISTS "form_submissions" (
      "id"          serial PRIMARY KEY NOT NULL,
      "source"      "public"."enum_form_submissions_source",
      "name"        varchar NOT NULL,
      "email"       varchar NOT NULL,
      "phone"       varchar,
      "service"     varchar,
      "message"     varchar,
      "updated_at"  timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at"  timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx"
      ON "form_submissions" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx"
      ON "form_submissions" USING btree ("created_at");

    ALTER TABLE "payload_locked_documents_rels"
      ADD COLUMN IF NOT EXISTS "form_submissions_id" integer;

    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx"
      ON "payload_locked_documents_rels" USING btree ("form_submissions_id");

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payload_locked_documents_rels_form_submissions_fk') THEN
        ALTER TABLE "payload_locked_documents_rels"
          ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk"
          FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id")
          ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "form_submissions_id";
    DROP TABLE IF EXISTS "form_submissions";
    DROP TYPE IF EXISTS "public"."enum_form_submissions_source";
  `)
}
