// 152. Maximum Product Subarray
// Given an integer array nums, find a subarray that has the largest product,
// and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// Note that the product of an array with a single element is the value of that element.
function maxProduct(nums: number[]): number {
  let maxSoFar = nums[0];
  const maxEndingHere = new Array(nums.length).fill(null);
  const minEndingHere = new Array(nums.length);
  maxEndingHere[0] = nums[0];
  minEndingHere[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let tempMax = maxEndingHere[i - 1] * curr; // multiply with current
    let tempMin = minEndingHere[i - 1] * curr; // multiply with current

    minEndingHere[i] = Math.min(tempMax, tempMin, curr);
    maxEndingHere[i] = Math.max(tempMax, tempMin, curr);
    maxSoFar = Math.max(maxSoFar, maxEndingHere[i]); // only compare with max
  }

  return maxSoFar;
}

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([0, 2])); // 2

// Why sliding window fails but DP works
// Sliding window assumes:
// - expanding = always good or predictable
// - shrinking fixes invalid state
// But here:
// - negative numbers destroy monotonicity
// - product is not monotonic when expanding/shrinking
