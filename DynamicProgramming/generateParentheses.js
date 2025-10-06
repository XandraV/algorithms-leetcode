const generateParenthesis = (n) => {
  // global array that stores all valid parentheses combinations.
  const result = [];

  // add elements to slate while exploring, remove them after exploring, and finally save a valid one.
  // openCount: how many '(' have been used so far in this branch.
  // i: Current position in the string (0 → 2*n).
  // n: Number of parentheses pairs.
  const dfs = (i, n, slate, openCount, closeCount) => {
    // Backtracking case
    // If we’ve used too many '(' or ')', stop exploring this branch early.
    if (openCount > n) return;
    if (closeCount > openCount) return;

    // base case
    // when we’ve added 2*n characters, the string is complete.
    if (i === n * 2) {
      // convert slate into a string when saving a valid result.
      result.push(slate.join(""));
      return;
    }

    // dfs recursive

    // add open paren
    slate.push("(");
    dfs(i + 1, n, slate, openCount + 1, closeCount);
    // backtrack by popping ( we added before recursion
    slate.pop();

    // add close paren
    slate.push(")");
    dfs(i + 1, n, slate, openCount, closeCount + 1);
    // If we don’t pop() here, the parent branch’s slate is corrupted,
    // and any further siblings (if any) will start with an extra ')'.
    slate.pop();
  };

  dfs(0, n, [], 0, 0);
  return result;
};
