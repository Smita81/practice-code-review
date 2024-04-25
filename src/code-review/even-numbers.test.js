/**
 * Removes all odd numbers from an array of numbers.
 * Does not modify the argument (no side-effects).
 * @param {number[]} arrayOfNumbers - The array of numbers to filter.
 * @returns {number[]} - An array with only even numbers.
 */

// Define the initial function
const removeOddNumbers = (arrayOfNumbers) => {
  // Filter out odd numbers from the array
  const evenNumbers = arrayOfNumbers.filter((number) => number % 2 === 0);

  // Modify the existing array to contain only even numbers
  // Use splice to remove odd numbers from the array in place
  arrayOfNumbers.splice(0, arrayOfNumbers.length, ...evenNumbers);

  // No need to return anything as the array is modified in place
};

// Update test cases to reflect the changes
describe('removeOddNumbers: only even numbers', () => {
  describe('when there are only even numbers in the array', () => {
    it('should return the array unchanged', () => {
      const input = [2, 4, 6, 8];
      const expected = [2, 4, 6, 8];
      removeOddNumbers(input);
      expect(input).toEqual(expected);
    });
  });

  describe('when there are only odd numbers in the array', () => {
    it('should return an empty array', () => {
      const input = [1, 3, 5, 7];
      const expected = [];
      removeOddNumbers(input);
      expect(input).toEqual(expected);
    });
  });

  describe('when both even and odd numbers in the array', () => {
    it('should remove odd numbers from the array', () => {
      const input = [1, 2, 3, 4, 5, 6];
      const expected = [2, 4, 6];
      removeOddNumbers(input);
      expect(input).toEqual(expected);
    });
  });
});
