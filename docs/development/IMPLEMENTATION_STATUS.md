# Implementation status

Updated: **17 November 2026**. Repository: `Planeshiffhter/fine-tune`, branch `main`.

## Implemented foundation

| Component | Existing behavior | Location |
| --- | --- | --- |
| Builder API | Bounded HTTP routes, validation/security headers, static UI serving and deterministic generation | [apps/builder-api](../../apps/builder-api/) |
| Builder UI | Prompt form, static sandboxed preview, plan and single HTML download | [apps/builder-web](../../apps/builder-web/) |
| Project generator | Prompt validation, deterministic templates and HTML escaping | [packages/project-generator](../../packages/project-generator/) |
| Model gateway | Default mock; opt-in Ollama; streaming, timeouts, cancellation, retries and usage mapping | [services/model-gateway](../../services/model-gateway/) |
| Agent adapter | Bounded OpenHands REST lifecycle, cancellation, timeouts and local endpoint policy | [services/agent-adapter](../../services/agent-adapter/) |

The builder API calls `@fine-tune/core`. It does **not** call the model gateway or
agent adapter. These are separate maintained boundaries, not duplicate generators.

## Latest evidence and current restriction

The previous [validation report](VALIDATION_REPORT.md), delivered at `3d00f02`,
records **41 passing tests** on Node 22.23.5 and 24.22.1, startup requests and mock
browser flows. That evidence belongs to the earlier code state and is not a new
runtime result for this restructuring.

The current owner request explicitly says **do not run tests**. This pass performs
file/content analysis, relocation, reference inspection and preservation checks
only. No installation, build, test suite, application startup, browser run or
upstream execution is part of this pass. Its commit includes `[skip ci]` so the
push does not request the existing GitHub Actions test workflow.

## Whole-repository organization

Starting point: `3d00f02c217419e6172a9c2586db7660db1fa391`, matching fetched
`origin/main`; 110 tracked files and no pre-existing uncommitted project changes.

- Kept all existing source, tests, workspace roots, package names, lockfile and
  GitHub configuration in their existing functional homes.
- Moved historical audit, inventory, feature, migration, security, validation and
  handoff records into `AnalyseFuture/history/recovery-reports/`.
- Moved previous organization evidence and the historical architecture recovery
  review into `AnalyseFuture/history/organization/`, retaining their bytes.
- Promoted the canonical product vision into `docs/product/`; retained the obsolete
  compatibility pointer in historical organization records. No idea was dropped.
- Replaced cumulative current navigation with [PROJECT_STRUCTURE.md](../../PROJECT_STRUCTURE.md)
  and updated affected current links and browser source/roadmap links.
- Recorded every baseline file, destination, purpose, relationships, hashes and
  original-content location in the [file catalogue](../../AnalyseFuture/organization/FILE_CATALOG.json).
  All edited originals are retained in a separate restoration ZIP.

The previous full status chronology is preserved byte-for-byte in
[PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip](../../AnalyseFuture/organization/PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip)
as `docs/development/IMPLEMENTATION_STATUS.md`; earlier reports and their
original path references remain historical evidence. See the
[organization report](../../AnalyseFuture/organization/REORGANIZATION.md).

## Not implemented or verified live

A real coding-agent run, secure generated-code execution, OpenHands/OpenSandbox
compatibility, model-to-builder integration, persistent projects, tenant auth,
full-stack generated-app build/browser/export, production hosting, billing and
fine-tuning are still product work. Live Ollama and a real OpenHands Agent Server
are not established by mock/fake-server tests. No separate English-speaking
companion implementation was found in the maintained source.

## Next product milestone

When separately requested, prove one pinned real-agent compatibility fixture and
select one restricted execution strategy. Then implement a deterministic
prompt-to-build/browser/export slice before adding live generation. Follow the
[roadmap](../product/ROADMAP.md), [security architecture](../security/SECURITY_ARCHITECTURE.md)
and [current continuation guide](CONTINUATION.md). The current testing pause
remains in effect until the owner changes it.
