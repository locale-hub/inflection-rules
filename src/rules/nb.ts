import type { Rules } from "../types/types";

export const nbRules: Rules = {
  irregular: {
    'and': 'ender',
    'barn': 'barn',
    'bok': 'bøker',
    'bonde': 'bønder',
    'felt': 'felt',
    'fisk': 'fisk',
    'fot': 'føtter',
    'gås': 'gjess',
    'hus': 'hus',
    'land': 'land',
    'tann': 'tenner',
    'tre': 'trær',
    'tå': 'tær',
    'vann': 'vann',
  },
  other: [
    { match: /er$/i, replace: 'ere' },
    { match: /e$/i, replace: 'er' },
    { match: /$/, replace: 'er' },
  ],
}