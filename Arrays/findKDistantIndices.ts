// 2200. Find All K-Distant Indices in an Array
// You are given a 0-indexed integer array nums and two integers key and k.
// A k-distant index is an index i of nums for which there exists at least
// one index j such that |i - j| <= k and nums[j] == key.
// Return a list of all k-distant indices sorted in increasing order.

function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const res = [];
  const keyIndices = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      keyIndices.push(i);
    }
  }

  for (let j = 0; j < nums.length; j++) {
    const valid = keyIndices.some((idx) => Math.abs(idx - j) <= k);
    if (valid) {
      res.push(j);
    }
  }

  return res;
}

function findKDistantIndicesOptimal(nums: number[], key: number, k: number): number[] {
    const res: number[] = [];
    let rightBoundary = -1;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === key) {
            const left = Math.max(0, j - k);
            const right = Math.min(nums.length - 1, j + k);

            for (let i = Math.max(left, rightBoundary + 1); i <= right; i++) {
                res.push(i);
            }

            rightBoundary = right;
        }
    }

    return res;
}