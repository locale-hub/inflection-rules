import type { Rules } from "../types/types";

export const enRules: Rules = {
  irregular: {
    'aircraft': 'aircraft',
    'alias': 'aliases',
    'alumna': 'alumnae',
    'apex': 'apexes',
    'audio': 'audio',
    'bison': 'bison',
    'child': 'children',
    'curriculum': 'curricula',
    'deer': 'deer',
    'equipment': 'equipment',
    'fish': 'fish',
    'foot': 'feet',
    'focus': 'foci',
    'genus': 'genera',
    'goose': 'geese',
    'gold': 'gold',
    'information': 'information',
    'larva': 'larvae',
    'money': 'money',
    'ox': 'oxen',
    'person': 'people',
    'police': 'police',
    'series': 'series',
    'sex': 'sexes',
    'sheep': 'sheep',
    'species': 'species',
    'swine': 'swine',
    'trout': 'trout',
    'tooth': 'teeth',
    'tuna': 'tuna',
    'vita': 'vitae',
  },
  other: [
    { match: /(quiz)$/i, replace: '$1zes' },
    { match: /([m|l])ouse$/i, replace: '$1ice' },
    { match: /(.+)(e|i)x$/, replace: '$1ices' },
    { match: /(z|x|ch|ss|sh)$/i, replace: '$1es' },
    { match: /([^aeiouy]|qu)y$/i, replace: '$1ies' },
    { match: /(hive)$/i, replace: '$1s' },
    { match: /(?:([^f])fe|([lr])f)$/i, replace: '$1$2ves' },
    { match: /(shea|lea|loa|thie)f$/i, replace: '$1ves' },
    { match: /sis$/i, replace: 'ses' },
    { match: /([ti])um$/i, replace: '$1a' },
    { match: /(tomat|potat|ech|her|vet)o$/i, replace: '$1oes' },
    { match: /(bu)s$/i, replace: '$1ses' },
    { match: /(octop|vir)us$/, replace: '$1i' },
    { match: /(ax|test)is$/i, replace: '$1es' },
    { match: /(us)$/i, replace: '$1es' },
    { match: /((.*)(?<!hu))man$/i, replace: '$1men' },
    { match: /s$/i, replace: 's' },
    { match: /$/, replace: 's' },
  ],
}