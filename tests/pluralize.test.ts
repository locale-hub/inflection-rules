
// Arrange
import { pluralizeTests } from "./pluralize.data";

const versions = {
  'umd': require('../dist/umd/locale-hub'),
  'umd-polyfill': require('../dist/umd-polyfill/locale-hub'),
}

describe.each(
  Object.entries(versions)
)('with version: %s', (version: string, lh) => {

  describe.each(
    Object.keys(pluralizeTests)
  )('with locale: %s', (locale: string) => {
      
    describe.each(
      // @ts-ignore
      Object.entries(pluralizeTests[locale])
    )('pluralize(%s)', (singular: string, testsAsUnknown) => {
      const tests = (testsAsUnknown as { amount: number, expected: string }[])
        .map(data => ([ data.amount, data.expected ]));

      it.each(
        tests
      )('%i => %s', (amount, expected) => {
        // Act
        const result = lh.pluralize(locale, singular, amount);

        // Assert
        expect(result).toBe(expected);
      });

    });

  });
  
})
