// 161. One Edit Distance
// Given two strings s and t, return true if they are both one edit distance apart,
// otherwise return false.
// A string s is said to be one distance apart from a string t if you can:
// Insert exactly one character into s to get t.
// Delete exactly one character from s to get t.
// Replace exactly one character of s with a different character to get t.
function isOneEditDistance(s: string, t: string): boolean {
  // Ensure s is the shorter (or equal) string
  if (s.length > t.length) return isOneEditDistance(t, s);
  // Length difference > 1 means more than one edit (must be AFTER swap)
  if (t.length - s.length > 1) return false;

  let distance = 0;
  for (let i = 0, j = 0; i < s.length || j < t.length; i++, j++) {
    if (s[i] !== t[j]) {
      distance++;
      if (distance > 1) {
        return false;
      }

      // If lengths differ, only advance j (skip the inserted char in t)
      if (s.length !== t.length) {
        i--; // counteract the i++ in the loop header
      }
    }
  }
  return distance === 1;
}
