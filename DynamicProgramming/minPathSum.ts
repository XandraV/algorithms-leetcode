// Given a m x n grid filled with non-negative numbers,
// find a path from top left to bottom right, which minimizes
// the sum of all numbers along its path.
// You can only move either down or right at any point in time.
function minPathSum(grid: number[][]): number {
  const numOfRows = grid.length;
  const numberOfColumns = grid[0].length;

  const dp: number[][] = Array.from({ length: numOfRows }, () =>
    new Array(numberOfColumns).fill(0),
  );
  console.log(dp);

  dp[0][0] = grid[0][0];
  // fill first row
  for (let i = 1; i < numberOfColumns; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  console.log(dp);
  // fill first col
  for (let j = 1; j < numOfRows; j++) {
    dp[j][0] = dp[j - 1][0] + grid[j][0];
  }

  console.log(dp);
  //fill the rest
  for (let k = 1; k < numOfRows; k++) {
    for (let l = 1; l < numberOfColumns; l++) {
      dp[k][l] = Math.min(dp[k - 1][l], dp[k][l - 1]) + grid[k][l];
    }
  }

  return dp[numOfRows - 1][numberOfColumns - 1];
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ]),
);

// 7
