// 395. Longest Substring with At Least K Repeating Characters
// Given a string s and an integer k, return the length of the longest substring of s such
// that the frequency of each character in this substring is greater than or equal to k.
// if no such substring exists, return 0.
function longestSubstring(s: string, k: number): number {
  if (s.length === 0) return 0;
  let longest = 0;
  const freq = new Map();
  for (let c of s) {
    freq.set(c, (freq.get(c) ?? 0) + 1);
  }
  let splitChar = "";
  for (let [c, f] of freq) {
    if (f < k) {
      splitChar = c;
      break;
    }
  }
  if (splitChar === "") {
    return s.length;
  }

  const parts = s.split(splitChar);
  longest = 0;
  // part1 → longest = Math.max(0, 5) → 5
  // part2 → longest = Math.max(5, 3) → 5
  // part3 → longest = Math.max(5, 8) → 8
  for (let part of parts) {
    longest = Math.max(longest, longestSubstring(part, k));
  }
  return longest;
}
// Only need to split on one of them. When you split on that character,
// the resulting substrings will be recursed on — and in those recursive calls,
// any other insufficient character will be found and split on then.

// Each level of recursion eliminates at least one character,
// so it handles all of them eventually. At most 26 levels of recursion.

console.log(longestSubstring("aaabb", 3)); // 3
console.log(longestSubstring("ababbc", 2)); // 5
console.log(longestSubstring("ababbc", 3)); // 0
