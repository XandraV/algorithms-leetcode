/*
Find Center of Star Graph

There is an undirected star graph consisting of n nodes labeled from 1 to n.
A star graph is a graph where there is one center node and exactly n - 1 edges 
that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] 
indicates that there is an edge between the nodes ui and vi. 
Return the center of the given star graph.

*/

function findCenter(edges: number[][]): number {
  const connections = new Map<number, number>();

  for (const [a, b] of edges) {
    if (!connections.has(a)) {
      connections.set(a, 1);
    } else {
      connections.set(a, connections.get(a)! + 1);
    }

    if (!connections.has(b)) {
      connections.set(b, 1);
    } else {
      connections.set(b, connections.get(b)! + 1);
    }
  }

  for (const [a, b] of connections) {
    if (b === connections.size - 1) {
      return a;
    }
  }

  return -1;
}

// Best solution O(1) space and O(1) time
// In a star, the center connects to all other nodes.
// That means the center must appear in every edge.
// So in the first 2 edges, the repeated node is guaranteed to be the center.
function findCenterBest(edges: number[][]): number {
    const [[a, b], [c, d]] = edges;
    return (a === c || a === d) ? a : b;
}


// Example 1:
console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
); //2

// Example 2:
console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
); //1
