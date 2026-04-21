// 22. Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  function dfs(path: string[], openCount: number, closeCount: number) {
    // stop when open and close count === n
    if (openCount === n && closeCount === n) {
      res.push([...path].join(""));
    }
    // add open if less than n
    if (openCount < n) {
      path.push("(");
      dfs(path, openCount + 1, closeCount);
      path.pop();
    }

    // add close if less than n and less than open count
    if (closeCount < openCount && closeCount < n) {
      path.push(")");
      dfs(path, openCount, closeCount + 1);
      path.pop();
    }
  }

  dfs(["("], 1, 0);
  return res;
}
console.log(generateParenthesis(3));
// ["((()))","(()())","(())()","()(())","()()()"]
