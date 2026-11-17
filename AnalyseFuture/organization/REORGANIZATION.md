# Whole-repository functional organization

Date: **17 November 2026**. Repository: `Planeshiffhter/fine-tune`.
Starting commit: `3d00f02c217419e6172a9c2586db7660db1fa391`, matching fetched
`origin/main`. The checkout was clean; the task-provided local `work` branch was
switched to local `main` tracking `origin/main`. No feature branch or worktree
was created. Existing Git history is retained.

## Acceptance and scope

The owner's request covers every project file and folder: classify by function,
keep all existing work, preserve uncertain material, repair current references,
write a clean structure guide and deliver directly to `main`. The explicit
**no-tests** instruction governs this pass. Product feature implementation,
installation, builds, runtime startup and upstream integration are outside scope.

The analysis covers all 110 starting tracked files, hidden GitHub/config files,
nested historical snapshots, installed local dependency metadata/symlinks, and
all 6,860 members in the five existing ZIPs. Owned code, test bodies, manifests,
lockfile, docs and archive contents were read as data. Test files were inspected
but never executed. Archive members were read without extraction or execution.
Open GitHub issue retrieval was attempted but the API returned `Forbidden`;
no issue state or account permissions were inferred from that failure.

## Placement decisions

| Collection | Decision and reason |
| --- | --- |
| `apps/`, `packages/`, `services/` | Retain clear existing boundaries and colocated source/tests/assets. API, generator, agent and model modules have different responsibilities. |
| Root config and `.github/` | Retain conventional discovery locations, workspace graph, package names and CI configuration. |
| `docs/product/` | Move the maintained complete vision here; retain all feasibility limits and future ideas. |
| `docs/product/PROJECT_IDEA.txt` | Move obsolete compatibility-only text to historical organization records, byte-identical. Current docs link directly to the canonical full vision. |
| `docs/architecture/REPOSITORY_STRUCTURE.md` | Move this explicitly historical recovery review into historical organization records; it contains earlier layouts, not current architecture. |
| `AnalyseFuture/{audit,features,handoff,inventory,migration,security,validation}/` | Move all dated reports/evidence into `history/recovery-reports/`, keeping their internal functional subcollections and exact bytes. |
| Former `AnalyseFuture/organization/` | Retain old report, ledger and restoration archives under `history/organization/`; do not overwrite old evidence with new facts. |
| Existing snapshots and upstream ZIPs | Preserve bytes/internal layout in their established snapshot/reference homes. Never import or unpack as active implementation. |
| Current `AnalyseFuture/organization/` | New baseline-specific catalogue, report, archive-member classification and pre-edit originals. |

Exactly **28 starting files move**. Unmoved files were considered and retained
for their actual purpose, not ignored. No suspicious/damaged owned file was
established. Duplicate-looking historical copies remain independently preserved.
No feature, dependency, package name, lock entry, test assertion or import changed.
The static HTML's two repository links now target `Planeshiffhter/fine-tune`.

## Documentation and reference repairs

The current structure guide is rebuilt around the actual tree and ownership rules,
with a complete catalogue instead of cumulative old path tables. Current status
and handoff now distinguish the no-tests request from earlier authorized validation.
Affected active Markdown/TXT paths point to relocated reports and product vision.
An amendment to ADR 0006 records the new canonical vision location without
rewriting its earlier validation claims. Old repository navigation in the live UI,
onboarding and research index now targets the selected repository.

Historical report bodies, snapshots, hashes, recorded old path tables and archive
internals are intentionally byte-identical. Old relative links must be interpreted
from their catalogue-recorded original location, then resolved through the new
mapping. They are not current instructions. The earlier structure guide/status
chronology and every other edited original survive in the restoration ZIP.

## Static preservation and consistency review

- Full starting-file coverage and unique, existing destinations in `FILE_CATALOG.json`.
- SHA-256/size comparison of all 110 original contents, at their current path or
  exact baseline member in `PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip`.
- All relocated historical evidence and five pre-existing ZIPs retain their original bytes.
- Every existing archive member was read and hashed; member paths, functional
  roles, bounded import/manifest metadata and directory entries are recorded.
  No duplicate member paths or traversal paths were observed. One internal upstream
  symlink stays inert inside its ZIP. This is not an exhaustive source/security audit.
- Current local Markdown links and referenced paths resolve. Historical links
  remain original-context evidence and are excluded from current-navigation checks.
- Existing npm workspace manifests/lock targets, package exports, literal relative
  imports and API static asset targets were inspected without executing them.
- Root scripts, test paths, CI workflow and all application logic/test files remain
  unchanged, apart from the two HTML navigation URLs.
- Existing ignored installation metadata and five workspace symlinks are retained.
- `git diff --check` is the final whitespace review. No installer, build, test,
  server, browser, upstream hook or executable product validation was run.

Recorded static totals: **110/110** starting contents preserved; **49** relocated
or already archived historical files byte-identical; **297** current Markdown
links resolve; all **27** active/configuration files reviewed; all **five**
workspace targets resolve. The new ZIP retains **14** edited originals. Five new
records bring the current tracked project inventory to **115** files. Empty
directory shells left by moving files were removed; no file content was deleted.

These checks establish content preservation and static consistency only. Previous
41-test Node 22/24 and browser/startup results apply to the prior documented
baseline, not this pass. Commit `[skip ci]` avoids requesting the existing push CI
workflow; no new runtime pass is claimed.

## Records and delivery

- [PROJECT_STRUCTURE.md](../../PROJECT_STRUCTURE.md): canonical current organization.
- [FILE_CATALOG.md](FILE_CATALOG.md) / [FILE_CATALOG.json](FILE_CATALOG.json): every
  starting file's role, relationships, current home and retained-original location;
  also all added records and local generated metadata decisions.
- [ARCHIVE_CATALOG.json](ARCHIVE_CATALOG.json): classification/provenance of all
  members of the five pre-existing ZIPs, without changing their internal layout.
- [PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip](PRE_RESTRUCTURE_ORIGINALS_3D00F02.zip): every
  edited original at its exact baseline path. New archive members are indexed by
  `retained_original` in the file catalogue.

Delivery uses a normal commit and push to `main`, no PR, reset, branch deletion or
force-push. The final response records the resulting commit after comparison with
remote `refs/heads/main`. No publication, account-security fix or new application
capability is implied by Git delivery.
