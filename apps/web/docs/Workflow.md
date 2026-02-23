# Git Workflow: dev / qa / staging / production

This repository uses four long-lived branches:

- `dev` → daily development branch (integration for ongoing work)
- `qa` → quality assurance branch (testing, bugfix validation)
- `staging` → pre-production branch (release candidate, final checks)
- `main` → production branch (stable, deployable)

## Branch Roles

### `dev` (Development)

Purpose:

- Integrates finished features for ongoing development.
- Fast iteration, frequent merges from feature branches.

Rules:

- Prefer PRs from `feature/*` into `dev`.
- Avoid direct commits if you work with others (optional for solo).

### `qa` (QA)

Purpose:

- Testing branch where QA verifies new features and bugfixes.
- Only receives changes promoted from `dev`.

Rules:

- Merge into `qa` only via PR from `dev`.
- Hotfixes can be applied here only if needed for QA verification, but should be backported to `dev`.

### `staging` (Pre-Production)

Purpose:

- “Release candidate” environment.
- Mirrors production configuration as closely as possible.

Rules:

- Merge into `staging` only via PR from `qa`.
- Only release preparation commits here (version bump, release notes, final env tweaks).

### `main` (Production)

Purpose:

- Production-ready code only.
- Deployments are triggered from this branch.

Rules:

- Merge into `main` only via PR from `staging`.
- No direct pushes.
- Protected branch recommended.

---

## Day-to-Day Development Flow

### 1) Start new work from `dev`

```bash
git checkout dev
git pull
git checkout -b feature/<short-name>
```
