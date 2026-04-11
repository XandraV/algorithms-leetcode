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
const search = function (nums:number[], target:number):number {
  let midPoint = -1;
  let left = 0;
  let righ = nums.length - 1;

  // loop while left is less than or equal to righ
  // because when left crosses righ or righ crosses left
  // it means the target is not present
  // and we return -1
  while (left <= righ) {
    midPoint = Math.floor((righ + left) / 2);

    // if target is found, return the midPoint index
    if (nums[midPoint] === target) {
      return midPoint;
    }

    // check which side is sorted
    // left side is sorted
    if (nums[left] <= nums[midPoint]) {
      // check if target is in the left side
      if (nums[left] <= target && target < nums[midPoint]) {
        // go left ie decrease righ towards left=left
        righ = midPoint - 1;
      } else {
        // else go right ie increase left towards right=righ
        left = midPoint + 1;
      }
    }
    // right side is sorted
    if (nums[righ] >= nums[midPoint]) {
      // check if target is in the right side
      if (target <= nums[righ] && nums[midPoint] < target) {
        // go right ie increase left towards right=righ
        left = midPoint + 1;
      } else {
        // else go left ie decrease righ towards left=left
        righ = midPoint - 1;
      }
    }
  }

  return -1;
};

console.log(search([7, 7, 7, 0, 1, 2, 2], 0));
