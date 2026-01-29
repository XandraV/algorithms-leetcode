// You want to maximize your profit by choosing a single day
// to buy one stock and choosing a different day in the future to sell that stock.
function maxProfit1(prices: number[]): number {
  let maxProfit = -Infinity;
  let min = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    maxProfit = Math.max(maxProfit, prices[i] - min);
  }

  return maxProfit > 0 ? maxProfit : 0;
}

console.log(maxProfit1([7, 1, 5, 3, 6, 4])); // 5
