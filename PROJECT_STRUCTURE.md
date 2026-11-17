# Project structure

This is the current organization of **kawaho3/fine-tune**, sorted by functional
responsibility on **17 November 2026**, starting at
`84dd0aa43e8b66ff3e6f4e32d703f3b8b0ab955a`.

The inspected project is an **AI app-builder foundation**: an offline mock,
deterministic project generator, model gateway and coding-agent adapter. No
separate English-speaking companion, pronunciation tutor, speech-recognition or
voice-learning implementation was found in the owned source or fetched branches.
Nothing was removed or relabeled as that missing product. All existing code,
features, documents, archives and future ideas are preserved.

## Functional collections

```text
fine-tune/
  PROJECT_STRUCTURE.md                 current organization and complete relocation index
  README.md                            project entry point and quickstart
  AGENTS.md / CONTRIBUTING.md           engineering and owner workflow guidance
  SECURITY.md                          vulnerability reporting entry point
  package.json / package-lock.json      workspace registration, scripts and frozen dependencies
  .env.example / .gitignore             root runtime examples and local-file exclusions
  .github/                             CI and contributor templates in GitHub-required locations
  apps/
    builder-api/                       HTTP request handling and asset serving
      package.json
      src/                             server and request handler
      test/                            API checks; moved, not executed in this pass
    builder-web/                       browser form, preview, plan and HTML download
      package.json
      public/                          colocated HTML, CSS and browser behavior
  packages/
    project-generator/                 shared prompt validation and deterministic HTML generation
      package.json
      src/                             generator implementation
      test/                            generator checks; moved, not executed
  services/
    agent-adapter/                     OpenHands conversation/lifecycle HTTP boundary
      README.md / package.json
      src/ / test/                     implementation and its colocated checks
    model-gateway/                     mock/Ollama inference, timeout/retry/stream contracts
      README.md / package.json
      src/ / test/                     implementation and its colocated checks
  docs/
    README.md                          current documentation index
    product/                           charter, requirements, roadmap and feature ambitions
    architecture/                      component design and decision records
      decisions/                       six existing ADRs
    development/                       current continuation, onboarding, status and evaluation
    security/                          threat model and required controls
    legal/                             ownership, project licensing and reuse obligations
    research/                          upstream component research and repository references
    operations/                        cost and operational planning
    model-training/                    deferred model/data/fine-tuning strategy
  AnalyseFuture/
    README.md                          preserved-material index and handling rules
    audit/                             earlier repository-wide audit
    inventory/                         previous complete inventories and preservation manifests
      evidence/                        starting-state metadata and every upstream ZIP member
    features/                          previous feature/dependency/duplicate analysis
    migration/                         previous consolidation, path mapping and recovery decisions
    security/                          previous findings and metadata-only source/archive evidence
      evidence/
    validation/                        historical test results, not a new test run
      drivers/                         inert browser smoke driver for later authorized use
    planning/                          complete detailed future product vision
    handoff/                           previous technical debt, handoff and progress records
    history/                           exact older document/source snapshots
      baseline-documents/
      before-complete-audit/
    references/
      upstream/                        original OpenHands and OpenSandbox ZIPs, still compressed
    organization/                      this pass's complete mapping, preserved originals and record
```

## Why these locations

Each component owns its implementation, metadata and related checks. HTTP framing
belongs to the builder API; browser events/assets belong to the builder web app;
shared prompt/template logic belongs to the project generator. Agent transport
and model inference remain separate because they expose different contracts,
retry rules and responsibilities. Their shared subject of AI does not make them
safe duplicate implementations to merge. The adapters remain preserved even
though the mock browser/API does not call them yet.

The source labels are now explicit: `builder-api`, `builder-web`,
`project-generator`, `agent-adapter` and `model-gateway`. Generic root source
collections or folders based only on file extensions were not introduced.
Documentation follows product/architecture/development/security/legal/research/
operations/model-training responsibilities. Historical evidence is kept apart
from active guidance; uncertain upstream material stays compressed and inactive.

## Compatibility and path wiring

