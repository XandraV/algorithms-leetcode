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

  // sorts the linked list using the selection sort algorithm.
  // complexity: O(n^2) time, O(1) space
  selectionSort() {
    if (this.length < 2) return;

    let current = this.head;

    // Traverse the list until the second last node
    // as the last node will already be in place
    while (current.next !== null) {
      let smallest = current;
      let innerCurrent = current.next;

      // Find the smallest node in the unsorted portion
      while (innerCurrent !== null) {
        if (innerCurrent.value < smallest.value) {
          smallest = innerCurrent;
        }
        // Move to the next node in the inner loop
        innerCurrent = innerCurrent.next;
      }
      // if smallest is not the current node, swap their values
      // if same node, do nothing
      // swaping values avoids changing node links and simplifies the process
      if (smallest !== current) {
        let temp = smallest.value;
        smallest.value = current.value;
        current.value = temp;
      }
      // Move to the next node in the outer loop
      current = current.next;
    }

    // Update the tail reference
    this.tail = current;
  }
}

const list1 = new LinkedList(4);
list1.push(3);
list1.push(2);
list1.push(1);
console.log("Sort descending list:");
list1.selectionSort();
list1.printList(); //  1 -> 2 -> 3 -> 4

const list2 = new LinkedList(1);
list2.push(2);
console.log("Sort already sorted list:");
list2.selectionSort();
list2.printList(); //  1 -> 2

const list3 = new LinkedList(3);
list3.push(1);
list3.push(4);
list3.push(2);
console.log("Sort list with random elements:");
list3.selectionSort();
list3.printList(); //  1 -> 2 -> 3 -> 4

const list4 = new LinkedList(3);
list4.push(3);
list4.push(2);
list4.push(2);
console.log("Sort list with duplicate elements:");
list4.selectionSort();
list4.printList(); //  2 -> 2 -> 3 -> 3

const list5 = new LinkedList(1);
console.log("Sort single-element list:");
list5.selectionSort();
list5.printList(); //  1

const list6 = new LinkedList(-1);
list6.push(-2);
list6.push(1);
console.log("Sort list with negative numbers:");
list6.selectionSort();
list6.printList(); //  -2 -> -1 -> 1

const list7 = new LinkedList(0);
list7.push(0);
list7.push(1);
console.log("Sort list with zeros:");
list7.selectionSort();
list7.printList(); //  0 -> 0 -> 1

const list8 = new LinkedList(1);
list8.makeEmpty();
console.log("Sort empty list:");
list8.selectionSort();
list8.printList(); // empty
