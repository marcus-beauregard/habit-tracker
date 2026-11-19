// SPDX-License-Identifier: GPL-2.0-or-later
// Copyright (C) 2026 Marcus Beauregard

export function streakLabel(days) {
  return `${days} ${days === 1 ? 'day' : 'days'} streak`;
}
