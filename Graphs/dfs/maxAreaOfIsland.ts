// 695. Max Area of Island
// You are given an m x n binary matrix grid. An island is a group of 1's
// (representing land) connected 4-directionally (horizontal or vertical.)
// You may assume all four edges of the grid are surrounded by water.
// The area of an island is the number of cells with a value 1 in the island.
// Return the maximum area of an island in grid. If there is no island, return 0.

// self contained logic, easier to debug, output depends only on input, no hidden state (count is not external)
function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0;
  const visited = new Set(); // `${i},${j}`

  function dfs(i: number, j: number): number {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === 0 ||
      visited.has(`${i},${j}`)
    ) {
      return 0;
    }

    visited.add(`${i},${j}`);

    // 1 + left + right + up + down
    return dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1) + 1;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited.has(`${i},${j}`) && grid[i][j]) {
        let count = dfs(i, j);
        maxArea = Math.max(maxArea, count);
      }
    }
  }

  return maxArea;
}
// This version is faster due to less overhead from recursion + additions + returns, even though it’s “worse design”.
// Instead of 4 recursive calls, 4 return value fetches, 3 additions, +1 addition, it only just count++.
// No return values, no additions. A lot less operations per cell but it's worse design.
function maxAreaOfIsland2(grid: number[][]): number {
  let maxArea = 0;
  const visited = new Set(); // `${i},${j}`
  let count = 0;
  function dfs(i: number, j: number) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] === 0 ||
      visited.has(`${i},${j}`)
    ) {
      return false;
    }

    visited.add(`${i},${j}`);
    count++;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited.has(`${i},${j}`) && grid[i][j]) {
        dfs(i, j);
        maxArea = Math.max(maxArea, count);
        count = 0;
      }
    }
  }

  return maxArea;
}

console.log(
  // 6
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);
