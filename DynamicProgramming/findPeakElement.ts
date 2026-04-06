// 162. Find Peak Element
// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index.
// If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞.
// In other words, an element is always considered to be strictly greater
// than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.

function findPeakElement(nums: number[]): number {
  const n = nums.length;

  if (n === 1) return 0;

  // check edges
  if (nums[0] > nums[1]) return 0; // first
  if (nums[n - 1] > nums[n - 2]) return n - 1; // last

  for (let i = 1; i < n - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }

  return -1; 
}
