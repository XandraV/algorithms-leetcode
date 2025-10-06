/**
 * Most Profitable Path in a Tree
There is an undirected tree with n nodes labeled from 0 to n - 1, rooted at node 0. 
You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates 
that there is an edge between nodes ai and bi in the tree.

At every node i, there is a gate. You are also given an array of even integers
 amount, where amount[i] represents:

the price needed to open the gate at node i, if amount[i] is negative, or,
the cash reward obtained on opening the gate at node i, otherwise.
The game goes on as follows:

Initially, Alice is at node 0 and Bob is at node bob.
At every second, Alice and Bob each move to an adjacent node. Alice moves towards some
 leaf node, while Bob moves towards node 0.
For every node along their path, Alice and Bob either spend money to open the gate at that node,
 or accept the reward. Note that:
If the gate is already open, no price will be required, nor will there be any cash reward.
If Alice and Bob reach the node simultaneously, they share the price/reward for opening the gate there. 
In other words, if the price to open the gate is c, then both Alice and Bob pay c / 2 each. 
Similarly, if the reward at the gate is c, both of them receive c / 2 each.
If Alice reaches a leaf node, she stops moving. Similarly, if Bob reaches node 0, he stops moving. 
Note that these events are independent of each other.
Return the maximum net income Alice can have if she travels towards the optimal leaf node.
 */
function mostProfitablePath(
  edges: number[][],
  bob: number,
  amount: number[]
): number {
  const n = amount.length;
  const aliceNode = 0;

  // Build the undirected tree
  const graph: Map<number, number[]> = new Map();
  for (const [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u)!.push(v);
    graph.get(v)!.push(u);
  }
  console.log(graph);

  // Step 1: DFS to record parents for each node (to trace Bob's path to root)
  const parent: number[] = Array(n).fill(-1);
  function dfsParent(node: number, par: number) {
    parent[node] = par;
    for (const nei of graph.get(node) || []) {
      if (nei !== par) dfsParent(nei, node);
    }
  }
  dfsParent(aliceNode, -1);
  console.log(parent);
  // Step 2: Compute Bob's time to each node along his path to root
  const bobTime: number[] = Array(n).fill(Infinity);
  let t = 0;
  let curr = bob;
  while (curr !== -1) {
    bobTime[curr] = t;
    t++;
    curr = parent[curr];
  }

  // Step 3: DFS for Alice to explore all leaf paths and calculate max profit
  let maxProfit = -Infinity;

  function aliceDfs(
    node: number,
    par: number,
    profitSoFar: number,
    aliceTime: number
  ) {
    // Compute profit at this node considering Bob
    let nodeProfit = 0;
    if (aliceTime < bobTime[node]) nodeProfit = amount[node];
    else if (aliceTime === bobTime[node]) nodeProfit = amount[node] / 2;
    // else aliceTime > bobTime[node] -> Bob already visited, profit 0

    profitSoFar += nodeProfit;

    // Check if leaf (exclude root as a leaf)
    const neighbors = graph.get(node) || [];
    if (neighbors.length === 1 && node !== 0) {
      maxProfit = Math.max(maxProfit, profitSoFar);
      return;
    }

    for (const nei of neighbors) {
      if (nei === par) continue;
      aliceDfs(nei, node, profitSoFar, aliceTime + 1);
    }
  }

  aliceDfs(aliceNode, -1, 0, 0);

  return maxProfit;
}

console.log(
  mostProfitablePath(
    [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
    ],
    3,
    [-2, 4, 2, -4, 6]
  )
); //6
