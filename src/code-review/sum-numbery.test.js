// #todo

'use strict';

/**
 * Sums all numbery strings in an array of strings.
 * Returns 0 if the array is empty.
 * It does not modify the original array (no side-effects).
 * @param {string[]} arr - The array of strings.
 * @returns {number} The sum of all numbery strings.
 */

// -------- your solutions --------
const sumNumberyStrings = (arr) => {
  let sum = 0;
  for (const str of arr) {
    const num = Number(str);
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(num)) {
      sum += num;
    }
  }
  return sum;
};

const mapFilterReduce = (arr) => {
  const isNotNaN = (entry) => !Number.isNaN(entry);
  const sumNumbers = (acc, next) => acc + next;
  const castToNumber = (entry) => Number(entry);

  const sumOfNumberies = arr
    .map(castToNumber)
    .filter(isNotNaN)
    .reduce(sumNumbers, 0);

  return sumOfNumberies;
};

for (const solution of [sumNumberyStrings, mapFilterReduce]) {
  describe(`${solution.name}: sumNumberyStrings`, () => {
    describe('checking different test cases', () => {
      it('returns 0 for an empty array', () => {
        const result = solution([]);
        expect(result).toBe(0);
      });
      it('returns 0 if there is no numbery strings', () => {
        const arr = ['a', 'b', 'c'];
        const result = solution(arr);
        expect(result).toBe(0);
      });
      it('returns sum of the numbery strings', () => {
        const arr = [56, 'a', 8, 'b', 98, 5, 'c'];
        const result = solution(arr);
        expect(result).toBe(56 + 8 + 98 + 5);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
// eslint-disable-next-line max-len
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions, jsdoc/require-jsdoc, no-unused-vars, quotes, eqeqeq, no-shadow, arrow-parens, no-implicit-coercion
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => typeof a != "string"); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c; }
