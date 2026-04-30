// 3714. Longest Balanced Substring II
// You are given a string s consisting only of the characters 'a', 'b', and 'c'.
// A substring of s is called balanced if all distinct characters in
// the substring appear the same number of times.
// Return the length of the longest balanced substring of s.
function longestBalanced2(s: string): number {
  let maxLen = 0;
  // stores the "state" string as a key and the first index it was seen
  const map = new Map<string, number>();

  // Initial state: differences are all 0 at index -1
  map.set("0,0", -1);

  let aCount = 0;
  let bCount = 0;
  let cCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") aCount++;
    else if (s[i] === "b") bCount++;
    else if (s[i] === "c") cCount++;

    // Define the state as the relative difference between counts
    const diff1 = aCount - bCount;
    const diff2 = bCount - cCount;
    const key = `${diff1},${diff2}`;

    if (map.has(key)) {
      // If we've seen this difference before, the substring between
      // the first occurrence and now has equal a, b, and c.
      maxLen = Math.max(maxLen, i - map.get(key)!);
    } else {
      map.set(key, i);
    }
  }

  // Note: This specific implementation handles the {a,b,c} case.
  // For {a,b}, {b,c}, or {a,c} cases, you would run similar logic
  // masking out one character.
  return maxLen;
}

// The string is balanced if:count(a) == count(b)count(b) == count(c)
// (which implies count(a) == count(c))
// Instead of counting absolute numbers,
// we track the differences between counts.
// If the difference between a and b is $+2$ at index 5, and the difference is +2
// again at index 15, it means that between index 5 and 15,
// an equal number of as and bs were added.
