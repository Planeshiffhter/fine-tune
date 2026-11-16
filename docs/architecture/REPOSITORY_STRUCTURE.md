# Repository structure and preservation review

Reviewed on **17 November 2026**, using baseline
`0c45350c73863f7d147f4681f477bb42e6f7f6a1`.

## Findings and limits

The user reported unauthorized changes and requested reorganization with
preservation. At inspection, fetched `origin/main`, local `main` and the last
version pushed in this conversation all pointed to the baseline above. The
working tree had no uncommitted or untracked project files. No changes relative
to that baseline were found, so this review does **not** establish a compromise,
attribute previous commits to an attacker, or establish that an account is secure.

The complete tracked tree contained 55 files: 29 Markdown documents, two text
documents, 10 JavaScript files, seven JSON files, two ZIPs, and five other files.
Every tracked entry was a regular nonexecutable file; there were no tracked
symlinks or submodules. The application/workspace paths aligned with the existing
scripts and imports. The root ZIPs were upstream references, not active features.

The npm scripts start the known local server or invoke Node's tests; package
manifests declare no installation hooks. CI has read-only repository permissions,
pinned checkout/setup-node actions, frozen installation with scripts disabled,
and the existing test command. These observations are a bounded structure/script
review, not an exhaustive vulnerability or account-access audit.

The main documentation inconsistency was historical wording that still described
the agent adapter as feature-branch-only or in review. Its source is already on
`main`, merged in commit `5a4b690`. Live agent/model/workspace execution remains
unverified. Correcting those descriptions does not deliver new runtime features.

## Active layout

```text
fine-tune/
  README.md                    entry point, quickstart and current limitations
  AGENTS.md                    instructions for coding agents
  CONTRIBUTING.md              contribution and owner-directed workflow guidance
  SECURITY.md                  security reporting policy
  .env.example                 non-secret configuration examples
  .github/                     CI and issue/contribution templates
  package.json                 active npm workspace definitions and commands
  package-lock.json            dependency lock
  apps/
    api/                       local HTTP API/server and API tests
    web/                       static builder UI
  packages/
    core/                      deterministic generation and validation
  services/
    agent/                     OpenHands transport adapter and fake-server tests
    model-gateway/             mock/Ollama inference boundary and contract tests
  docs/
    PROJECT_IDEA.txt            detailed product vision and feasibility limits
    IMPLEMENTATION_STATUS.md   delivered capabilities and dated evidence
    REPOSITORY_STRUCTURE.md    this review and preservation explanation
    ...                        requirements, research, roadmap and decisions
  AnalyseFuture/
    README.md                  reference-material handling instructions
    PRESERVATION_MANIFEST.json all original files and their retained locations
    upstream-archives/         the two original ZIP archives
    baseline-documents/        original copies of documents updated in this pass
```

No speculative production-service directories were created. The active source,
test paths, dependency declarations, lockfile and npm workspace layout stay intact.
No upstream implementation was added to the application runtime or test discovery.

## Preservation decisions

| Original location | Retained location | Reason |
| --- | --- | --- |
| `OpenSandbox-main.zip` | `AnalyseFuture/references/upstream/OpenSandbox-main.zip` | Keep upstream reference outside the active root |
| `software-agent-sdk-main.zip` | `AnalyseFuture/references/upstream/software-agent-sdk-main.zip` | Keep upstream reference outside the active root |
| Seven documents revised in this pass | `AnalyseFuture/history/baseline-documents/` at their original relative paths | Retain original wording before factual/navigation updates |
| All remaining baseline files | Their original active paths | Already fit the application layout; preserve working behavior |

The [preservation manifest](../../AnalyseFuture/inventory/PRESERVATION_MANIFEST.json) records
every baseline path, retained location, original Git blob, byte size and SHA-256.
It describes this preservation event, not a requirement that active source never
change in future. Original copies and archives are historical reference material.

Original Git history is retained. No reset, force push or history rewrite is part
of this organization pass. Restoring a selected original document can use its
preserved copy or `git show` at the baseline, after reviewing current changes.

## Validation and continuity

Acceptance for this change is: all 55 baseline contents have a retained copy with
matching hashes; the root no longer mixes upstream archives with active source;
updated navigation points to real active files; and the existing install, tests
and representative HTTP workflow still work. Current results are recorded in
[IMPLEMENTATION_STATUS.md](../development/IMPLEMENTATION_STATUS.md).

Use the existing isolated checkout. For owner-directed maintenance in this task,
commit and push directly to `main`, with no feature branch or PR. Make small
checkpoints during longer edits. A successful push and matching remote commit
confirm Git backup; local files and running processes alone do not.

This repository pass does not revoke credentials, remove account collaborators,
change GitHub account permissions, rotate deployment secrets, or inspect account
security logs. If unauthorized access is still suspected, those account/access
checks remain separate from reorganizing files. Do not publish credential values
as part of preservation or an investigation.

## Full recovery follow-up

The uploaded master request triggered a broader pass starting at `e40fa80`:
65 tracked files, four fetched remote branches and 39 reachable commits. See
[REPOSITORY_AUDIT.txt](../../AnalyseFuture/audit/REPOSITORY_AUDIT.txt) and the complete report
index in [AnalyseFuture/README.md](../../AnalyseFuture/README.md). All original content
remains retained; fifteen originals from this later baseline have inert `.txt`
copies under `AnalyseFuture/history/before-complete-audit/`.

The one active planning document now lives at
`AnalyseFuture/planning/PROJECT_VISION_AND_FUTURE_ROADMAP.txt`, with a compatibility pointer
at its old docs path. The application layers remain in their original valid
locations. New archive-member/security inventories and recovery reports are
reference records, not application dependencies. Three new real-HTTP regression
tests accompany redirect rejection in the two adapters; test discovery explicitly
selects the four active test files. The current suite has 32 tests.
