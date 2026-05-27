# Ram's Trimming — CMS Website

Next.js 15 + Payload CMS v3 + Supabase PostgreSQL + Vercel

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 (App Router) |
| CMS | Payload CMS v3 |
| Database | Supabase (PostgreSQL) |
| Media Storage | Vercel Blob |
| Hosting | Vercel |

## Local Development Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Navigate to **Settings → Database → Connection string**
3. Copy the **Transaction pooler** URI (port 6543) — best for serverless
4. Paste it as `DATABASE_URI` in your `.env`

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in:

- `DATABASE_URI` — Supabase connection string (see above)
- `PAYLOAD_SECRET` — generate with `openssl rand -base64 32`
- `NEXT_PUBLIC_SERVER_URL` — `http://localhost:3000` for local dev
- `BLOB_READ_WRITE_TOKEN` — from Vercel Blob (see below)

### 4. Run migrations

```bash
npm run payload migrate
```

### 5. Start the dev server

```bash
npm run dev
```

Visit `http://localhost:3000/admin` to access the CMS.

## Vercel Deployment

### 1. Connect to Vercel

```bash
npx vercel
```

### 2. Add environment variables in Vercel Dashboard

Copy all variables from `.env.example` into **Vercel → Project → Settings → Environment Variables**.

For `NEXT_PUBLIC_SERVER_URL`, use your production domain.

### 3. Set up Vercel Blob Storage

1. Go to **Vercel Dashboard → Storage → Create Store → Blob**
2. Connect to your project
3. The `BLOB_READ_WRITE_TOKEN` will be auto-added to your environment

### 4. Run database migrations on Vercel

After first deploy, the migrations run automatically via `postinstall` script.

## Payload CMS Collections

| Collection | Purpose |
|---|---|
| **Pages** | All site pages (Home, About, Services, Contact) |
| **Posts** | Blog/news articles |
| **Services** | Marine & motor trimming services |
| **Portfolio** | Project gallery with category filtering |
| **Media** | Images and files |
| **Users** | Admin users |

## Content Setup (First Run)

After running locally:

1. Go to `http://localhost:3000/admin`
2. Create your first admin user
3. Go to **Services** → create all marine and motor services
4. Go to **Portfolio** → upload project photos and create portfolio items
5. Go to **Pages** → edit the Home, About, and Contact pages
6. Go to **Globals → Header** → set up navigation
7. Go to **Globals → Footer** → set up footer links

## Design System

The site uses Ram's Trimming's design system defined in `src/app/(frontend)/globals.css`:

- **Display font:** Domine (headings)
- **Body font:** Inter
- **Mono font:** JetBrains Mono (labels, caps)
- **Palette:** Black & white monochrome

CSS variables are prefixed with `--rt-` to avoid conflicts with Payload's own variables.
