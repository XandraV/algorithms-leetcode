// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character
// while preserving the order of characters. No two characters may map to the same character,
//  but a character may map to itself.

function isIsomorphic(s: string, t: string): boolean {
  // TODO base case
  if (s.length !== t.length) {
    return false;
  }
  if (s.length < 2) {
    return true;
  }

  let res = true;
  const isoMap: Map<string, string> = new Map();
  const mappedChars: Set<string> = new Set();

  for (let i = 0; i < s.length; i++) {
    let charInS = s[i];
    let charInT = t[i];
    let charSInIsoMap = isoMap.get(charInS);
    if (charSInIsoMap !== undefined) {
      if (charSInIsoMap !== charInT) return false;
    } else {
      if (mappedChars.has(charInT)) return false;
      isoMap.set(charInS, charInT);
      mappedChars.add(charInT);
    }
  }

  return res;
}

console.log(isIsomorphic("badc", "baba"));
