// 72. Edit Distance
// Given two strings word1 and word2, return the minimum number of
// operations required to convert word1 to word2.
// You have the following three operations permitted on a word:
// Insert a character
// Delete a character
// Replace a character

// https://www.youtube.com/watch?v=c3KYnQ-VEhs

function minDistance(word1: string, word2: string): number {
  // dp represents the minimum number of operations required to convert
  // the first i characters of word1 to the first j characters of word2
  const dp: number[][] = Array.from({ length: word1.length + 1 }, () =>
    Array.from({ length: word2.length + 1 }, () => 0),
  );

  // initialise the first row and column of the dp table
  // dp[i][0] = i (deleting all characters from word1)
  // dp[0][j] = j (inserting all characters from word2)
  dp[0] = Array.from({ length: word2.length + 1 }, (_, j) => j);
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      // chck i-1 and j-1 characters of word1 and word2
      // because i and j is ahead of the current character we are comparing
      // due to the space we allocated for the empty string in the dp table
      if (word1[i - 1] === word2[j - 1]) {
        // if the characters are the same, no additional operation is needed
        //copy diagonal from top-left
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // if characters are different we have to fix it
        // 3 choices: insert, delete, replace
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j], // delete (remove character from word1)
            dp[i][j - 1], // insert (add character to word1)
            dp[i - 1][j - 1], // replace (change character in word1)
          );
      }
    }
  }
  return dp[word1.length][word2.length];
}

console.log(minDistance("horse", "ros")); // 3
