import type { Rules } from "./types/types";

import { allRules } from "./rules/all";
import { RuleEntry } from "./types/types";

/**
 * Pluralize the given word
 * @param locale The language of the word
 * @param word The word to be pluralized
 * @param amount The quantity (will determine the plural rule to apply)
 * @returns The pluralized string
 */
export const pluralize = (locale: string, word: string, amount: number): string => {
  const unsupportedLocale = 0 === Intl.PluralRules.supportedLocalesOf(locale, { localeMatcher: "lookup" }).length;
  if (unsupportedLocale || 1 === amount) {
    return word;
  }

  const pluralType = new Intl.PluralRules(locale).select(amount);
  if ('one' === pluralType) {
    return word;
  }
  
  for (const testLocale of localeFallbacks(locale)) {
    // @ts-ignore 
    const rules: Rules = allRules[testLocale];
    if (undefined === rules) {
      continue;
    }

    if (undefined !== rules.irregular && undefined !== rules.irregular[word.toLowerCase()]) {
      return rules.irregular[word.toLowerCase()];
    }

    // @ts-ignore 
    const pluralRules: RuleEntry[] = rules[pluralType];
    if (undefined === pluralRules) {
      continue;
    }

    const ruleMatch = pluralRules.find(r => r.match.test(word));
    if (undefined === ruleMatch) {
      continue;
    }

    return word.replace(ruleMatch.match, ruleMatch.replace);
  }

  return word;
}

/* 
 * Return list of locales from specific to general
 * eg: localeFallbacks('en-US') -> ['en-US', 'en']
 */
const localeFallbacks = (locale: string) => {
  const split = locale.split('-');
  return split
    .reduce((acc: string[], _curr: string, idx: number) => {
      acc.push(split.slice(0, idx + 1).join('-'));
      return acc;
    }, [])
    .reverse();
}
