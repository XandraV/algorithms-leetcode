// Return an array containing any combination of elements that add up to exactly the ragetSum

const howSum = (targetSum: number, nums: number[]): boolean => {
  const dp = Array(targetSum + 1).fill(null);

  // Base case: we can always make sum 0 (by choosing nothing)
  dp[0] = [];

  // Iterate through all possible sums from 0 → targetSum
  for (let i = 0; i < dp.length; i++) {
    // Only proceed if current sum 'i' is achievable
    if (dp[i] !== null) {
      // Try adding each number to current sum
      for (let num of nums) {
        // If the new sum is within bounds, mark it as achievable
        if (i + num < dp.length) {
          dp[i + num] = [...dp[i], num];
        }
      }
    }
  }

  // Final answer: can we form targetSum?
  return dp[targetSum];
};

console.log(howSum(7, [5, 3, 4])); // [4,3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2,2,2,2]
console.log(howSum(300, [7, 14])); // null
