// 678. Valid Parenthesis String
// Given a string s containing only three types of characters: '(', ')' and '*',
// return true if s is valid.

// The following rules define a valid string:
// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// STRATEGY
// Stack = fixed decisions but here we need: flexible decisions depending on future characters
// "*" creates uncertainty, so we track all possibilities at once
// ( → min=1 max=1
// * → min=0 max=2
// ) → min=0 max=1
// ) → min=0 max=0
// When elements have multiple meanings → track a range, not exact structure
function checkValidString(s: string): boolean {
  // Instead of tracking exact structure:
  //Track a range of possible open brackets
  let minOpen = 0;
  let maxOpen = 0;

  for (let char of s) {
    if (char === "(") {
      minOpen++;
      maxOpen++;
    } else if (char === ")") {
      minOpen--;
      maxOpen--;
    } else {
      // '*'
      minOpen--; // treat as ')'
      maxOpen++; // treat as '('
    }

    if (maxOpen < 0) return false;

    minOpen = Math.max(minOpen, 0);
  }

  return minOpen === 0;
}
