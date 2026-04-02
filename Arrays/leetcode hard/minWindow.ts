// 76. Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum
// window substring of s such that every character in t (including duplicates) is
// included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.
function minWindow(s: string, t: string): string {
  let minLength = Infinity;
  let minLeft = 0;
  const freq = new Map<string, number>();
  for (let char of t) {
    freq.set(char, (freq.get(char) ?? 0) + 1);
  }
  let formed = 0;
  let required = freq.size;

  let left = 0;
  const windowFreq = new Map<string, number>();

  for (let right = 0; right < s.length; right++) {
    let curr = s[right];

    windowFreq.set(curr, (windowFreq.get(curr) ?? 0) + 1);
    if (freq.has(curr) && windowFreq.get(curr) === freq.get(curr)) {
      formed++;
    }

    // try to shrink window while valid
    while (formed === required) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minLeft = left;
      }
      //shrink from left
      let leftChar = s[left];
      windowFreq.set(leftChar, windowFreq.get(leftChar)! - 1);
      if (
        freq.has(leftChar) &&
        windowFreq.get(leftChar)! < freq.get(leftChar)!
      ) {
        formed--;
      }
      left++; // shrink from left
    }
  }
  return minLength === Infinity
    ? ""
    : s.substring(minLeft, minLeft + minLength);
}

console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"

// 1. Expand right → build valid window
// 2. When valid → shrink left
// 3. Update answer during shrinking
