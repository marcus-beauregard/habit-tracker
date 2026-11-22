<div align="center">

<img src="assets/logo-512.png" width="96" alt="habit-tracker">

# habit-tracker

**A React Native habit tracker built around a dated streak.**

[![CI](https://github.com/marcus-beauregard/habit-tracker/actions/workflows/ci.yml/badge.svg)](https://github.com/marcus-beauregard/habit-tracker/actions/workflows/ci.yml)
[![License: GPL-2.0-or-later](https://img.shields.io/badge/license-GPL--2.0--or--later-blue.svg)](LICENSE)

</div>

## Quick start

```bash
npm install
npm start          # Metro bundler
npm run android    # or: npm run ios
```

You need a device or emulator. There is no web target.

## What it does

A ```FlatList``` of habits. Each row shows the habit and its streak; the **+1** button logs today. State is in memory, so a reload starts over (#3).

## Develop

Run `npm test` to check the streak logic. It runs `node --test` and covers `streak.js` (2 tests today). Component and rendering tests are still missing, tracked by #5. Say in your PR how you checked the change, on a device if it touches the UI.

## Known gaps

Persistence and add/delete (#3), undated streaks (#2), an empty state (#7), accessibility labels (#6), and React Native 0.68 being out of support (#8).

## Contributing

Humans and automated agents are both welcome. There is no CLA — every commit carries a [DCO](https://developercertificate.org/) sign-off (**git commit -s**).

Start with a [good first issue](https://github.com/marcus-beauregard/habit-tracker/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), or read [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

GPL-2.0-or-later — see [LICENSE](LICENSE). Copyright (C) 2026 Marcus Beauregard.
