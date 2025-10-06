// Given an m x n integer matrix matrix, if an element is 0,
// set its entire row and column to 0's.
var setZeroes = function (matrix) {
  const numOfRows = matrix.length;
  const numOfColumns = matrix[0].length;

  // first we have to scan the matrix and store the indicies of 0s
  // otherwise if we zero out a row/column immediately after seeing a 0,
  // we destroy other information before finish scanning.
  const zeroRows = new Set();
  const zeroCols = new Set();

  // 1. Find all rows and cols that need to be zeroed
  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfColumns; j++) {
      const el = matrix[i][j];
      if (el == 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }
  for (let i = 0; i < numOfRows; i++) {
    for (let j = 0; j < numOfColumns; j++) {
      if (zeroCols.has(j) || zeroRows.has(i)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

console.log(setZeroes(matrix)); // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
