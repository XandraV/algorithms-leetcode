/*
Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
 */
// 2 x O(log n) = O(log n), O(1) space - Binary Search
const searchRange = function (nums, target) {
  function getBound(lower) {
    let low = 0;
    let high = nums.length - 1; // 5
    let bound = -1; // upper or lower bound

    while (low <= high) {
      let midPoint = Math.floor((low + high) / 2);

      if (nums[midPoint] === target) {
        bound = midPoint; // update/remembers index or bound when target is found
        if (lower) {
          // there be another target earlier than this one because the array is sorted
          // hence if we're looking for lower bound
          // going lower with the higher pointer forces binary search to explore smaller indices too
          // go left
          high = midPoint - 1;
        } else {
          // go right
          low = midPoint + 1;
        }
      }

      if (target < nums[midPoint]) {
        high = midPoint - 1; //
      }

      if (target > nums[midPoint]) {
        low = midPoint + 1;
      }
    }

    return bound;
  }

  let lowerBound = getBound(true);
  // if (first === -1) return [-1, -1]; // target not found
  let upperBound = getBound(false);

  return [lowerBound, upperBound];
};

// Test 1
const nums1 = [5, 7, 7, 8, 8, 10];
const target1 = 8;
console.log(searchRange(nums1, target1)); // [3, 4]

// Test 2
const nums2 = [5, 7, 7, 8, 8, 10];
const target2 = 6;
console.log(searchRange(nums2, target2)); // [-1, -1]

// Test 3
const nums3 = [];
const target3 = 0;
console.log(searchRange(nums3, target3)); // [-1, -1]

// Test 4: Single element, target present
const nums4 = [1];
const target4 = 1;
console.log(searchRange(nums4, target4)); // [0, 0]

// Test 5: Single element, target absent
const nums5 = [1];
const target5 = 2;
console.log(searchRange(nums5, target5)); // [-1, -1]

// Test 6: Multiple occurrences
const nums6 = [2, 2, 2, 2, 2];
const target6 = 2;
console.log(searchRange(nums6, target6)); // [0, 4]

// Test 7: Target at the beginning
const nums7 = [3, 3, 4, 5, 6];
const target7 = 3;
console.log(searchRange(nums7, target7)); // [0, 1]

// Test 8: Target at the end
const nums8 = [1, 2, 3, 4, 5, 5];
const target8 = 5;
console.log(searchRange(nums8, target8)); // [4, 5]

// Test 8: Target at the end
const nums9 = [1, 2, 3, 3, 3, 4, 4, 5, 5];
const target9 = 3;
console.log(searchRange(nums9, target9)); // [2, 4]
