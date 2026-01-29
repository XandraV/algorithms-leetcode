// Given an integer array nums, find the subarray with the largest sum,
// and return its sum.
function maxSubArray(nums: number[]): number {
  let maxVal = nums[0];
  const dp: number[] = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    maxVal = Math.max(maxVal, dp[i]);
  }
  return maxVal;
}

console.log(maxSubArray([-1, -2])); // -1
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
