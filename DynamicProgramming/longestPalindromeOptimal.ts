function longestPalindrome(s: string): string {
  if (s.length === 1) return s;

  let startIdx = 0; // starting index of the longest palindrome found
  let maxLength = 0; // length of the longest palindrome found
  // Loop through each index as potential center
  for (let i = 0; i < s.length; i++) {
    // odd case center is s[i]
    let left = i,
      right = i;
    // loop as long as we we stay inside the string and characters match
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        startIdx = left;
        maxLength = right - left + 1; // current palindrome length
      }
      // expand
      left--;
      right++;
    }

    // even case center is s[i] and s[i+1]
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        startIdx = left;
        maxLength = right - left + 1; // current palindrome length
      }
      left--;
      right++;
    }
  }

  return s.substring(startIdx, startIdx + maxLength);
}

console.log(longestPalindrome("cbbd")); // "bb"
