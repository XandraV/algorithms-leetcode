// This function calculates the maximum profit
// that can be made by buying and selling stock
// once in the given array `prices`.
// returns the maximum possible profit.
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }
    profit = price - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

function maxProfit2(prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    let profit = price - minPrice;
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
}

let increasingPrices = [1, 2, 3, 4, 5];
console.log("Actual Max Profit:", maxProfit(increasingPrices));

let decreasingPrices = [5, 4, 3, 2, 1];
console.log("Actual Max Profit:", maxProfit(decreasingPrices));

let randomPrices = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Actual Max Profit:", maxProfit(randomPrices));

let samePrices = [2, 2, 2, 2, 2];
console.log("Actual Max Profit:", maxProfit(samePrices));

let emptyPrices = [];
console.log("Actual Max Profit:", maxProfit(emptyPrices));

let negativePrices = [-1, -2, -3, -4];
console.log("Actual Max Profit:", maxProfit(negativePrices));

let mixedPrices = [1, 4, 2, -1, 6];
console.log("Actual Max Profit:", maxProfit(mixedPrices));
