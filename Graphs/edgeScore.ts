/**
Node With Highest Edge Score

You are given a directed graph with n nodes labeled from 0 to n - 1, 
where each node has exactly one outgoing edge.

The graph is represented by a given 0-indexed integer array edges of length n,
 where edges[i] indicates that there is a directed edge from node i to node edges[i].

The edge score of a node i is defined as the sum of the labels of all the nodes
that have an edge pointing to i.

Return the node with the highest edge score. 
If multiple nodes have the same edge score, 
return the node with the smallest index.
 */
function edgeScore(edges: number[]): number {
  const map = new Map();
  let biggestScore = -1;
  let biggestIndex = -1;
  for (let i = 0; i < edges.length; i++) {
    let tempScore = -1;
    let node = edges[i];
    if (map.has(node)) {
      tempScore = map.get(node) + i;
      map.set(node, tempScore);
    } else {
      tempScore = i;
      map.set(node, i);
    }

    if (
      tempScore > biggestScore ||
      (tempScore === biggestScore && node < biggestIndex)
    ) {
      // tie-break: smaller index wins){
      biggestScore = tempScore;
      biggestIndex = node;
    }
  }
  return biggestIndex;
}

// best solution
function edgeScore2(edges: number[]): number {
  const n = edges.length;
  const scores = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    scores[edges[i]] += i;
  }

  let bestNode = 0;
  for (let node = 1; node < n; node++) {
    if (
      scores[node] > scores[bestNode] ||
      (scores[node] === scores[bestNode] && node < bestNode)
    ) {
      bestNode = node;
    }
  }

  return bestNode;
}

console.log(edgeScore([1, 0, 0, 0, 0, 7, 7, 5]));
