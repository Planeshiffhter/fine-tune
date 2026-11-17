# Documentation by responsibility

Use [PROJECT_STRUCTURE.md](../PROJECT_STRUCTURE.md) for the complete current tree,
feature ownership, preservation and per-file relocation index.

| Responsibility | Documents |
| --- | --- |
| Product | [Charter](product/PROJECT_CHARTER.md), [requirements](product/PRODUCT_REQUIREMENTS.md), [roadmap](product/ROADMAP.md), [feature backlog](product/FEATURE_MATRIX.md) |
| Architecture | [Component boundaries](architecture/ARCHITECTURE.md), [decision records](architecture/decisions/) |
| Development | [Current continuation guide](development/CONTINUATION.md), [onboarding](development/DEVELOPER_ONBOARDING.md), [current status](development/IMPLEMENTATION_STATUS.md), [mock/API guide](development/MOCK_PROTOTYPE.md), [evaluation](development/TESTING_AND_EVALUATION.md), [agent playbook](development/CODEX_PLAYBOOK.md) |
| Security | [Threat model](security/SECURITY_ARCHITECTURE.md), [reporting policy](../SECURITY.md) |
| Ownership and licensing | [Rights and licensing](legal/OWNERSHIP_AND_LICENSES.md) |
| Upstream research | [Reuse audit](research/REUSE_AUDIT.md), [repository references](research/RECOMMENDED_PUBLIC_REPOSITORIES.txt) |
| Operations | [Cost and operating strategy](operations/COSTS_AND_OPERATIONS.md) |
| Model research | [Training strategy](model-training/MODEL_TRAINING.md) |
| Long-term vision | [Detailed future vision](product/PROJECT_VISION_AND_FUTURE_ROADMAP.txt) |
| Previous recovery evidence | [Preserved collections](../AnalyseFuture/README.md) |

The current restructuring is static-only and runs no tests. Earlier testing
and repairs were separately authorized; [VALIDATION_REPORT.md](development/VALIDATION_REPORT.md) now
records the earlier Node 22/24 suite, startup and browser results. Preserved
audit results remain historical evidence for their own commits.
