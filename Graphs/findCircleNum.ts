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
  const seen: boolean[] = new Array(isConnected.length).fill(false);

  let provinces = 0;

  // mark everything that belongs to the same province
  function dfs(city: number) {
    // for every city, we check all neighbour cities it could be connected to
    for (let neighbour = 0; neighbour < isConnected.length; neighbour++) {
      // if it is connected and we have not seen it yet, we do dfs on that neighbour city
      if (isConnected[city][neighbour] === 1 && !seen[city]) {
        seen[city] = true;
        dfs(neighbour);
      }
    }
  }

  // dfs starting from every city that hasn't been visited yet
  // to exploree one entire connected component (province)
  // DFS marks all cities in that province as visited
  for (let city = 0; city < isConnected.length; city++) {
    if (!seen[city]) {
      provinces++;
      dfs(city);
    }
  }

  return provinces;
}

// Good example of why we can't do node + 1 on line 25
console.log(
  findCircleNum([
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
  ]),
); // 1

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
); // 3

// Example 2
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
); // 2

function findCircleNumDisjointSet(isConnected: number[][]): number {
  const n = isConnected.length;

  // 1️⃣ parent initialization
  const parent = Array.from({ length: n }, (_, i) => i);

  // 2️⃣ find with path compression
  function find(x: number): number {
    console.log(x);
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  // 3️⃣ union
  function union(x: number, y: number) {
    const rootX = find(x);
    const rootY = find(y);
    console.log(rootX, rootY);
    if (rootX !== rootY) {
      parent[rootY] = rootX;
    }
  }

  // 4️⃣ process adjacency matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        union(i, j);
      }
    }
  }

  // 5️⃣ count unique roots
  const roots = new Set<number>();
  for (let i = 0; i < n; i++) {
    roots.add(find(i));
  }

  return roots.size;
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
); // Output: 2
