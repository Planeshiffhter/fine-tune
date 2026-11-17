# Preserved material for future analysis

This folder keeps reference material and original documents displaced by the
17 November 2026 organization pass. Placement here does **not** mean a file is
malicious or that the reported account compromise has been established.
No baseline file content was discarded.

The current functional sort is documented in
[PROJECT_STRUCTURE.md](../PROJECT_STRUCTURE.md) and
[organization/REORGANIZATION.md](organization/REORGANIZATION.md).
Earlier audit TXT reports are historical: their body paths/results refer to the
pre-sort baseline. The new [path ledger](organization/PATH_MAPPING.json) resolves
every old location, and [original text archive](organization/ORIGINAL_TEXT_FILES.zip)
preserves all 99 pre-sort text files. The two upstream ZIPs retain their bytes.
No tests or runtime checks were run for this reorganization.

## Contents

| Location | Purpose |
| --- | --- |
| [references/upstream/OpenSandbox-main.zip](references/upstream/OpenSandbox-main.zip) | Original OpenSandbox source archive; not an installed sandbox |
| [references/upstream/software-agent-sdk-main.zip](references/upstream/software-agent-sdk-main.zip) | Original OpenHands source archive; not a working agent integration |
| [history/baseline-documents/](history/baseline-documents) | Unmodified copies of seven documents before their organization/status updates |
| [PRESERVATION_MANIFEST.json](inventory/PRESERVATION_MANIFEST.json) | Original path, retained path, size, SHA-256 and Git blob for every one of the 55 baseline files |
| [REPOSITORY_AUDIT.txt](audit/REPOSITORY_AUDIT.txt) | Full follow-up audit starting from 65 tracked files and 39 reachable commits |
| [COMPLETE_FILE_INVENTORY.txt](inventory/COMPLETE_FILE_INVENTORY.txt) | Classification of every starting and delivered tracked path |
| [FEATURE_INVENTORY.txt](features/FEATURE_INVENTORY.txt) / [DEPENDENCY_MAP.txt](features/DEPENDENCY_MAP.txt) | Eight code-backed groups, planned capabilities and actual call/dependency paths |
| [SECURITY_AUDIT.txt](security/SECURITY_AUDIT.txt) | Reproduced/fixed findings, unresolved concerns and account-access limits |
| [PROJECT_VISION_AND_FUTURE_ROADMAP.txt](planning/PROJECT_VISION_AND_FUTURE_ROADMAP.txt) | Canonical detailed product vision; the old docs path is a compatibility pointer |
| [MIGRATION_SUMMARY.txt](migration/MIGRATION_SUMMARY.txt) / [ORIGINAL_TO_NEW_PATH_MAPPING.txt](migration/ORIGINAL_TO_NEW_PATH_MAPPING.txt) | Applied changes, compatibility and per-path preservation |
| [NEXT_DEVELOPER_INSTRUCTIONS.txt](handoff/NEXT_DEVELOPER_INSTRUCTIONS.txt) / [WORK_PROGRESS.txt](handoff/WORK_PROGRESS.txt) | Historical handoff/progress; use the [current continuation guide](../docs/development/CONTINUATION.md) for the renamed layout |
| [history/before-complete-audit/](history/before-complete-audit) | Fifteen original files from the later `e40fa80` baseline, stored with an extra `.txt` suffix |
| [inventory/evidence/](inventory/evidence) / [security/evidence/](security/evidence) | Starting-state hashes, all 6,737 ZIP member paths and metadata-only audit evidence |

The baseline is commit `0c45350c73863f7d147f4681f477bb42e6f7f6a1`.
Historical copies preserve their original wording, relative links and instructions;
use the active root/docs files for current project guidance. Links in historical
copies may refer to paths outside that historical snapshot.

## Archive provenance and verification

| Archive | SHA-256 | Embedded commit comment |
| --- | --- | --- |
| OpenSandbox-main.zip | `d91b2e7579c6272100b4bbbed861827888de58e90edd0782784346c986134332` | `44e79a2dc3c99e26d82aa87fe13a73537d7e7812` |
| software-agent-sdk-main.zip | `b1007f65e71050fd21b2101fba29bf5c90ff83b67e835b4cc353f0d9d276d85e` | `af26602526807ece5277b5ed90f43fb0a7f7b6d3` |

SHA-256 comparisons show the relocated archives retain the original bytes. ZIP
CRC checks passed. Neither check authenticates an upstream release or establishes
code safety; embedded commit comments are archive metadata, not signed proof.

Earlier source inspection found MIT licensing for OpenHands and Apache-2.0 for
OpenSandbox. Preserve the licenses/notices inside the archives. Verify the exact
chosen release, dependencies and distribution obligations before integration.
The OpenSandbox archive's examined TypeScript SDK version was 1.2.1, whereas the
older research document audited release-1.2.0; these are not assumed equivalent.

## Using these references

Keep upstream source compressed in this checkout. If needed, extract into a
separate reference directory outside the application checkout and inspect before
running it. `npm test` now names only the four maintained test files. That boundary
was checked using a temporary archive sentinel. Running bare `node --test` manually
can still discover unpacked third-party tests; npm workspace membership alone is
not a quarantine boundary. Historical source snapshots use an extra `.txt` suffix.
None of this authorizes importing archived material or installing upstream hooks.

Select pinned upstream dependencies/services through the product's existing
adapters. Do not wholesale merge these projects, automatically install them, or
treat archived source as a verified feature. Future unexpected files can be
preserved here with an explicit inventory and reason after inspection; credentials
or private customer data must not be published to this public repository.

See the current [structure review](../docs/architecture/REPOSITORY_STRUCTURE.md) and
[project idea](../docs/product/PROJECT_IDEA.txt).
