import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- Add card3 and card4 columns to service sections
    ALTER TABLE "services_content_sections"
      ADD COLUMN IF NOT EXISTS "card3_heading" varchar,
      ADD COLUMN IF NOT EXISTS "card3_description" varchar,
      ADD COLUMN IF NOT EXISTS "card3_items" varchar,
      ADD COLUMN IF NOT EXISTS "card4_heading" varchar,
      ADD COLUMN IF NOT EXISTS "card4_description" varchar,
      ADD COLUMN IF NOT EXISTS "card4_items" varchar;

    -- Home page service tiles (editable in Payload admin)
    CREATE TABLE IF NOT EXISTS "homepage_content_services_items" (
      "_order"      integer NOT NULL,
      "_parent_id"  integer NOT NULL,
      "id"          varchar PRIMARY KEY NOT NULL,
      "heading"     varchar,
      "icon"        varchar,
      "description" varchar,
      "image_id"    integer
    );
    CREATE INDEX IF NOT EXISTS "homepage_content_services_items_order_idx"
      ON "homepage_content_services_items" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "homepage_content_services_items_parent_id_idx"
      ON "homepage_content_services_items" USING btree ("_parent_id");

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'homepage_content_services_items_image_id_media_id_fk') THEN
        ALTER TABLE "homepage_content_services_items"
          ADD CONSTRAINT "homepage_content_services_items_image_id_media_id_fk"
          FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'homepage_content_services_items_parent_id_fk') THEN
        ALTER TABLE "homepage_content_services_items"
          ADD CONSTRAINT "homepage_content_services_items_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_content"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "homepage_content_services_items";
    ALTER TABLE "services_content_sections"
      DROP COLUMN IF EXISTS "card3_heading",
      DROP COLUMN IF EXISTS "card3_description",
      DROP COLUMN IF EXISTS "card3_items",
      DROP COLUMN IF EXISTS "card4_heading",
      DROP COLUMN IF EXISTS "card4_description",
      DROP COLUMN IF EXISTS "card4_items";
  `)
}
