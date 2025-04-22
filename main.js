export function countWellFormedParenthesis(n) {
  if (n < 0) throw new Error("n must be non-negative");

  const factorial = (x) => {
    let res = 1n;
    for (let i = 2n; i <= x; i++) res *= i;
    return res;
  };

  const bigN = BigInt(n);
  const result = factorial(2n * bigN) / (factorial(bigN + 1n) * factorial(bigN));
  return Number(result);
}
