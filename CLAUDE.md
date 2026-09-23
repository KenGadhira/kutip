# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- Dev server: `npm run dev` (runs at http://localhost:3000)
- Build: `npm run build`
- Start production: `npm run start`
- Lint all: `npm run lint`
- Lint single file: `npx eslint path/to/file.tsx`
- Type check: `npx tsc --noEmit`

*Note: No test framework installed in package.json.*

## Figma

- File Key: `JOj3SMnx4nipkcVHvwYOu1`

## Architecture

- **Framework**: Next.js 16.3.6 (App Router) with React 19.2.8.
- **Next.js 16 breaking changes**: Reference documentation located in `node_modules/next/dist/docs/`.
- **Routing**: `app/` directory (`layout.tsx`, `page.tsx`). Typed routes (`LayoutProps`, etc.) generated in `.next/dev/types/` and loaded via `next-env.d.ts`.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` and `@theme inline` in `app/globals.css`.
- **Path Aliases**: `@/*` maps to project root `./*` via `tsconfig.json`.
- **Linting**: ESLint 9 flat config (`eslint.config.mjs`) using `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
