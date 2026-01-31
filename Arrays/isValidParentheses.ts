function isValid(s: string): boolean {
  let stack = []; // create an empty stack to store opening brackets
  for (let c of s) {
    // loop through each character in the string
    console.log(stack);
    if (c === "(" || c === "{" || c === "[") {
      // if the character is an opening bracket
      stack.push(c); // push it onto the stack
    } else {
      // if the character is a closing bracket
      if (
        !stack.length || // if the stack is empty or
        (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        console.log("string is not valid", c, "stack", stack);
        return false; // the string is not valid, so return false
      }
      console.log(stack);
      stack.pop(); // otherwise, pop the opening bracket from the stack
    }
  }
  return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
  // so the string is valid, otherwise, there are unmatched opening brackets hence return false
}
console.log(isValid("[({}())}")); // false
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true

function isValid2(s: string): boolean {
  if (
    [")", "]", "}"].includes(s[0]) ||
    ["(", "[", "{"].includes(s[s.length - 1])
  )
    return false;

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let top = stack[stack.length - 1];

    // check if char is a closing bracket and matches the top of the stack
    // which should be the corresponding opening bracket
    if (
      (char === ")" && top === "(") ||
      (char === "]" && top === "[") ||
      (char === "}" && top === "{")
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log(isValid2("(}{)")); // true
