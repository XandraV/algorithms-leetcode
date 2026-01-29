// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */

function cloneGraph(node: _Node | null): _Node | null {
  // original node → cloned node
  const clonedNodes = new Map<number, _Node>();

  function dfs(currNode: _Node | null) {
    if (currNode === null) return null;
    const currCloned = new _Node(currNode?.val);
    clonedNodes.set(currNode.val, currCloned);
    for (let n of currNode?.neighbors) {
      if (clonedNodes.has(n.val)) {
        currCloned.neighbors.push(clonedNodes.get(n.val)!);
        continue;
      } else {
        let clonedNeighbour = dfs(n);
        if (clonedNeighbour) currCloned.neighbors.push(clonedNeighbour);
      }
    }

    return currCloned;
  }

  return dfs(node);
}
// Time Complexity: O(V + E) where V is the number of vertices and E is the number of edges in the graph.
// Space Complexity: O(V) for the hashmap and the recursion stack.