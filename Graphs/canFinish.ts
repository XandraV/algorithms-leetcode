function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // Build graph: graph[b] contains all courses that depend on b
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of prerequisites) {
    graph[b].push(a);
  }
  console.log(graph);
  const visited: Set<number> = new Set(); // nodes fully explored
  const visiting: Set<number> = new Set(); // nodes in current DFS path

  function dfs(node: number): boolean {
    if (visited.has(node)) return true; // already safe
    if (visiting.has(node)) return false; // cycle detected

    visiting.add(node);

    for (const neighbor of graph[node]) {
      if (!dfs(neighbor)) return false;
    }

    visiting.delete(node);
    visited.add(node);
    return true;
  }

  // Check every course because
  // if there’s a cycle in a disconnected component, we then would miss it.
  // Example with a cycle in a disconnected component:
  // numCourses = 4  |  prerequisites = [[1,0], [2,3], [3,2]]
  // the graph will look like graph = [ [ 1 ], [], [ 3 ], [ 2 ] ]
  // If we only run DFS starting from 0, we would never visit nodes 2 or 3.
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

// console.log(
//   canFinish(2, [
//     [1, 0],
//     [0, 1],
//   ])
// );
console.log(
  canFinish(4, [
    [1, 0],
    [2, 3],
    [3, 2],
  ])
);
