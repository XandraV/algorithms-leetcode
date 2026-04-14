// Return all the ways word target can be constructed from the words in wordBank
// This is canConstruct but instead of marking reachable, you carry the full paths forward.
// Instead of storing true/false, you store all paths to reach each index.
const allConstruct = (target: string, wordBank: string[]): string[][] => {
  // dp[i] = all ways to construct target[0..i)
  // list of combinations that build up to i
  // and extend each combination when a word matches
  const dp: string[][][] = new Array(target.length + 1)
    .fill(null)
    .map(() => []);

  // Base case: one way to construct empty string → []
  dp[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    // Only proceed if there are valid constructions up to i
    if (dp[i].length > 0) {
      for (let word of wordBank) {
        // If word matches at position i
        if (target.slice(i, i + word.length) === word) {
          // Append current word to all previous combinations
          const newCombinations = dp[i].map((subArray) => [...subArray, word]);

          // Add new combinations to the target position
          dp[i + word.length].push(...newCombinations);
        }
      }
    }
  }

  // Return all ways to construct the full string
  return dp[target.length];
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // true
