// 647. Palindromic Substrings
// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// reduce the time for palindromic checks to O(1) by reusing some previous computation
function countSubstrings(s: string): number {
  let count = 0;

  const n = s.length;
  // substring is palindrome or not
  const dp = Array.from({ length: n }, () => new Array(n).fill(false));

  // iterate over columns = substring length
  for (let j = 0; j < n; j++) {
    // only the to the right of the diagonal we have valid substrings in the dp matrix
    // hence i<=j
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        count++;
      }
    }
  }

  return count;
}
