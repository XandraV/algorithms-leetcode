// Return a boolean indicating whether or not it is possible to generate
// the targetSum using numbers from the array given in nums.

const canSum = (targetSum: number, nums: number[]): boolean => {
  // dp[i] = can we form sum 'i' using elements from nums
  const dp = new Array(targetSum + 1).fill(false);

  // Base case: we can always make sum 0 by choosing nothing
  dp[0] = true;

  // Iterate through all possible sums from 0 → targetSum
  for (let i = 0; i < dp.length; i++) {
    // only proceed if current sum 'i' is achievable
    if (dp[i] === true) {
      // try adding each number to current sum
      for (let num of nums) {
        // if the new sum is within bounds, mark it as achievable
        if (i + num < dp.length) {
          dp[i + num] = true;
        }
      }
    }
  }

  return dp[targetSum];
};

console.log(canSum(7, [5, 3, 4]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
