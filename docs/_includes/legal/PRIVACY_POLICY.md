# Privacy Policy
Last updated: May 2026

## Overview

TrueNAS Pulse does not collect personal data through analytics, tracking, advertising, or crash-reporting SDKs.

---

## What the app does

TrueNAS Pulse is direct by default. It communicates with the TrueNAS servers that you configure and contains no in-app analytics, tracking, advertising, crash-reporting, or generic telemetry SDKs.

If you explicitly enable Cloud Push Relay for background alert notifications, limited alert summary data may be routed through the relay only for notification delivery. The relay is off by default, configured per server, and API tokens, credentials, passwords, and secrets are never sent to it.

---

## Data not collected

- No analytics or tracking SDKs
- No crash reporting services
- No advertising identifiers
- No data shared with third parties
- No background alert relay traffic unless you explicitly opt in per server

---

## Where your data lives

API tokens are stored in the iOS Keychain on your device. They are never synced to iCloud and never leave your phone.

Server metadata (URLs, names, ordering) is stored locally using UserDefaults on your device.

Local diagnostics, when present, stay on the device and are never uploaded.

If you enable iCloud Sync (Pro), your monitor configurations and server list sync across your devices via Apple's iCloud Key-Value Store. API tokens never leave the Keychain — iCloud Sync does not transport credentials.

If you enable Cloud Push Relay, only alert summaries are relayed for push delivery while the app is backgrounded or closed. API tokens, credentials, passwords, and secrets never leave the device.

---

## App Store privacy details

For App Store Connect's "Data Not Collected" disclosure: TrueNAS Pulse collects no data from users, links no data to identity, and does no tracking.

---

## Changes to this policy

If this policy ever changes, the change will be summarised here with a new "last updated" date. The app itself does not have the means to notify you of a change because there is no telemetry channel — please check this page when updating to a new version if you want to review what (if anything) changed.

---

## Contact

Questions about this policy: [support@truenaspulse.com](mailto:support@truenaspulse.com)

---

© 2026 Christophe Cornelis. All rights reserved.