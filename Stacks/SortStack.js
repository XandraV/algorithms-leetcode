class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    console.log(this.stackList.slice().reverse().join(" "));
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

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

// sort the elements of a stack in ascending order
function sortStack(stack) {
  stack.printStack();
  // used to temporarily hold elements from the original stack during the sorting process
  const tempStack = new Stack();

  // processes each element in the original stack for sorting
  while (!stack.isEmpty()) {
    // The top element of the original stack is popped
    // and stored in a temporary variable temp
    const temp = stack.pop();

    // While tempStack is not empty and its top element is greater than temp,
    // move elements from tempStack back to the original stack
    // flip > to sort in descending order
    while (!tempStack.isEmpty() && tempStack.peek() > temp) {
      stack.push(tempStack.pop());
    }

    // otherwise push temp onto tempStack
    tempStack.push(temp);
  }

  // Refill the original Stack with sorted elements
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
}

function stackToString(stack) {
  return JSON.stringify(stack.getStackList());
}

// Test case 1
const stack1 = new Stack();
stack1.push(5);
stack1.push(3);
stack1.push(8);
stack1.push(1);
const expected1 = JSON.stringify([8, 5, 3, 1]);
sortStack(stack1);
const result1 = stackToString(stack1);
console.log(`Test case 1 | Expected: ${expected1} | Result: ${result1}`);

// Test case 2
const stack2 = new Stack();
stack2.push(9);
stack2.push(4);
stack2.push(7);
stack2.push(2);
const expected2 = JSON.stringify([9, 7, 4, 2]);
sortStack(stack2);
const result2 = stackToString(stack2);
console.log(`Test case 2 | Expected: ${expected2} | Result: ${result2}`);

// Test case 3
const stack3 = new Stack();
stack3.push(10);
stack3.push(6);
stack3.push(3);
stack3.push(1);
stack3.push(5);
const expected3 = JSON.stringify([10, 6, 5, 3, 1]);
sortStack(stack3);
const result3 = stackToString(stack3);
console.log(`Test case 3 | Expected: ${expected3} | Result: ${result3}`);

/*
    EXPECTED OUTPUT:
    ----------------
    Test case 1 | Expected: [8,5,3,1] | Result: [8,5,3,1]
    Test case 2 | Expected: [9,7,4,2] | Result: [9,7,4,2]
    Test case 3 | Expected: [10,6,5,3,1] | Result: [10,6,5,3,1]

*/
