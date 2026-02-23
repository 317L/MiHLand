# MIH Marketing Site

A CMS-driven marketing platform built with Next.js (App Router) and Directus (Headless CMS).

Production architecture uses a split deployment strategy:

- Vercel → Next.js frontend
- Render → Directus (Docker) + PostgreSQL
- Local development → Docker Compose (Directus + Postgres)

---

# 1. Overview

MIH Marketing Site is a production-ready marketing application where dynamic content is fully managed via Directus CMS and rendered using Next.js Server Components.

System goals:

- CMS-first architecture
- Secure (server-side token usage)
- Type-safe
- Dockerized local development
- Deployment-ready
- Scalable
- Cloud split architecture (Vercel + Render)

---

# 2. High-Level Architecture (Production)

                ┌─────────────────────────┐
                │        Browser          │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │        Vercel           │
                │       Next.js App       │
                │   (Server Components)   │
                └────────────┬────────────┘
                             │ Server-side fetch
                             ▼
                ┌─────────────────────────┐
                │        Directus         │
                │   (Render Web Service)  │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │      PostgreSQL         │
                │     (Render Managed)    │
                └─────────────────────────┘

---

# 3. Local Development Architecture

                ┌─────────────────────────┐
                │        Browser          │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │        Next.js          │
                │     localhost:3000      │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │        Directus         │
                │     localhost:8055      │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │      PostgreSQL         │
                │     Docker Volume       │
                └─────────────────────────┘

---

# 4. Request Lifecycle

User → Next.js Server → Directus REST → PostgreSQL → Directus → Next.js → User

Important:

- Directus token is used ONLY server-side.
- No token is exposed to the browser.
- Public read-only policy is used for marketing content (optional).

---

# 5. Technology Stack

Frontend:

- Next.js 16 (App Router)
- React Server Components
- TypeScript
- Native Fetch API
- PNPM workspace
- Turbopack (dev)

CMS:

- Directus 11.x
- Static Access Token
- Public read policy

Infrastructure:

- Docker
- Docker Compose
- PostgreSQL
- Vercel
- Render
- Node 20+

---

# 6. Project Structure

mih-marketing-site/
│
├── apps/
│ └── web/ # Next.js application
│
├── docker-compose.yml # Directus + PostgreSQL (local)
├── pnpm-workspace.yaml
├── package.json
├── README.md
└── docs/

---

# 7. Environment Variables

Local (apps/web/.env.local):

NEXT_PUBLIC_DIRECTUS_URL=http://localhost:8055
DIRECTUS_TOKEN=YOUR_STATIC_ACCESS_TOKEN

Production (Vercel):

NEXT_PUBLIC_DIRECTUS_URL=https://your-directus.onrender.com
DIRECTUS_TOKEN=YOUR_STATIC_ACCESS_TOKEN

Rules:

- NEXT*PUBLIC*\* → exposed to browser (safe values only)
- DIRECTUS_TOKEN → server-only
- Restart dev server after changes
- Never commit secrets

---

# 8. Data Layer Architecture

We do NOT use Directus SDK.

Reasons:

- Smaller bundle
- Full control over fetch
- No extra client dependency
- Better debugging
- Typed API layer

Responsibilities:

- Typed fetch
- Bearer authentication
- Cache control
- Error handling

Example endpoint:
GET /items/positions

---

# 9. Collection Design

Collection: positions

Fields:

- id
- title
- location
- remote
- technologies
- employment_type
- slug (unique)
- apply_url

---

# 10. Security Model

Client
│
▼
Next.js Server
│ (Bearer Token)
▼
Directus API
│
▼
PostgreSQL

Security Decisions:

- Token never exposed client-side
- Public read-only policy for marketing content
- Admin-only write access
- Server Components protect secrets

---

# 11. Caching Strategy

Current:

- cache: "no-store"

Planned:

- ISR (Incremental Static Regeneration)
- CDN edge caching
- Route-based revalidation

Future example:

fetch(url, { next: { revalidate: 60 } })

---

# 12. Onboarding / Project Setup

## 1. Clone repository

git clone git@github.com:YOUR_ORG/MiHLand.git
cd mih-marketing-site

## 2. Install dependencies

pnpm install

## 3. Start Directus + PostgreSQL (local)

docker compose up -d

Directus:
http://localhost:8055

## 4. Start frontend

pnpm -C apps/web dev

Frontend:
http://localhost:3000

---

# 13. Build & Production (Frontend)

Build:

pnpm -C apps/web build

Start production locally:

pnpm -C apps/web start

---

