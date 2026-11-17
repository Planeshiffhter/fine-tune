# Project structure

`Planeshiffhter/fine-tune` is one npm monorepo for an AI app-builder foundation.
Files are grouped by responsibility and ownership. Correctly placed code stays
beside its own tests, assets and package metadata. No existing feature, file or
future idea was discarded in this restructuring.

## Current layout

```text
fine-tune/
├── README.md                         project entry point and quickstart
├── PROJECT_STRUCTURE.md              this current layout and placement rules
├── AGENTS.md                         contributor-agent instructions
├── CONTRIBUTING.md                   contribution and owner-directed workflow
├── SECURITY.md                       vulnerability reporting policy
├── .env.example                      non-secret runtime examples
├── .gitignore                        local/generated exclusions
├── package.json                      npm workspace root and explicit commands
├── package-lock.json                 locked workspace/dependency graph
├── .github/
│   ├── ISSUE_TEMPLATE/               bug and feature intake
│   ├── workflows/ci.yml              existing Node 22 CI configuration
│   └── pull_request_template.md      external contribution checklist
├── apps/
│   ├── builder-api/
│   │   ├── package.json              @fine-tune/api
│   │   ├── src/{app,server}.mjs       HTTP handler and process entry point
│   │   └── test/app.test.mjs          API and static-serving regression suite
│   └── builder-web/
│       ├── package.json              @fine-tune/web
│       └── public/                   index.html, app.js and styles.css
├── packages/
│   └── project-generator/
│       ├── package.json              @fine-tune/core
│       ├── src/index.mjs             prompt validation and static templates
│       └── test/core.test.mjs        deterministic generator regressions
├── services/
│   ├── agent-adapter/
│   │   ├── README.md + package.json  @fine-tune/agent contract/configuration
│   │   ├── src/index.mjs             bounded OpenHands REST transport
│   │   └── test/agent.test.mjs        fake-server transport regressions
│   └── model-gateway/
│       ├── README.md + package.json  @fine-tune/model-gateway contract
│       ├── src/index.mjs             mock/Ollama inference boundary
│       └── test/model-gateway.test.mjs provider contract regressions
├── docs/
│   ├── README.md                     functional documentation index
│   ├── product/                      charter, requirements, feature matrix,
│   │                                 roadmap and canonical complete vision
│   ├── architecture/                 component design and decisions/ ADRs
│   ├── development/                  onboarding, handoff, status, mock API,
│   │                                 evaluation, playbook, prior validation
│   ├── security/                     threat model and control requirements
│   ├── legal/                        ownership/licensing obligations
│   ├── research/                     reuse audit and candidate repository list
│   ├── operations/                   costs, quotas and operating strategy
│   └── model-training/               future data/training/evaluation strategy
└── AnalyseFuture/
    ├── README.md                     preservation policy and historical index
    ├── organization/                 current report, full file catalogue,
    │                                 archive catalogue and pre-edit originals
    ├── history/
    │   ├── baseline-documents/        original earlier document snapshot
    │   ├── before-complete-audit/     inert original source/document snapshot
    │   ├── organization/             old placement ledger, reports, originals,
    │   │   └── compatibility/        obsolete PROJECT_IDEA navigation pointer
    │   └── recovery-reports/          original dated evidence by responsibility
    │       ├── audit/                repository investigation
    │       ├── features/             features, dependencies, duplicate review
    │       ├── handoff/              earlier progress and technical debt
    │       ├── inventory/            original file/member inventories + evidence/
    │       ├── migration/            old relocation/consolidation records
    │       ├── security/             old security report + evidence/
    │       └── validation/           old outcomes, originals ZIP + drivers/
    └── references/upstream/          unchanged compressed OpenSandbox/SDK sources
```

The exact path and purpose of **every file**, including deeply nested preserved
snapshots and hidden configuration, is in the [file catalogue](AnalyseFuture/organization/FILE_CATALOG.md)
and its [machine-readable ledger](AnalyseFuture/organization/FILE_CATALOG.json).
The [archive catalogue](AnalyseFuture/organization/ARCHIVE_CATALOG.json) covers
all 6,860 entries inside the five pre-existing ZIPs, including nested upstream
source, tests, documentation, notices, assets, manifests and directory entries.
No archive member was extracted into the runtime or discarded.

