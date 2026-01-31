// 1059. All Paths from Source Lead to Destination

// Given the edges of a directed graph where edges[i] = [ai, bi]
// indicates there is an edge between nodes ai and bi,
// and two nodes source and destination of this graph,
// determine whether or not all paths starting from source eventually,
// end at destination, that is:

// At least one path exists from the source node to the destination node
// If a path exists from the source node to a node with no outgoing edges,
// then that node is equal to destination.
// The number of possible paths from source to destination is a finite number.
// Return true if and only if all roads from source lead to destination.

function leadsToDestination(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  // build adjacency list
  const adj = new Map<number, number[]>();
  for (const [from, to] of edges) {
    if (!adj.has(from)) adj.set(from, []);
    adj.get(from)!.push(to);
  }

  const onPath = new Set<number>(); // nodes currently in DFS path (for cycle detection/exploration)
  const goodNodes = new Set<number>(); // nodes already verified to lead to destination

  function dfs(node: number): boolean {
    // if node has no outgoing edges, must be destination
    const neighbors = adj.get(node) || [];
    if (neighbors.length === 0) return node === destination;

    // cycle detection - check if we saw this node already in current path
    if (onPath.has(node)) return false;

    // check if we've already verified this node to lead to destination
    if (goodNodes.has(node)) return true;

    // if not seen on path, nor did we verify it before, explore it
    onPath.add(node);

    // check all neighbors the same way
    for (const neighbor of neighbors) {
      if (!dfs(neighbor)) {
        return false; // if any path fails, whole node fails
      }
    }

    // done exploring all neighbors, remove from current path
    onPath.delete(node);
    // add to good nodes
    goodNodes.add(node); // all paths from this node lead to destination
    return true;
  }

  return dfs(source);
}
