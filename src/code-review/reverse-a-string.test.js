/**
 * Reverses a string.
 * @param {string} [toReverse=''] - The string to reverse.
 * @returns {string} The reversed argument.
 */

// -------- your solutions --------

// eslint-disable-next-line no-unused-vars
const reverseString = (str = '') => {
  return str.split('').reverse().join('');
};

// eslint-disable-next-line no-use-before-define
for (const solution of [secretSolution]) {
  // the main test suite for the function
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
      expect(solution('hippopotamus')).toEqual('sumatopoppih');
    });
    it('a string with repeated characters', () => {
      expect(solution('hellohello')).toEqual('olleholleh');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
/**
 * Test.
 * @param a Test.
 * @returns test
 * @throws TypeError('toReverse is not a string')
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function secretSolution(a = '') { if (typeof a !== 'string') throw new TypeError('toReverse is not a string'); return a.split('').reverse().join(''); }
