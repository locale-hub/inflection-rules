import type { Rules } from "../types/types";

export const frRules: Rules = {
  irregular: {
    'arc-en-ciel': 'arcs-en-ciel',
    'aïeul': 'aïeux',
    'bail': 'baux',
    'bal': 'bals',
    'beau, bel': 'beaux',
    'ciel': 'cieux',
    'festival': 'festivals',
    'final': 'finals',
    'madame': 'mesdames',
    'mademoiselle': 'mesdemoiselles',
    'monsieur': 'messieurs',
    'œil': 'yeux',
    'oeil': 'yeux',
    'nouveau': 'nouveaux',
    'nouvel': 'nouveaux',
    'travail': 'travaux',
    'vieil': 'vieux',
    'vieux': 'vieux',
    'vitrail': 'vitraux',
  },
  other: [
    { match: /(al)$/i, replace: '$1aux' },
    { match: /(u)$/, replace: '$1x' },
    { match: /(.*)(?<!z|s|x)$/, replace: '$1s' },
  ],
}