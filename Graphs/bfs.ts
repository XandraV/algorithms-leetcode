// Example graph as adjacency list
const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

function bfs(graph: Record<string, string[]>, start: string): void {
  const visited: Set<string> = new Set();
  const queue: string[] = [start];
  visited.add(start);

  while (queue.length > 0) {
    console.log(queue);
    const node: string | undefined = queue.shift();

    if (node && !visited.has(node)) {
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

bfs(graph, "A");
