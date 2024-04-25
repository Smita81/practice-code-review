/* eslint-disable no-undef */
/**
 * Reverses a string.
 * @param {string} [toReverse=''] - The string to reverse.
 * @returns {string} - The reversed argument.
 */

// -------- your solutions --------
const secretSolution = (str) => {
  return str.split('').reverse().join('');
};

describe('secretSolution: reverses a string', () => {
  it('default parameter is an empty string -> ""', () => {
    expect(secretSolution()).toEqual('');
  });
  it('an empty string -> ""', () => {
    expect(secretSolution('')).toEqual('');
  });
  it('a string with all capital letters', () => {
    expect(secretSolution('ASDF')).toEqual('FDSA');
  });
  it('a string is a number', () => {
    expect(secretSolution('123')).toEqual('321');
  });
  it('a string with special characters', () => {
    expect(secretSolution('!@#$%')).toEqual('%$#@!');
  });
  it('a string with spaces', () => {
    expect(secretSolution('hello world')).toEqual('dlrow olleh');
  });
});
