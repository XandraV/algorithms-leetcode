// 797. All Paths From Source to Target
// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1,
// find all possible paths from node 0 to node n - 1 and return them in any order.
// The graph is given as follows: graph[i] is a list of all nodes you can visit
// from node i (i.e., there is a directed edge from node i to node graph[i][j]).

function allPathsSourceTargetBacktrack(graph: number[][]): number[][] {
  const target = graph.length - 1;
  let routes: number[][] = [];

  function dfs(node: number, path: number[]) {
    if (node === target) {
      routes.push([...path]);
      return;
    }

    console.log(path);

    for (let neighbour of graph[node]) {
      path.push(neighbour);
      dfs(neighbour, path);
      path.pop();
    }
  }

  dfs(0, [0]);
  return routes;
}
console.log(allPathsSourceTargetBacktrack([[1, 2], [3], [3], []])); // [[0,1,3],[0,2,3]]

function allPathsSourceTargetBacktrack2(graph: number[][]): number[][] {
  const target = graph.length - 1;
  let routes: number[][] = [];
  const adj = new Map();

  for (let i = 0; i < graph.length; i++) {
    let curr = i;
    let neighbours = graph[i];
    adj.set(curr, neighbours);
  }

  function dfs(node: number, path: number[]) {
    if (node === target) {
      routes.push([...path]);
      return;
    }

    console.log(path);

    for (let neighbour of adj.get(node) || []) {
      path.push(neighbour);
      dfs(neighbour, path);
      path.pop();
    }
  }

  dfs(0, [0]);
  return routes;
}
