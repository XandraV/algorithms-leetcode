// 525. Contiguous Array
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
// If the running sum reaches the same value at two different indices, everything between them has equal 0s and 1s
// we just track the earliest occurrence of each sum to find the longest such subarray.
function findMaxLength(nums: number[]): number {
  let maxLen = 0;
  // let prefixSum = 0; can just use a variable instead of an array, but I want to keep the prefix sum for better understanding
  const prefixSum: number[] = [];
  const m = new Map();
  m.set(0, -1); // initialized with base case to handle the case when the subarray starts from index 0
  prefixSum[0] = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum.push(prefixSum[prefixSum.length - 1] + (nums[i] === 0 ? -1 : 1));
    let compl = prefixSum[prefixSum.length - 1];
    // if the complement exists in the map, it means we have found a subarray with equal number of 0 and 1
    if (m.has(compl)) {
      const complIdx = m.get(compl);
      const subArrLen = i - complIdx;
      maxLen = Math.max(maxLen, subArrLen);
    } else {
      m.set(prefixSum[prefixSum.length - 1], i);
    }
  }
  return maxLen;
}

console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0])); // 6
// The 3 key ideas:
// 1. Treat 0 as -1 — so a subarray with equal 0s and 1s has a sum of 0.
// 2. Build a running prefix sum — if prefixSum[j] === prefixSum[i], then the subarray [j+1..i] sums to 0 (equal 0s and 1s).
// 3. Use a map to store the first index where each prefix sum was seen — this lets you find matches in O(1) instead of nested loops.

// Step-by-step with [0, 1, 1, 1, 1, 1, 0, 0, 0]:

// Index:     -1   0   1   2   3   4   5   6   7   8
// Value:          0   1   1   1   1   1   0   0   0
// PrefixSum:  0  -1   0   1   2   3   4   3   2   1
//                         ↑                       ↑
//                     sum=1 at                    sum=1 at
//                     idx 2                       idx 8 → length = 8-2 = 6 ✅
