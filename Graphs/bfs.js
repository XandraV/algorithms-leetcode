// Example graph as adjacency list
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);
  
  while (queue.length > 0) {
    console.log(queue);
    const node = queue.shift();

    if (!visited.has(node)) {
      console.log(node); // process node

      // enqueue all unvisited neighbors
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
}

console.log(bfs(graph, "A"));
