import { countWellFormedParenthesis } from './main.js';
import chai from 'chai';
const { expect } = chai;

console.log("=== Unit Tests ===");

expect(countWellFormedParenthesis(0)).to.equal(1);
expect(countWellFormedParenthesis(1)).to.equal(1);
expect(countWellFormedParenthesis(2)).to.equal(2);
expect(countWellFormedParenthesis(3)).to.equal(5);
expect(countWellFormedParenthesis(4)).to.equal(14);
expect(countWellFormedParenthesis(5)).to.equal(42);

console.log("✅ Все юнит-тесты прошли.");

console.log("\n=== Performance Test ===");
console.time("Performance");
for (let i = 1; i <= 15; i++) {
  console.log(`n=${i} → ${countWellFormedParenthesis(i)}`);
}
console.timeEnd("Performance");
