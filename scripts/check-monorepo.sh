#!/usr/bin/env bash
set -euo pipefail

# Block commit if nested lockfile exists
if [ -f "apps/web/pnpm-lock.yaml" ]; then
  echo "❌ Found nested lockfile: apps/web/pnpm-lock.yaml"
  echo "   Fix:"
  echo "     rm -f apps/web/pnpm-lock.yaml"
  echo "     pnpm install   (from repo root)"
  exit 1
fi

echo "✅ Monorepo checks passed."