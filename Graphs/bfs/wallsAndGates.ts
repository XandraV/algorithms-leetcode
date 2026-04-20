// 286. Walls and Gates
// You are given an m x n grid rooms initialized with these three possible values.
// 1 a wall or an obstacle.
// 0 a gate.
// Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent
// INF as you may assume that the distance to a gate is less than 2147483647.
// ill each empty room with the distance to its nearest gate. If it is impossible to
// reach a gate, it should be filled with INF.

/**
 Do not return anything, modify rooms in-place instead.
 */
function wallsAndGates(rooms: number[][]): void {
  const EMPTY = 2147483647;
  const WALL = -1;

  const queue: number[][] = [];

  // Step 1: Add all gates to queue
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[0].length; j++) {
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  // Step 2: BFS
  while (queue.length > 0) {
    const [currI, currJ] = queue.shift()!;

    const directions = [
      [-1, 0], // up
      [1, 0], // down
      [0, -1], // left
      [0, 1], // right
    ];

    for (const [di, dj] of directions) {
      const nextI = currI + di;
      const nextJ = currJ + dj;

      // ✅ ONLY visit EMPTY cells
      if (
        nextI >= 0 &&
        nextI < rooms.length &&
        nextJ >= 0 &&
        nextJ < rooms[0].length &&
        rooms[nextI][nextJ] === EMPTY
      ) {
        rooms[nextI][nextJ] = rooms[currI][currJ] + 1;
        queue.push([nextI, nextJ]);
      }
    }
  }
}

// rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
// Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
