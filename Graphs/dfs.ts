// Example graph as adjacency list
const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

function dfsRecursive(
  graph: Record<string, string[]>,
  node: string,
  visited: Set<string> = new Set(),
): void {
  if (visited.has(node)) return;

  console.log(node); // process node
  visited.add(node);

  for (const neighbor of graph[node]) {
    dfsRecursive(graph, neighbor, visited);
  }
}

dfsRecursive(graph, "A");
