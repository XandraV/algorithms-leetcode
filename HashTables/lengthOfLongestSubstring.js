// Given a string s, find the length of the longest substring
// without duplicate characters.
const lengthOfLongestSubstring = function (s) {
  let maxSize = 0;
  let map = new Map();
  let start = 0; // left pointer of sliding window

  for (let i = 0; i < s.length; i++) {
    let char = s[i]; //d

    if (map.has(char) && map.get(char) >= start) {
      // if char seen inside current window
      // move start right after the duplicate char
      start = map.get(char) + 1;
    }

    map.set(char, i); // update last index of current char
    //  i is at the front, everthing before start doesn't matter so we subtract it
    maxSize = Math.max(maxSize, i - start + 1);
  }

  return maxSize;
};

console.log("Example 1:");
console.log("Input: pwwkew");
console.log("Output: ", lengthOfLongestSubstring("pwwkew")); // should be 3

console.log("Example 2:");
console.log("Input: abcabcbb");
console.log("Output: ", lengthOfLongestSubstring("abcabcbb")); // should be 3

console.log("Example 3:");
console.log("Input: dvdf");
console.log("Output: ", lengthOfLongestSubstring("dvdf")); // should be 3
