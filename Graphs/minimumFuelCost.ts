function minimumFuelCost(roads: number[][], seats: number): number {
  let n = roads.length;
  if (roads.length == 0) return 0;

  let adj = new Array(n);
  for (let i = 0; i < n; i++) {
    adj[i] = new Array();
  }

  for (let road of roads) {
    adj[road[0]].push(road[1]);
    adj[road[1]].push(road[0]);
  }

  let res = 0;

  let dfs = function (node: number, parent: number, representatives: number) {
    let rep = 0;
    for (let neighbour of adj[node]) {
      if (parent == neighbour) continue;
      rep += dfs(neighbour, node, representatives);  
    }
    if (node == 0) return 0;
    representatives += rep + 1; // adding the parent after summing all children
    res += Math.ceil(representatives / seats);
    return representatives;
  };

  dfs(0, -1, 0);
  return res;
}
