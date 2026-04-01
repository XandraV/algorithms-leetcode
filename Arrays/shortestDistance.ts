// 243. Shortest Word Distance
// Given an array of strings wordsDict and two different strings that already exist
// in the array word1 and word2, return the shortest distance between these two words in the list.

function shortestDistance(
  wordsDict: string[],
  word1: string,
  word2: string,
): number {
  let sDist = Infinity;
  let idx1 = -1;
  let idx2 = -1;
  for (let i = 0; i < wordsDict.length; i++) {
    let word = wordsDict[i];
    if (word === word1) {
      idx1 = i;
    } else if (word === word2) {
      idx2 = i;
    }

    if (idx1 > -1 && idx2 > -1) {
      sDist = Math.min(sDist, Math.abs(idx1 - idx2));
    }
  }
  return sDist;
}

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3
