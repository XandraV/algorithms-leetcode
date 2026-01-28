// You have a graph of n nodes labeled from 0 to n - 1.
// You are given an integer n and a list of edges
// where edges[i] = [ai, bi] indicates that there is an undirected edge
//  between nodes ai and bi in the graph.

// Return true if the edges of the given graph make up a valid tree, and false otherwise.

function validTree(n: number, edges: number[][]): boolean {
  // Quick check: a valid tree must have exactly n - 1 edges
  if (edges.length !== n - 1) return false;

  // Build adjacency list
  const adj: number[][] = new Array(n).fill(0).map(() => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const seen: boolean[] = new Array(n).fill(false);

  // DFS that returns false if a cycle is detected
  function dfs(node: number, parent: number): boolean {
    seen[node] = true;

    for (let neighbour of adj[node]) {
      if (!seen[neighbour]) {
        if (!dfs(neighbour, node)) return false; // propagate cycle detection
      } else if (neighbour !== parent) {
        // Visited neighbor that is not parent → cycle!
        return false;
      }
    }

    return true; // no cycle detected in this path
  }

  // Start DFS from node 0
  if (!dfs(0, -1)) return false;

  // Check if all nodes were visited (graph is connected)
  return seen.every((v) => v);
}

const n = 5,
  edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ];
console.log(validTree(n, edges));
// Output: true
