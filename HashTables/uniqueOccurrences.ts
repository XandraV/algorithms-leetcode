// 1207. Unique Number of Occurrences
// Given an array of integers arr, return true if the number of occurrences of each value
// in the array is unique or false otherwise.

// Time: O(n)
// Space: O(n) worst case: all elements are unique → map size n
function uniqueOccurrences(arr: number[]): boolean {
  let freq = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    freq.set(arr[i], (freq.get(arr[i]) ?? 0) + 1);
  }

  return new Set(freq.values()).size === freq.size;
}

// early termination, same complexity
function uniqueOccurrences2(arr: number[]): boolean {
  const freq = new Map<number, number>();
  for (const num of arr) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  const seen = new Set<number>();
  for (const count of freq.values()) {
    if (seen.has(count)) return false;
    seen.add(count);
  }

  return true;
}
