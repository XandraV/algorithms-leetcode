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

  // vertex = node
  // complexity is O(1)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }
}

function test() {
  let myGraph = new Graph();
  myGraph.printGraph();
}

test();

