import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "forms_blocks_upload" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "_path" text NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "label" varchar,
      "upload_collection" varchar NOT NULL,
      "width" numeric,
      "max_file_size" numeric,
      "required" boolean,
      "multiple" boolean,
      "block_name" varchar
    );

    CREATE TABLE IF NOT EXISTS "forms_blocks_upload_mime_types" (
      "_order" integer NOT NULL,
      "_parent_id" varchar NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "mime_type" varchar NOT NULL
    );

    DO $$ BEGIN
      ALTER TABLE "forms_blocks_upload" ADD CONSTRAINT "forms_blocks_upload_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "forms"("id") ON DELETE CASCADE;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;

    DO $$ BEGIN
      ALTER TABLE "forms_blocks_upload_mime_types" ADD CONSTRAINT "forms_blocks_upload_mime_types_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "forms_blocks_upload"("id") ON DELETE CASCADE;
    EXCEPTION WHEN duplicate_object THEN NULL; END $$;

    CREATE INDEX IF NOT EXISTS "forms_blocks_upload_order_idx" ON "forms_blocks_upload" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "forms_blocks_upload_parent_id_idx" ON "forms_blocks_upload" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "forms_blocks_upload_path_idx" ON "forms_blocks_upload" USING btree ("_path");

    CREATE INDEX IF NOT EXISTS "forms_blocks_upload_mime_types_order_idx" ON "forms_blocks_upload_mime_types" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "forms_blocks_upload_mime_types_parent_id_idx" ON "forms_blocks_upload_mime_types" USING btree ("_parent_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "forms_blocks_upload_mime_types";
    DROP TABLE IF EXISTS "forms_blocks_upload";
  `)
}
