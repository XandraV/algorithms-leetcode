// 53. Maximum Subarray
// Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Do I add nums[i] to the existing sum,
    // or do I start a fresh subarray at index i?
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
    } else {
      currentSum += nums[i];
    }

    // Update the global best
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
function maxSubArrayWithRange(nums: number[]): number[] {
  let maxSum = nums[0];
  let currentSum = nums[0];

  let start = 0; // Moving pointer for current window
  let maxStart = 0; // Best window start
  let maxEnd = 0; // Best window end

  for (let i = 1; i < nums.length; i++) {
    // Decision: Do I add nums[i] to the existing sum,
    // or do I start a fresh subarray at index i?
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      start = i; // Restart the window
    } else {
      currentSum += nums[i];
    }

    // Update the global best
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStart = start;
      maxEnd = i;
    }
  }

  // Return the sliced subarray
  return nums.slice(maxStart, maxEnd + 1);
}

console.log(maxSubArrayWithRange([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Output: [4, -1, 2, 1] (sum is 6)

function maxSubArrayDP(nums: number[]): number {
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
