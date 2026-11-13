# AGI-SBC — Phase 2A Architecture

## Scope
Phase 2A establishes a minimal Expo application foundation for Android and static Web export.

## Technology
- Expo SDK 58
- React Native 0.88.1
- React 19.3.0
- TypeScript
- Expo Router
- Node.js 22.13 or newer in the Node 22 line
- Android Debug APK built with Gradle on GitHub-hosted `ubuntu-latest`
- Static Web export to `dist/`

## Application identifiers
- Display name: `AGI-SBC`
- Android application ID: `com.agisbc.app`
- URL scheme: `agisbc`

## Build flow
1. `resolve-deps.yml` is started manually.
2. It resolves Expo-compatible package versions, validates them, creates `package-lock.json`, and pushes only a new `deps-lock` branch.
3. The repository owner reviews and merges that branch.
4. Android and Web workflows use `npm ci` and the committed lockfile.
5. Build outputs are uploaded as 14-day GitHub Actions artifacts. No deployment is configured.

## Security boundaries
- No credentials, passwords, API keys, signing keys, or private certificates belong in this public repository.
- Resolver write permission is scoped to its workflow; Android and Web workflows have read-only repository permission.
- Resolver refuses to overwrite an existing `deps-lock` branch.
- Phase 2A contains no authentication, user management, database, or backend.
- A static Web export is not a trusted authorization boundary. Future authorization must be enforced by a trusted backend.

## Cost policy
Use only standard GitHub-hosted `ubuntu-latest` runners. Do not use EAS Build, larger runners, paid hosting, paid APIs, or paid deployment services.
