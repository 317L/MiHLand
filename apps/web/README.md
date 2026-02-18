# MIH Marketing Site

A CMS-driven marketing platform built with Next.js (App Router) and Directus (Headless CMS).

---

# 1. Overview

MIH Marketing Site is a production-ready marketing application where dynamic content is fully managed via Directus CMS and rendered using Next.js Server Components.

The system is designed to be:

- CMS-first
- Secure (server-side token usage)
- Type-safe
- Dockerized
- Deployment-ready
- Scalable

---

# 2. High-Level Architecture

                ┌─────────────────────────┐
                │        Browser          │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │     Next.js App         │
                │ (Server Components)     │
                └────────────┬────────────┘
                             │ Server-side fetch
                             ▼
                ┌─────────────────────────┐
                │      Directus API       │
                └────────────┬────────────┘
                             │
                             ▼
                ┌─────────────────────────┐
                │       PostgreSQL        │
                └─────────────────────────┘

---

# 3. Request Lifecycle

User → Next.js Server → Directus REST → PostgreSQL → Directus → Next.js → User

Important:
- Directus token is used ONLY server-side.
- No token is exposed to the browser.

---

# 4. Technology Stack

Frontend:
- Next.js 16 (App Router)
- React Server Components
- TypeScript
- Native Fetch API
- PNPM workspace
- Turbopack (development)

CMS:
- Directus 11.x
- Static Access Token
- Public read policy

Infrastructure:
- Docker
- Docker Compose
- PostgreSQL
- Node 20+

---

# 5. Project Structure

mih-marketing-site/
│
├── apps/
│   └── web/                     # Next.js application
│
├── docker-compose.yml           # Directus + PostgreSQL
├── pnpm-workspace.yaml
├── package.json
├── README.md
└── docs/

---

# 6. Environment Variables

apps/web/.env.local

NEXT_PUBLIC_DIRECTUS_URL=http://localhost:8055
DIRECTUS_TOKEN=YOUR_STATIC_ACCESS_TOKEN

Rules:

- NEXT_PUBLIC_* → exposed to browser
- DIRECTUS_TOKEN → server-only
- Restart dev server after changes

---

# 7. Data Layer Architecture

We do NOT use Directus SDK.

Reasons:
- Smaller bundle
- Full control
- No client dependency
- Better debugging

Data layer responsibilities:
- Typed fetch
- Bearer authentication
- Cache control
- Error handling

Example endpoint:
GET /items/positions

---

# 8. Collection Design

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

# 9. Security Model

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

# 10. Caching Strategy

Current:
- cache: "no-store"

Planned:
- ISR (Incremental Static Regeneration)
- CDN edge caching
- Route-based revalidation

Example future strategy:

fetch(url, { next: { revalidate: 60 } })

---

# 11. Local Development Setup

1. Install dependencies

pnpm install

2. Start Directus + Database

docker compose up -d

Directus available at:
http://localhost:8055

3. Start frontend

pnpm -C apps/web dev

Frontend:
http://localhost:3000

---

# 12. Build & Production

Build:

pnpm -C apps/web build

Start production:

pnpm -C apps/web start

---

# 13. Production Deployment (Recommended)

                ┌─────────────┐
                │   Vercel    │
                │  Next.js    │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │  Directus   │
                │  (Railway)  │
                └──────┬──────┘
                       │
                       ▼
                ┌─────────────┐
                │ PostgreSQL  │
                └─────────────┘

Steps:

1. Push project to GitHub
2. Deploy frontend to Vercel
3. Deploy Directus to Railway
4. Add environment variables
5. Connect API URL
6. Test production

---

# 14. Full Docker Production Architecture

             ┌────────────────────┐
             │       NGINX        │
             └────────┬───────────┘
                      │
      ┌───────────────┴───────────────┐
      │                               │
┌────────────┐                 ┌────────────┐
│ Next.js    │                 │ Directus   │
│ Container  │                 │ Container  │
└─────┬──────┘                 └─────┬──────┘
      │                                │
      └──────────────┬─────────────────┘
                     ▼
              ┌────────────┐
              │ PostgreSQL │
              └────────────┘

---

# 15. Git Workflow

Branching strategy:

main
develop
feature/*

Workflow:
- Create feature branch
- PR → develop
- Merge → main
- Deploy

---

# 16. CI/CD Plan (Future)

On push to main:
- Install dependencies
- Run lint
- Build
- Deploy

Future additions:
- Preview builds
- Staging environment
- Production monitoring

---

# 17. Scalability Plan

If traffic increases:

- Enable ISR
- Add CDN caching
- Add Redis
- Horizontal scaling
- Separate DB instance
- Load balancer

---

# 18. Monitoring (Future)

- Error tracking (Sentry)
- Production logs
- Uptime monitoring
- Health checks

---

# 19. Roadmap

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

# 20. Current Status

- Directus configured
- Static token working
- Public read policy active
- Positions rendering
- Docker environment stable
- Typed API layer implemented

Project is development-ready and production-deployable.

---

# 21. Professional Workflow Reminder

- Always update documentation after feature
- Commit after each milestone
- Do not keep knowledge only in chat
- Use separate branches for features
- Deploy frequently

---

# License

Private project – MIH internal use.
