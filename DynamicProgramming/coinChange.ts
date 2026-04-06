// 322. Coin Change
// You are given an integer array coins representing coins of different
// denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

function coinChange(coins: number[], amount: number): number {
  // dp[i] = minimum number of coins to make amount i
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 0 coins needed to make 0

  for (let i = 0; i <= amount; i++) {
    // we’re trying to make amount i and pick a coin num
    // remaining = i - coin
    // if we already know the best way to make i - coin, how do we get i?
    // Take the best way to make i - coin ie dp[i-coin]
    // Add this one coin to it -> dp[i-coin] + 1
    for (let coin of coins) {
      if (i - coin >= 0) {
        // check coin is not too large
        // take minimum of dp[i] and dp[i - coin] + 1 because we are trying multiple coins
        // so we will keep overiding dp[i] until we find the minimum
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

//backtracking - time limit exceeded
function coinChange2(coins: number[], amount: number): number {
  let minCount = Infinity;
  let count = 0; // number of coins in current path
  let pathSum = 0;

  function backtrack() {
    if (pathSum === amount) {
      minCount = Math.min(minCount, count);
      return;
    }

    for (let coin of coins) {
      if (pathSum + coin > amount) continue;

      pathSum += coin;
      count++;

      backtrack();

      count--;
      pathSum -= coin;
    }
  }

  backtrack();

  return minCount === Infinity ? -1 : minCount;
}

console.log(coinChange([1, 2, 5], 11));
