// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.
function searchMatrix(matrix: number[][], target: number): boolean {
  for (let row of matrix) {
    // wordt case target is in last row -> O(m)
    let last = row[row.length - 1];
    if (target <= last) {
      if (target === last) {
        return true;
      } else {
        //binary earch O(log n) for a row of length n
        let l = 0;
        let r = row.length - 1;
        let mid = 0;

        while (l <= r) {
          mid = Math.floor((r + l) / 2);
          let midItem = row[mid];

          if (target === midItem) {
            return true;
          } else {
            if (target < midItem) {
              r = mid - 1;
            } else {
              l = mid + 1;
            }
          }
        }
      }
    } else {
      continue;
    }
  }

  return false;
}
// O(m) + O(log n) - O(m + log n)
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);

// O(log m*n) binary search the entire matrix by flattening it first
function searchMatrixOptimal(matrix: number[][], target: number): boolean {
  const n = matrix.length; // row num
  const m = matrix[0].length; // col num, row width

  let left = 0;
  let right = n * m - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    // columns define how wide each row is
    // hence we devide by col num
    let row = Math.floor(mid / m);
    let col = mid % m; // remainder determines which column in row

    let midNum = matrix[row][col];

    if (midNum === target) {
      return true;
    }

    if (target < midNum) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);
