function hasValidPathFromSourceToDestination(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  if (source === destination) {
    return true;
  }
  const visited = new Set();
  const adj = new Map<number, number[]>();

  for (let [node, neighbor] of edges) {
    if (adj.has(node)) {
      adj.get(node)?.push(neighbor);
    } else {
      adj.set(node, [neighbor]);
    }
  }

  function dfs(node: number) {
    if (node === destination) return true;

    if (visited.has(node)) return false;
    visited.add(node);

    for (const neighbor of adj.get(node) || []) {
      if (dfs(neighbor)) return true;
    }

    return false;
  }

  return dfs(source);
}

console.log(
  hasValidPathFromSourceToDestination(
    3,
    [
      [0, 1],
      [0, 2],
    ],
    0,
    2,
  ),
);

function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Set<number>();
  const queue: number[] = [source];
  let head = 0; // pointer instead of shift()

  visited.add(source);
  // while (queue.length > 0) {
  while (head < queue.length) {
    // head++ avoids shift() → keeps BFS O(n + m) instead of potentially O(n²).
    const node = queue[head++];
    //  const node = queue.shift();
    if (node === destination) return true;

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;
}
