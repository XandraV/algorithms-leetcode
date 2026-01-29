class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  printGraph() {
    if (Object.keys(this.adjacencyList).length !== 0) {
      console.log("{");
      for (const [key, value] of Object.entries(this.adjacencyList)) {
        console.log(" ", `${key}: ${value}`);
      }
      console.log("}");
    } else {
      console.log("{}");
    }
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
      return true;
    }
    return false;
  }

  // complexity is O(V + E)
  // because we might have to visit every vertex (V) and every edge (E) in the worst case
  // if the vertex to be removed is connected to every other vertex
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    // go through all the vertices in the adjacency list for the vertex to be removed
    // remove the edge between that vertex and the vertex we want to remove
    // until there are no more vertices in the adjacency list for the vertex to be removed
    while (this.adjacencyList[vertex].length) {
      // take the last vertex in the list
      let temp = this.adjacencyList[vertex].pop(); // O(1)
      // remove the edge between that vertex and the vertex we want to remove
      this.removeEdge(vertex, temp);
    }
    // delete the vertex from the adjacency list
    delete this.adjacencyList[vertex];
  }
}

function test() {
  let myGraph = new Graph();

  myGraph.addVertex("A");
  myGraph.addVertex("B");
  myGraph.addVertex("C");
  myGraph.addVertex("D");

  myGraph.addEdge("A", "B");
  myGraph.addEdge("A", "C");
  myGraph.addEdge("A", "D");
  myGraph.addEdge("B", "D");
  myGraph.addEdge("C", "D");

  myGraph.printGraph();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    {
      A: B,C,D
      B: A,D
      C: A,D
      D: A,B,C
    }

*/
