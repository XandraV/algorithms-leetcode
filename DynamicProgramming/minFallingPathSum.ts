// Given an n x n array of integers matrix,
// return the minimum sum of any falling path through matrix.

// A falling path starts at any element in the first row and chooses
// the element in the next row that is either directly below or diagonally left/right.
// Specifically, the next element from position (row, col) will be
//  (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length;
  const m = matrix[0].length;

  const dp: number[][] = Array.from({ length: n }, () => new Array(m).fill(0));

  // Base case: first row
  for (let j = 0; j < m; j++) {
    dp[0][j] = matrix[0][j];
  }

  // Fill the DP table
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let minAbove = dp[i - 1][j];

      if (j > 0) {
        minAbove = Math.min(minAbove, dp[i - 1][j - 1]);
      }

      if (j < m - 1) {
        minAbove = Math.min(minAbove, dp[i - 1][j + 1]);
      }

      dp[i][j] = minAbove + matrix[i][j];
    }
  }

  // Result is the minimum in the last row
  return Math.min(...dp[n - 1]);
}


console.log(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]])) // 13