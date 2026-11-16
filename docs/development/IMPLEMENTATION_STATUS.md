# Implementation Status

**As of: 17 November 2026**

## Verified repository state

- The GitHub repository **kawaho3/fine-tune** is public and its default branch is `main`.
- Baseline for the 17 November organization review: `0c45350c73863f7d147f4681f477bb42e6f7f6a1`, matching fetched `origin/main` and the previous version pushed in this conversation. No uncommitted or untracked project files were present before the review.
- Phase-0 deterministic mock scaffold was merged in PR #8.
- The provider-independent model gateway was merged in PR #9 at `7797090aaed4d0e1aee15671da416f5c057371da`.
- The OpenHands transport adapter is also present on `main`, merged in `5a4b690` (PR #10). A live agent run remains unverified.
- PR #9 final CI run #7 passed `npm ci --ignore-scripts` and the complete repository test suite: **22 passed, 0 failed** on Node v22.23.4.

## Working Phase-0 scaffold

- Original npm workspace with `apps/builder-api`, `apps/builder-web`, and `packages/project-generator` (Node.js 22+).
- Local HTTP server serves a static builder interface; `POST /api/generate` returns an explicitly labeled deterministic HTML template, plan, and README without an LLM or shell commands.
- Sandboxed `iframe srcdoc` static preview, single HTML-file download, validation and HTTP security headers.
- The scaffold PR recorded **12 tests passed, 0 failed** on Node v22.16.0. That evidence predates this branch and should not be confused with a new full-suite run.

## Merged Phase-1 model foundation

`services/model-gateway` is merged as a replaceable inference boundary:

- Deterministic mock provider remains the default for offline tests and CI.
- Opt-in Ollama `/api/chat` provider using the Node.js 22 native `fetch` API; no extra npm runtime dependency.
- Request/message validation and bounded output-token budgets.
- Structured provider errors with cancellation and timeout handling.
- Bounded retries for retryable **non-streaming** provider failures.
- NDJSON streaming support without replaying a partially emitted stream.
- Provider-reported token usage mapping, latency, and attempt counts.
- Ollama endpoints are restricted to loopback hosts by default; remote endpoints require explicit operator configuration and credentials in endpoint URLs are rejected.
- Safe example environment settings and ADR 0004 document the boundary.

### Local verification for the new model gateway

Environment: Node.js v22.16.0, npm 10.9.2.

- Focused model-gateway suite: **10 passed, 0 failed**.
- Offline workspace install check: `npm ci --ignore-scripts --offline` succeeded in the reconstructed workspace with zero new third-party npm packages.
- A live Ollama server/model was **not available and was not downloaded**, so live inference is not claimed as validated. The tenth regression test verifies that the gateway timeout still fires when a custom provider ignores the abort signal.
- GitHub Actions final PR #9 run #7 completed successfully on Node v22.23.4: `npm ci --ignore-scripts` passed and the complete `npm test` run reported **22 passed, 0 failed**.

## OpenHands adapter compatibility spike

Present on `main` since merge commit `5a4b690`. The original development branch was
`feat/openhands-agent-adapter`; that name is historical context.

Implemented `services/agent-adapter` as a thin, replaceable adapter over the verified OpenHands Agent Server v1.62.0 REST contract:

- bounded conversation creation with a product-side iteration cap
- user-message events
- run / pause / interrupt lifecycle controls
- conversation status, event search, final response and deletion
- `X-Session-API-Key` support without embedding credentials in URLs
- loopback-only Agent Server URLs by default; remote endpoints require explicit operator opt-in
- caller cancellation plus adapter-enforced timeouts
- no automatic retry of lifecycle side-effect calls

Local deterministic fake-server verification on Node v22.16.0: **7 passed, 0 failed**.

This is a contract/transport spike only. A real OpenHands Agent Server, real coding model, WebSocket event stream, and real workspace execution have **not** been validated by the fake-server tests.

## Upstream research recorded for the next boundaries

- OpenHands Software Agent SDK `v1.62.0`: MIT-licensed primary coding-agent candidate. The SDK is Python 3.12+; its agent server exposes a REST/WebSocket boundary. We will integrate it only behind our own replaceable agent adapter after an executable compatibility spike.
- OpenSandbox `release-1.2.0`: Apache-2.0 primary isolated-workspace candidate. It exposes TypeScript/JavaScript and Python SDKs plus lifecycle, file, command, resource and network controls.
- Direct OpenHands ↔ OpenSandbox compatibility has **not** been proven. We will not stack two overlapping workspace runtimes until a small integration/security test justifies it.

See [REUSE_AUDIT.md](../research/REUSE_AUDIT.md).

## NOT implemented or validated

- No validated live OpenHands coding-agent run, secure application sandbox, PostgreSQL persistence, authenticated preview proxy, or deployment pipeline.
- The existing `/api/generate` mock builder is not yet wired to the model gateway.
- No real full-stack generated application has been built, run, browser-tested, repaired, previewed, and exported through the target pipeline.
- No trained model, fine-tuning dataset, public SaaS, user auth, billing, completed legal review, security audit, or project-wide distribution license.

## Next verifiable milestone

1. Keep the merged OpenHands adapter and full repository checks green on `main`.
2. Run one pinned OpenHands Agent Server compatibility fixture and verify the adapter against the real server without requiring a paid production model.
3. Compare the OpenHands workspace path against OpenSandbox with an executable restricted-workspace fixture before choosing one production execution layer.
4. Continue toward prompt → plan → generated files → isolated build/test → preview → source export.

## Planning document added — 17 November 2026

`docs/product/PROJECT_IDEA.txt` records a proposed product direction, the existing-work
inventory, feasibility limits, evaluation criteria, and conditional one-, two-,
and three-plus-year horizons. It is a planning artifact, not an implementation
milestone or authorization to restructure code. No new application capabilities
or test results are claimed by this documentation change.

## Repository organization and preservation — 17 November 2026

- Reviewed all 55 tracked baseline files and compared fetched `origin/main` with
  the previously pushed `0c45350` baseline. They matched; this review did not
  establish the reported account compromise or an account-security resolution.
- Relocated the two original ZIPs to `AnalyseFuture/references/upstream/` without
  changing their bytes. Preserved seven original documents before factual and
  navigation updates in `AnalyseFuture/history/baseline-documents/`.
- Added a per-file preservation manifest and
  [structure review](../architecture/REPOSITORY_STRUCTURE.md). All 55 baseline contents have a
  retained copy verified by size and SHA-256. No original content was discarded.
- Updated `PROJECT_IDEA.txt`, active status descriptions and README navigation.
  The detailed idea covers existing work, feasible next steps, unsupported
  promises, future participants and conditional one-/two-/three-plus-year plans.
- Active application source, test files, workspace definitions and lockfile are
  unchanged. No third-party code was unpacked into the active checkout or run.

Current-instance validation on Node.js **v24.22.1**, npm **11.9.0**:

- `npm ci --ignore-scripts --no-audit --no-fund --cache /workspace/.cache/npm`:
  passed; frozen dependency/workspace installation succeeded.
- `npm test`: **29 passed, 0 failed, 0 skipped**.
- A separately started real HTTP server passed health, static UI and
  prompt-to-generated-HTML assertions; that validation server was then stopped.
- Preservation checks: **55/55 original file contents match**; both archives also
  passed ZIP CRC checks. These are integrity checks, not proof of upstream trust.
- Active Markdown local links and `git diff --check` passed.

Live Ollama inference, a real OpenHands agent, generated-app execution, browser
automation, production deployment and account-access investigation remain unrun
or outside this organization pass. The existing tests still use mocks/fake servers
for provider and agent integration.

## Complete recovery follow-up — 17 November 2026

Starting from `e40fa8080eb201562d1382cc53b5b0a24d1b52ee`, the uploaded master
request was applied to all **65 starting tracked files**, all **four visible
remote branch heads** and **39 reachable pre-recovery commits**. The initial
fetch configuration covered only `main`; other branches were explicitly fetched.
Their maintained source components already matched `main`, so no source merge or
history rewrite was justified. A remote recovery tag preserves the starting ref.

- Added the thirteen requested recovery reports plus persistent progress and a
  dependency map under `AnalyseFuture/`. The complete inventory also covers
  every delivered path; the ZIP member index lists all **6,737 entries**.
- Retained **15** pre-change originals with inert `.txt` suffixes. All 65 starting
  contents and all 55 older baseline contents remain recoverable with matching
  hashes. No valuable source content was deleted.
- Consolidated the existing full vision at
  [PROJECT_VISION_AND_FUTURE_ROADMAP.txt](../../AnalyseFuture/planning/PROJECT_VISION_AND_FUTURE_ROADMAP.txt),
  covering twenty requested topics and conditional one-/two-/three-to-five-year
  horizons. The previous `docs/product/PROJECT_IDEA.txt` is a compatibility pointer.
- Reproduced redirect forwarding of synthetic prompts and a dummy session key
  with three real HTTP tests. Both adapter request paths now reject redirects.
  The same three tests failed before the fix and passed after it.
- Scoped `npm test` to four explicit maintained files. A temporary archive test
  failed under bare Node discovery but was excluded by the maintained command.

Current-instance results: frozen installation passed; **32 tests passed, 0 failed,
0 skipped**; **10** active JavaScript files passed syntax checks; local links in
**32** active Markdown documents resolved. A fresh headless Chromium session using
existing environment tooling passed four real mock-template flows, rendered
preview/plan, prompt count, HTML download, controlled error/recovery and mobile
control visibility, with no uncaught page errors. The inert driver is retained
under `AnalyseFuture/validation/drivers/`; it adds no product dependency or full
generated-application E2E suite.

Git/source review scanned 89 textual blobs; archive scanning covered 5,627 UTF-8
files, with automated triage of 134 selected files and targeted manual excerpts
from 19 upstream files. This is not an exhaustive upstream source/security audit.
GitHub repository/protection API reads returned `Forbidden`; account permissions,
security events and protection settings remain unverified. Normal pushes respect
server rules. The report does not establish a compromise or an account remedy.

See [REPOSITORY_AUDIT.txt](../../AnalyseFuture/audit/REPOSITORY_AUDIT.txt),
[SECURITY_AUDIT.txt](../../AnalyseFuture/security/SECURITY_AUDIT.txt),
[TEST_AND_VALIDATION_REPORT.txt](../../AnalyseFuture/validation/TEST_AND_VALIDATION_REPORT.txt)
and [NEXT_DEVELOPER_INSTRUCTIONS.txt](../../AnalyseFuture/handoff/NEXT_DEVELOPER_INSTRUCTIONS.txt).
Real model/agent integration, execution isolation, persistence/auth and production
deployment remain unfinished product work.

## Functional folder organization — 17 November 2026

This pass starts at `84dd0aa43e8b66ff3e6f4e32d703f3b8b0ab955a` and follows
the owner's explicit instruction **not to run tests**. All earlier pass/fail and
browser results above belong to earlier commits; they are not evidence that the
new paths have been exercised at runtime.

- Reviewed and assigned all 101 starting files by function, including nested
  snapshots and metadata. Moved 84 files; retained 17 at conventional or already
  appropriate paths. Five new navigation/preservation records yield 106 files.
- Renamed active collections to `apps/builder-api`, `apps/builder-web`,
  `packages/project-generator` and `services/agent-adapter`; retained
  `services/model-gateway`. Public package names and exports are preserved.
- Grouped documentation by product, architecture, development, security, legal,
  research, operations and model-training. Grouped preserved material by its
  audit/inventory/feature/migration/security/validation/planning/history purpose.
- Updated script paths, lockfile workspace paths, asset references, current links
  and four ignored local workspace symlinks without installation or code execution.
- Preserved 99 original text files in an inert ZIP and both upstream ZIPs without
  byte changes; original hashes and every relocation are in the new ledger.
- Added the canonical [PROJECT_STRUCTURE.md](../../PROJECT_STRUCTURE.md) and
  [organization record](../../AnalyseFuture/organization/REORGANIZATION.md).
- No separate English-speaking companion implementation was found in this
  repository's owned source or fetched branches. Existing app-builder work and
  future ideas were preserved; no missing project was invented or relabeled.

No tests, browser runs, application startup, installation or executable validation
were performed. Only static file/hash/path/reference review applies to this pass.
Commits use `[skip ci]`; later authorized runtime validation remains necessary.

## Rules for keeping this document accurate

- A feature becomes “implemented” only with links to code, executable verification steps, and test results.
- Record branch/commit, tool versions, skipped checks, and limitations.
- Do not inflate progress using UI mockups, unexecuted generated code, or assumed model capabilities.
- Update this document after every material milestone.
