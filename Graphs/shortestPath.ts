// BFS - shortest path
// Given an undirected graph, return the shortest path between source and target node
// If there is no path between A dn B, return -1
const shortestPath = (
  edges: string[][],
  source: string,
  target: string,
): number => {
  const adj = new Map();
  for (let [a, b] of edges) {
    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);
    adj.get(a).push(b);
    adj.get(b).push(a);
  }

  // // store [node, path length or distance from source]
  const queue: [string, number][] = [[source, 0]];

  // undirected graph -> cycle prevention
  const visited = new Set([source]); // initialise it with the source item - everything in the queue is visited
  console.log(adj);
  while (queue.length > 0) {
    const [currNode, distance] = queue.shift()!;
    if (currNode === target) {
      return distance;
    }

    for (let neighbour of adj.get(currNode) || []) {
      // whenever we add something to the queue check if it's been visited
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }

  return -1;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];
console.log(shortestPath(edges, "w", "z")); // 2
