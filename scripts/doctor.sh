#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "==> MIH doctor: starting..."

# Remove nested lockfile
if [ -f "apps/web/pnpm-lock.yaml" ]; then
  echo "==> Removing nested lockfile: apps/web/pnpm-lock.yaml"
  rm -f apps/web/pnpm-lock.yaml
fi

# Clean install artifacts
echo "==> Removing node_modules and Next caches..."
rm -rf node_modules apps/web/node_modules
rm -rf .next apps/web/.next
rm -rf .turbo apps/web/.turbo

# Prune pnpm store (safe)
echo "==> pnpm store prune..."
pnpm store prune || true

# Install from root
echo "==> pnpm install (root)..."
pnpm install

# Lint/format
echo "==> ESLint fix (apps/web)..."
pnpm --filter ./apps/web run lint:fix

echo "==> Prettier write..."
pnpm exec prettier --write .

echo "==> Done. You can commit now."