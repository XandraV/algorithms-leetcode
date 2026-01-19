// Given an array of positive integers nums and a positive integer target,
// return the minimal length of a subarray whose sum is smaller than or equal to target.
//  If there is no such subarray, return 0 instead.

function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum = sum - nums[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

const target = 7;
const nums2 = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums2));
// 2
