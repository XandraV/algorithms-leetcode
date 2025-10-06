/*There is a robot on an m x n grid. The robot is initially located 
at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner 
(i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths 
that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.*/

function uniquePathsNoCache(m: number, n: number): number {
  let noOfUniquePath = 0;

  // m x n -> [i][j]
  // right -> [i][j++ until j<n-1]
  // down -> [i++ until i<m-1][j]
  // if(i==m-1 && j == n-1) unique path

  function recurUniquePaths(i: number, j: number) {
    if (i == m - 1 && j == n - 1) {
      noOfUniquePath++;
      return;
    }
    if (j <= n - 1) {
      recurUniquePaths(i, j + 1); // move right
    }
    if (i <= m - 1) {
      recurUniquePaths(i + 1, j); //move down
    }
  }

  recurUniquePaths(0, 0);
  return noOfUniquePath;
}

function uniquePathsWithCache(m: number, n: number): number {
  let cache = {};

  function recurUniquePaths(i: number, j: number) {
    if (i == m - 1 && j == n - 1) {
      return 1;
    }
    if (cache[`${i}${j}`] !== undefined) {
      return cache[`${i}${j}`];
    }

    let paths = 0;
    if (i < m - 1) paths += recurUniquePaths(i + 1, j); // move down
    if (j < n - 1) paths += recurUniquePaths(i, j + 1); // move right

    cache[`${i},${j}`] = paths;
    return paths;
  }

  return recurUniquePaths(0, 0);
}

console.log(uniquePathsWithCache(3, 7)); //28

// Example: 3×3 grid
// Coordinates go from (0,0) (top-left) to (2,2) (bottom-right).
// 1 1 1
// 1 ? ?
// 1 ? ?
// dp[0][0] = 1 → there’s exactly one way to be at the start.
// dp[0][1] = 1 → only move right from (0,0).
// dp[1][0] = 1 → only move down from (0,0).
// dp[1][1] = dp[0][1] + dp[1][0] = 2 → you can arrive from top or left.
// dp[1][2] = dp[0][2] + dp[1][1] = 1+2=3
// dp[2][1] = dp[1][1] + dp[2][0] = 2+1=3
// dp[2][2] = dp[1][2] + dp[2][1] = 6 → that’s the answer: 6 paths total.

// d[i][j] = number of unique paths to reach cell (i,j).
// d[i][j] = dp[i-1[j] + dp[i][j-1]

function uniquePathsDP(m: number, n: number): number {
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // initialize edges
  // to move along the first column, there's only one way to do it: keep moving down
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  // to move along the first row, there's only one way to do it: keep moving right
  for (let j = 0; j < n; j++) dp[0][j] = 1;

  // recurrence
  // can't start with i = 0 or j = 0 because we would be accessing dp[-1][j] or dp[i][-1]
  // which is out of bounds, we start from 1 instead and initialize the first row and column to 1 above
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      console.log(dp[i - 1][j - 1]);
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}
console.log(uniquePathsDP(3, 7)); // Output: 28

// most optimized solution
// we only need the previous row and the current row to compute the values
// we can use a single array to store the current row and update it in place
function uniquePathsDPBest(m: number, n: number): number {
  const dp = Array(n).fill(1); // first row

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 1 1 1  1  1  1  1
      // 1 2 3  4  5  6  7. <-- 2 = 1+1, 3 = 2+1,  4 = 3+1,  5 = 4+1,   6 = 5+1,   7 = 6+1
      // 1 3 6 10 15 21 28. <-- 3 = 1+2, 6 = 3+3, 10 = 6+4, 15 = 10+5, 21 = 15+6, 28 = 21+7
      // dp[j] is the value from the previous row (top)
      // dp[j - 1] is the value from the current row (left)
      dp[j] = dp[j] + dp[j - 1]; // top + left
    }
  }

  return dp[n - 1];
}

console.log(uniquePathsDPBest(3, 7)); // 28
