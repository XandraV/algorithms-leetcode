// count nodes of a graph that might contain cycles -> need visited array
function countNodesGraph(graph: number[][], start: number): number {
  const visited = new Set<number>();

  function dfs(node: number) {
    if (visited.has(node)) return 0; // already counted
    visited.add(node);

    let count = 1; // count this node
    for (const neighbor of graph[node] || []) {
      count += dfs(neighbor);
    }
    return count;
  }

  return dfs(start);
}


console.log(countNodesGraph([
  [1, 2], // 0
  [0, 2, 3], // 1
  [0, 1], // 2
  [1], // 3
], 0)); // -> 4
