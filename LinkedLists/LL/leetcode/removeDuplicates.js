class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // The function has a time complexity of O(n^2)
  // where n is the number of nodes in the list. This is because for each node,
  // it traverses the remaining nodes to check for duplicates.
  // The space complexity is O(1) as it does not use any additional data structures.
  removeDuplicatesWithoutSet() {
    let current = this.head;
    // traverse the linked list by moving current
    while (current !== null) {
      let runner = current;
      // for each current node, check all the following nodes by traversing with runner
      while (runner.next !== null) {
        // fyi runner is the node before the one we are comparing with current
        // if the value of the next node is equal to the current node's value, remove it
        if (runner.next.value === current.value) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }

  // The function has a time complexity of O(n)
  // where n is the number of nodes in the list, as it traverses the list only once.
  // The space complexity is also O(n), as it uses a set to store unique node values.
  removeDuplicatesWithSet() {
    // Create an empty Set to store unique values
    const values = new Set();
    // Initialize previous pointer as null
    let previous = null;
    // Initialize current pointer at head
    let current = this.head;

    // Iterate through the list using current pointer
    while (current !== null) {
      // If value already exists in the set
      if (values.has(current.value)) {
        // Remove the duplicate node by updating previous' next
        previous.next = current.next; // removed current
        // Decrement list length
        this.length -= 1;
      } else {
        // else add the unique value to the set
        values.add(current.value);
        // Update previous pointer to current node
        previous = current;
      }
      // Move current pointer to the next node
      current = current.next;
    }
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

myLinkedList.removeDuplicates();

console.log("\nList after removing duplicates:");
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    3
    4
    5
    5
    List after removing duplicates:
    1
    2
    3
    4
    5

*/
