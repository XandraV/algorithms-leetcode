/**
 * LeetCode 334. Increasing Triplet Subsequence
 *
 * Given an integer array `nums`, return `true` if there exists a triple of indices `(i, j, k)`
 * such that `i < j < k` and `nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.
 *
 * Example 1:
 *   Input: nums = [1,2,3,4,5]
 *   Output: true
 *   Explanation: Any triplet where i < j < k is valid.
 *
 * Example 2:
 *   Input: nums = [5,4,3,2,1]
 *   Output: false
 *   Explanation: No triplet exists.
 *
 * Example 3:
 *   Input: nums = [2,1,5,0,4,6]
 *   Output: true
 *   Explanation: One of the valid triplet is (1, 4, 5), because nums[1] == 1 < nums[4] == 4 < nums[5] == 6.
 *
 * Constraints:
 *   1 <= nums.length <= 5 * 10^5
 *   -2^31 <= nums[i] <= 2^31 - 1
 *
 * Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
 */
function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num <= first) {
      first = num; // smallest so far
    } else if (num <= second) {
      second = num; // second smallest
    } else {
      return true; // num > first && num > second
    }
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([0, 4, 1, 3])); // true
