// DIAGONAL DIFFERENCE

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  const size = arr[0].length;

  let lefToRightSum = 0;
  arr.forEach((value, idx) => {
    lefToRightSum += Number(value[idx]);
  });

  let rightToLefSum = 0;
  arr.forEach((value, idx) => {
    rightToLefSum += Number(value[size - idx - 1]);
  });

  const diff = Math.abs(lefToRightSum - rightToLefSum);
  return diff;
}

console.log(diagonalDifference(matrix));
