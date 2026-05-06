---
title: FAQ
permalink: /faq/
---

# Frequently Asked Questions

## Is this an official iXsystems app?

No. TrueNAS Pulse is an independent third-party application developed by Christophe Cornelis. It is not affiliated with, endorsed by, or sponsored by iXsystems. TrueNAS® is a registered trademark of iXsystems, Inc.

---

## Which TrueNAS versions are supported?

TrueNAS SCALE only — version 24.04 and later, including 25.04, 25.10, and 26.x. CORE is not supported. The app uses WebSocket JSON-RPC as the primary transport, with REST as a compatibility fallback for older SCALE versions. Your SCALE server must have remote API access enabled.

---

## Which iOS version do I need?

iOS 17.6 or later. The app uses Live Activities, the Dynamic Island, and Home Screen widgets — features that depend on iOS 17 surfaces.

---

## Does it work on iPad or Mac?

Not at the moment. TrueNAS Pulse is built and submitted as iPhone-only. iPad and Apple Silicon Mac are not supported in the current release. iPhone Mirroring on macOS works because that is a system feature, not an app capability.

---

## Does the app talk to anything except my own server?

Direct by default. TrueNAS Pulse talks to the TrueNAS servers you configure and has no in-app analytics, tracking SDKs, advertising SDKs, or generic telemetry endpoint. If you opt in to Cloud Push Relay, it is only used to deliver alert summaries when the app is backgrounded or closed. It is off by default, configured per server, and never receives API tokens, credentials, passwords, or secrets. You can also point the app at a self-hosted relay you run yourself.

---

## Does my server need to be on the public internet?

No. The app connects over any reachable IP — same LAN, a Tailscale tailnet, a WireGuard / OpenVPN tunnel, or a reverse-proxied hostname. Most homelab users run TrueNAS Pulse over Tailscale or a private VPN and never expose the TrueNAS API publicly.

---

## Where are my API tokens stored?

Exclusively in the iOS Keychain on your device. They are never synced to iCloud and never leave your phone. iCloud Sync (Pro) syncs your monitor configurations and server list across your own devices via your private iCloud Key-Value Store — credentials are never part of that sync.

---

## Will I get notifications when the app is closed?

By default the app delivers device-local notifications when monitors fire while it is running. For alerts that need to reach you while the app is backgrounded or closed, you can opt in to Cloud Push Relay per server. The relay only forwards alert summaries — never API tokens, credentials, passwords, or secrets. You can also self-host the relay if you would rather not use the built-in one.

---

## How do self-signed TLS certificates work?

By default the app does strict TLS validation. If your server uses a self-signed certificate (common in self-hosted environments), the app prompts you once to review and pin the certificate's SHA-256 fingerprint. This is opt-in per server.

---

## Can I try the app without connecting to a real server?

Yes. The welcome screen has a "Preview with Sample Data" option that loads the full UI with realistic read-only fixture data. All five tabs are navigable; control actions are visible but disabled.

---

## What does Pro cost? Is it a subscription?

Pro is a one-time, lifetime purchase. No subscription, no recurring charges, no expiry. The price is set in App Store Connect and displayed in your local currency. If you have purchased Pro and reinstall, use the Restore Purchases button — it is tied to your Apple ID.

---

## Why is Pro $9.99 and not free?

Pro funds ongoing development and keeps the app independent, ad-free, and without telemetry. The Free tier is genuinely useful — live monitoring, alerts, storage health, and one local monitor are all included without cost.

---

## Does Pro support Apple Family Sharing?

Yes. TrueNAS Pulse Pro is configured as Family Shareable. When Family Sharing is set up on your Apple account, eligible family members can unlock Pro on their own devices without a second purchase. Use Restore Purchases after signing in.

---

## How many servers can I monitor?

Free supports up to 2 servers. Pro raises the cap to 8 servers. Switching between servers is instant and aggregated alert views span every system you have added.

---

## How safe are the control actions?

All state-changing actions require Control Mode — a confirmation gate with a persistent banner and 5-minute auto-expire. High-risk actions (reboot, shutdown, disk wipe, snapshot rollback) additionally require an arming toggle plus biometric authentication. Network mutations require an outage-risk acknowledgement.

---

## Is there an Android version?

An Android version is currently being looked into — no release date yet. TrueNAS Pulse on iOS is a native SwiftUI app built around iOS-specific surfaces (Dynamic Island, Live Activities, Home Screen widgets, App Intents), so an Android build will be a separately considered native effort, not a cross-platform port.

---

## Is there a beta / TestFlight?

Yes. Beta builds include upcoming features ahead of the App Store release. The same Free/Pro pricing applies inside the beta — joining TestFlight does not unlock paid features for free.

---

## Where do I report a bug?

Use the support form at [truenaspulse.com/support](https://truenaspulse.com/support) — a structured ticket reaches me fastest. You can also email [support@truenaspulse.com](mailto:support@truenaspulse.com) if you prefer.