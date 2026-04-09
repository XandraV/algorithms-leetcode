// 714. Best Time to Buy and Sell Stock with Transaction Fee
// You are given an array prices where prices[i] is the price of a given stock on the ith day,
// and an integer fee representing a transaction fee.
// Find the maximum profit you can achieve. You may complete as many transactions as you like,
// but you need to pay the transaction fee for each transaction.

// Note:
// You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
// The transaction fee is only charged once for each stock purchase and sale.

function maxProfit(prices: number[], fee: number): number {
  // hold[i] = max profit on day i when HOLDING a stock ie keep holding or buy
  // cash[i] = max profit on day i when NOT holding a stock ie amount if cash we have
  const hold = new Array(prices.length);
  const cash = new Array(prices.length);
  hold[0] = -prices[0]; //  bought stock → negative profit
  cash[0] = 0; //  did nothing

  for (let i = 1; i < prices.length; i++) {
    hold[i] = Math.max(
      hold[i - 1], // keep holding
      cash[i - 1] - prices[i], // buy today
    );
    cash[i] = Math.max(
      cash[i - 1], // do nothing
      hold[i - 1] + prices[i] - fee, // sell today
    );
  }

  return cash[cash.length - 1];
}

function maxProfit2(prices: number[], fee: number): number {
  let hold = -prices[0];
  let cash = 0;

  for (let i = 1; i < prices.length; i++) {
    const prevHold = hold;
    hold = Math.max(hold, cash - prices[i]);
    cash = Math.max(cash, prevHold + prices[i] - fee);
  }

  return cash;
}
