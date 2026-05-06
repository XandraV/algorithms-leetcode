// 491. Non-decreasing Subsequences
// Given an integer array nums, return all the different possible non-decreasing
// subsequences of the given array with at least two elements.
//  You may return the answer in any order.

function findSubsequences(nums: number[]): number[][] {
  const results: number[][] = [];

  function backtrack(startIdx: number, path: number[]) {
    // Requirement: length must be at least 2
    if (path.length >= 2) {
      results.push([...path]);
    }

    // Use a Set to prevent using the same number at this specific level
    // of the recursion tree (prevents duplicates)
    const usedAtThisLevel = new Set<number>();

    for (let i = startIdx; i < nums.length; i++) {
      const curr = nums[i];
      const prev = path[path.length - 1];

      // Non-decreasing: is current >= previous?
      // Duplicate check -> usedAtThisLevel
      if ((path.length === 0 || curr >= prev) && !usedAtThisLevel.has(curr)) {
        usedAtThisLevel.add(curr);

        path.push(curr);
        backtrack(i + 1, path);
        path.pop();
      }
    }
  }

  backtrack(0, []);
  return results;
}
