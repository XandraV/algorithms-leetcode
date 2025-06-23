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
}

function test() {
  let myBST = new BST();

  myBST.insert(2);
  myBST.insert(1);
  myBST.insert(3);

  /*
        THE LINES ABOVE CREATE THIS TREE:
                     2
                    / \
                   1   3
    */

  console.log("Root:", myBST.root.value);
  console.log("\nRoot->Left:", myBST.root.left.value);
  console.log("\nRoot->Right:", myBST.root.right.value);
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Root: 2

    Root->Left: 1

    Root->Right: 3

*/
