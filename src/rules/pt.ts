import type { Rules } from "../types/types";

export const ptRules: Rules = {
  irregular: {
    'abdomen': 'abdomens',
    'alemão': 'alemães',
    'alias': 'aliases',
    'as': 'ases',
    'cão': 'cães',
    'cidadão': 'pães',
    'lapis': 'lapis',
    'onibus': 'onibus',
    'pais': 'pais',
    'pão': 'pães',
    'status': 'status',
    'virus': 'virus',
  },
  other: [
    { match: /^(.*)ao$/i, replace: '$1oes' },
    { match: /^(.*)ão$/i, replace: '$1ões' },
    { match: /^(.*)(r|s|z)$/i, replace: '$1$2es' },
    { match: /^(.*)(a|e|o|u)l$/i, replace: '$1$2is' },
    { match: /^(.*)il$/i, replace: '$1is' },
    { match: /^(.*)(m|n)$/i, replace: '$1ns' },
    { match: /^(.*)$/i, replace: '$1s' },
  ],
}