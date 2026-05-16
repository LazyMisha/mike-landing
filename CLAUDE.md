# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Typecheck:** `npm run typecheck`
- **Lint:** `npm run lint`
- **Tests:** `npm run test -- --run` (CI mode)
- **Quality gate:** `npm run test -- --run && npm run lint && npm run typecheck && npm run build` — required before delivery

## Editing Map

- Content/data → `src/lib/*` file (case-study-data.ts, cv-preview-data.ts, notes-data.ts, constants.ts, etc.)
- Route behavior → `src/app/<route>`
- Reusable UI → `src/components`
- Visual tokens/styling → `src/app/globals.css`
- Shell → `src/app/layout.tsx`, `Header`, `Footer`, `ThemeProvider`

## Key Context

- Static portfolio — all content is typed TS data, no CMS or API
- Reusable timeline components serve `/case-studies`
- Terminal motif (`ls`, `cat`, `[case-studies]`, `[notes]`, `[cv-preview]`) is stylistic navigation language, not interactive
- Page metadata: static `metadata` export on list pages; `generateMetadata` on detail pages

## Documentation

- `openclaw/SPEC.md` — product behavior, routes, acceptance criteria
- `openclaw/ARCHITECTURE.md` — stack, component ownership, data flow
- `openclaw/CODE.md` — coding rules, change strategy, quality gate

## Learned Invariants

<!-- Append new rules here after corrections. Each rule must include the date and the specific mistake it prevents. Audit monthly for stale rules. -->
