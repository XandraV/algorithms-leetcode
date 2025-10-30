function lengthOfLIS(nums: number[]): number {
  // dp to store the length of longest increasing subsequence at each position
  // initialise with 1 as the min length of increasing subsequence at each position is 1
  const dp = new Array(nums.length).fill(1);

  // loop through nums backwards to the start
  // check if nums[i] < nums[j] where j = i + 1
  // if yes then update dp[i] with length of the sub seq (dp[j] + 1) only if
  // that's greater than what we already found for position i
  // ie. dp[i] = max(dp[i], dp[j] + 1)

  // keep track of the max length found so far
  let maxVal = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        maxVal = Math.max(maxVal, dp[j] + 1);
      }
    }
  }

  return maxVal;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
