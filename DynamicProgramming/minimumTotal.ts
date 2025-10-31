/*
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. 
More formally, if you are on index i on the current row, you may move to either 
index i or index i + 1 on the next row.


Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
 */

const minimumTotal = (triangle: any) => {
  // Copy last row (so we don't mutate original)
  // triangle.length = 4
  // add last row to dp
  const dp = [...triangle[triangle.length - 1]]; // [4, 1, 8, 3]

  // Work upwards from 2nd last row
  for (let i = triangle.length - 2; i >= 0; i--) {
    // starting with 2nd last row -> i = 2
    for (let j = 0; j < triangle[i].length; j++) {
      // triangle[i=2] = [6, 5, 7] loop over all items

      //            6, 5, 7 <- t[i][j]
      //    dp = [4, 1, 8, 3]  <- d[j]
      //   we update d[j] with t[i][j] plus the value that is the smallest of the 2 from which we can come to it
      //  ie smallest of dp[j] and dp[j + 1]
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
    }
  }

  //              6, 5, 7     <- t[i][j]
  //      dp = [4, 1, 8, 3]   <- d[j]
  // --------- after update ----------------------
  //      dp = [7, 6, 10, {3}]   <- d[j]
  // --------- next iteration ----------------------
  //              3, 4,          <- t[i][j]
  //      dp = [7, 6, 10, {3}]   <- d[j]
  // --------- after update ----------------------
  //      dp = [9, 10, 10, {3}]   <- d[j]
  // --------- next iteration ----------------------
  //              2
  //      dp = [9, 10, {10}, {3}]   <- d[j]
  // --------- after update ----------------------
  //      dp = [11, {10}, {10}, {3}]   <- d[j]
  // dp[0] is the minimum - note that {} denotes redundant items
  // eventually all item except the first one will be redundant
  return dp[0];
};

// Example
const t = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(t)); // ✅ 11
