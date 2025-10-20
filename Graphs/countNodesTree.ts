// count nodes of a tree -> no cycles -> no need for visited array, only track parent node
function countNodesTree(adj: number[][]): number {
  const n = adj.length;

  const dfs = (node: number, parent: number): number => {
    let count = 1; // count this node
    for (const neighbor of adj[node]) {
        // in a tree we always come from parent 
        // so we only need to check that instead of a whole visited array
      if (neighbor !== parent) { 
        count += dfs(neighbor, node); // add all nodes in child subtrees
      }
    }
    return count;
  };

  return dfs(0, -1); // start from root
}