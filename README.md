<div align="center">

<img src="docs/assets/images/TrueNAS_Pulse.png" alt="TrueNAS Pulse" width="120" height="120" />

# TrueNAS Pulse

**A native iPhone client for TrueNAS SCALE — built for sysadmins, operators, and homelab users who need fast infrastructure visibility and safe remote remediation away from a browser.**

[![Download on the App Store](https://img.shields.io/badge/Download_on_the-App_Store-0D96F6?style=for-the-badge&logo=apple&logoColor=white)](https://apps.apple.com/app/id6759870893)
[![Website](https://img.shields.io/badge/Website-pulse.phobos--cc.be-2563eb?style=for-the-badge)](https://pulse.phobos-cc.be)
[![iOS 17.6+](https://img.shields.io/badge/iOS-17.6+-000000?style=for-the-badge&logo=apple&logoColor=white)](https://apps.apple.com/app/id6759870893)

[Website](https://pulse.phobos-cc.be) ·
[App Store](https://apps.apple.com/app/id6759870893) ·
[Features](https://pulse.phobos-cc.be/features) ·
[Screenshots](https://pulse.phobos-cc.be/screenshots) ·
[Changelog](https://pulse.phobos-cc.be/changelog) ·
[Privacy](https://pulse.phobos-cc.be/privacy) ·
[FAQ](https://pulse.phobos-cc.be/faq)

</div>

---

> **Note**
> This is the public documentation repository for TrueNAS Pulse. The application is closed source — its source code is not published here. This repo holds the public changelog, privacy policy, EULA, terms, and FAQ.

## What it does

TrueNAS Pulse is an independent third-party iPhone client for TrueNAS SCALE. The free tier covers live monitoring, 1-hour history, alerts, storage health, jobs, one included local monitor, and read-only operational visibility. **TrueNAS Pulse Pro** is a one-time purchase that unlocks the complete operator toolset: fleet view, lifecycle controls, advanced reporting, log streaming, terminal, and the full configuration mutation surface.

### Free

- Live dashboard with CPU, memory, network, and storage status
- 1-hour reporting history for CPU, memory, and network
- ZFS pool health, disk detail, temperature, and dataset visibility
- Alerts, jobs, services, apps, and VM status
- One included local monitor on the active server
- Network interface status and routing overview
- Filesystem browser (read-only) and audit log viewer
- Up to 2 servers with fast server switching
- Container lifecycle (TrueNAS 26 native containers)
- Home Screen widget for glanceable server health

### Pro

- Fleet view and server comparison across every system
- Unlimited proactive monitors across all servers
- Historical reporting graphs (1H · 6H · 24H · 7D · 30D)
- Per-pool storage runway projections
- Live system log streaming
- Disk & VDEV management
- Manual ZFS snapshots (create, delete, clone, rollback)
- Configuration drift comparison
- Service, app, and VM lifecycle controls
- Network editing, share management, and service configuration
- Data protection controls, batch actions, job abort, system update install
- Reboot, shutdown, support bundle, config backup & restore
- Terminal — SSH from your phone
- iCloud Sync · Live Activities · Dynamic Island
- Up to 8 servers

> Pro is a **one-time purchase**. No subscription, no recurring charges, no expiry. Localised pricing via App Store.

## Security model

- API tokens stored **exclusively in the iOS Keychain** — never synced to iCloud, never logged.
- Strict TLS validation by default; per-server self-signed certificate opt-in with SHA-256 fingerprint pinning.
- All state-changing actions pass through **Control Mode** — confirmation gate, persistent banner, 5-minute auto-expire.
- High-risk actions (reboot, shutdown, disk wipe, snapshot rollback) additionally require an arming toggle plus biometric authentication.
- No analytics, no telemetry, no third-party SDKs, no developer-operated backend. The app talks only to the TrueNAS servers you configure.
- iCloud Sync (Pro) covers your server list and monitors via your **own private iCloud Key-Value Store** — credentials never travel.

Read the full [Privacy Policy](https://pulse.phobos-cc.be/privacy).

## Requirements

- **iOS:** 17.6 or later (iPhone). Live Activities, Dynamic Island, and Home Screen widgets depend on iOS 17 surfaces.
- **TrueNAS:** SCALE only — version 24.04 and later, including 25.04, 25.10, and 26.x. CORE is not supported.
- **Server access:** the SCALE server must have remote API access enabled. The app uses WebSocket JSON-RPC as the primary transport with REST as a compatibility fallback.

## Built natively for iOS

SwiftUI · WebSocket JSON-RPC · MVVM · iOS Keychain · Strict TLS · Live Activities · Dynamic Island · Home Screen widgets · App Intents · Bonjour discovery. No third-party SDK, no cross-platform runtime — nothing to ship cross-platform.

## Try it without a server

The welcome screen has a **Preview with Sample Data** option that loads the full UI with realistic read-only fixture data. All five tabs are navigable; control actions are visible but disabled. Inside the app, you can also enter Demo Mode anytime via *Settings → Demo → Enter Demo Mode*.

## Documentation

Marketing site, walkthrough, and full feature inventory: **[pulse.phobos-cc.be](https://pulse.phobos-cc.be)**

This repository hosts the public documentation pages served at [legato3.github.io/TrueNAS-Pulse-App](https://legato3.github.io/TrueNAS-Pulse-App/):

| Page | Source | Live |
| --- | --- | --- |
| Changelog | [`docs/changelog.md`](docs/changelog.md) | [pulse.phobos-cc.be/changelog](https://pulse.phobos-cc.be/changelog) |
| Privacy Policy | [`docs/privacy.md`](docs/privacy.md) | [pulse.phobos-cc.be/privacy](https://pulse.phobos-cc.be/privacy) |
| EULA | [`docs/eula.md`](docs/eula.md) | [pulse.phobos-cc.be/eula](https://pulse.phobos-cc.be/eula) |
| Terms of Use | [`docs/terms.md`](docs/terms.md) | [pulse.phobos-cc.be/terms](https://pulse.phobos-cc.be/terms) |
| FAQ | [`docs/faq.md`](docs/faq.md) | [pulse.phobos-cc.be/faq](https://pulse.phobos-cc.be/faq) |
| Contact | [`docs/contact.md`](docs/contact.md) | [pulse.phobos-cc.be/contact](https://pulse.phobos-cc.be/contact) |

## Support

- **Bug reports & feature requests:** [open an issue](https://github.com/legato3/TrueNAS-Pulse-App/issues) in this repository.
- **Email:** [chris@phobos-cc.be](mailto:chris@phobos-cc.be)

When reporting an issue, please include:

- iOS version + device model (Settings → General → About)
- TrueNAS Pulse version (Settings → About)
- TrueNAS SCALE version of the affected server
- Whether the issue reproduces in **Demo Mode** (Settings → Demo → Enter Demo Mode)
- A screenshot or screen recording when relevant

## Trademark and disclaimer

TrueNAS® is a registered trademark of iXsystems, Inc.

TrueNAS Pulse is an independent third-party application and is **not affiliated with, endorsed by, or sponsored by** iXsystems, Inc.

## License

Documentation in this repository is licensed under the terms in [LICENSE](LICENSE).

The TrueNAS Pulse application itself is closed source. Use of the app is governed by the [End User License Agreement](https://pulse.phobos-cc.be/eula).

---

<div align="center">
<sub>© 2026 Christophe Cornelis · One-time purchase · No subscription · No tracking</sub>
</div>
