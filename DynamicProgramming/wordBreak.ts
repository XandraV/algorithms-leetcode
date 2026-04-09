/**
 * 139. Word Break
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented
 * into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */
function wordBreak(s: string, wordDict: string[]): boolean {
  /** We use n + 1 because:
   * Index 0 represents “start of string” (empty prefix).
   * Index n represents “end of string”.
   * We need both.
   * So for "leetcode", length 8, we need indices 0..8, not just 0..7.
   * */
  const wordSet = new Set(wordDict); // instead of array look up which is O(n) use set
  const n = s.length;
  // dp[i] = can s[0..i-1] be segmented using wordDict?
  const dp = new Array(n + 1).fill(false);
  dp[0] = true; // base case: empty string is always valid as 'word'.slice(0,0) = ''

  for (let i = 0; i < n; i++) {
    if (!dp[i]) continue; // everything except 0, 4 is false so we skip ie we start checking the substrings from index 0 and 4
    for (let j = i + 1; j <= n; j++) {
      const word = s.slice(i, j);
      if (wordSet.has(word)) {
        dp[j] = true; // set dp[4] = true for "leet", dp[8] = true for "code"
      }
    }
  }

  return dp[n];
}

console.log(wordBreak("leetcode", ["leet", "code"])); // true
