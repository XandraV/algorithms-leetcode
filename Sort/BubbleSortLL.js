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

  // sorts the linked list using the bubble sort algorithm
  // complexity: O(n^2) time as we have nested loops
  // O(1) space as we modify the list in place
  bubbleSort() {
    if (this.length < 2) return;

    let sortedUntil = null;
    const secondNode = this.head.next;
    // sort until we reach the second node
    while (sortedUntil !== secondNode) {
      // start from the head each time
      let current = this.head;
      // traverse until the sorted part
      while (current.next !== sortedUntil) {
        let nextNode = current.next;
        // swap values if out of order
        if (current.value > nextNode.value) {
          const temp = current.value;
          current.value = nextNode.value;
          nextNode.value = temp;
        }
        // move to next node
        current = current.next;
      }
      // update the boundary of the sorted part
      sortedUntil = current;
    }
  }
}

const list1 = new LinkedList(4);
list1.push(3);
list1.push(2);
list1.push(1);
console.log("Sort descending list:");
list1.printList(); // 4 -> 3 -> 2 -> 1
list1.bubbleSort();
list1.printList(); // 1 -> 2 -> 3 -> 4

const list2 = new LinkedList(1);
list2.push(2);
console.log("Sort already sorted list:");
list2.printList(); // 1 -> 2
list2.bubbleSort();
list2.printList(); //  1 -> 2

const list3 = new LinkedList(3);
list3.push(1);
list3.push(4);
list3.push(2);
console.log("Sort list with random elements:");
list3.printList(); // 3 -> 1 -> 4 -> 2
list3.bubbleSort();
list3.printList(); //  1 -> 2 -> 3 -> 4

const list4 = new LinkedList(3);
list4.push(3);
list4.push(2);
list4.push(2);
console.log("Sort list with duplicate elements:");
list4.printList(); //  3 -> 3 -> 2 -> 2
list4.bubbleSort();
list4.printList(); //  2 -> 2 -> 3 -> 3

const list5 = new LinkedList(1);
console.log("Sort single-element list:");
list5.printList(); // 1
list5.bubbleSort();
list5.printList(); //  1

const list6 = new LinkedList(-1);
list6.push(-2);
list6.push(1);
console.log("Sort list with negative numbers:");
list6.printList(); //  -1 -> -2 -> 1
list6.bubbleSort();
list6.printList(); //  -2 -> -1 -> 1

const list7 = new LinkedList(0);
list7.push(0);
list7.push(1);
console.log("Sort list with zeros:");
list7.printList(); // 0 -> 0 -> 1
list7.bubbleSort();
list7.printList(); // 0 -> 0 -> 1

const list8 = new LinkedList(1);
list8.makeEmpty();
console.log("Sort empty list:");
list8.printList();
list8.bubbleSort();
list8.printList();
