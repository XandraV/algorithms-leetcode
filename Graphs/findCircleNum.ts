/**
Number of Provinces
There are n cities. Some of them are connected, while some are not. 
If city a is connected directly with city b, and city b is connected 
directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and 
no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 
if the ith city and the jth city are directly connected, 
and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
 */
function findCircleNum(isConnected: number[][]): number {
  const visited: any = [];
  let provinceCount = 0;

  function dfs(node: number) {
    if (visited[node]) return false;
    visited[node] = true;

    for (
      let indexOfNeighbour = 0;
      indexOfNeighbour < isConnected[node].length;
      indexOfNeighbour++
    ) {
      // check if cities are actually connected, as the adjecency matrix contains
      //  whether if cities are connected and not the connected cities
      if (
        isConnected[node][indexOfNeighbour] === 1 &&
        !visited[indexOfNeighbour]
      )
        dfs(indexOfNeighbour);
    }
  }
  // we have isConnected.length cities and we want to dfs starting from every city
  // that hasn't been visited yet
  // Each DFS call explores one entire connected component (province).
  // It marks all cities in that province as visited
  for (let indexOfCity = 0; indexOfCity < isConnected.length; indexOfCity++) {
    if (!visited[indexOfCity]) {
      dfs(indexOfCity);
      provinceCount++;
    }
  }

  return provinceCount;
}

// Good example of why we can't do node + 1 on line 25
console.log(
  findCircleNum([
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
  ])
); // 1

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
); // 3

// Example 2
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2

/* 
Explanation:
isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1]
]
There are 3 cities: 0, 1, 2.

Connections:

0 ↔ 1

2 is alone

Here’s what happens:

1️⃣ Start at i = 0 → not visited → DFS(0) visits 0 and 1
→ provinceCount = 1
2️⃣ i = 1 → already visited → skip
3️⃣ i = 2 → not visited → DFS(2) visits 2
→ provinceCount = 2

Total provinces = 2
*/
