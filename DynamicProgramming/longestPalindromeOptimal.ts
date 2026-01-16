function longestPalindromeOptimal(s: string): string {
  if (s.length === 1) return s;

  let l = 0;
  let maxLength = 0;
  // Loop through each index as potential center
  for (let i = 0; i < s.length; i++) {
    // odd
    let left = i,
      right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        l = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }

    // even
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        l = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  }

  return s.substring(l, l + maxLength);
}
