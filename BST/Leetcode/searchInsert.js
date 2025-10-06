/*
 Given a sorted array of distinct integers and a target value, 
 return the index if the target is found. 
 If not, return the index where it would be if it were inserted in order.
 You must write an algorithm with O(log n) runtime complexity.
 */
// Complexity is O(log n), O(1) space - Binary Search
const binarySearch = function (nums, target) {
  let midPoint = -1;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    midPoint = Math.floor((high + low) / 2);

    // if target is found, return the midPoint index
    if (nums[midPoint] === target) {
      return midPoint;
    }

    if (target < nums[midPoint]) {
      high = midPoint - 1;
    }

    if (target > nums[midPoint]) {
      low = midPoint + 1;
    }
  }

  // if target is not found, return -1
  return -1;
};

// Example 1
const nums1 = [1, 3, 5, 6];
const target1 = 5;
console.log("Test 1:", binarySearch(nums1, target1)); // Expected output: 2

// Example 2
const nums2 = [1, 3, 5, 6];
const target2 = 2;
console.log("Test 2:", binarySearch(nums2, target2)); // Expected output: -1

// Example 3
const nums3 = [1, 3, 5, 6];
const target3 = 7;
console.log("Test 3:", binarySearch(nums3, target3)); // Expected output: -1
