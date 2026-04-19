// 340. Longest Substring with At Most K Distinct Characters
// Given a string s and an integer k, return the length of
// the longest substring of s that contains at most k distinct characters.
function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
  if (k === 0 || s.length === 0) return 0;
  if (k >= s.length) return s.length;

  let maxLen = 0;
  const distinctMap: Map<string, number> = new Map();

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let curr = s[right];
    distinctMap.set(curr, (distinctMap.get(curr) ?? 0) + 1);
    while (distinctMap.size > k) {
      let char = s[left];
      distinctMap.set(char, (distinctMap.get(char) ?? 0) - 1);
      if (distinctMap.get(char) === 0) {
        distinctMap.delete(char);
      }
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstringKDistinct("eceba", 2));
