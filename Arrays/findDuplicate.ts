/**
 * LeetCode 287 - Find the Duplicate Number
 * Medium
 *
 * Given an array nums containing n + 1 integers where each integer
 * is between 1 and n (inclusive), there is **only one repeated number**.
 *
 * Return this duplicate number.
 *
 * Constraints:
 * - You must not modify the array (read-only)
 * - You must use only constant extra space (O(1))
 * - Your runtime complexity should be less than O(n^2)
 
 * Hint:
 * - You can use cycle detection (Floyd's Tortoise and Hare) to find the duplicate.
 */

// hybrid approach  between:
// - Using a Set to detect duplicates ( O(n) space)
// - Floyd’s cycle detection (array as linked list, O(1) space)
function findDuplicate(nums: number[]): number {
  // track seen numbers
  const seen = new Set<number>();
  let value = nums[0];

  while (!seen.has(value)) {
    seen.add(value);
    value = nums[value];
    // ^^ Go to the index indicated by the current value.
    // Each step moves along the path the array creates,
    // as if the array is a linked list of indices.
    // Because nums contains numbers 1..n with one duplicate,
    // following the values as indices must eventually repeat.
    // That repeat is exactly the duplicate number,
    // because two different indices point to the same number → cycle in the “pointer chain”.
  }

  return value;
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3

// efficient solution, O(n log n) time and O(1) space
function findDuplicate3(nums: number[]): number {
  nums.sort((a, b) => a - b); // O(nlogn)
  for (let i = 0; i < nums.length; i++) {
    // O(n)
    if (nums[i] == nums[i - 1]) return nums[i];
  }
  return -1;
}

// efficient solution, O(n) time and O(n) space
function findDuplicate2(nums: number[]): number {
  const seen = new Set<number>();

  for (let num of nums) {
    if (seen.has(num)) return num;
    seen.add(num);
  }

  return -1; // should never happen based on problem constraints
}

// inefficient solution, O(n) time and O(n) space
function findDuplicate0(nums: number[]): number {
  const freq = Array.from(
    { length: Math.max(nums.length, Math.max(...nums)) },
    () => 0,
  );

  for (let num of nums) {
    freq[num] = freq[num] + 1;
    if (freq[num] === 2) {
      return num;
    }
  }
  return -1;
}

console.log(findDuplicate([3, 3, 3, 3, 3])); // 2
