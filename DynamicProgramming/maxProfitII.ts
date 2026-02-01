// You are given an integer array prices where prices[i] is
// the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock.
// You can only hold at most one share of the stock at any time. However, you can sell and buy the stock multiple times on the same day, ensuring you never hold more than one share of the stock.

// Find and return the maximum profit you can achieve.

// sum up intermediate gains till the end as they cancel out
// and even if p1 > p4 and prices strictly increasing
// (p2 - p1) + (p3 - p2) + (p4 - p3) = p4 - p1
function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
}
