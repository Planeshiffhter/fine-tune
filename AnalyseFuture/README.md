# Preserved material for future analysis

`AnalyseFuture/` holds historical work, restoration originals, inspection records
and third-party source references. Placement here is a preservation decision, not
a finding that a file is malicious, damaged or worthless. No such finding was
established by this organization pass. Current product vision lives with product
planning at [docs/product/PROJECT_VISION_AND_FUTURE_ROADMAP.txt](../docs/product/PROJECT_VISION_AND_FUTURE_ROADMAP.txt).

## Collections

| Collection | Purpose |
| --- | --- |
| [organization/REORGANIZATION.md](organization/REORGANIZATION.md) | Scope, decisions and static-only evidence for the current pass |
| [organization/FILE_CATALOG.md](organization/FILE_CATALOG.md) | Readable disposition/purpose index for every starting file and added record |
| [organization/FILE_CATALOG.json](organization/FILE_CATALOG.json) | Exact original-to-current paths, relationships, SHA-256 hashes and retained-original locations |
| [organization/ARCHIVE_CATALOG.json](organization/ARCHIVE_CATALOG.json) | Content-derived classification and hashes for all 6,860 members of the five pre-existing ZIPs |
| [organization/PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip](organization/PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip) | Byte-identical originals of every file edited in the current pass, at its baseline path |
| [history/baseline-documents/](history/baseline-documents/) | Seven original documents from the earlier 55-file baseline; preserve original context |
| [history/before-complete-audit/](history/before-complete-audit/) | Fifteen original documents/source files, with inert `.txt` suffixes |
| [history/organization/](history/organization/) | Earlier organization ledger/report, two restoration ZIPs, obsolete architecture review and compatibility pointer |
| [history/recovery-reports/audit/](history/recovery-reports/audit/) | Earlier repository review and its scope/limits |
| [history/recovery-reports/features/](history/recovery-reports/features/) | Earlier feature inventory, dependencies and duplicate analysis |
| [history/recovery-reports/handoff/](history/recovery-reports/handoff/) | Historical handoff, progress and technical debt |
| [history/recovery-reports/inventory/](history/recovery-reports/inventory/) | Earlier preservation manifest, file inventories, starting-state evidence and upstream member index |
| [history/recovery-reports/migration/](history/recovery-reports/migration/) | Earlier migration/consolidation records and original path map |
| [history/recovery-reports/security/](history/recovery-reports/security/) | Earlier security findings and bounded source/archive review evidence |
| [history/recovery-reports/validation/](history/recovery-reports/validation/) | Earlier command/results report, inert browser driver and pre-validation original ZIP |
| [references/upstream/](references/upstream/) | Original compressed OpenSandbox and OpenHands SDK sources, not installed features |

## Read historical evidence in its original context

Historical files, source snapshots, manifests and ZIP contents retain their exact
bytes. Their internal paths, old repository names, relative links, commit IDs and
validation claims describe the original event; they are intentionally not rewritten
as present-day navigation. The new catalogue records both original and current
paths. Interpret an old relative link from its recorded original file location,
then use the catalogue to find that target's current home. Use
[PROJECT_STRUCTURE.md](../PROJECT_STRUCTURE.md), the
[docs index](../docs/README.md) and the
[current continuation guide](../docs/development/CONTINUATION.md) for current guidance.

The former 101-file placement ledger is
[history/organization/PATH_MAPPING.json](history/organization/PATH_MAPPING.json).
Its older baseline and counts remain historical facts. The new catalogue covers
the 110 files present at `3d00f02` plus all new records. The prior current guide
and full status chronology are retained in the new originals ZIP.

## Archive provenance

| Archive | SHA-256 | Embedded commit metadata |
| --- | --- | --- |
| [OpenSandbox-main.zip](references/upstream/OpenSandbox-main.zip) | `d91b2e7579c6272100b4bbbed861827888de58e90edd0782784346c986134332` | `44e79a2dc3c99e26d82aa87fe13a73537d7e7812` |
| [software-agent-sdk-main.zip](references/upstream/software-agent-sdk-main.zip) | `b1007f65e71050fd21b2101fba29bf5c90ff83b67e835b4cc353f0d9d276d85e` | `af26602526807ece5277b5ed90f43fb0a7f7b6d3` |

Hashes establish byte preservation, not upstream authenticity or code safety.
Earlier inspected licensing was MIT for OpenHands and Apache-2.0 for OpenSandbox;
retain embedded notices and review the exact chosen revision before integration.
The OpenSandbox ZIP's TypeScript metadata differs from the older audited release;
do not equate the main-branch archive with a reviewed release tag.

All 6,860 members of the five existing ZIPs were read as inert data, hashed and
classified by function/content/path. This includes the two upstream projects and
three historical restoration archives. Their internal upstream layouts remain
intact; no third-party implementation was unpacked into the product. One upstream
internal `server/CLAUDE.md` symlink targets `AGENTS.md`; it remains inside its ZIP.
The content-derived catalogue is an organization aid, not an exhaustive semantic,
license or security audit. The new restoration ZIP's members are independently
listed by their retained-original locations in `FILE_CATALOG.json`.

## Preservation rules

Never execute preserved source merely because it is here. Keep upstream code
compressed and historical source inert. Active npm test discovery explicitly
names four maintained tests; archived tests must not be added to that list.
When investigating an archive, inspect in a separate reference location outside
the application checkout. Select pinned services/dependencies through the existing
adapters rather than merging whole upstream products.

Keep new uncertain material with its provenance and reason for preservation.
Do not publish credentials or private customer material. The current pass ran no
tests, installation, builds, server or browser flows; earlier results belong to
their dated reports. Commit `[skip ci]` honors the current no-tests instruction.
