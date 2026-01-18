// You are given an integer array coordinates, coordinates[i] = [x, y], where [x, y]
// represents the coordinate of a point.
// Check if these points make a straight line in the XY plane.
function checkStraightLine(coordinates: number[][]): boolean {
  let ans = true;
  // m = (y2 - y1) / (x2 - x1)
  // r = (yi-yi-1)/ (xi-xi-1)
  // (yi-yi-1)(x2 - x1)=(y2 - y1)(xi-xi-1)

  for (let i = 2; i < coordinates.length; i++) {
    let isValid =
      (coordinates[i][1] - coordinates[i - 1][1]) *
        (coordinates[1][0] - coordinates[0][0]) ===
      (coordinates[1][0] - coordinates[0][0]) *
        (coordinates[i][0] - coordinates[i - 1][0]);
    if (isValid) {
      ans = false;
      break;
    }
  }
  return ans;
}

console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
);
// false
console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
); // true