## Dependency and ownership boundaries

```text
builder-web --HTTP /api/generate--> builder-api --@fine-tune/core--> project-generator
                                    |
                                    +--serves builder-web/public assets

agent-adapter --REST--> separately configured OpenHands Agent Server (optional)
model-gateway --------> deterministic mock / separately configured Ollama (optional)
```

The existing mock route does not invoke the agent or model gateway. Those modules
are distinct integration boundaries, not competing copies of the generator.
The root scripts explicitly name the server and four test files. The API's
relative asset paths, package exports, lockfile workspace links and test imports
remain at their existing paths. The only UI edit corrects source/roadmap navigation
to this repository; no runtime behavior or dependencies were rewritten.

Root package manifests, discovery policies, GitHub templates and security/reporting
entry points keep their standard tool-discovered locations. Functional grouping
does not mean moving convention-required files into arbitrary folders.

## Where new work belongs

| Work | Home and rule |
| --- | --- |
| User-facing browser behavior/assets | `apps/builder-web/` |
| Product HTTP endpoints and route tests | `apps/builder-api/` |
| Reusable deterministic generation/validation | `packages/project-generator/` |
| Model/provider behavior | `services/model-gateway/` |
| Agent-server integration | `services/agent-adapter/` |
| Component tests | The owning component's `test/`; update explicit root discovery when later authorized |
| Current goals and future ideas | `docs/product/`; keep one canonical complete vision |
| Architecture and important decisions | `docs/architecture/` and `decisions/` |
| Developer instructions and measured status | `docs/development/` |
| Security, legal, research, operating or training guidance | Corresponding functional `docs/` collection |
| Historical outputs, displaced originals and obsolete pointers | Labeled `AnalyseFuture/history/` collection with original context |
| Third-party source retained for inspection | `AnalyseFuture/references/upstream/`, compressed and inactive |
| New uncertain files | Inspect first, then a labeled `AnalyseFuture/` collection with a reason and original path |

Create future sandbox, database, auth, deployment, training or cross-service test
directories only when their implementation needs them. Their absence is not lost
work: current plans are preserved in the product/architecture/training documents.
Do not introduce empty scaffolding or merge third-party code to imitate a larger
system.

## Preservation and review scope

The baseline is `3d00f02c217419e6172a9c2586db7660db1fa391`: 110 tracked files.
Twenty-eight files moved; all remaining starting paths retain their functional
homes. Relocated historical evidence and all five existing ZIPs retain exact bytes. Every
edited original is additionally stored at its baseline relative path in
[PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip](AnalyseFuture/organization/PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip).
The [current report](AnalyseFuture/organization/REORGANIZATION.md) explains each
decision; the catalogue gives old-to-new lookup and SHA-256 preservation evidence.
No duplicates were deleted or merged on appearance alone.

Historical reports and old ledgers retain their old paths and repository names as
evidence. Resolve them using their recorded original location and the new mapping;
use current docs for live navigation. The original structure guide and full status
chronology are included in the pre-edit archive rather than discarded.

Ignored `node_modules/` is local installation state: its lock metadata and all
five workspace symlinks were inspected and retained. `.git/` remains untouched
repository metadata, outside the project sorting inventory. No extra untracked
project material or nested checkout was found. There were no tracked submodules
or symlinks; an upstream internal symlink stays inert inside its archive.

**No tests were run**, locally or requested through this push's normal CI trigger
(`[skip ci]`). No app, browser, build or installer was executed. Static link,
path, workspace and content/hash review establishes preservation and navigation;
it does not establish runtime correctness. The earlier
[validation report](docs/development/VALIDATION_REPORT.md) remains historical evidence.
Git delivery is a normal commit/push directly to `main`, without a PR or history
rewrite; remote SHA comparison establishes delivery separately from runtime behavior.
