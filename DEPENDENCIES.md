# AGI-SBC — Dependency Record

## Seed dependencies in this ZIP

| Package | Exact version | Evidence / status |
|---|---:|---|
| `expo` | `58.0.0` | Expo SDK 58 official reference; included as exact seed |
| `react` | `19.3.0` | Expo SDK 58 official reference; included as exact seed |
| `react-native` | `0.88.1` | SDK 58 compatibility mapping; included as exact seed |

The official Expo SDK reference lists SDK 58.0.0 with React Native 0.88, React 19.3.0, React Native Web 0.21.0, and Node 22.13.x. The exact React Native patch in the seed is 0.88.1. The full package graph has not yet been resolved in this ZIP.

## Resolved by `resolve-deps.yml`
The workflow asks Expo's SDK-aware installer to select compatible exact versions for:
- `expo-router`
- `react-dom`
- `react-native-web`
- `@expo/metro-runtime`
- `expo-constants`
- `expo-linking`
- `expo-status-bar`
- `react-native-safe-area-context`
- `react-native-screens`
- `typescript` (development)
- `@types/react` (development)

The workflow then runs:
- `npx expo install --check`
- `npx expo-doctor`
- `npx tsc --noEmit`
- `npm install --package-lock-only --ignore-scripts`

## Important status
`package-lock.json` is intentionally not included. It is created by the resolver workflow after the ZIP is uploaded to the repository. Until that workflow succeeds and the owner reviews/merges `deps-lock`, Android and Web build workflows will fail at the explicit lockfile check.

No dependency resolver run or build has been performed as part of preparing this ZIP.
