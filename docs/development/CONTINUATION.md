# Current continuation guide

Updated: **17 November 2026**, for the whole-repository restructuring from
`3d00f02c217419e6172a9c2586db7660db1fa391`.

## Working instructions

- Use the existing checkout. Each cloud task is already isolated; do not create a
  worktree unless requested. Follow [AGENTS.md](../../AGENTS.md).
- The owner requests direct commits and normal pushes to `main`, without a PR,
  history rewrite or force-push.
- **Do not run tests for this restructuring.** Do not install dependencies, build,
  start the app, run browser flows or execute archived source during this pass.
  Use `[skip ci]` for its commits. Prior authorization to test belonged to an
  earlier task and is superseded by this request.
- Keep every existing file and idea. Preserve edited originals and uncertain
  material under `AnalyseFuture/`, with provenance. Keep historical contents inert.
- Read the [structure guide](../../PROJECT_STRUCTURE.md),
  [status](IMPLEMENTATION_STATUS.md) and [architecture](../architecture/ARCHITECTURE.md).

## Functional ownership

| Responsibility | Home |
| --- | --- |
| HTTP routes, limits and static asset serving | [apps/builder-api](../../apps/builder-api/) |
| Prompt UI, plan, preview and HTML download | [apps/builder-web](../../apps/builder-web/) |
| Deterministic templates and prompt validation | [packages/project-generator](../../packages/project-generator/) |
| OpenHands lifecycle transport | [services/agent-adapter](../../services/agent-adapter/) |
| Mock/Ollama model-provider boundary | [services/model-gateway](../../services/model-gateway/) |
| Charter, requirements, roadmap and full future vision | [docs/product](../product/) |
| Current developer workflow and previous validation scope | [docs/development](./) |
| Architecture, decisions, security, research and other policies | [docs index](../README.md) |
| Historical snapshots and recovery reports | [AnalyseFuture/history](../../AnalyseFuture/history/) |
| Upstream source references, kept compressed | [AnalyseFuture/references/upstream](../../AnalyseFuture/references/upstream/) |
| Current file catalogue and preservation evidence | [AnalyseFuture/organization](../../AnalyseFuture/organization/) |

All five workspace package names stay unchanged: `@fine-tune/api`,
`@fine-tune/web`, `@fine-tune/core`, `@fine-tune/agent` and
`@fine-tune/model-gateway`. Keep component tests beside the component. The current
runtime call path remains:

```text
builder-web -> POST /api/generate -> builder-api -> @fine-tune/core
                                                (project-generator)
agent-adapter and model-gateway remain independent integration boundaries.
```

Root npm scripts, API asset paths, workspace symlinks, lockfile entries and
library exports retain their existing locations. The browser source and roadmap
links now use the selected `Planeshiffhter/fine-tune` repository.

## Validation and unfinished product work

[VALIDATION_REPORT.md](VALIDATION_REPORT.md) records the earlier 41-test Node
22/24 results and startup/browser checks. **No new runtime result is claimed**
for this static restructuring. The four maintained test files remain in place;
run them only after the owner lifts the testing pause for the relevant work.

Live agent/model integration, one verified isolated execution path, generated-app
build/browser/export, persistence, authentication, deployment and training remain
separate milestones. The repository is an app-builder foundation; do not invent
missing capabilities or relabel the conversation adapter as a separate product.

## Preservation and recovery

The [file catalogue](../../AnalyseFuture/organization/FILE_CATALOG.json) maps every
starting file to its current home and the exact retained original. Old reports
keep their original body paths; use their recorded original location and this
catalogue to interpret those paths rather than treating them as current links.
The old 101-file organization ledger is preserved under
[history/organization](../../AnalyseFuture/history/organization/).

The current pre-edit originals are in
[PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip](../../AnalyseFuture/organization/PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip).
Select an individual original when needed; do not reset published history.
Normal push plus matching remote SHA confirms delivery, not application behavior.
