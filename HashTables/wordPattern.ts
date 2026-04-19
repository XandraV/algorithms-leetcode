// 290. Word Pattern
// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter
// in pattern and a non-empty word in s. Specifically:
// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.
function wordPattern(pattern: string, s: string): boolean {
  const p = pattern.split("");
  const sArr = s.split(" ");
  if (p.length !== sArr.length) return false;
  const patternMap = new Map();
  const wordMap = new Map();
  for (let i = 0; i < p.length; i++) {
    if (!patternMap.has(p[i])) {
      if (wordMap.has(sArr[i])) return false;
      patternMap.set(p[i], sArr[i]);
      wordMap.set(sArr[i], p[i]); // need a reverse map to ensure the mapping is bijective:
    } else if (patternMap.get(p[i]) !== sArr[i]) {
      return false;
    }
  }
  return true;
}
