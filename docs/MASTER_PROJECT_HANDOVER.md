# AGI-SBC — Master Project Handover

## Repository
- GitHub: https://github.com/AGISBCAI/AGI-SBC
- Visibility: Public
- Expected default branch: `main`
- App name: `AGI-SBC`
- Android package: `com.agisbc.app`
- URL scheme: `agisbc`

## Permanent project decisions
- Android APK and Web App are both targets.
- 100% FREE policy: no paid API, paid hosting, paid build service, paid subscription, billing, or credit card.
- Public registration is disabled.
- Exactly one permanent `OWNER_ADMIN` is intended in a future phase.
- Only `OWNER_ADMIN` may create and manage `REGULAR_USER` accounts.
- Users cannot self-register, self-promote, create another owner, or transfer ownership.
- README.md must not be modified without explicit permission.
- Do not delete existing files without explicit permission.
- Do not start Phase 2B without explicit permission.

## Current Phase 2A package
This ZIP contains the Expo SDK 58 foundation and three GitHub Actions workflows. It does not contain a generated lockfile, APK, or Web build. No GitHub changes are made by preparing this ZIP.

## Resolver security
- Manual `workflow_dispatch` only.
- `contents: write` is scoped to the resolver workflow.
- Resolver refuses to overwrite an existing `deps-lock` branch.
- It pushes only `deps-lock`; it never pushes `main`.
- Owner reviews and merges the dependency branch.

## Truthful status
At ZIP creation: files implemented in ZIP, not tested; dependency graph not fully resolved; no lockfile; no Actions run; no commit or push; Phase 2B not started.

## Roadmap (approval required for each later phase)
- Phase 2B: authentication core.
- Phase 2C: Owner/Admin and regular-user panels.
- Phase 3: free/self-hosted backend.
- Later phases: terminal/server features, full Web completion, testing and release.

A new AI assistant must inspect the live repository before changing anything and must not claim an action succeeded unless it actually did.
