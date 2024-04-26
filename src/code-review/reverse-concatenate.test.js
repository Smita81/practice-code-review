// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings.
 * The original array remains unchanged.
 *
 * @param {string[]} arrayOfStrings - An array of strings to concatenate, in reverse order.
 * @returns {string} - The concatenated string with elements joined together, in reverse order.
 */

// -------- your solutions --------

// Loop over each solution provided and run tests
for (const solution of [secretSolution]) {
  // Describe block for the solution function
  describe(solution.name + ': Concatenate Reversed Strings', () => {
    // Test suite for the solution function
    describe('Concatenation and Reversal', () => {
      // Test case for empty input array
      it('should return an empty string when the input array is empty', () => {
        const input = [];
        const result = solution(input);
        expect(result).toEqual('');
      });

      // Test case for an array with one string element
      it('should return the single string element when the input array contains only one element', () => {
        const input = ['Hello'];
        const result = solution(input);
        expect(result).toEqual('Hello');
      });

      // Test case for an array with multiple string elements
      it('should return the concatenated string with elements joined in reverse order', () => {
        const input = ['foo', 'bar', 'baz'];
        const result = solution(input);
        expect(result).toEqual('zabraboof');
      });

      // Test case for non-string elements in the input array
      it('should throw a TypeError if the input array contains non-string elements', () => {
        const input = ['foo', 42, 'baz'];
        expect(() => solution(input)).toThrow(TypeError);
      });

      // Test case for non-array input
      it('should throw a TypeError if the input is not an array', () => {
        const input = 'not an array';
        expect(() => solution(input)).toThrow(TypeError);
      });
    });
  });
}

// Minified solution for testing
// prettier-ignore
function secretSolution(arrayOfStrings) {
  // Validate input
  if (!Array.isArray(arrayOfStrings)) {
    throw new TypeError('Input must be an array');
  }
  
  // Ensure array contains only strings
  const hasNonStringElements = arrayOfStrings.some(item => typeof item !== 'string');
  if (hasNonStringElements) {
    throw new TypeError('Array must contain only string elements');
  }
  
  // Reverse the array, concatenate the strings, and return the result
  return arrayOfStrings.reverse().join('');
}
