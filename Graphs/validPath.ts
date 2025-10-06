function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
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
