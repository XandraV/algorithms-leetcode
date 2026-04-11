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

  minValueNode(current) {
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  recursiveDelete(value, currentNode = this.root) {
    if (currentNode == null) return null;
    if (value < currentNode.value) {
      currentNode.left = this.recursiveDelete(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.recursiveDelete(value, currentNode.right);
    } else {
      // if node is a leaf then remove it by setting it to null
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      } else if (currentNode.left === null) {
        // if node has only right child then return right child
        return (currentNode = currentNode.right);
      } else if (currentNode.right === null) {
        // if node has only left child then return left child
        return (currentNode = currentNode.left);
      } else {
        // if node has two children then find the minimum value in the right subtree
        let subTreeMin = this.minValueNode(currentNode.right);
        // replace the value of the node to be deleted with the minimum value
        currentNode.value = subTreeMin;
        // delete the minimum value node from the right subtree
        currentNode.right = this.recursiveDelete(subTreeMin, currentNode.right);
      }
    }
    return currentNode;
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
  console.log("BST Delete 27:");
  console.log(myBST.recursiveDelete(27));
  console.log("BST Contains 27:");
  console.log(myBST.recursiveContains(27));
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    BST Contains 27:
    true
    BST Delete 27:
    BST Contains 27:
    false

*/
