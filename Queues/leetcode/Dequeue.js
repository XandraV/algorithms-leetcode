class Stack {
  constructor() {
    this.stackList = [];
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  peek() {
    return this.stack1.peek();
  }

  isEmpty() {
    return this.stack1.isEmpty();
  }

  enqueue(value) {
    // Move all existing elements from stack1 to stack2
    // This reverses their order, exposing the "bottom" of stack1
    // so we can insert the new element at the bottom (queue tail)
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    // Push the new value onto stack1
    // stack1 now only contains the new element
    // which will become the last element in the queue
    this.stack1.push(value);

    // Move all elements back from stack2 to stack1
    // This restores the original order, with the new element
    // now placed at the bottom of stack1
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    // if the queue is empty, return null
    if (this.isEmpty()) {
      return null;
    } else {
      // Otherwise, remove and return the front element
      // from the queue by popping from stack1
      return this.stack1.pop();
    }
  }
}

const queue = new MyQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Initial queue state:");
console.log("Peek: ", queue.peek());
console.log("Is the queue empty? ", queue.isEmpty());

console.log("Dequeueing the first element: ", queue.dequeue());
console.log("Peek after dequeueing: ", queue.peek());

console.log("Dequeueing the second element: ", queue.dequeue());
console.log("Peek after dequeueing: ", queue.peek());

console.log("Dequeueing the third element: ", queue.dequeue());
console.log("Is the queue empty? ", queue.isEmpty());

console.log("Dequeueing from empty queue: ", queue.dequeue());
