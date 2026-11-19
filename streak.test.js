// SPDX-License-Identifier: GPL-2.0-or-later
// Copyright (C) 2026 Marcus Beauregard

import test from 'node:test';
import assert from 'node:assert/strict';
import { streakLabel } from './streak.js';

test('streak label is singular for one day', () => {
  assert.equal(streakLabel(1), '1 day streak');
});

test('streak label is plural for multiple days', () => {
  assert.equal(streakLabel(2), '2 days streak');
  assert.equal(streakLabel(21), '21 days streak');
});
