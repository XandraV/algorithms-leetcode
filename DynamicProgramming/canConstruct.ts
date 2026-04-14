// Return true if word target can be constructed from the words in wordBank
// This is same pattern as canSum
// From every valid position i, try to “jump forward” using words.

const canConstruct = (target: string, wordBank: string[]): boolean => {
  const dp = new Array(target.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < target.length; i++) {
    if (dp[i]) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          dp[i + word.length] = true;
          // dp[i + word.length] = dp[i]; if we wanted to count num of ways to construct
        } 
      }
    }
  }
  return dp[target.length];
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "boar"]),
); // false
