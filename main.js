// main.js
function countWellFormedParenthesis(nCouples) {
  if (nCouples < 0) {
    throw new Error("nCouples must be a non-negative integer");
  }

  const dp = Array(nCouples + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= nCouples; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }

  return dp[nCouples];
}

module.exports = { countWellFormedParenthesis };