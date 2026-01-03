// Best Time to Buy and Sell Stock with Cooldown
//  You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Find the maximum profit you can achieve. You may complete as many transactions as you like
// (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously
// i.e., you must sell the stock before you buy again.

function maxProfit(prices: number[]): number {
  let n = prices.length;
  let dp: Record<string, number> = {};
  let dfs = (i: number, buy: boolean): number => {
    if (i >= n) return 0;

    if (dp[`${i}-${buy}`]) return dp[`${i}-${buy}`];
    if (buy) {
      dp[`${i}-${buy}`] = dfs(i + 1, !buy) - prices[i];
    } else {
      dp[`${i}-${buy}`] = dfs(i + 2, !buy) + prices[i];
    }
    dp[`${i}-${buy}`] = Math.max(dfs(i + 1, buy), dp[`${i}-${buy}`]);
    return dp[`${i}-${buy}`];
  };

  return dfs(0, true);
}

console.log(maxProfit([1, 2, 3, 0, 2])); // 3
