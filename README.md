# Schedula

## Overview

Schedula is a Turkish-language SaaS landing site for an AI-powered appointment and revenue optimization system targeting businesses (clinics, salons, etc.). The project is currently in **private beta** status with an invite-only access model.

The application is a full-stack TypeScript project with three main pages:
- **Home** (`/`) — Marketing landing page with hero, features, and animations
- **Pricing** (`/pricing`) — Tiered pricing plans (Basic, Standart, Pro, Unlimited)
- **Apply** (`/apply`) — Private beta application form

It also collects newsletter subscriptions via the footer. There is no user authentication system yet — only a placeholder login modal in the navbar.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript (non-RSC, client-side only)
- **Routing**: Wouter (lightweight alternative to React Router)
- **State/Data Fetching**: TanStack React Query v5 for server state management
- **Forms**: React Hook Form with Zod resolvers for validation
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming, Poppins font throughout
- **Animations**: Framer Motion for scroll-reveal, parallax, and page transitions
- **Icons**: Lucide React
- **Build Tool**: Vite with React plugin
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via `tsx`
- **API Style**: REST endpoints under `/api/` prefix
- **Route Definitions**: Centralized in `shared/routes.ts` — a typed API contract object that defines paths, methods, input schemas, and response schemas for both client and server
- **Build**: esbuild bundles server code to `dist/index.cjs` for production; Vite builds client to `dist/public`

### Shared Layer
- `shared/schema.ts` — Drizzle table definitions, Zod insert schemas, and TypeScript types
- `shared/routes.ts` — API route contract (paths, methods, input/output schemas) used by both frontend and backend

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Driver**: `pg` (node-postgres) Pool
- **Schema Push**: `drizzle-kit push` (no migration files needed for dev)
- **Connection**: `DATABASE_URL` environment variable (required)
- **Tables**:
  - `beta_applications` — stores beta application form submissions (business name, sector, monthly appointments, employee count, email, phone, reason, status, created_at)
  - `newsletter_subscribers` — stores newsletter email subscriptions (email unique, created_at)

### Storage Pattern
- `server/storage.ts` defines an `IStorage` interface and a `DatabaseStorage` class implementation
- This abstraction allows swapping storage implementations if needed

### Dev vs Production
- **Development**: Vite dev server with HMR runs as middleware inside Express (`server/vite.ts`)
- **Production**: Pre-built static files served from `dist/public` via Express static middleware (`server/static.ts`), with SPA fallback to `index.html`

### Design System
- Ultra-modern minimal design with maximum whitespace and high contrast
- Primary color: `#111111` (near-black)
- Accent color: `#1C7C54` (green)
- Background: white, surface: `#F7F9FB`
- All CSS theme values use HSL CSS variables defined in `client/src/index.css`

## External Dependencies

### Database
- **PostgreSQL** — Required. Connection via `DATABASE_URL` environment variable. Used with Drizzle ORM and `pg` driver.

### Key npm Packages
- `express` v5 — HTTP server
- `drizzle-orm` + `drizzle-zod` + `drizzle-kit` — ORM, schema-to-zod bridge, and migration tooling
- `zod` — Schema validation (shared between client and server)
- `@tanstack/react-query` — Async state management on the client
- `react-hook-form` + `@hookform/resolvers` — Form management
- `framer-motion` — Animations
- `wouter` — Client-side routing
- `shadcn/ui` components (Radix UI primitives + Tailwind)
- `connect-pg-simple` — PostgreSQL session store (available but not actively used yet)

### External Services
- No third-party API integrations are currently active
- The build script allowlist includes `stripe`, `openai`, `@google/generative-ai`, `nodemailer`, and `jsonwebtoken` suggesting planned future integrations for payments, AI features, email, and auth
