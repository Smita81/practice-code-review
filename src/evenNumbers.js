function removeOddNumbers(arrayOfNumbers) {
  // Filter out odd numbers from the array
  const evenNumbers = arrayOfNumbers.filter((number) => number % 2 === 0);

  // Return the new array with only even numbers
  return evenNumbers;
}

for (const solution of [secretSolution]) {
  describe(solution.name + ': only even numbers', () => {
    describe('when there are only odd numbers in the array', () => {
      it('should return an empty array', () => {
        const input = [1, 3, 5, 7];
        const result = solution(input);
        expect(result).toEqual([]);
      });
      it('when there are only even numbers in the array should return same array', () => {
        const input = [2, 4, 6, 8];
        const result = solution(input);
        expect(result).toEqual([2, 4, 6, 8]);
      });
      it('when both even and odd numbers in the array should return an array with only even numbers', () => {
        const input = [1, 2, 3, 4, 5, 6];
        const result = solution(input);
        expect(result).toEqual([2, 4, 6]);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c }
