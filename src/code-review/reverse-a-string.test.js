/**
 * Reverses a string.
 * @param {string} [toReverse=''] - The string to be reversed.
 * @returns {string} The reversed string.
 */

// Import or define the secretSolution function
const secretSolution = (a = '') => {
  if (typeof a !== 'string') throw new TypeError('toReverse is not a string');
  return a.split('').reverse().join('');
};

// Your test suite
describe('Reverse String Tests', () => {
  for (const solution of [secretSolution]) {
    describe(`${solution.name}: reverses a string`, () => {
      it('default parameter is an empty string -> ""', () => {
        expect(solution()).toEqual('');
      });
      it('an empty string -> ""', () => {
        expect(solution('')).toEqual('');
      });
      it('a string with all capital letters', () => {
        expect(solution('ASDF')).toEqual('FDSA');
      });

      // write at least 5 more tests ...

      it('a string with mixed cases and spaces', () => {
        expect(solution('Hello World')).toEqual('dlroW olleH');
      });
      it('a string with special characters', () => {
        expect(solution('!@#$%^&*()')).toEqual(')(*&^%$#@!');
      });
      it('a string with numbers', () => {
        expect(solution('12345')).toEqual('54321');
      });
      it('a long string', () => {
        expect(solution('abcdefghijklmnopqrstuvwxyz')).toEqual(
          'zyxwvutsrqponmlkjihgfedcba',
        );
      });
      it('a string with repeated characters', () => {
        expect(solution('hellohello')).toEqual('olleholleh');
      });
    });
  }
});
