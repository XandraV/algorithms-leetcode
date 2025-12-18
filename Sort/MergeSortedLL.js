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

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
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

  merge(otherList) {
    let otherHead = otherList.head;
    let dummy = new Node(0);
    // current will point to the dummy node
    // points to the last added node
    // and will move forward as we add nodes
    let current = dummy; // pointer on the dummy list

    while (this.head !== null && otherHead !== null) {
      if (this.head.value < otherHead.value) {
        current.next = this.head;
        this.head = this.head.next;
      } else {
        current.next = otherHead;
        otherHead = otherHead.next;
      }
      current = current.next;
    }

    if (this.head !== null) {
      current.next = this.head;
    } else {
      current.next = otherHead;
      this.tail = otherList.tail;
    }

    // skip first item which is dummy node
    this.head = dummy.next;
    this.length += otherList.length;
  }
}

const list1 = new LinkedList(1);
list1.push(3);
list1.push(5);
const list2 = new LinkedList(2);
list2.push(4);
list2.push(6);
console.log("Merge two sorted lists:");
list1.merge(list2);
list1.printList(); //  1 -> 2 -> 3 -> 4 -> 5 -> 6

const list5 = new LinkedList(1);
list5.push(2);
list5.push(3);
const list6 = new LinkedList(1);
list6.push(2);
list6.push(3);
console.log("Merge lists with duplicates:");
list5.merge(list6);
list5.printList(); //  1 -> 1 -> 2 -> 2 -> 3 -> 3

const list7 = new LinkedList(-1);
list7.push(0);
const list8 = new LinkedList(-2);
list8.push(-1);
console.log("Merge lists with negative numbers:");
list7.merge(list8);
list7.printList(); // -2 -> -1 -> -1 -> 0

const list9 = new LinkedList(1);
list9.push(2);
const list10 = new LinkedList(3);
list10.push(4);
list10.push(5);
console.log("Merge lists where one is larger:");
list9.merge(list10);
list9.printList(); // 1 -> 2 -> 3 -> 4 -> 5
