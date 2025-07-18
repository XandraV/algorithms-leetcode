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


console.log("Increasing prices:");
let increasingPrices = [1, 2, 3, 4, 5];
console.log("Array:", increasingPrices);
console.log("Expected Max Profit: 4");
console.log("Actual Max Profit:", maxProfit(increasingPrices));
console.log("---------------");


console.log("Decreasing prices:");
let decreasingPrices = [5, 4, 3, 2, 1];
console.log("Array:", decreasingPrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(decreasingPrices));
console.log("---------------");

console.log("Random prices:");
let randomPrices = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Array:", randomPrices);
console.log("Expected Max Profit: 8");
console.log("Actual Max Profit:", maxProfit(randomPrices));
console.log("---------------");

// ------------------------------------
//  Test array with same prices
// ------------------------------------
console.log("Same prices:");
let samePrices = [2, 2, 2, 2, 2];
console.log("Array:", samePrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(samePrices));
console.log("---------------");

// ------------------------------------
//  Test empty array
// ------------------------------------
console.log("Empty array:");
let emptyPrices = [];
console.log("Array:", emptyPrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(emptyPrices));
console.log("---------------");

// ------------------------------------
//  Test array with negative prices
// ------------------------------------
console.log("Negative prices:");
let negativePrices = [-1, -2, -3, -4];
console.log("Array:", negativePrices);
console.log("Expected Max Profit: 0");
console.log("Actual Max Profit:", maxProfit(negativePrices));
console.log("---------------");

// ------------------------------------
//  Test array with mixed prices
// ------------------------------------
console.log("Mixed prices:");
let mixedPrices = [1, 4, 2, -1, 6];
console.log("Array:", mixedPrices);
console.log("Expected Max Profit: 7");
console.log("Actual Max Profit:", maxProfit(mixedPrices));
console.log("---------------");
