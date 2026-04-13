// Dynamic proramming solution
const fibDP = (n: number): number => {
  // next = prev + curr
  const dp = [];

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(fibDP(5)); // 5