| Functional folder | Public npm package name retained |
| --- | --- |
| `apps/builder-api` | `@fine-tune/api` |
| `apps/builder-web` | `@fine-tune/web` |
| `packages/project-generator` | `@fine-tune/core` |
| `services/agent-adapter` | `@fine-tune/agent` |
| `services/model-gateway` | `@fine-tune/model-gateway` |

Public exports, import aliases, HTTP routes, generation behavior and assets are
preserved. Root start/test script paths, frozen-lock workspace locations, asset
file URLs and current documentation links were updated. Colocated relative
source/test imports keep their component structure. Four known ignored local
workspace symlinks were retargeted as filesystem configuration, without installing
packages or executing application code. The ledger records their previous targets.

Git's `.git/` metadata stays in its required location so history is preserved.
Ignored `node_modules/` contains generated dependency/workspace state, not another
owned feature implementation; it remains in the package manager's conventional
location and is not copied into GitHub or the archive collections. These locations
were classified deliberately rather than treated as unexamined product folders.

## Preservation and review limits

All **101 starting tracked files** have a functional decision in
[PATH_MAPPING.json](AnalyseFuture/organization/PATH_MAPPING.json): **84 moved**,
17 retained at required or already appropriate locations. Before editing,
**99 text originals** were stored byte-for-byte in
[ORIGINAL_TEXT_FILES.zip](AnalyseFuture/organization/ORIGINAL_TEXT_FILES.zip).
The two original upstream ZIPs remain byte-identical at their relocated paths.
Hashes, original paths and restoration locations are recorded for all 101 files.
The initial sort added five organization/navigation records, giving 106 files.
A continuation-guide closure added two records, giving 108 files.
Post-move validation adds a report and preservation archive, giving
**110 current tracked files**.
The added guide and its preserved originals are recorded in the same ledger.
Git history remains intact, and remote tag
`recovery/before-functional-sort-84dd0aa` preserves the starting commit.

Older source snapshots, metadata, ZIP member inventories and security evidence
retain their original bytes. Earlier audit TXT reports are labeled historical;
their original body paths/results describe the earlier baseline. Use this guide
and the new mapping to interpret those old paths. Historical Markdown copies can
retain old internal links because they are evidence, not current navigation.
Do not import, install or execute historical/upstream material from AnalyseFuture.

**The initial organization phase was static-only** and its commits used
`[skip ci]`. The owner subsequently authorized testing and repairs. Current
[post-move validation](docs/development/VALIDATION_REPORT.md) passes all 41
maintained tests on both Node 22.23.5 and Node 24.22.1, plus real startup and
headless mock UI checks. Nine regressions cover the newly repaired boundaries.
Normal validation commits permit CI again; no remote Actions outcome is claimed.
These checks do not establish live-agent, generated-code isolation or production
readiness. Previous audit results remain historical for their own revisions.

## Where to put future work

- Extend the existing component that owns the behavior, keeping related source,
  tests and configuration together. Add a new app/service only for a distinct
  runtime or responsibility with a demonstrated need.
- Keep product requirements in `docs/product`, design decisions in
  `docs/architecture/decisions`, operating instructions in `docs/development`,
  and specialist materials in their named collections.
- Put safe but uncertain imported work under `AnalyseFuture` with its origin,
  original path, reason, dependency/use assessment and preservation hash. Do not
  classify unfamiliar files as malicious or publish credentials/private data.
- Preserve original content before changing existing records. Update current
  references and the structure/migration ledger when paths change again.
- If an English-speaking companion project is later provided, inspect its actual
  implementation and give it a distinct functional app/service collection. Do not
  substitute the coding-agent conversation adapter for a speaking tutor.

## Complete starting-file placement index

Every initial tracked path, including deeply nested historical evidence, is listed
below. The JSON ledger additionally records its purpose, dependencies, activity,
duplicate assessment and original hash. Root and `.github` entries remain where
package tools, GitHub and developers discover them.