# 14. Production Deployment (Split Strategy)

                ┌─────────────┐
                │   Vercel    │
                │  Next.js    │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │  Directus   │
                │  (Render)   │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │ PostgreSQL  │
                │  (Render)   │
                └─────────────┘

Deployment Steps:

1. Push project to GitHub
2. Deploy frontend to Vercel
3. Create PostgreSQL on Render
4. Deploy Directus (Docker image) on Render
5. Add environment variables
6. Connect API URL to Vercel
7. Test production

---

# 15. Full Docker Production Architecture (Alternative)

             ┌────────────────────┐
             │       NGINX        │
             └────────┬───────────┘
                      │
      ┌───────────────┴───────────────┐
      │                               │

┌────────────┐ ┌────────────┐
│ Next.js │ │ Directus │
│ Container │ │ Container │
└─────┬──────┘ └─────┬──────┘
│ │
└──────────────┬─────────────────┘
▼
┌────────────┐
│ PostgreSQL │
└────────────┘

---

# 16. Git Workflow

Branching strategy:

main  
develop  
feature/\*

Workflow:

- Create feature branch from develop
- PR → develop
- Merge → main (release)
- Deploy

Rules:

- Never commit directly to main
- One feature per branch
- Clear commit messages
- Keep PR small and focused

---

# 17. CI/CD Plan (Future)

On push to main:

- Install dependencies
- Run lint
- Build
- Deploy automatically

Future additions:

- Preview builds (Vercel)
- Staging environment
- Production monitoring

---

# 18. Scalability Plan

If traffic increases:

- Enable ISR
- Add CDN caching
- Add Redis
- Horizontal scaling
- Separate DB instance
- Load balancer

---

# 19. Monitoring (Future)

- Error tracking (Sentry)
- Production logs
- Uptime monitoring
- Health checks

---

# 20. Roadmap

Short-term:

- /careers/[slug]
- SEO metadata
- Contact form

Mid-term:

- CMS-driven landing sections
- Rich text blocks
- ISR

Long-term:

- CI/CD
- Staging
- Performance tuning
- Analytics integration

---

# 21. Current Status

- Directus configured
- Static token working
- Public read policy active
- Positions rendering
- Local Docker environment stable
- Split deployment architecture defined
- Typed API layer implemented

Project is development-ready and production-deployable.

---

# 22. Professional Workflow Reminder

- Always update documentation after feature
- Commit after each milestone
- Do not keep knowledge only in chat
- Use separate branches for features
- Deploy frequently
- Keep architecture decisions documented

---

# 23. Frontend Architecture

apps/web/src structure:

app/ → Next.js routing (App Router)
features/ → Business domain modules
shared/ → Reusable UI + utilities
lib/ → API layer & infrastructure
store/ → Global state (Zustand)
hooks/ → Shared React hooks
types/ → Global TypeScript types
styles/ → Global styling / tokens

# SEO Strategy

- App Router Metadata API
- Server-side rendering
- Structured data (JSON-LD planned)
- Sitemap generation (planned)
- Robots.txt
- Open Graph tags
- Dynamic metadata per slug page

# Performance Optimization

- React Server Components
- Zero client-side Directus SDK
- Minimal client bundle
- Turbopack (dev)
- Planned: ISR for high-traffic pages
- Planned: CDN edge caching
- Planned: Image optimization

# Error Handling

- Centralized API error normalization
- 404 handling via notFound()
- Route-level error.tsx
- Planned: Global error boundary
- Planned: Logging middleware

# Type Safety Strategy

- Strict TypeScript mode enabled
- API response typing
- Zod (planned for validation)
- No any usage in business logic
- Shared types across layers

# Code Quality & Tooling

- ESLint (flat config)
- Prettier
- Husky (pre-commit hooks)
- lint-staged
- Commitlint
- PNPM workspace
- Import sorting
- Unused import removal

# Security Considerations

- No client-side tokens
- No SDK exposure
- Server Components for data fetching
- Environment variable separation
- Docker container isolation
- Planned: Rate limiting
- Planned: Security headers

# API Abstraction Layer

The project uses a custom fetch-based API layer instead of Directus SDK.

Benefits:

- Full control over caching
- Smaller bundle size
- Better tree shaking
- Typed responses
- Infrastructure isolation

# Environments

- Local (Docker Compose)
- Development (Vercel Preview + Render Dev)
- Production (Vercel + Render)

Each environment uses separate database and token.

# Architecture Decisions

ADR-001: Use Directus as Headless CMS  
ADR-002: Do not use Directus SDK  
ADR-003: Split deployment (Vercel + Render)  
ADR-004: Server Components for data fetching  
ADR-005: PNPM workspace for scalability

# License

Private project – MIH internal use.
