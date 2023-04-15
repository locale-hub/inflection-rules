import type { Rules } from "../types/types";

export const esRules: Rules = {
  irregular: {
    'el': 'los',
    'la': 'las',
    'mes': 'meses',
  },
  other: [
    { match: /(.+)(ión)$/, replace: '$1iones' },
    { match: /(.+)(z)$/, replace: '$1ces' },
    { match: /(.+)(c)$/, replace: '$1ques' },
    { match: /(.+)(g)$/, replace: '$1gues' },
    { match: /(.+)(s|x)$/, replace: '$1$2' },
    { match: /(.+)(a|e|i|o|u)$/, replace: '$1$2s' },
    { match: /(.+)(?<!a|e|i|o|u)$/, replace: '$1es' },
  ],
}