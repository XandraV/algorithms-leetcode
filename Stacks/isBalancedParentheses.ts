function isBalancedParentheses3(parentheses: string): boolean {
  if (parentheses[0] === ")") return false;
  let stack: string[] = [];
  for (let i = 0; i < parentheses.length; i++) {
    let curr = parentheses[i];

    let top = stack[stack.length - 1];
    if (top === "(" && curr === ")") {
      stack.pop();
    } else stack.push(curr);
  }
  return stack.length === 0;
}

const input = "(()())";
console.log(isBalancedParentheses3(input)); // true

function isValid(s: string): boolean {
  if ([")", "}", "]"].includes(s[0])) return false;
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];

    let top = stack[stack.length - 1];
    if (
      (top === "(" && curr === ")") ||
      (top === "{" && curr === "}") ||
      (top === "[" && curr === "]")
    ) {
      stack.pop();
    } else stack.push(curr);
  }
  return stack.length === 0;
}
const test = "()[]{}";
console.log(isValid(test)); // true
