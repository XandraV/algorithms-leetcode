// 55. Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
function canJump(nums: number[]): boolean {
  if (nums[0] === 0 && nums.length === 1) return true;
  if (nums[0] === 0 && nums.length > 1) return false;

  // dp[i] = true if we can reach index i from index 0.
  const dp = new Array(nums.length).fill(false);
  dp[0] = true;

  for (let i = 1; i < nums.length; i++) {
    let j = 0;
    while (j < i) {
      if (j + nums[j] >= i && dp[j]) {
        dp[i] = true;
        break;
      }
      j++;
    }
  }

  return dp[nums.length - 1];
}

console.log(canJump([2, 3, 1, 1, 4])); // true
