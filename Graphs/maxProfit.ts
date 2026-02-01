// return max profit Alice can make
// Alice starts at node 0 and goes to any leaf node
// At every node she gets a reward defined by amount array
// return the maximum profit she can make
function mostProfitablePath(edges: number[][], amount: number[]): number {
  const aliceNode = 0;

  const graph: Map<number, number[]> = new Map();
  for (const [u, v] of edges) {
    console.log(u, v);
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u)!.push(v);
    graph.get(v)!.push(u);
  }

  // depth first search to find the path from Alice to leaf nodes
  let maxProfit = -Infinity;
  console.log(graph);
  function aliceDfsRecursive(
    graph: Map<number, number[]>,
    node: number,
    profitSoFar: number,
    parent: number,
  ) {
    if (graph.get(node).length === 1 && node !== 0) {
      maxProfit = Math.max(profitSoFar + amount[node], maxProfit);
      return;
    }
    profitSoFar += amount[node];

    for (const neighbor of graph.get(node) || []) {
      if (neighbor === parent) continue;

      aliceDfsRecursive(graph, neighbor, profitSoFar, node);
    }
  }
  aliceDfsRecursive(graph, aliceNode, 0, -1);
  return maxProfit;
}

const edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
  ],
  amount = [-2, 4, 2, -4, 6];

console.log(mostProfitablePath(edges, amount)); // 4
