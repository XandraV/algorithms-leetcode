// 45 Jump Game II
// You are given a 0-indexed array of integers nums of length n.
// You are initially positioned at index 0.

// Each element nums[i] represents the maximum length of a forward jump
// from index i. In other words, if you are at index i,
// you can jump to any index (i + j) where:
// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach index n - 1.
// The test cases are generated such that you can reach index n - 1.

// O(n) optimal solution
function jump(nums: number[]): number {
  let jumps = 0;
  let farthest = 0;
  let endCurrentJump = 0;

  // The last index doesn’t require a jump
  // only need jumps to reach the last index, not beyond it.
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === endCurrentJump) {
      jumps++;
      endCurrentJump = farthest;
    }
  }

  return jumps;
}

// O(n^2) not very optimal
function jump2(nums: number[]): number {
  const n = nums.length;
  if (n <= 1) return 0; // already at last index

  const dp: number[] = new Array(n).fill(Infinity);
  dp[0] = 0; // start at index 0

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        // can jump from j to i
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[n - 1]; // minimum jumps to last index
}

console.log(jump([2, 3, 1, 1, 4]));
