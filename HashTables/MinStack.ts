// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

class MinStack {
  min: number;
  stack: number[][];
  constructor() {
    this.min = Infinity;
    this.stack = [];
  }

  push(val: number): void {
    this.min = Math.min(this.min, val);
    this.stack.push([val, this.min]);
  }

  pop(): void {
    this.stack.pop();
    if (this.stack.length === 0) {
      this.min = Infinity;
    } else {
      this.min = this.stack[this.stack.length - 1][1];
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1][0];
  }

  getMin(): number {
    return this.min;
  }
}
