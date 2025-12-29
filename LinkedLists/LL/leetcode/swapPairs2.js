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

  // O(n as every node is visited once (in pairs)
  // O(1)space complexity as only a few pointers are used (no recursion)
  swapPairs() {
    const dummy = new Node(0);
    dummy.next = this.head;

    let previous = dummy;
    let first = this.head;

    if (!first || !first.next) {
      return;
    }

    let second = first.next;

    while (first !== null && second !== null) {
      // Perform the swap
      previous.next = second;
      first.next = second.next;
      second.next = first;

      // Move pointers forward
      previous = first;
      first = first.next;

      // Prepare second for next iteration
      second = first && first.next ? first.next : null;
    }

    this.head = dummy.next;
  }
}
