// Write an efficient algorithm that searches for a value target 
// in an m x n integer matrix matrix. This matrix has the following properties:
// - Integers in each row are sorted in ascending from left to right.
// - Integers in each column are sorted in ascending from top to bottom.
function searchMatrixII(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let row = 0;
  let col = cols - 1; // start at top-right

  while (row < rows && col >= 0) {
    if (matrix[row][col] == target) {
      return true;
    }

    if (matrix[row][col] > target) {
      col--;
    }
    if (matrix[row][col] < target) {
      row++;
    }
  }
  return false;
}
console.log(
  searchMatrixII(
    [
      [1, 4],
      [2, 5],
    ],
    2,
  ),
);
// true

console.log(
  searchMatrixII(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5,
  ),
);
// true
