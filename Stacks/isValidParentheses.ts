function isValid(s: string): boolean {
  if (
    [")", "}", "]"].includes(s[0]) ||
    ["(", "{", "["].includes(s[s.length - 1])
  ) {
    return false;
  }

  const stack = [s[0]]; // create stack to store opening brackets

  for (let i = 1; i <= s.length - 1; i++) {
    let char = s[i];
    (")");
    let top = stack[stack.length - 1];
    console.log(char, top);

    // check if char is a closing bracket and matches the top of the stack ie the opening bracket
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
