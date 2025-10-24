# Repository Guidelines

## Project Structure & Module Organization
Source lives in `src`, split between customer-facing routes under `src/pages` and admin tooling in `src/admin`. Shared UI and utilities belong in `src/components`, `src/data`, and `src/types`. Global styling is handled via Tailwind in `src/index.css`, while static assets reside in `public`. Keep new modules feature-scoped and colocate helper files with their owning page or component to simplify maintenance.

## Build, Test, and Development Commands
Install dependencies with `npm install` (or `pnpm install` if you prefer pnpm; workspace support is already configured). Run `npm run dev` for the Vite dev server, accessible at `http://localhost:5173`. Use `npm run build` for the production bundle and type-check, and `npm run preview` to serve the built output locally. Enforce lint rules before pushing by running `npm run lint`.

## Coding Style & Naming Conventions
This project targets React 19 with TypeScript and Tailwind 4, so prefer function components with typed props and hooks. Follow a two-space indent and keep files in PascalCase for components (`ProductCard.tsx`) and camelCase for helpers (`formatPrice.ts`). Tailwind classes should remain in semantic order (layout → spacing → color) to reduce diff churn. The repo relies on `eslint.config.js`; resolve lints rather than disabling rules, and annotate complex logic with concise inline comments when necessary.

## Testing Guidelines
Automated tests are not yet scaffolded, so additions should include lightweight checks using Vitest + Testing Library (our chosen stack) in `src/__tests__` or alongside the component as `ComponentName.test.tsx`. Name tests after the behavior under test (`renders checkout totals`) and focus on observable UI output. Until a formal script lands, run `npx vitest run` locally and document any manual verification performed in your PR. Aim to cover new branches and side effects introduced by your change.

## Commit & Pull Request Guidelines
Git history follows Conventional Commit prefixes (`feat:`, `fix:`, `chore:`); keep subject lines under 72 characters and describe scope precisely (`feat: add admin order filters`). For pull requests, provide a crisp summary, reference related issues, and include before/after screenshots or clips for UI work (desktop and mobile when relevant). Note any follow-up tasks or TODOs explicitly, and ensure lint/build commands succeed before requesting review.

## Environment & Configuration Notes
Develop against Node 20 LTS to match the deployment target. Keep secrets out of the repo and prefer `.env.local` for environment overrides; document required variables in the PR. When introducing new packages, update both `package.json` and the appropriate lockfile (`package-lock.json` for npm or `pnpm-lock.yaml` for pnpm) to keep CI deterministic.
