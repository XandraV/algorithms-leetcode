// Given an m x n matrix, return all elements of the matrix in spiral order.
// We shrink the rectangle boundaries after traversing each side
function spiralOrder(matrix: number[][]): number[] {
  // for empty input matrix
  if (matrix.length === 0) return [];

  const res = [];
  let top = 0;
  let bottom = matrix.length;
  let left = 0;
  let right = matrix[0].length;

  while (left < right && top < bottom) {
     // left → right
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    if (top >= bottom) {
      break;
    }
    // top → bottom
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right - 1]);
    }
    right--;
    if (left >= right) {
      break;
    }
    // right → left
    for (let i = right - 1; i >= left; i--) {
      res.push(matrix[bottom - 1][i]);
    }
    bottom--;

    // bottom → top
    for (let i = bottom - 1; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }

  return res;
}

console.log(spiralOrder([[7], [9], [6]])); // Output: [7,9,6]
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); // Output: [1,2,3,6,9,8,7,4,5]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
); // Output: [1,2,3,4,8,12,11,10,9,5,6,7]
