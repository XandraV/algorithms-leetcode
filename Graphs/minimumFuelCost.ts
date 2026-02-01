function minimumFuelCost(roads: number[][], seats: number): number {
  if (roads.length === 0) return 0;
  const adj = new Map<number, number[]>();

  for (const [a, b] of roads) {
    adj.has(a) || adj.set(a, []);
    adj.has(b) || adj.set(b, []);
    adj.get(a)!.push(b);
    adj.get(b)!.push(a);
  }

  let fuel = 0;

  function dfs(node: number, parent: number): number {
    let rep = 1; // this city's representative

    for (const neighbour of adj.get(node) ?? []) {
      if (neighbour === parent) continue;
      rep += dfs(neighbour, node);
    }

    if (node !== 0) {
      fuel += Math.ceil(rep / seats);
    }

    return rep;
  }

  dfs(0, -1);
  return fuel;
}