| Original path | Functional home | Collection |
| --- | --- | --- |
| `.env.example` | `.env.example` | `root-project-entrypoints` |
| `.github/ISSUE_TEMPLATE/bug_report.md` | `.github/ISSUE_TEMPLATE/bug_report.md` | `github-automation` |
| `.github/ISSUE_TEMPLATE/feature_request.md` | `.github/ISSUE_TEMPLATE/feature_request.md` | `github-automation` |
| `.github/pull_request_template.md` | `.github/pull_request_template.md` | `github-automation` |
| `.github/workflows/ci.yml` | `.github/workflows/ci.yml` | `github-automation` |
| `.gitignore` | `.gitignore` | `root-project-entrypoints` |
| `AGENTS.md` | `AGENTS.md` | `root-project-entrypoints` |
| `AnalyseFuture/ARCHIVED_FILES_MANIFEST.txt` | `AnalyseFuture/inventory/ARCHIVED_FILES_MANIFEST.txt` | `AnalyseFuture/inventory` |
| `AnalyseFuture/COMPLETE_FILE_INVENTORY.txt` | `AnalyseFuture/inventory/COMPLETE_FILE_INVENTORY.txt` | `AnalyseFuture/inventory` |
| `AnalyseFuture/CONSOLIDATION_REPORT.txt` | `AnalyseFuture/migration/CONSOLIDATION_REPORT.txt` | `AnalyseFuture/migration` |
| `AnalyseFuture/DEPENDENCY_MAP.txt` | `AnalyseFuture/features/DEPENDENCY_MAP.txt` | `AnalyseFuture/features` |
| `AnalyseFuture/DUPLICATE_ANALYSIS.txt` | `AnalyseFuture/features/DUPLICATE_ANALYSIS.txt` | `AnalyseFuture/features` |
| `AnalyseFuture/FEATURE_INVENTORY.txt` | `AnalyseFuture/features/FEATURE_INVENTORY.txt` | `AnalyseFuture/features` |
| `AnalyseFuture/MIGRATION_SUMMARY.txt` | `AnalyseFuture/migration/MIGRATION_SUMMARY.txt` | `AnalyseFuture/migration` |
| `AnalyseFuture/NEXT_DEVELOPER_INSTRUCTIONS.txt` | `AnalyseFuture/handoff/NEXT_DEVELOPER_INSTRUCTIONS.txt` | `AnalyseFuture/handoff` |
| `AnalyseFuture/ORIGINAL_TO_NEW_PATH_MAPPING.txt` | `AnalyseFuture/migration/ORIGINAL_TO_NEW_PATH_MAPPING.txt` | `AnalyseFuture/migration` |
| `AnalyseFuture/PRESERVATION_MANIFEST.json` | `AnalyseFuture/inventory/PRESERVATION_MANIFEST.json` | `AnalyseFuture/inventory` |
| `AnalyseFuture/PROJECT_VISION_AND_FUTURE_ROADMAP.txt` | `AnalyseFuture/planning/PROJECT_VISION_AND_FUTURE_ROADMAP.txt` | `AnalyseFuture/planning` |
| `AnalyseFuture/README.md` | `AnalyseFuture/README.md` | `root-project-entrypoints` |
| `AnalyseFuture/REPOSITORY_AUDIT.txt` | `AnalyseFuture/audit/REPOSITORY_AUDIT.txt` | `AnalyseFuture/audit` |
| `AnalyseFuture/SECURITY_AUDIT.txt` | `AnalyseFuture/security/SECURITY_AUDIT.txt` | `AnalyseFuture/security` |
| `AnalyseFuture/TECHNICAL_DEBT.txt` | `AnalyseFuture/handoff/TECHNICAL_DEBT.txt` | `AnalyseFuture/handoff` |
| `AnalyseFuture/TEST_AND_VALIDATION_REPORT.txt` | `AnalyseFuture/validation/TEST_AND_VALIDATION_REPORT.txt` | `AnalyseFuture/validation` |
| `AnalyseFuture/WORK_PROGRESS.txt` | `AnalyseFuture/handoff/WORK_PROGRESS.txt` | `AnalyseFuture/handoff` |
| `AnalyseFuture/baseline-documents/CONTRIBUTING.md` | `AnalyseFuture/history/baseline-documents/CONTRIBUTING.md` | `AnalyseFuture/history` |
| `AnalyseFuture/baseline-documents/README.md` | `AnalyseFuture/history/baseline-documents/README.md` | `AnalyseFuture/history` |
| `AnalyseFuture/baseline-documents/docs/ARCHITECTURE.md` | `AnalyseFuture/history/baseline-documents/docs/ARCHITECTURE.md` | `AnalyseFuture/history` |
| `AnalyseFuture/baseline-documents/docs/IMPLEMENTATION_STATUS.md` | `AnalyseFuture/history/baseline-documents/docs/IMPLEMENTATION_STATUS.md` | `AnalyseFuture/history` |
| `AnalyseFuture/baseline-documents/docs/PROJECT_IDEA.txt` | `AnalyseFuture/history/baseline-documents/docs/PROJECT_IDEA.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/baseline-documents/docs/REUSE_AUDIT.md` | `AnalyseFuture/history/baseline-documents/docs/REUSE_AUDIT.md` | `AnalyseFuture/history` |
| `AnalyseFuture/baseline-documents/docs/ROADMAP.md` | `AnalyseFuture/history/baseline-documents/docs/ROADMAP.md` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/AnalyseFuture/README.md.txt` | `AnalyseFuture/history/before-complete-audit/AnalyseFuture/README.md.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/README.md.txt` | `AnalyseFuture/history/before-complete-audit/README.md.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/SECURITY.md.txt` | `AnalyseFuture/history/before-complete-audit/SECURITY.md.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/docs/ARCHITECTURE.md.txt` | `AnalyseFuture/history/before-complete-audit/docs/ARCHITECTURE.md.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/docs/DEVELOPER_ONBOARDING.md.txt` | `AnalyseFuture/history/before-complete-audit/docs/DEVELOPER_ONBOARDING.md.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/docs/IMPLEMENTATION_STATUS.md.txt` | `AnalyseFuture/history/before-complete-audit/docs/IMPLEMENTATION_STATUS.md.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/docs/PROJECT_IDEA.txt.txt` | `AnalyseFuture/history/before-complete-audit/docs/PROJECT_IDEA.txt.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/docs/REPOSITORY_STRUCTURE.md.txt` | `AnalyseFuture/history/before-complete-audit/docs/REPOSITORY_STRUCTURE.md.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/package.json.txt` | `AnalyseFuture/history/before-complete-audit/package.json.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/services/agent/README.md.txt` | `AnalyseFuture/history/before-complete-audit/services/agent/README.md.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/services/agent/src/index.mjs.txt` | `AnalyseFuture/history/before-complete-audit/services/agent/src/index.mjs.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/services/agent/test/agent.test.mjs.txt` | `AnalyseFuture/history/before-complete-audit/services/agent/test/agent.test.mjs.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/services/model-gateway/README.md.txt` | `AnalyseFuture/history/before-complete-audit/services/model-gateway/README.md.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/services/model-gateway/src/index.mjs.txt` | `AnalyseFuture/history/before-complete-audit/services/model-gateway/src/index.mjs.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/historical-implementations/before-complete-audit/services/model-gateway/test/model-gateway.test.mjs.txt` | `AnalyseFuture/history/before-complete-audit/services/model-gateway/test/model-gateway.test.mjs.txt` | `AnalyseFuture/history` |
| `AnalyseFuture/recovery-notes/BROWSER_SMOKE_DRIVER.txt` | `AnalyseFuture/validation/drivers/BROWSER_SMOKE_DRIVER.txt` | `AnalyseFuture/validation` |
| `AnalyseFuture/repository-inventory/STARTING_STATE.json` | `AnalyseFuture/inventory/evidence/STARTING_STATE.json` | `AnalyseFuture/inventory` |
| `AnalyseFuture/repository-inventory/UPSTREAM_ARCHIVE_CONTENTS.txt` | `AnalyseFuture/inventory/evidence/UPSTREAM_ARCHIVE_CONTENTS.txt` | `AnalyseFuture/inventory` |
| `AnalyseFuture/security-reports/GIT_AND_SOURCE_REVIEW.json` | `AnalyseFuture/security/evidence/GIT_AND_SOURCE_REVIEW.json` | `AnalyseFuture/security` |
| `AnalyseFuture/security-reports/UPSTREAM_ARCHIVE_REVIEW.json` | `AnalyseFuture/security/evidence/UPSTREAM_ARCHIVE_REVIEW.json` | `AnalyseFuture/security` |
| `AnalyseFuture/upstream-archives/OpenSandbox-main.zip` | `AnalyseFuture/references/upstream/OpenSandbox-main.zip` | `AnalyseFuture/references` |
| `AnalyseFuture/upstream-archives/software-agent-sdk-main.zip` | `AnalyseFuture/references/upstream/software-agent-sdk-main.zip` | `AnalyseFuture/references` |
| `CONTRIBUTING.md` | `CONTRIBUTING.md` | `root-project-entrypoints` |
| `README.md` | `README.md` | `root-project-entrypoints` |
| `SECURITY.md` | `SECURITY.md` | `root-project-entrypoints` |
| `apps/api/package.json` | `apps/builder-api/package.json` | `apps/builder-api` |
| `apps/api/src/app.mjs` | `apps/builder-api/src/app.mjs` | `apps/builder-api` |
| `apps/api/src/server.mjs` | `apps/builder-api/src/server.mjs` | `apps/builder-api` |
| `apps/api/test/app.test.mjs` | `apps/builder-api/test/app.test.mjs` | `apps/builder-api` |
| `apps/web/package.json` | `apps/builder-web/package.json` | `apps/builder-web` |
| `apps/web/public/app.js` | `apps/builder-web/public/app.js` | `apps/builder-web` |
| `apps/web/public/index.html` | `apps/builder-web/public/index.html` | `apps/builder-web` |
| `apps/web/public/styles.css` | `apps/builder-web/public/styles.css` | `apps/builder-web` |
| `docs/ARCHITECTURE.md` | `docs/architecture/ARCHITECTURE.md` | `docs/architecture` |
| `docs/CODEX_PLAYBOOK.md` | `docs/development/CODEX_PLAYBOOK.md` | `docs/development` |
| `docs/COSTS_AND_OPERATIONS.md` | `docs/operations/COSTS_AND_OPERATIONS.md` | `docs/operations` |
| `docs/DEVELOPER_ONBOARDING.md` | `docs/development/DEVELOPER_ONBOARDING.md` | `docs/development` |
| `docs/FEATURE_MATRIX.md` | `docs/product/FEATURE_MATRIX.md` | `docs/product` |
| `docs/IMPLEMENTATION_STATUS.md` | `docs/development/IMPLEMENTATION_STATUS.md` | `docs/development` |
| `docs/MOCK_PROTOTYPE.md` | `docs/development/MOCK_PROTOTYPE.md` | `docs/development` |
| `docs/MODEL_TRAINING.md` | `docs/model-training/MODEL_TRAINING.md` | `docs/model-training` |
| `docs/OWNERSHIP_AND_LICENSES.md` | `docs/legal/OWNERSHIP_AND_LICENSES.md` | `docs/legal` |
| `docs/PRODUCT_REQUIREMENTS.md` | `docs/product/PRODUCT_REQUIREMENTS.md` | `docs/product` |
| `docs/PROJECT_CHARTER.md` | `docs/product/PROJECT_CHARTER.md` | `docs/product` |
| `docs/PROJECT_IDEA.txt` | `docs/product/PROJECT_IDEA.txt` | `docs/product` |
| `docs/RECOMMENDED_PUBLIC_REPOSITORIES.txt` | `docs/research/RECOMMENDED_PUBLIC_REPOSITORIES.txt` | `docs/research` |
| `docs/REPOSITORY_STRUCTURE.md` | `docs/architecture/REPOSITORY_STRUCTURE.md` | `docs/architecture` |
| `docs/REUSE_AUDIT.md` | `docs/research/REUSE_AUDIT.md` | `docs/research` |
| `docs/ROADMAP.md` | `docs/product/ROADMAP.md` | `docs/product` |
| `docs/SECURITY_ARCHITECTURE.md` | `docs/security/SECURITY_ARCHITECTURE.md` | `docs/security` |
| `docs/TESTING_AND_EVALUATION.md` | `docs/development/TESTING_AND_EVALUATION.md` | `docs/development` |
| `docs/decisions/0001-monorepo-reuse-first.md` | `docs/architecture/decisions/0001-monorepo-reuse-first.md` | `docs/architecture` |
| `docs/decisions/0002-one-agent-first.md` | `docs/architecture/decisions/0002-one-agent-first.md` | `docs/architecture` |
| `docs/decisions/0003-sandbox-boundary.md` | `docs/architecture/decisions/0003-sandbox-boundary.md` | `docs/architecture` |
| `docs/decisions/0004-model-gateway-boundary.md` | `docs/architecture/decisions/0004-model-gateway-boundary.md` | `docs/architecture` |
| `docs/decisions/0005-openhands-agent-adapter.md` | `docs/architecture/decisions/0005-openhands-agent-adapter.md` | `docs/architecture` |
| `docs/decisions/0006-reference-and-request-boundaries.md` | `docs/architecture/decisions/0006-reference-and-request-boundaries.md` | `docs/architecture` |
| `package-lock.json` | `package-lock.json` | `root-project-entrypoints` |
| `package.json` | `package.json` | `root-project-entrypoints` |
| `packages/core/package.json` | `packages/project-generator/package.json` | `packages/project-generator` |
| `packages/core/src/index.mjs` | `packages/project-generator/src/index.mjs` | `packages/project-generator` |
| `packages/core/test/core.test.mjs` | `packages/project-generator/test/core.test.mjs` | `packages/project-generator` |
| `services/agent/README.md` | `services/agent-adapter/README.md` | `services/agent-adapter` |
| `services/agent/package.json` | `services/agent-adapter/package.json` | `services/agent-adapter` |
| `services/agent/src/index.mjs` | `services/agent-adapter/src/index.mjs` | `services/agent-adapter` |
| `services/agent/test/agent.test.mjs` | `services/agent-adapter/test/agent.test.mjs` | `services/agent-adapter` |
| `services/model-gateway/README.md` | `services/model-gateway/README.md` | `services/model-gateway` |
| `services/model-gateway/package.json` | `services/model-gateway/package.json` | `services/model-gateway` |
| `services/model-gateway/src/index.mjs` | `services/model-gateway/src/index.mjs` | `services/model-gateway` |
| `services/model-gateway/test/model-gateway.test.mjs` | `services/model-gateway/test/model-gateway.test.mjs` | `services/model-gateway` |

## Added organization records

- `PROJECT_STRUCTURE.md` — Canonical current whole-project organization and per-file relocation index.
- `docs/README.md` — Functional documentation navigation index.
- `AnalyseFuture/organization/PATH_MAPPING.json` — All101starting file purposes/dependencies, source-to-destination mapping, original hashes and link changes.
- `AnalyseFuture/organization/ORIGINAL_TEXT_FILES.zip` — 99exact pre-sort text originals, compressed and inert.
- `AnalyseFuture/organization/REORGANIZATION.md` — Current organization scope, decisions and static-only review record.

## Continuation-guide closure

The completed sort is followed by a current
[continuation guide](docs/development/CONTINUATION.md). Active onboarding, the
README and architecture now point to this guide instead of treating the preserved
pre-sort handoff as current. All historical handoff/report bodies remain intact.

Two additional functional records complete the current inventory:

- `docs/development/CONTINUATION.md` — current paths, constraints, organization
  completion and separate remaining product milestones.
- `AnalyseFuture/organization/FOLLOW_UP_ORIGINALS_E19DFDA.zip` — ten exact original
  documents from `e19dfda`, retained before updating this handoff/navigation layer.

The source collections remain unchanged from the functional sort. This follow-up
ran no tests, installation, application startup, browser or project-code execution;
its commits also use `[skip ci]`. Static path/reference and preservation review
are the applicable evidence. Post-move runtime behavior remains unverified.

## Post-move validation records

The later user request to test and fix lifted the earlier pause. Current results,
repairs, runtime provenance and unrun integrations are in
[VALIDATION_REPORT.md](docs/development/VALIDATION_REPORT.md). The additional two
functional records complete the current inventory of 110 paths:

- `docs/development/VALIDATION_REPORT.md` — current test matrix, startup/browser
  scope, reproduced defects, fixes and limits.
- `AnalyseFuture/validation/ORIGINALS_BEFORE_POST_MOVE_VALIDATION_4A20BB0.zip` —
  fourteen baseline source/test/document originals before those fixes.

The existing folder ownership stays intact. No dependency, public export or
feature was removed. The placement ledger preserves the original organization
phase metadata separately from the later authorized validation evidence.
