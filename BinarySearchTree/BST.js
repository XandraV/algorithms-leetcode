class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      // If the value already exists, return undefined
      // to indicate that duplicates are not allowed
      if (newNode.value === temp.value) return undefined;

      // If the new value is less than the current node's value,
      // move to the left child; otherwise, move to the right child
      if (newNode.value < temp.value) {
        // If the left child is null, insert the new node here
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        // Otherwise, move to the left child
        temp = temp.left;
      } else {
        // If the right child is null, insert the new node here
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        // Otherwise, move to the right child
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root == null) return false;

    let temp = this.root;

    while (temp) {
      // If the value is less than the current node's value,
      // move to the left child; if it's greater, move to the right child
      // else if it matches, return true
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    // if temp becomes null, the value is not found
    // so we return false
    return false;
  }

  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
  // Breath First Search
  // Create a queue and a results array to store the values of nodes visited
  // Move the root node in the queue
  // Loop as long as there is anything in the queue
  //    a. Dequeue a node and push the value of the node
  //       into results array and assign it to currentNode
  //    b. If there is a left child of the currentNode, add it to the queue
  //    c. If there is a right child of the currentNode, add it to the queue
  // Return the results array
  BFS() {
    let currentNode = this.root;
    let results = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  DFSPreOrder() {
    let results = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }

  DFSPostOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
}

function test() {
  let myTree = new BST();

  myTree.insert(47);
  myTree.insert(21);
  myTree.insert(76);
  myTree.insert(18);
  myTree.insert(27);
  myTree.insert(52);
  myTree.insert(82);

  console.log(myTree.BFS());
}

test(); // [ 47, 21, 76, 18, 27, 52, 82 ]


// Test contains
console.log("BST Contains 27:");
console.log(myBST.contains(27)); // true

console.log("\nBST Contains 17:");
console.log(myBST.contains(17)); // false


// Test DFS
let myTree = new BST();

myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);

console.log(myTree.DFSInOrder()); // [ 18, 21, 27, 47, 52, 76, 82 ]