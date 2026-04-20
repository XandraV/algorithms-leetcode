// 930. Binary Subarrays With Sum

// Given a binary array nums and an integer goal, return the number of non-empty
// subarrays with a sum goal.
// A subarray is a contiguous part of the array.

function numSubarraysWithSum(nums: number[], goal: number): number {
  // number of subarrays with sum ≤ goal - number of subarrays with sum ≤ goal - 1 = number of subarrays with sum = k
  return atMost(nums, goal) - atMost(nums, goal - 1);
}

// number of subarrays with sum ≤ k
function atMost(nums: number[], k: number): number {
  if (k < 0) return 0;

  let left = 0;
  let sum = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > k) {
      sum -= nums[left];
      left++;
    }

    // all subarrays ending at right are valid
    count += right - left + 1;
  }

  return count;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
