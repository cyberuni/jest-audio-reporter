# jest-audio-reporter

## 2.2.4

### Patch Changes

- 9ff00e1: Align the `@jest/*` dependencies on 29.x. `@jest/test-result` was pinned to `^27.4.6`
  while `@jest/reporters` and `@jest/types` were already on `^29.0.0`; under pnpm's strict
  resolution the 27.x copy of `jest-haste-map` won and `@jest/test-result`'s type
  declarations failed to compile (`TS2614: Module '"jest-haste-map"' has no exported member
  'IHasteFS'`). yarn's hoisting had been masking the mismatch.
  
  Stop shipping the test files. `files: ["cjs", "ts"]` put `ts/AudioReporter.spec.ts`,
  `ts/log.spec.ts` and `ts/options.spec.ts` in the published tarball; `"!ts/**/*.spec.ts"`
  excludes them while keeping the sources the source maps point at.
