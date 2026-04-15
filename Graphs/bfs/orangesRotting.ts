// 994. Rotting Oranges
// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange.
// If this is impossible, return -1.
function orangesRotting(grid: number[][]): number {
  let count = 0; // number of minutes passed
  let freshCount = 0; // number of fresh oranges remaining
  const queue: number[][] = []; // BFS queue storing positions of rotten oranges

  // Step 1: Initialize queue with all rotten oranges (multi-source BFS)
  // and count fresh oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]); // starting points of infection
      } else if (grid[i][j] === 1) {
        freshCount++; // track how many need to be infected
      }
    }
  }

  // Step 2: BFS traversal (each loop(bfs level) = 1 minute)
  while (queue.length > 0) {
    let size = queue.length; // number of oranges to process this minute
    let spread = false; // track if any fresh orange gets infected this minute/level in bfs

    for (let i = 0; i < size; i++) {
      let [currI, currJ] = queue.shift()!; // process current rotten orange

      // Check all 4 directions (up, down, left, right)
      // UP
      if (currI - 1 >= 0 && grid[currI - 1][currJ] === 1) {
        queue.push([currI - 1, currJ]); // add newly rotten orange
        grid[currI - 1][currJ] = 2; // mark as rotten
        freshCount--; // one less fresh orange
        spread = true;
      }

      // DOWN
      if (currI + 1 < grid.length && grid[currI + 1][currJ] === 1) {
        queue.push([currI + 1, currJ]);
        grid[currI + 1][currJ] = 2;
        freshCount--;
        spread = true;
      }

      // LEFT
      if (currJ - 1 >= 0 && grid[currI][currJ - 1] === 1) {
        queue.push([currI, currJ - 1]);
        grid[currI][currJ - 1] = 2;
        freshCount--;
        spread = true;
      }

      // RIGHT
      if (currJ + 1 < grid[0].length && grid[currI][currJ + 1] === 1) {
        queue.push([currI, currJ + 1]);
        grid[currI][currJ + 1] = 2;
        freshCount--;
        spread = true;
      }
    }

    // Only increment time if at least one orange was infected this round
    if (spread) count++;
  }

  // If no fresh oranges left return time
  // Otherwise some oranges could never be reached return -1
  return freshCount === 0 ? count : -1;
}
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
); // 4
