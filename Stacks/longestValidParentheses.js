// Given a string containing just the characters '(' and ')',
// return the length of the longest valid (well-formed) parentheses substring.
const longestValidParentheses = (s) => {
  let maxLen = 0;
  const stack = [-1];
  // Initializing with -1 as a base index for calculating lengths of valid substrings
  // that start at the very beginning (i = 0).
  // Without -1, the first valid substring starting
  //at index 0 would be miscounted.
  // s = "()"
  // i = 0: '(' → push 0 → stack = [-1,0]
  // i = 1: ')' → pop 0 → stack = [-1]
  // maxLen = 1 - (-1) = 2 ✅ correct

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i); // we push index of '('
    } else {
      stack.pop(); // we pop matching '('
      if (stack.length === 0) {
        stack.push(i); // we reset base index
      } else {
        // stack.at(-1) returns last element in the stack
        // which is the last elements index after unmatching/popping

        // stack stores the indices of parentheses that don’t yet have a match
        // hence the last element of the stack is the index of the last unmatched paren
        // difference between i and stack.at(-1) is the length of the matched parens
        // ie the max valid parens
        maxLen = Math.max(maxLen, i - stack.at(-1));
      }
    }
  }

  return maxLen;
};
