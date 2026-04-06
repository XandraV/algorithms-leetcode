// 518. Coin Change II
// You are given an integer array coins representing coins of different
// denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return 0.
// You may assume that you have an infinite number of each kind of coin.
// The answer is guaranteed to fit into a signed 32-bit integer.

// expected solution is dp
function change(amount: number, coins: number[]): number {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    // for each coin, we loop through the amounts from the coin value to the target amount
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
}

// more efficient backtracking solution that generates only combinations, not permutations
function change4(amount: number, coins: number[]): number {
  let combinations = 0; // result/memo

  // Using index-based recursion:
  // start ensures you never pick a smaller-index coin later, so [1,2] can happen but [2,1] cannot.
  //generates only combinations naturally, no sorting or set needed.
  function backtrack(start: number, pathSum: number) {
    if (pathSum === amount) {
      combinations++;
      return;
    }

    for (let i = start; i < coins.length; i++) {
      let coin = coins[i];
      if (pathSum + coin > amount) continue;

      backtrack(i, pathSum + coin);
      // pathSum is a parameter, not shared state
      // we already passed pathSum + coin into recursion
      // so there is nothing to undo after the recursive call returns.
    }
  }

  backtrack(0, 0);
  console.log(combinations);
  return combinations;
}

// sort to convert permutations into a canonical form so duplicates don’t count.
// but it’s slow, because we generate all permutations first.
function change3(amount: number, coins: number[]): number {
  const combinations = new Set<string>(); // result/memo
  const path: number[] = [];
  let pathSum = 0;

  function backtrack() {
    let currPath = path.sort((a, b) => a - b).join(",");
    if (pathSum === amount && !combinations.has(currPath)) {
      combinations.add(currPath);
      return;
    }

    for (let coin of coins) {
      if (pathSum + coin > amount) continue;
      pathSum += coin;
      path.push(coin);
      backtrack();
      pathSum -= coin;
      path.pop();
    }
  }

  backtrack();
  console.log(combinations);
  return combinations.size;
}

function change2(amount: number, coins: number[]): number {
  const combinations = new Set<string>(); // result/memo
  const path: number[] = [];
  let pathSum = 0;

  function backtrack(coin: number) {
    pathSum += coin;
    path.push(coin);
    if (pathSum > amount) return;

    let currPath = path.sort((a, b) => a - b).join(",");
    if (pathSum === amount && !combinations.has(currPath)) {
      combinations.add(currPath);
      return;
    }

    for (let c of coins) {
      backtrack(c);
      pathSum -= c;
      path.pop();
    }
  }

  for (let coin of coins) {
    backtrack(coin);
    pathSum = 0;
    path.length = 0;
  }
  console.log(combinations);
  return combinations.size;
}
console.log(change(5, [1, 2, 5])); // 4
console.log(change2(5, [1, 2, 5])); // 4
