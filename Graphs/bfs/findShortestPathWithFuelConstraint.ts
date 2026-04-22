// Find the shortest path from start to end in a directed graph with limited fuel.
// Each move consumes 1 unit of fuel. Fuel can be refilled to full at fuel stations.

// BFS solution
function findShortestPath(
  graph: string[][],
  start: string,
  end: string,
  fuelCapacity: number,
  fuelStations: string[],
): string[] {
  // might reach a node with 0 fuel and get blocked,
  // but later find a path that reaches that same node with 3 fuel.
  // Your code currently blocks the "better" version because
  // the node name is already in the set.
  const visited: Set<string> = new Set(); // ${node}-${fuel}

  const adj: Map<string, string[]> = new Map();
  for (let [from, to] of graph) {
    if (!adj.has(from)) adj.set(from, []);
    adj.get(from)?.push(to);
  }

  const queue: [string, number, string[]][] = [[start, fuelCapacity, [start]]];
  visited.add(`${start}-${fuelCapacity}`);
  while (queue.length > 0) {
    let [from, fuel, path] = queue.shift()!;
    for (let to of adj.get(from!) ?? []) {
      // 2. Calculate fuel AFTER move
      let fuelAfterMove = fuel - 1;
      if (fuelAfterMove < 0) continue; // Can't make the jump

      // 3. Refill if it's a station
      let nextFuel = fuelStations.includes(to) ? fuelCapacity : fuelAfterMove;

      // 4. Success condition
      if (to === end) return [...path, to];
      // 5. Visited check
      if (!visited.has(`${to}-${nextFuel}`)) {
        visited.add(`${to}-${nextFuel}`);
        queue.push([to, nextFuel, [...path!, to]]);
      }
    }
  }
  return [];
}

const graph = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"],
  ["C", "E"],
  ["D", "F"],
  ["E", "F"],
  ["F", "G"],
  ["G", "H"],
  ["H", "I"],
  ["I", "J"],
];

console.log(findShortestPath(graph, "A", "J", 3, ["C", "F", "H"]));
