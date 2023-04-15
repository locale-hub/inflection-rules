
type PluralValue = {
  amount: number;
  expected: string;
}

type PluralValueContainer = {
  [word: string]: PluralValue[]
}

export const pluralizeTests: { [locale: string]: PluralValueContainer } = {
  en: {
    'aircraft': [
      { amount: 0, expected: 'aircraft' },
      { amount: 1, expected: 'aircraft' },
      { amount: 2, expected: 'aircraft' },
    ],
    'alumna': [
      { amount: 0, expected: 'alumnae' },
      { amount: 1, expected: 'alumna' },
      { amount: 2, expected: 'alumnae' },
    ],
    'analysis': [
      { amount: 0, expected: 'analyses' },
      { amount: 1, expected: 'analysis' },
      { amount: 2, expected: 'analyses' },
    ],
    'apex': [
      { amount: 0, expected: 'apexes' },
      { amount: 1, expected: 'apex' },
      { amount: 2, expected: 'apexes' },
    ],
    'bison': [
      { amount: 0, expected: 'bison' },
      { amount: 1, expected: 'bison' },
      { amount: 2, expected: 'bison' },
    ],
    'child': [
      { amount: 0, expected: 'children' },
      { amount: 1, expected: 'child' },
      { amount: 2, expected: 'children' },
    ],
    'crisis': [
      { amount: 0, expected: 'crises' },
      { amount: 1, expected: 'crisis' },
      { amount: 2, expected: 'crises' },
    ],
    'curriculum': [
      { amount: 0, expected: 'curricula' },
      { amount: 1, expected: 'curriculum' },
      { amount: 2, expected: 'curricula' },
    ],
    'datum': [
      { amount: 0, expected: 'data' },
      { amount: 1, expected: 'datum' },
      { amount: 2, expected: 'data' },
    ],
    'diagnosis': [
      { amount: 0, expected: 'diagnoses' },
      { amount: 1, expected: 'diagnosis' },
      { amount: 2, expected: 'diagnoses' },
    ],
    'fish': [
      { amount: 0, expected: 'fish' },
      { amount: 1, expected: 'fish' },
      { amount: 2, expected: 'fish' },
    ],
    'focus': [
      { amount: 0, expected: 'foci' },
      { amount: 1, expected: 'focus' },
      { amount: 2, expected: 'foci' },
    ],
    'foot': [
      { amount: 0, expected: 'feet' },
      { amount: 1, expected: 'foot' },
      { amount: 2, expected: 'feet' },
    ],
    'genus': [
      { amount: 0, expected: 'genera' },
      { amount: 1, expected: 'genus' },
      { amount: 2, expected: 'genera' },
    ],
    'goose': [
      { amount: 0, expected: 'geese' },
      { amount: 1, expected: 'goose' },
      { amount: 2, expected: 'geese' },
    ],
    'index': [
      { amount: 0, expected: 'indices' },
      { amount: 1, expected: 'index' },
      { amount: 2, expected: 'indices' },
    ],
    'leaf': [
      { amount: 0, expected: 'leaves' },
      { amount: 1, expected: 'leaf' },
      { amount: 2, expected: 'leaves' },
    ],
    'man': [
      { amount: 0, expected: 'men' },
      { amount: 1, expected: 'man' },
      { amount: 2, expected: 'men' },
    ],
    'mouse': [
      { amount: 0, expected: 'mice' },
      { amount: 1, expected: 'mouse' },
      { amount: 2, expected: 'mice' },
    ],
    'person': [
      { amount: 0, expected: 'people' },
      { amount: 1, expected: 'person' },
      { amount: 2, expected: 'people' }
    ],
    'quiz': [
      { amount: 0, expected: 'quizzes' },
      { amount: 1, expected: 'quiz' },
      { amount: 2, expected: 'quizzes' },
    ],
    'series': [
      { amount: 0, expected: 'series' },
      { amount: 1, expected: 'series' },
      { amount: 2, expected: 'series' },
    ],
    'sheep': [
      { amount: 0, expected: 'sheep' },
      { amount: 1, expected: 'sheep' },
      { amount: 2, expected: 'sheep' },
    ],
    'swine': [
      { amount: 0, expected: 'swine' },
      { amount: 1, expected: 'swine' },
      { amount: 2, expected: 'swine' },
    ],
    'tooth': [
      { amount: 0, expected: 'teeth' },
      { amount: 1, expected: 'tooth' },
      { amount: 2, expected: 'teeth' },
    ],
    'trout': [
      { amount: 0, expected: 'trout' },
      { amount: 1, expected: 'trout' },
      { amount: 2, expected: 'trout' },
    ],
    'tuna': [
      { amount: 0, expected: 'tuna' },
      { amount: 1, expected: 'tuna' },
      { amount: 2, expected: 'tuna' },
    ],
    'vita': [
      { amount: 0, expected: 'vitae' },
      { amount: 1, expected: 'vita' },
      { amount: 2, expected: 'vitae' },
    ],
    'woman': [
      { amount: 0, expected: 'women' },
      { amount: 1, expected: 'woman' },
      { amount: 2, expected: 'women' },
    ],
  },
  es: {
    'actriz': [
      { amount: 0, expected: 'actrices' },
      { amount: 1, expected: 'actriz' },
      { amount: 2, expected: 'actrices' },
    ],
    'análisis': [
      { amount: 0, expected: 'análisis' },
      { amount: 1, expected: 'análisis' },
      { amount: 2, expected: 'análisis' },
    ],
    'avión': [
      { amount: 0, expected: 'aviones' },
      { amount: 1, expected: 'avión' },
      { amount: 2, expected: 'aviones' },
    ],
    'casa': [
      { amount: 0, expected: 'casas' },
      { amount: 1, expected: 'casa' },
      { amount: 2, expected: 'casas' },
    ],
    'color': [
      { amount: 0, expected: 'colores' },
      { amount: 1, expected: 'color' },
      { amount: 2, expected: 'colores' },
    ],
    'conversación': [
      { amount: 0, expected: 'conversaciones' },
      { amount: 1, expected: 'conversación' },
      { amount: 2, expected: 'conversaciones' },
    ],
    'frac': [
      { amount: 0, expected: 'fraques' },
      { amount: 1, expected: 'frac' },
      { amount: 2, expected: 'fraques' },
    ],
    'jueves': [
      { amount: 0, expected: 'jueves' },
      { amount: 1, expected: 'jueves' },
      { amount: 2, expected: 'jueves' },
    ],
    'lápiz': [
      { amount: 0, expected: 'lápices' },
      { amount: 1, expected: 'lápiz' },
      { amount: 2, expected: 'lápices' },
    ],
    'lunes': [
      { amount: 0, expected: 'lunes' },
      { amount: 1, expected: 'lunes' },
      { amount: 2, expected: 'lunes' },
    ],
    'martes': [
      { amount: 0, expected: 'martes' },
      { amount: 1, expected: 'martes' },
      { amount: 2, expected: 'martes' },
    ],
    'mes': [
      { amount: 0, expected: 'meses' },
      { amount: 1, expected: 'mes' },
      { amount: 2, expected: 'meses' },
    ],
    'miércoles': [
      { amount: 0, expected: 'miércoles' },
      { amount: 1, expected: 'miércoles' },
      { amount: 2, expected: 'miércoles' },
    ],
    'niña': [
      { amount: 0, expected: 'niñas' },
      { amount: 1, expected: 'niña' },
      { amount: 2, expected: 'niñas' },
    ],
    'niño': [
      { amount: 0, expected: 'niños' },
      { amount: 1, expected: 'niño' },
      { amount: 2, expected: 'niños' },
    ],
    'profesor': [
      { amount: 0, expected: 'profesores' },
      { amount: 1, expected: 'profesor' },
      { amount: 2, expected: 'profesores' },
    ],
    'rey': [
      { amount: 0, expected: 'reyes' },
      { amount: 1, expected: 'rey' },
      { amount: 2, expected: 'reyes' },
    ],
    'sección': [
      { amount: 0, expected: 'secciones' },
      { amount: 1, expected: 'sección' },
      { amount: 2, expected: 'secciones' },
    ],
    'televisión': [
      { amount: 0, expected: 'televisiones' },
      { amount: 1, expected: 'televisión' },
      { amount: 2, expected: 'televisiones' },
    ],
    'tórax': [
      { amount: 0, expected: 'tórax' },
      { amount: 1, expected: 'tórax' },
      { amount: 2, expected: 'tórax' },
    ],
    'viernes': [
      { amount: 0, expected: 'viernes' },
      { amount: 1, expected: 'viernes' },
      { amount: 2, expected: 'viernes' },
    ],
    'voz': [
      { amount: 0, expected: 'voces' },
      { amount: 1, expected: 'voz' },
      { amount: 2, expected: 'voces' },
    ],
    'zapato': [
      { amount: 0, expected: 'zapatos' },
      { amount: 1, expected: 'zapato' },
      { amount: 2, expected: 'zapatos' },
    ],
    'zigzag': [
      { amount: 0, expected: 'zigzagues' },
      { amount: 1, expected: 'zigzag' },
      { amount: 2, expected: 'zigzagues' },
    ],
  },
  fr: {
    'fleur': [
      { amount: 0, expected: 'fleur' },
      { amount: 1, expected: 'fleur' },
      { amount: 2, expected: 'fleurs' }
    ],
    'beau': [
      { amount: 0, expected: 'beau' },
      { amount: 1, expected: 'beau' },
      { amount: 2, expected: 'beaux' }
    ],
    'bal': [
      { amount: 0, expected: 'bal' },
      { amount: 1, expected: 'bal' },
      { amount: 2, expected: 'bals' },
    ],
    'jeu': [
      { amount: 0, expected: 'jeu' },
      { amount: 1, expected: 'jeu' },
      { amount: 2, expected: 'jeux' },
    ],
    'genou': [
      { amount: 0, expected: 'genou' },
      { amount: 1, expected: 'genou' },
      { amount: 2, expected: 'genoux' },
    ],
    'nouveau': [
      { amount: 0, expected: 'nouveau' },
      { amount: 1, expected: 'nouveau' },
      { amount: 2, expected: 'nouveaux' },
    ],
    'heureux': [
      { amount: 0, expected: 'heureux' },
      { amount: 1, expected: 'heureux' },
      { amount: 2, expected: 'heureux' },
    ],
    'nez': [
      { amount: 0, expected: 'nez' },
      { amount: 1, expected: 'nez' },
      { amount: 2, expected: 'nez' },
    ],
    'arc-en-ciel': [
      { amount: 0, expected: 'arc-en-ciel' },
      { amount: 1, expected: 'arc-en-ciel' },
      { amount: 2, expected: 'arcs-en-ciel' },
    ],
    'tire-bouchon': [
      { amount: 0, expected: 'tire-bouchon' },
      { amount: 1, expected: 'tire-bouchon' },
      { amount: 2, expected: 'tire-bouchons' },
    ],
  }
};
