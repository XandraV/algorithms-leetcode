// Example graph as adjacency list
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

function dfsRecursive(graph, node, visited = new Set()) {
  if (visited.has(node)) return;

  console.log(node); // process node
  visited.add(node);

  for (const neighbor of graph[node] || []) {
    dfsRecursive(graph, neighbor, visited);
  }
}
