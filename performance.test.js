// performance.test.js
const { countWellFormedParenthesis } = require('./main');

describe('Performance Test', () => {
  it('should execute quickly for larger inputs', () => {
    const start = Date.now();
    countWellFormedParenthesis(15);
    const end = Date.now();
    expect(end - start).toBeLessThan(1000); // должно выполниться за меньше чем 1 секунду
  });
});