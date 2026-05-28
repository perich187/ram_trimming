import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Enum additions must run outside a modified transaction in some PG versions —
  // execute them first, individually.
  await db.execute(sql`ALTER TYPE "public"."enum_services_category" ADD VALUE IF NOT EXISTS 'industrial'`)
  await db.execute(sql`ALTER TYPE "public"."enum_services_category" ADD VALUE IF NOT EXISTS 'custom'`)
  await db.execute(sql`ALTER TYPE "public"."enum_portfolio_category" ADD VALUE IF NOT EXISTS 'special'`)

  await db.execute(sql`
    -- ── Existing collection updates ───────────────────────────────────────────
    ALTER TABLE "services" ADD COLUMN IF NOT EXISTS "image_id" integer;
    ALTER TABLE "portfolio" ADD COLUMN IF NOT EXISTS "tag" varchar;

    -- ── homepage_content (table already exists; create missing array table) ──
    CREATE TABLE IF NOT EXISTS "homepage_content_why_choose_items" (
      "_order"     integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id"         varchar PRIMARY KEY NOT NULL,
      "icon"       varchar,
      "label"      varchar
    );
    CREATE INDEX IF NOT EXISTS "homepage_content_why_choose_items_order_idx"
      ON "homepage_content_why_choose_items" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "homepage_content_why_choose_items_parent_id_idx"
      ON "homepage_content_why_choose_items" USING btree ("_parent_id");

    -- ── about_content ─────────────────────────────────────────────────────────
    CREATE TABLE IF NOT EXISTS "about_content" (
      "id"                  serial PRIMARY KEY NOT NULL,
      "hero_badge"          varchar,
      "hero_heading"        varchar,
      "hero_description"    varchar,
      "hero_image_id"       integer,
      "stats_stat1_number"  varchar,
      "stats_stat1_label"   varchar,
      "stats_stat2_number"  varchar,
      "stats_stat2_label"   varchar,
      "story_heading"       varchar,
      "story_text1"         varchar,
      "story_text2"         varchar,
      "story_badge"         varchar,
      "value_card_heading"  varchar,
      "value_card_text"     varchar,
      "identity_heading"    varchar,
      "identity_text"       varchar,
      "identity_image_id"   integer,
      "values_heading"      varchar,
      "cta_heading"         varchar,
      "cta_text"            varchar,
      "updated_at"          timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at"          timestamp(3) with time zone DEFAULT now() NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "about_content_values_items" (
      "_order"      integer NOT NULL,
      "_parent_id"  integer NOT NULL,
      "id"          varchar PRIMARY KEY NOT NULL,
      "number"      varchar,
      "label"       varchar,
      "description" varchar
    );
    CREATE INDEX IF NOT EXISTS "about_content_values_items_order_idx"
      ON "about_content_values_items" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "about_content_values_items_parent_id_idx"
      ON "about_content_values_items" USING btree ("_parent_id");

    -- ── services_content ──────────────────────────────────────────────────────
    CREATE TABLE IF NOT EXISTS "services_content" (
      "id"           serial PRIMARY KEY NOT NULL,
      "hero_heading" varchar,
      "hero_subtext" varchar,
      "hero_image_id" integer,
      "cta_heading"  varchar,
      "cta_subtext"  varchar,
      "cta_phone"    varchar,
      "cta_location" varchar,
      "updated_at"   timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at"   timestamp(3) with time zone DEFAULT now() NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "services_content_sections" (
      "_order"      integer NOT NULL,
      "_parent_id"  integer NOT NULL,
      "id"          varchar PRIMARY KEY NOT NULL,
      "number"      varchar,
      "heading"     varchar,
      "accent"      varchar
    );
    CREATE INDEX IF NOT EXISTS "services_content_sections_order_idx"
      ON "services_content_sections" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "services_content_sections_parent_id_idx"
      ON "services_content_sections" USING btree ("_parent_id");

    -- ── contact_content ───────────────────────────────────────────────────────
    CREATE TABLE IF NOT EXISTS "contact_content" (
      "id"           serial PRIMARY KEY NOT NULL,
      "hero_heading" varchar,
      "hero_subtext" varchar,
      "hero_image_id" integer,
      "info_address" varchar,
      "info_phone"   varchar,
      "info_email"   varchar,
      "form_heading" varchar,
      "form_subtext" varchar,
      "updated_at"   timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at"   timestamp(3) with time zone DEFAULT now() NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "contact_content_info_hours" (
      "_order"     integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id"         varchar PRIMARY KEY NOT NULL,
      "day"        varchar,
      "time"       varchar
    );
    CREATE INDEX IF NOT EXISTS "contact_content_info_hours_order_idx"
      ON "contact_content_info_hours" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "contact_content_info_hours_parent_id_idx"
      ON "contact_content_info_hours" USING btree ("_parent_id");

    -- ── Foreign keys (idempotent via DO blocks) ───────────────────────────────
    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'homepage_content_why_choose_items_parent_id_fk') THEN
        ALTER TABLE "homepage_content_why_choose_items"
          ADD CONSTRAINT "homepage_content_why_choose_items_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage_content"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'about_content_values_items_parent_id_fk') THEN
        ALTER TABLE "about_content_values_items"
          ADD CONSTRAINT "about_content_values_items_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."about_content"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_content_sections_parent_id_fk') THEN
        ALTER TABLE "services_content_sections"
          ADD CONSTRAINT "services_content_sections_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."services_content"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'contact_content_info_hours_parent_id_fk') THEN
        ALTER TABLE "contact_content_info_hours"
          ADD CONSTRAINT "contact_content_info_hours_parent_id_fk"
          FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_content"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;

    DO $$ BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'services_image_id_media_id_fk') THEN
        ALTER TABLE "services"
          ADD CONSTRAINT "services_image_id_media_id_fk"
          FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "homepage_content_why_choose_items";
    DROP TABLE IF EXISTS "about_content_values_items";
    DROP TABLE IF EXISTS "about_content";
    DROP TABLE IF EXISTS "services_content_sections";
    DROP TABLE IF EXISTS "services_content";
    DROP TABLE IF EXISTS "contact_content_info_hours";
    DROP TABLE IF EXISTS "contact_content";
    ALTER TABLE "services" DROP COLUMN IF EXISTS "image_id";
    ALTER TABLE "portfolio" DROP COLUMN IF EXISTS "tag";
  `)
}
