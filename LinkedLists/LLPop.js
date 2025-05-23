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
    this.tail = this.head;
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
    // create a new node
    // if the list is empty, set the head and tail to the new node
    // if the list is not empty, set the next of the tail to the new node
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // complexity is O(n)
  // pop() removes the last node from the linked list
  // it takes O(n) time because we are traversing the linked list
  // to get the last node
  pop() {
    if (!this.head) return undefined;

    // two pointers
    // one to traverse the list - temp
    // one to keep track of the previous node - pre
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    // set the tail to the previous node
    // so we can remove the last node
    this.tail = pre;
    // to remove the last node, set the next of the previous node to null
    this.tail.next = null;
    // decrement the length of the list
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);

// (2) Items in LL - Returns 2 Node
if (myLinkedList.length !== 0) {
  console.log(myLinkedList.pop().value);
} else {
  console.log("null");
}

// (1) Item in LL - Returns 1 Node
if (myLinkedList.length !== 0) {
  console.log(myLinkedList.pop().value);
} else {
  console.log("null");
}

// (0) Items in LL - Returns null
if (myLinkedList.length !== 0) {
  console.log(myLinkedList.pop().value);
} else {
  console.log("null");
}

/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/
