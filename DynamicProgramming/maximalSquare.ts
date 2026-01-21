// dp[i][j] answers the question: how big a square of 1s can I finish here?
// dp[i][j] = largest square of 1s ending at (i, j)
function maximalSquare(matrix: string[][]): number {
  let maxSize = 0;
  const n = matrix.length;
  const m = matrix[0].length;
  const dp: number[][] = Array.from({ length: n }, () => new Array(m).fill(0));
  // console.log(dp);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === "1") {
        // on the first row or first column of the matrix
        // there is no top, no left, or no top-left neighbor.
        // so we cannot form a square larger than 1×1 ending here.
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          // the square is only as big as its smallest side
          // to grow a square of size k, we need all three directions to support size k-1
          // if any one of top,left, topLeft is smaller, the square cannot grow further
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
          maxSize = Math.max(maxSize, dp[i][j]);
        }
      }
    }
  }

  return maxSize * maxSize;
}

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];

console.log(maximalSquare(matrix));
