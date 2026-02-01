// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where s and t are divided
// into n and m substrings respectively, such that:
// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) return false;

  const dp: boolean[][] = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill(false),
  );

  dp[0][0] = true;

  // First column
  // first char of s3 has to match char either from s1 OR s2 below
  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  // First row
  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      // At position (i, j) in DP, we are trying to match s3[i + j - 1]
      // with a char from s1 or s2
      // Take the next character from s1, is it equal to char in s3?
      // dp[i-1][j] && s1[i-1] === s3[i+j-1] OR
      // Take the next character from s2, is it equal to char in s3?
      // dp[i][j-1] && s2[j-1] === s3[i+j-1]

      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }

  return dp[s1.length][s2.length];
}

const s1 = "aabcc",
  s2 = "dbbca",
  s3 = "aadbbcbcac";
console.log(isInterleave(s1, s2, s3));

//            s2 →
//            d  b  b  c  a
//          ┌────────────────
//    s1  a │ T  F  F  F  F
//    ↓   a │ T  T  T  F  F
//        b │ F  T  T  T  F
//        c │ F  F  T  T  T
//        c │ F  F  F  T  T
