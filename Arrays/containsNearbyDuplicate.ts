// Given an integer array nums and an integer k, return true if there are two distinct indices i
// and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const seenMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (seenMap.has(curr)) {
      if (i - seenMap.get(curr) <= k) return true;
    }

    // if a value x appeared before at index j and now appears again at index i,
    // the distance between these two occurrences is i - j.
    // always update to latest index as it gives the smallest distance to i
    seenMap.set(nums[i], i);
  }

  return false;
}

// Keep a window of size k and check if the current number already exists inside that window.
function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (window.size > k) {
      window.delete(nums[i - k - 1]);
    }
    if (window.has(nums[i])) {
      return true;
    }
    window.add(nums[i]);
  }
  return false;
}

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate2([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate2([1, 2, 3, 1], 3)); // true
