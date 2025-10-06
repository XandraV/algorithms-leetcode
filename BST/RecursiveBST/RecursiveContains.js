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

  // Recursively checks if the BST contains a specific value
  // move to left or right child based on comparison
  // until the value is found or a null child is reached
  contains(value, currentNode = this.root) {
    if (currentNode == null) return false;
    if (value == currentNode.value) return true;

    if (value < currentNode.value) {
      return this.contains(value, currentNode.left);
    } else {
      return this.contains(value, currentNode.right);
    }
  }
  
}

function test() {
  let myBST = new BST();

  myBST.insert(47);
  myBST.insert(21);
  myBST.insert(76);
  myBST.insert(18);
  myBST.insert(27);
  myBST.insert(52);
  myBST.insert(82);

  console.log("BST Contains 27:");
  console.log(myBST.contains(27));

  console.log("\nBST Contains 17:");
  console.log(myBST.contains(17));
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
