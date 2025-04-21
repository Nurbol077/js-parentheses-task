// main.test.js
const { countWellFormedParenthesis } = require('./main');

describe('countWellFormedParenthesis', () => {
  it('should return 1 for 0 pairs of parentheses', () => {
    expect(countWellFormedParenthesis(0)).toBe(1);
  });

  it('should return 1 for 1 pair of parentheses', () => {
    expect(countWellFormedParenthesis(1)).toBe(1);
  });

  it('should return 2 for 2 pairs of parentheses', () => {
    expect(countWellFormedParenthesis(2)).toBe(2);
  });

  it('should return 5 for 3 pairs of parentheses', () => {
    expect(countWellFormedParenthesis(3)).toBe(5);
  });

  it('should return 14 for 4 pairs of parentheses', () => {
    expect(countWellFormedParenthesis(4)).toBe(14);
  });

  it('should throw an error for negative input', () => {
    expect(() => countWellFormedParenthesis(-1)).toThrow("nCouples must be a non-negative integer");
  });
});