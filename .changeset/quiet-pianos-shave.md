---
'jest-audio-reporter': patch
---

Support jest 30 alongside jest 29.

`@jest/reporters`, `@jest/test-result` and `@jest/types` now accept `^29.0.0 || ^30.0.0`
rather than `^29.0.0` only, so the reporter installs cleanly next to either jest major.
The reporter's own API is unchanged.

The compile target also moves from `es2015` to `es2022`, which changes the emitted
JavaScript in `cjs/`. No new API, so this is a patch.
