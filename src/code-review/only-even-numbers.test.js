/**
 * Removes all odd numbers from an array of numbers without modifying the original array.
 * This function has no side-effects.
 *
 * @param {number[]} arrayOfNumbers - The array of numbers to filter.
 * @returns {number[]} An array with only even numbers.
 */

const removeOddNumbers = (arrayOfNumbers) => {
  if (!Array.isArray(arrayOfNumbers)) {
    throw new TypeError('Input must be an array of numbers');
  }

  // Filter out odd numbers from the array
  const evenNumbers = arrayOfNumbers.filter((number) => number % 2 === 0);

  return evenNumbers;
};

// Test suite for the removeOddNumbers function
describe('removeOddNumbers: only even numbers', () => {
  for (const solution of [removeOddNumbers]) {
    describe(solution.name, () => {
      it('should return an empty array when there are only odd numbers in the array', () => {
        const input = [1, 3, 5, 7];
        const result = solution(input);
        expect(result).toEqual([]);
      });

      it('should return the same array when there are only even numbers in the array', () => {
        const input = [2, 4, 6, 8];
        const result = solution(input);
        expect(result).toEqual([2, 4, 6, 8]);
      });

      it('should return an array with only even numbers when both even and odd numbers are present', () => {
        const input = [1, 2, 3, 4, 5, 6];
        const result = solution(input);
        expect(result).toEqual([2, 4, 6]);
      });
    });
  }
});
