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

  recursiveInsert(value, currentNode = this.root) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    }

    if (currentNode === null) {
      return new Node(value);
    }

    if (value < currentNode.value) {
      currentNode.left = this.recursiveInsert(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.recursiveInsert(value, currentNode.right);
    }

    return currentNode;
  }

  recursiveContains(value, currentNode = this.root) {
    if (currentNode == null) return false;
    if (value == currentNode.value) return true;

    if (value < currentNode.value) {
      return this.recursiveContains(value, currentNode.left);
    } else {
      return this.recursiveContains(value, currentNode.right);
    }
  }
}

function test() {
  let myBST = new BST();

  myBST.recursiveInsert(47);
  myBST.recursiveInsert(21);
  myBST.recursiveInsert(76);
  myBST.recursiveInsert(18);
  myBST.recursiveInsert(27);
  myBST.recursiveInsert(52);
  myBST.recursiveInsert(82);

  console.log("BST Contains 27:");
  console.log(myBST.recursiveContains(27));

  console.log("\nBST Contains 17:");
  console.log(myBST.recursiveContains(17));
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    BST Contains 27:
    true
    
    BST Contains 17:
    false

*/
