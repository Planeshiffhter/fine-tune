# Preserved material for future analysis

This folder keeps reference material and original documents displaced by the
17 November 2026 organization pass. Placement here does **not** mean a file is
malicious or that the reported account compromise has been established.
No baseline file content was discarded.

## Contents

| Location | Purpose |
| --- | --- |
| [upstream-archives/OpenSandbox-main.zip](upstream-archives/OpenSandbox-main.zip) | Original OpenSandbox source archive; not an installed sandbox |
| [upstream-archives/software-agent-sdk-main.zip](upstream-archives/software-agent-sdk-main.zip) | Original OpenHands source archive; not a working agent integration |
| [baseline-documents/](baseline-documents/) | Unmodified copies of seven documents before their organization/status updates |
| [PRESERVATION_MANIFEST.json](PRESERVATION_MANIFEST.json) | Original path, retained path, size, SHA-256 and Git blob for every one of the 55 baseline files |

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
running it. Extracted third-party tests inside the repository could be discovered
by the active `node --test` command. This folder is outside the declared npm
workspaces, but that alone does not exclude unpacked tests from test discovery.

Select pinned upstream dependencies/services through the product's existing
adapters. Do not wholesale merge these projects, automatically install them, or
treat archived source as a verified feature. Future unexpected files can be
preserved here with an explicit inventory and reason after inspection; credentials
or private customer data must not be published to this public repository.

See the current [structure review](../docs/REPOSITORY_STRUCTURE.md) and
[project idea](../docs/PROJECT_IDEA.txt).
