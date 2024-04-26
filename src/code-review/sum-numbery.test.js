// #todo
// eslint-disable-next-line strict, lines-around-directive
'use strict';
/**
 * Sums all numbery strings in an array of strings.
 * Returns 0 if the array is empty.
 * It does not modify the original array (no side-effects).
 * @param {string[]} arr - The array of strings.
 * @returns {number} The sum of all numbery strings.
 */

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
for (const solution of [
  sumNumberyStrings, // Updated function name to match the actual function
]) {
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
