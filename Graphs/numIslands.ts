function numIslands(grid: string[][]): number {
  let numOfIslands = 0;
  const visited = new Set<string>(); // `${i}-${j}`

  function dfs(i: number, j: number) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === "0" ||
      visited.has(`${i}-${j}`)
    ) {
      return false;
    }
    visited.add(`${i}-${j}`);
    // move to all 4 directions
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !visited.has(`${i}-${j}`)) {
        numOfIslands++;
        dfs(i, j);
      }
    }
  }

  return numOfIslands;
}

// complecity is only O(n*m) because each cell is visited at most once
// even though we try 4 directions, each neighbor is processed only once overall

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);
// 3
