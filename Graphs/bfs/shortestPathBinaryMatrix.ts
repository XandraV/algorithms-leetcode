// 1091. Shortest Path in Binary Matrix
// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix.
// If there is no clear path, return -1.
// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0))
// to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected
// (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

function shortestPathBinaryMatrix(grid: number[][]): number {
  let n = grid.length;
  // early check
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

  const queue = [[0, 0, 1]]; // [i,j]
  const visited = new Set(["0,0"]); // `${i},${j}`

  while (queue.length > 0) {
    const [i, j, distance] = queue.shift()!;
    if (i === grid.length - 1 && j === grid[0].length - 1) {
      return distance;
    }

    // 8 directions
    //  up -> i-1, j
    if (i - 1 >= 0 && grid[i - 1][j] === 0 && !visited.has(`${i - 1},${j}`)) {
      visited.add(`${i - 1},${j}`);
      queue.push([i - 1, j, distance + 1]);
    }
    // right, up -> i-1, j+1
    if (
      j + 1 < grid[0].length &&
      i - 1 >= 0 &&
      grid[i - 1][j + 1] === 0 &&
      !visited.has(`${i - 1},${j + 1}`)
    ) {
      visited.add(`${i - 1},${j + 1}`);
      queue.push([i - 1, j + 1, distance + 1]);
    }
    // right -> i, j+1
    if (
      j + 1 < grid[0].length &&
      grid[i][j + 1] === 0 &&
      !visited.has(`${i},${j + 1}`)
    ) {
      visited.add(`${i},${j + 1}`);
      queue.push([i, j + 1, distance + 1]);
    }
    // right, down -> i+1, j+1
    if (
      j + 1 < grid[0].length &&
      i + 1 < grid.length &&
      grid[i + 1][j + 1] === 0 &&
      !visited.has(`${i + 1},${j + 1}`)
    ) {
      visited.add(`${i + 1},${j + 1}`);
      queue.push([i + 1, j + 1, distance + 1]);
    }
    //  down -> i+1, j
    if (
      i + 1 < grid.length &&
      grid[i + 1][j] === 0 &&
      !visited.has(`${i + 1},${j}`)
    ) {
      visited.add(`${i + 1},${j}`);
      queue.push([i + 1, j, distance + 1]);
    }
    //  down, left -> i+1, j-1
    if (
      i + 1 < grid.length &&
      j - 1 >= 0 &&
      grid[i + 1][j - 1] === 0 &&
      !visited.has(`${i + 1},${j - 1}`)
    ) {
      visited.add(`${i + 1},${j - 1}`);
      queue.push([i + 1, j - 1, distance + 1]);
    }
    //  left -> i, j-1
    if (j - 1 >= 0 && grid[i][j - 1] === 0 && !visited.has(`${i},${j - 1}`)) {
      visited.add(`${i},${j - 1}`);
      queue.push([i, j - 1, distance + 1]);
    }
    //  up,left -> i-1, j-1
    if (
      i - 1 >= 0 &&
      j - 1 >= 0 &&
      grid[i - 1][j - 1] === 0 &&
      !visited.has(`${i - 1},${j - 1}`)
    ) {
      visited.add(`${i - 1},${j - 1}`);
      queue.push([i - 1, j - 1, distance + 1]);
    }
  }

  return -1;
}

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ]),
); // 4
