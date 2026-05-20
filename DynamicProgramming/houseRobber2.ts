// 213. House Robber II
// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed.
// All houses at this place are arranged in a circle.
// That means the first house is the neighbor of the last one.
//  Meanwhile, adjacent houses have a security system connected,
// and it will automatically contact the police if two adjacent
// houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

function rob(nums: number[]): number {
  // Edge cases:
  // If there is only one house, we can rob it
  if (nums.length === 1) return nums[0];

  // If there are two houses, take the maximum of the two
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // Because houses are in a circle, we CANNOT rob both:
  // - first house (index 0)
  // - last house (index n-1)
  //
  // Split the problem into 2 subproblems:
  // 1) Rob houses from index 0 → n-2 (exclude last)
  // 2) Rob houses from index 1 → n-1 (exclude first)
  //
  // Then take the maximum of the two results.

  // dp[i] = max money we can rob up to house i
  const dp = new Array(nums.length).fill(0);

  // ---- CASE 1: include first house, exclude last ----
  dp[0] = nums[0]; // include first house
  dp[1] = Math.max(nums[0], nums[1]);

  // Build DP for houses [0 ... n-2] to exclude last
  for (let i = 2; i < nums.length - 1; i++) {
    // Either:
    // - skip current house → dp[i - 1]
    // - rob current house → dp[i - 2] + nums[i]
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  // Result when excluding last house
  let max1 = dp[nums.length - 2];

  // ---- CASE 2: exclude first house, include last ----
  // Reset DP for second scenario
  dp[0] = 0; // cannot take first house
  dp[1] = nums[1]; // start from second house

  // Build DP for houses [1 ... n-1] to include last
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  // Result when excluding first house
  let max2 = dp[nums.length - 1];

  // Final answer = best of the two scenarios
  return Math.max(max1, max2);
}

console.log(rob([1, 2, 3, 1])); // 4
