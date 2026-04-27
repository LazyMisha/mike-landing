# Specification

## Product

- portfolio for Mykhailo Trunov
- audience: recruiters, hiring managers, engineering teams
- tone: concise, professional, editorial
- terminal motif: supportive, not gimmick

## Design

- palette: light off-white, dark near-black, lime accents
- typography: system monospace
- layout: narrow editorial layout; responsive
- caption: full metadata; responsive behavior

## Pages

- `/`: landing page; live datetime + location; theme toggle; hero photo + metadata caption; social links
- `/experience`: all experience entries; links to `/experience/[id]`; terminal-style navigation; uses shared `TimelineList` component
- `/experience/[id]`: role, company, date, location, description, technologies, achievements; invalid id -> not found; loading state; uses shared `TimelineDetail` component
- `/projects`: all projects; links to `/projects/[id]`; terminal-style navigation; uses shared `TimelineList` component; shows `work`/`pet` badge
- `/projects/[id]`: project details; name, company, type (work/personal), description, technologies, achievements; invalid id -> not found; loading state; uses shared `TimelineDetail` component
- `/case-studies`: placeholder; terminal prompt + back link + short placeholder copy
- `/notes`: static content page; terminal prompt + back link + intro body + timeline sections with bullet lists; describes portfolio build process; sources from `notes-data.ts`

## Non-Negotiable

- portfolio must not read like a generic template
- pages stay sparse and text-led
- theme respects system preference
- navigation resets scroll position
- terminal labels stay consistent across routes
- experience detail fails safely on unknown ids
- project detail fails safely on unknown ids
- placeholder pages stay intentionally minimal until replaced

## Acceptance Criteria

- behavior stays coherent across mobile and desktop
- mono/editorial visual language stays intact
- route behavior stays intact
- tests change with behavior when needed
- relevant checks run before completion
- timeline components are reusable across experience and projects
