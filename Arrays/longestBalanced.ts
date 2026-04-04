// 3713. Longest Balanced Substring I
// You are given a string s consisting of lowercase English letters.
// A substring of s is called balanced if all distinct characters
// in the substring appear the same number of times.
// Return the length of the longest balanced substring of s.
function longestBalanced(s: string): number {
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    const freq = new Map();
    let maxFreq = 0;
    for (let j = i; j < s.length; j++) {
      let curr = s[j]; // current char
      freq.set(curr, (freq.get(curr) ?? 0) + 1);
      let currFreq = freq.get(curr) ?? 0;
      maxFreq = Math.max(maxFreq, currFreq);

      // curr length of substring = max frequency of characters in this window * distincts elements in this window ie freq map size
      if (j - i + 1 === maxFreq * freq.size) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  return maxLen;
}

console.log(longestBalanced("abba")); //
