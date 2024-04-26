/* eslint-disable jsdoc/require-jsdoc */
// #todo

/**
 * Returns a description of how similar two values are.
 * If they are strictly equal -> 'strictly equal'.
 * If they have the same type -> 'same type'.
 * Else -> 'totally different'.
 * @param {any} val1
 * @param {any} val2
 * @returns {string} The values' solution.
 */

// -------- your solutions --------
// eslint-disable-next-line jsdoc/require-description

// eslint-disable-next-line jsdoc/require-jsdoc, prefer-arrow/prefer-arrow-functions, no-unused-vars
function compareValues(val1, val2) {
  if (val1 === val2) {
    return 'strictly equal';
  }
  if (typeof val1 === typeof val2) {
    return 'same type';
  }
  return 'totally different';
}

// eslint-disable-next-line no-use-before-define
for (const solution of [secretSolution]) {
  describe(`${solution.name}: determines how similar two values are`, () => {
    describe('when values are strictly equal', () => {
      it('two identical strings -> "strictly equal"', () => {
        expect(solution('hello', 'hello')).toEqual('strictly equal');
      });
      it('two identical numbers -> "strictly equal"', () => {
        expect(solution(1, 1.0)).toEqual('strictly equal');
        // 1, 1.0
      });
      it('two identical booleans -> "strictly equal"', () => {
        expect(solution(true, true)).toEqual('strictly equal');
      });
    });
    describe('when values have the same type', () => {
      it('two different strings -> "same type"', () => {
        expect(solution('hello', 'world')).toEqual('same type');
      });
      it('two different numbers -> "same type"', () => {
        expect(solution(12, 34)).toEqual('same type');
      });
      it('two different booleans -> "same type"', () => {
        expect(solution(true, false)).toEqual('same type');
      });
    });
    describe('when values are nothing alike', () => {
      it('values that are obviously different', () => {
        expect(solution(null, 4)).toEqual('totally different');
      });
      it('values that can be confusing', () => {
        expect(solution('4', 4)).toEqual('totally different');
        // "4" and 4
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions, no-return-assign, no-sequences
function secretSolution(a, b) { let c = ''; return c = a === b ? 'strictly equal' : typeof a === typeof b ? 'same type' : 'totally different', c; }
