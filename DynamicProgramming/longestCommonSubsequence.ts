// Given two strings text1 and text2, return the length of their longest common subsequence.
//  If there is no common subsequence, return 0.
// A subsequence of a string is a new string generated from the original string with some characters
// (can be none) deleted without changing the relative order of the remaining characters.
// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.split("").length;
  const n = text2.split("").length;
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // dp[i-1][j-1] diagonal because we used both characters,
        // so we look at the LCS before dp[i][j] and diagolnal before dp[i][j] is  dp[i]-1[j-1]
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}
/*
   dp[i][j] = length of LCS between
   first i characters of text1
   first j characters of text2
   
   dp[0][*] → empty string vs something → 0
   dp[*][0] → something vs empty string → 0
   dp[3][2] → LCS of "abc" and "ac"

         ""  a  c  e
     ----------------
    "" |  0  0  0  0
    a  |  0  1  1  1
    b  |  0  1  1  1
    c  |  0  1  2  2
    d  |  0  1  2  2
    e  |  0  1  2  3

*/
console.log(longestCommonSubsequence("abcde", "ace"));
