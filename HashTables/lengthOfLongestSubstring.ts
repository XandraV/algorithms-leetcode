// Given a string s, find the length of the longest substring
// without duplicate characters.
const lengthOfLongestSubstring = function (s: string) {
  let maxSize = 0;
  const memo = new Map<string, number>();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    let idxOfChar = memo.get(char);

    // if char seen inside current window
    // move start index ie left pointer right after the duplicate char index ie idxOfChar
    if (idxOfChar !== undefined && idxOfChar >= left) {
      left = idxOfChar + 1;
    }
    let lengthOfWindow = right - left + 1; // ie length of longest substring with unique characters
    memo.set(char, right);
    maxSize = Math.max(maxSize, lengthOfWindow);
  }

  return maxSize;
};

console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("abcabcbb")); //  3
