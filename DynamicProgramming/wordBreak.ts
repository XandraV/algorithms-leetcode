/**
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
  const n = s.length;
  const result = new Array(n + 1).fill(false);
  result[0] = true; // base case: empty string is always valid as 'word'.slice(0,0) = ''

  for (let i = 0; i < n; i++) {
    if (!result[i]) continue; 
    for (let j = i + 1; j <= n; j++) {
      const word = s.slice(i, j);
      if (wordDict.includes(word)) {
        result[j] = true;
      }
    }
  }

  return result[n];
}

console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("aaaaaaa", ["aaaa", "aaa"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
