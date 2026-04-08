// 1358. Number of Substrings Containing All Three Characters
// Given a string s consisting only of characters a, b and c.
// Return the number of substrings containing at least one occurrence
// of all these characters a, b and c.

function numberOfSubstrings(s: string): number {
  let count = 0;
  const freq = new Map();

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    freq.set(char, (freq.get(char) ?? 0) + 1);

    // instead shrink till it's still valid
    while (freq.size === 3) {
      count += s.length - right;
      let leftChar = s[left];
      freq.set(leftChar, freq.get(leftChar)! - 1);
      if (freq.get(leftChar) === 0) {
        freq.delete(leftChar);
      }
      left++;
    }
  }

  return count;
}

// correct but exceeds time limit
// instead of shrinking the window till it's still valid
// reset the window and move by one -> suboptimal
function numberOfSubstrings2(s: string): number {
  let count = 0;
  const freq = new Map();
  let left = 0;
  let right = 0;
  while (left < s.length && right < s.length) {
    let char = s[right];
    freq.set(char, (freq.get(char) ?? 0) + 1);
    if (freq.size === 3) {
      count += s.length - right; // every substring after this is valid
      // reset the window and move by one
      freq.clear();
      left++;
      right = left;
    } else {
      right++;
    }
  }
  return count;
}

// Input: s = "abcabc"
// Output: 10

// Input: s = "aaacb"
// Output: 3
