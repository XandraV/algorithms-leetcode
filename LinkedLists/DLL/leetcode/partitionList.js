class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " <-> ";
      }
    }
    console.log(output);
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Partitions a doubly linked list around a value x
  // All nodes with values < x come before nodes
  // with values >= x.
  partitionList(x) {
    let dummy1 = new Node(0);
    let dummy2 = new Node(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = this.head;

    while (current !== null) {
      // store the next node before detaching current
      // this is to avoid losing the reference to the next node
      // and we need to continue traversing the list
      // as we will be modifying current's next and prev pointers
      const nextNode = current.next;
      current.next = null;
      current.prev = null;
      if (current.value < x) {
        prev1.next = current;
        current.prev = prev1;
        // update prev1 by move forward to current
        prev1 = current;
      } else {
        prev2.next = current;
        current.prev = prev2;
        prev2 = current;
      }
      current = nextNode;
    }

    // make sure to terminate the last node of the 2nd sublist
    prev2.next = null;
    // Connect the two sublists
    // prev1 points to the last element of the first sublist
    // and dummy2's next points to the first element of the second sublist
    // we connect them by setting prev1's next to dummy2's next
    prev1.next = dummy2.next;
    // set dummy2's next's prev to prev1
    if (dummy2.next) {
      dummy2.next.prev = prev1;
    }

    // set the head to the first element which is dummy1's next
    this.head = dummy1.next;

    // set final head's prev to null
    if (this.head) {
      this.head.prev = null;
    }
  }
}

// ------------------
// 🔍 Test Cases
// ------------------

console.log("===================================");
console.log("Test Case 1: Partition around x = 5");
console.log("===================================");
const dll1 = new DoublyLinkedList(3);
dll1.push(8);
dll1.push(5);
dll1.push(10);
dll1.push(2);
dll1.push(1);
console.log("BEFORE partitionList(5):");
dll1.printList();
dll1.partitionList(5);
console.log("AFTER partitionList(5):");
dll1.printList();

console.log("\n==========================================");
console.log("Test Case 2: All nodes less than x = 5");
console.log("==========================================");
const dll2 = new DoublyLinkedList(1);
dll2.push(2);
dll2.push(3);
console.log("BEFORE partitionList(5):");
dll2.printList();
dll2.partitionList(5);
console.log("AFTER partitionList(5):");
dll2.printList();

console.log("\n==========================================");
console.log("Test Case 3: All nodes greater than x = 5");
console.log("==========================================");
const dll3 = new DoublyLinkedList(6);
dll3.push(7);
dll3.push(8);
console.log("BEFORE partitionList(5):");
dll3.printList();
dll3.partitionList(5);
console.log("AFTER partitionList(5):");
dll3.printList();

console.log("\n=============================");
console.log("Test Case 4: Empty list, x = 5");
console.log("=============================");
const dll4 = new DoublyLinkedList(1);
dll4.makeEmpty();
console.log("BEFORE partitionList(5):");
dll4.printList();
dll4.partitionList(5);
console.log("AFTER partitionList(5):");
dll4.printList();

console.log("\n=================================");
console.log("Test Case 5: Single node, x = 5");
console.log("=================================");
const dll5 = new DoublyLinkedList(1);
console.log("BEFORE partitionList(5):");
dll5.printList();
dll5.partitionList(5);
console.log("AFTER partitionList(5):");
dll5.printList();
