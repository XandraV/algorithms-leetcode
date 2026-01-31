/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated
at an unknown index k (1 <= k < nums.length) such that the resulting array is
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
*/
// Complexity O(log n) time | O(1) space
const search = function (nums, target) {
  let midPoint = -1;
  let low = 0;
  let high = nums.length - 1;

  // loop while low is less than or equal to high
  // because when low crosses high or high crosses low
  // it means the target is not present
  // and we return -1
  while (low <= high) {
    midPoint = Math.floor((high + low) / 2);

    // if target is found, return the midPoint index
    if (nums[midPoint] === target) {
      return midPoint;
    }

    // check which side is sorted
    // left side is sorted
    if (nums[low] <= nums[midPoint]) {
      // check if target is in the left side
      if (nums[low] <= target && target < nums[midPoint]) {
        // go left ie decrease high towards left=low
        high = midPoint - 1;
      } else {
        // else go right ie increase low towards right=high
        low = midPoint + 1;
      }
    }
    // right side is sorted
    if (nums[high] >= nums[midPoint]) {
      // check if target is in the right side
      if (target <= nums[high] && nums[midPoint] < target) {
        // go right ie increase low towards right=high
        low = midPoint + 1;
      } else {
        // else go left ie decrease high towards left=low
        high = midPoint - 1;
      }
    }
  }

  return -1;
};

console.log(search([7, 7, 7, 0, 1, 2, 2], 0));
