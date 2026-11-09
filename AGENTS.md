# STRATECH — Engineering & Construction Website

## Overview
A multi-page Next.js 14 (App Router) website for a fictional engineering & construction company. Built with TypeScript, Tailwind CSS, Prisma (SQLite), and Framer Motion.

## Tech Stack
- **Framework:** Next.js 14 (App Router, server components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design tokens (navy/accent palette)
- **Database:** SQLite via Prisma ORM (file at `/app/data/stratech.db`)
- **Icons:** lucide-react
- **Animation:** framer-motion
- **Auth:** JWT in httpOnly cookie (simple password-based admin)
- **Email:** nodemailer (optional — contact form saves to DB regardless)

## Project Structure
```
src/
  app/              — pages (App Router)
    page.tsx        — Home
    services/       — Services list + [slug] detail
    projects/       — Projects list + [slug] detail
    about/          — About page
    contact/        — Contact page
    admin/          — Admin dashboard (protected) + login
    api/            — API routes (auth, contact, newsletter, admin CRUD)
  components/       — React components (home sections, shared UI, admin)
  lib/              — prisma client, auth helpers
  middleware.ts     — protects /admin routes
prisma/             — schema.prisma + seed.ts
```

## Database
- PostgreSQL, run as the `db` compose service (`prisma/schema.prisma` provider is `postgresql`)
- `DATABASE_URL` comes from `.env.base44-defaults` and points at the `db` service
- Schema is pushed via `prisma db push` on container startup
- Seed runs on startup (idempotent — uses upsert/findFirst)
- Entities: Project, Service, TeamMember, Testimonial, ContactMessage, NewsletterSubscriber

## Admin
- Login at `/admin/login` with password from `ADMIN_PASSWORD` env var
- Dashboard at `/admin` (JWT-protected via middleware)
- Full CRUD for Projects, Services, Team, Testimonials
- View/manage Contact Messages

## Environment Variables
- `DATABASE_URL` — SQLite path (defaults to `file:/app/data/stratech.db`)
- `ADMIN_PASSWORD` — admin login password
- `JWT_SECRET` — signs admin session tokens
- `ADMIN_EMAIL` — receives contact form notifications
- `SMTP_*` — optional email delivery config

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
App serves on port 3000. Dev server with hot reload.

## Gotchas
- **Never commit `.next/` or `*.tsbuildinfo`.** A committed dev webpack cache (`.next/cache/webpack/*-development/`) restores an index that references pack files missing from the repo, so `next dev` throws `ENOENT … .pack.gz` + `unhandledRejection` on startup. Both are in `.gitignore`; if a stale `.next` reappears in a checkout, `rm -rf .next` and restart `web`.
- `node:20-slim` ships without OpenSSL, which Prisma needs to pick its engine (`debian-openssl-3.0.x`). The compose startup command installs `openssl` before `prisma generate`; a command override that skips it fails with "could not locate the Query Engine".
- `/admin` redirects to `/admin/login` when there is no session (expected, not a broken route).

## Key Design Decisions
- SQLite chosen for single-container simplicity (no separate DB service needed)
- Server components fetch data directly via Prisma; client components handle interactivity
- Images use Unsplash URLs (configured in next.config.mjs remotePatterns)
- Fonts loaded via next/font (Cormorant Garamond + Inter)
- Glassmorphism cards use backdrop-filter blur with light borders
