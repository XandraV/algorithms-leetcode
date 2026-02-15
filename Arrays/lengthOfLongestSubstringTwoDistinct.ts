// 159. Longest Substring with At Most Two Distinct Characters

// Given a string s, return the length of the longest substring that
// contains at most two distinct characters.

function lengthOfLongestSubstringTwoDistinct(s: string): number {
  if (s.length === 0) return 0;

  const freq = new Map<string, number>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const curr = s[right];

    freq.set(curr, (freq.get(curr) ?? 0) + 1);

    while (freq.size > 2) {
      const leftChar = s[left];
      freq.set(leftChar, freq.get(leftChar)! - 1);

      if (freq.get(leftChar) === 0) {
        freq.delete(leftChar);
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
