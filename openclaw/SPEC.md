# Product State

## Purpose

Personal portfolio for Mykhailo Trunov.

Audience: recruiters, hiring managers, engineering teams.

Tone: concise, professional, editorial, personal enough to avoid feeling like a template.

## Visual Language

- Minimalist editorial layout
- System monospace typography
- Light off-white / dark near-black theme
- Lime accent color
- Terminal motif used as navigation language, not as a gimmick
- Sparse, text-led pages
- Responsive mobile and desktop behavior

## Routes

- `/` — landing with hero, live clock/location, photo, theme toggle, navigation
- `/case-studies` — case-study list with total count and detail links
- `/case-studies/[id]` — case-study detail with title, problem, solution, results, technologies
- `/cv-preview` — static professional profile preview with summary, skills, experience snapshot, portfolio links, CV download
- `/notes` — static notes page describing portfolio build process and decisions

## Behavior

- Theme respects system preference and can be toggled
- Terminal labels stay consistent across routes
- List pages link to their matching detail pages
- CV download uses a static PDF link; no generation or backend logic
- Unknown detail IDs fail safely with `notFound()`

## Acceptance Criteria

- Product remains coherent across mobile and desktop
- Editorial/mono visual language stays intact
- Route behavior remains predictable
- Detail routes fail safely on unknown IDs
