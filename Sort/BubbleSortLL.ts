// value can be anything
// eg const list = new LinkedList<number>(1);

class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListTS<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor(value?: T) {
    if (value === undefined) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      const newNode = new ListNode(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  }

  push(value: T): this {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  bubbleSort(compare?: (a: T, b: T) => number): void {
    if (this.length < 2 || !this.head) return;

    const cmp = compare ?? ((a: any, b: any) => (a > b ? 1 : a < b ? -1 : 0));

    let sortedUntil: ListNode<T> | null = null;
    const secondNode = this.head.next;

    while (sortedUntil !== secondNode) {
      let current = this.head;

      while (current.next !== sortedUntil) {
        const nextNode = current.next!;

        if (cmp(current.value, nextNode.value) > 0) {
          const temp = current.value;
          current.value = nextNode.value;
          nextNode.value = temp;
        }

        current = current.next!;
      }

      sortedUntil = current;
    }
  }

  printList(): void {
    let temp = this.head;
    let output = "";

    if (!temp) {
      console.log("empty");
      return;
    }

    while (temp) {
      output += String(temp.value);
      temp = temp.next;
      if (temp) output += " -> ";
    }

    console.log(output);
  }

  makeEmpty(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
