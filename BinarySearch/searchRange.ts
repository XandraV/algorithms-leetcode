/*
34. Find First and Last Position of Element in Sorted Array
Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
 */
// 2 x O(log n) = O(log n), O(1) space - Binary Search
function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let curr = nums[mid];

    if (curr === target) {
      let l = mid;
      let r = mid;

      // expand left
      while (l - 1 >= 0 && nums[l - 1] === target) {
        l--;
      }

      // expand right
      while (r + 1 < nums.length && nums[r + 1] === target) {
        r++;
      }

      return [l, r];
    }

    if (curr > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return [-1, -1];
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
