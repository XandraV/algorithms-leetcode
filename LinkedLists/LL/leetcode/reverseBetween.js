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
    let output = "";
    if (temp === null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += " -> ";
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

  // Function to reverse nodes in a linked list between positions m and n
  // with while loops
  reverseBetween(m, n) {
    if (!this.head) {
      return;
    }

    const dummy = new Node(0);
    dummy.next = this.head;

    let prev = dummy;

    let count = 0;
    while (count < m) {
      prev = prev.next;
      count++;
    }

    let current = prev.next;

    let temp = current.next;

    let count2 = 0;
    while (count2 < n - m) {
      current.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
      temp = current.next;

      count2++;
    }

    this.head = dummy.next;
  }

  // with for loops
  // Function to reverse nodes in a linked list between positions m and n 
  reverseBetween2(m, n) {
    // Check if the list is empty. If it is, no action is needed.
    if (this.head === null) return;

    // Create a dummy node. This is a common technique used in linked list problems
    // to simplify edge cases, like when modifying the head of the list.
    const dummy = new Node(0);

    // Link this dummy node to the head of the list
    // as dummy is a precursor to the head node
    dummy.next = this.head;

    // set prev to the dummy node before head
    let prev = dummy;

    // Iterate to position just before where reversal begins.
    // Since indices are 0-based, this loop moves 'prev' 'm' nodes forward.
    // prev will eventually point to the node just before the start of the reversal.
    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }

    // first 'current' points to the first node that will be reversed
    // this is the mth node in the list, just after prev
    let current = prev.next;

    // The loop for the actual reversal of the segment between m and n.
    // It runs (n - m) times, moving each node in turn to the position after 'prev'.
    for (let i = 0; i < n - m; i++) {
      // 'temp' temporarily stores the next node after current to be moved after prev
      const temp = current.next;

      // Bypass/remove 'temp' in the current positioning.
      current.next = temp.next;

      // Insert 'temp' between 'prev' and 'prev.next' (initially current).
      // to move 'temp' to the front of the reversal segmen
      temp.next = prev.next;
      prev.next = temp;
    }

    // Update the head of the list if the head was part of the reversal
    this.head = dummy.next;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();
console.log("----------------");

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1 -> 2 -> 3 -> 4 -> 5
    List after reversing between indexes of 2 and 4:
    1 -> 2 -> 5 -> 4 -> 3
*/
