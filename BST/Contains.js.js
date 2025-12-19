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
}

let myBST = new BST();

myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);

console.log("BST Contains 27:");
console.log(myBST.contains(27)); // true

console.log("\nBST Contains 17:");
console.log(myBST.contains(17)); // false
