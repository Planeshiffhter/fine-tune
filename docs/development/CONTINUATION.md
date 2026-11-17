# Current continuation guide

Updated on **17 November 2026**, after the functional reorganization delivered at
`e19dfdafc841f73ed8b62d1fe9123cb8c8ef05e7`.

This is the current handoff. The older files under `AnalyseFuture/handoff/`
preserve the earlier recovery work and its original paths; they are historical
evidence, not instructions for the renamed layout.

## Organization status

The requested functional sorting is complete. Every one of the 101 original
tracked files has a recorded home: 84 moved and 17 retained. Original text and
upstream archives remain recoverable. The structure pass added five records;
this closure adds this guide and an archive of the documents changed here.
There are now 108 tracked project files, all assigned in
[PROJECT_STRUCTURE.md](../../PROJECT_STRUCTURE.md) and the
[placement ledger](../../AnalyseFuture/organization/PATH_MAPPING.json).

No additional source relocation, duplicate implementation merge or deletion is
needed based on the current inspection. Keeping a correctly placed file in its
functional collection is a deliberate decision, not an omitted file.

## Current instructions

- Work directly on `main`, without feature branches or a PR, unless the owner
  changes the instruction. Preserve history; never force-push.
- The owner's **no-tests-for-now** instruction remains in effect. Do not run
  tests, installation, application startup, browser checks or executable
  validation as part of this organization work. Commits use `[skip ci]`.
- Preserve original content before edits and put safe historical/uncertain
  material in a labeled `AnalyseFuture` collection. Do not publish credentials
  or private data, or execute preserved source merely because it is archived.
- Follow [AGENTS.md](../../AGENTS.md) and read the current
  [status](IMPLEMENTATION_STATUS.md), [architecture](../architecture/ARCHITECTURE.md)
  and [structure guide](../../PROJECT_STRUCTURE.md).

## Current functional locations

| Responsibility | Current home |
| --- | --- |
| HTTP handling, route limits and asset serving | [apps/builder-api](../../apps/builder-api/) |
| Browser prompts, preview, plan and HTML download | [apps/builder-web](../../apps/builder-web/) |
| Prompt validation and deterministic project templates | [packages/project-generator](../../packages/project-generator/) |
| OpenHands lifecycle HTTP boundary | [services/agent-adapter](../../services/agent-adapter/) |
| Mock/Ollama inference, retries and streams | [services/model-gateway](../../services/model-gateway/) |
| Product goals and backlog | [docs/product](../product/) |
| Component design and decisions | [docs/architecture](../architecture/) |
| Setup, handoff and implementation evidence | [docs/development](./) |
| Security, legal, research and operations | Their named collections under [docs](../README.md) |
| Future model-training strategy | [docs/model-training](../model-training/) |
| Complete future product vision | [AnalyseFuture/planning](../../AnalyseFuture/planning/) |
| Preservation and old-path lookup | [AnalyseFuture/organization](../../AnalyseFuture/organization/) |

Each maintained component keeps its own source, checks and package metadata.
Public package names remain `@fine-tune/api`, `@fine-tune/web`, `@fine-tune/core`,
`@fine-tune/agent` and `@fine-tune/model-gateway`; folder renames do not change
those import contracts. Root scripts and lockfile workspace targets name the
new folders. The existing runtime still has this limited call graph:

```text
builder-web -> POST /api/generate -> builder-api -> @fine-tune/core
                                                (project-generator)

agent-adapter and model-gateway: separate, maintained integration boundaries;
the mock generation endpoint does not invoke them.
```

## What remains beyond organization

1. **Post-move runtime validation is deferred.** Static path, import, link and
   preservation review does not prove runtime behavior. The earlier 32 passing
   tests and browser smoke belong to the pre-move recovery, not this layout.
   A later session may install from the frozen lock, run the maintained checks
   and exercise the mock only after the owner changes the no-tests instruction.
2. **Real agent compatibility is unfinished product work.** Use a pinned Agent
   Server fixture and authorized model configuration. Fake-server transport
   coverage does not establish live coding, and local `/workspace` is not a
   secure execution sandbox.
3. **One restricted execution strategy must be selected and verified** before
   generated or customer code runs. Do not combine competing workspace lifecycles
   without a compatibility and isolation fixture.
4. **A generated-app build/preview/export workflow remains to be implemented.**
   Begin with one deterministic fixture, including a broken case; then evaluate
   a live model. Persistence, data/auth, deployment and training follow their
   own evidence gates in the [roadmap](../product/ROADMAP.md).

These are separate product milestones, not unfinished file sorting. No new
product capability, deployment or post-move test pass is claimed by this closure.
The owned repository is the app-builder foundation; a separate English-speaking
companion implementation has not been supplied or found and must not be invented
by relabeling the agent conversation adapter.

## Preservation and recovery

The backup ref `recovery/before-functional-sort-84dd0aa`, the original-text ZIP,
all prior archive collections and the source-to-destination ledger remain intact.
This follow-up preserves its changed documents in
[FOLLOW_UP_ORIGINALS_E19DFDA.zip](../../AnalyseFuture/organization/FOLLOW_UP_ORIGINALS_E19DFDA.zip).
Use Git history or a selected preserved original after reviewing current changes;
do not reset published history to an old backup tag.

For current navigation, use this guide and `PROJECT_STRUCTURE.md`. For dated
evidence, consult the labeled historical reports. A normal push followed by a
matching remote SHA confirms delivery; local files alone do not provide backup.
