import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "services_content_sections"
      ADD COLUMN IF NOT EXISTS "dark_card_heading" varchar,
      ADD COLUMN IF NOT EXISTS "dark_card_description" varchar,
      ADD COLUMN IF NOT EXISTS "dark_card_badge1_icon" varchar,
      ADD COLUMN IF NOT EXISTS "dark_card_badge1_label" varchar,
      ADD COLUMN IF NOT EXISTS "dark_card_badge2_icon" varchar,
      ADD COLUMN IF NOT EXISTS "dark_card_badge2_label" varchar,
      ADD COLUMN IF NOT EXISTS "card1_heading" varchar,
      ADD COLUMN IF NOT EXISTS "card1_description" varchar,
      ADD COLUMN IF NOT EXISTS "card1_items" varchar,
      ADD COLUMN IF NOT EXISTS "card2_heading" varchar,
      ADD COLUMN IF NOT EXISTS "card2_description" varchar,
      ADD COLUMN IF NOT EXISTS "card2_items" varchar;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "services_content_sections"
      DROP COLUMN IF EXISTS "dark_card_heading",
      DROP COLUMN IF EXISTS "dark_card_description",
      DROP COLUMN IF EXISTS "dark_card_badge1_icon",
      DROP COLUMN IF EXISTS "dark_card_badge1_label",
      DROP COLUMN IF EXISTS "dark_card_badge2_icon",
      DROP COLUMN IF EXISTS "dark_card_badge2_label",
      DROP COLUMN IF EXISTS "card1_heading",
      DROP COLUMN IF EXISTS "card1_description",
      DROP COLUMN IF EXISTS "card1_items",
      DROP COLUMN IF EXISTS "card2_heading",
      DROP COLUMN IF EXISTS "card2_description",
      DROP COLUMN IF EXISTS "card2_items";
  `)
}
