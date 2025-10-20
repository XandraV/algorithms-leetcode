function shortestAlternatingPaths(
  n: number,
  redEdges: number[][],
  blueEdges: number[][]
): number[] {
  // {
  // start: [{connecting node, color}]
  // }

  // [
  // idx=from:0   [ to=endNodeIndex, color]
  // ]
  const adjecency = new Array(n);
  for (let i = 0; i < n; i++) {
    adjecency[i] = new Array();
  }
  for (let edge of redEdges) {
    adjecency[edge[0]].push([edge[1], 0]); // red = 0
  }

  for (let edge of blueEdges) {
    adjecency[edge[0]].push([edge[1], 1]); // blue = 1
  }
  console.log(adjecency);

  let answer = new Array(n).fill(-1);
  let visited = new Array(n);
  for (let i = 0; i < n; i++) {
    // visited[i] = [false, false]; [red, blue]=[0],[1]
    visited[i] = new Array(2).fill(false);
  }
  console.log(visited);

  let queue: Array<[number, number, number]> = [[0, 0, -1]]; // [[startingNode, currentPathLength, previousEdgeColor]]
  // add the first node to visited
  visited[0][0] = true;
  visited[0][1] = true;
  // 0 steps to take to go from 0 to 0
  answer[0] = 0;

  // BFS
  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) {
      continue;
    }

    let [startingNode, currentPathLength, previousEdgeColor] = node;

    for (let [neighbour, colour] of adjecency[startingNode]) {
      // check if this neighbour with this color has not been visited
      // check if colour is different from prev
      if (!visited[neighbour][colour] && colour !== previousEdgeColor) {
        queue.push([neighbour, currentPathLength + 1, colour]);
        // mark the colour for this neighbour true
        visited[neighbour][colour] = true;
        if (answer[neighbour] === -1) {
          answer[neighbour] = currentPathLength + 1;
        }
      }
    }
  }

  return answer;
}
