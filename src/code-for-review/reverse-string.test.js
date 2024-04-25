/**
 * Reverses a string.
 * @param {string} [str=''] - The string to reverse.
 * @returns {string} The reversed argument.
 */
// eslint-disable-next-line no-unused-vars
const reverseString = (str) => {
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
    it('a string is a number', () => {
      expect(solution('123')).toEqual('321');
    });
    it('a string is a number', () => {
      expect(solution('!@#$%')).toEqual('%$#@!');
    });
    it('is a string ', () => {
      expect(solution('hello world')).toEqual('dlrow olleh');
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
// eslint-disable-next-line max-len
// eslint-disable-next-line jsdoc/require-jsdoc, prefer-arrow/prefer-arrow-functions, yoda, quotes, eqeqeq
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join(""); }
