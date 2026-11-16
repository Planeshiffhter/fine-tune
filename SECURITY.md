# Security Policy

## Project maturity

As of 17 November 2026 this repository contains a local offline mock and tested
adapter boundaries, not a deployed production platform. A bounded source/history
and archive review is recorded in [AnalyseFuture/SECURITY_AUDIT.txt](AnalyseFuture/SECURITY_AUDIT.txt).
It is not an exhaustive security audit, penetration test, account-access review or
vulnerability response SLA. Public generated-code execution is not implemented.

## Reporting a vulnerability

Do **not** share working exploits, leaked credentials, customer code, or sensitive data in a public issue. Use GitHub's private vulnerability reporting feature if enabled for this repository, or contact the repository owner via a private channel. Maintainers should define a formal security contact and response process before launching a public service.

## Security requirements for implementation

- Treat every generated repository, dependency script, shell command, uploaded asset, browser page, tool response, and model output as untrusted.
- Run customer-generated programs in sandboxed, resource-limited workspaces separated by tenant; do not expose host Docker sockets, production filesystems, database credentials, or privileged containers.
- Restrict egress and mitigate SSRF/metadata service access.
- Use scoped, short-lived secrets; never put credentials in model prompts, build logs, screenshots, or training corpora.
- Validate permissions server-side for projects, preview URLs, git exports, databases, deployment operations and teams.
- Require approval for deployment, database migrations on real user data, destructive operations, purchases, or external side effects.
- Rate-limit and bound compute, disk, concurrency and generated requests; log security-relevant events without leaking secrets.
- Scan dependencies, container images and generated outputs before public launch.

The fuller threat model is [docs/SECURITY_ARCHITECTURE.md](docs/SECURITY_ARCHITECTURE.md).
