/**
Find Closest Node to Given Two Nodes

You are given a directed graph of n nodes numbered from 0 to n - 1, 
where each node has at most one outgoing edge.

The graph is represented with a given 0-indexed array edges of size n, 
indicating that there is a directed edge from node i to node edges[i]. 
If there is no outgoing edge from i, then edges[i] == -1.

You are also given two integers node1 and node2.

Return the index of the node that can be reached from both node1 and node2,
such that the maximum between the distance from node1 to that node, and 
from node2 to that node is minimized. If there are multiple answers,
return the node with the smallest index, and if no possible answer exists, return -1.

Note that edges may contain cycles.
 */

function closestMeetingNode(
  edges: number[],
  node1: number,
  node2: number
): number {
  function walk(start: number): Record<number, number> {
    const distancesToEveryNodeFromStartingNode: Record<number, number> = {};
    let nodeIndex = start;
    let steps = 0;
    while (
      nodeIndex !== -1 &&
      distancesToEveryNodeFromStartingNode[nodeIndex] === undefined
    ) {
      distancesToEveryNodeFromStartingNode[nodeIndex] = steps;
      nodeIndex = edges[nodeIndex];
      steps++;
    }
    return distancesToEveryNodeFromStartingNode;
  }

  const distancesFromNode1 = walk(node1);
  const distancesFromNode2 = walk(node2);

  let answer = -1;
  let closest = Infinity;

  for (let i = 0; i < edges.length; i++) {
    if (
      distancesFromNode1[i] !== undefined &&
      distancesFromNode2[i] !== undefined
    ) {
      const maxDistance = Math.max(
        distancesFromNode1[i],
        distancesFromNode2[i]
      );
      if (maxDistance < closest) {
        closest = maxDistance;
        answer = i;
      }
    }
  }

  return answer;
}

const edges = [2, 2, 3, -1],
  node1 = 0,
  node2 = 1;
console.log(closestMeetingNode(edges, node1, node2));

// [2, 2, 3, -1]

// 0: [2]
// 1: [2]
// 2: [3]
// 3: [ ]
