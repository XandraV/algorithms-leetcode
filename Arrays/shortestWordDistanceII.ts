// 245. Shortest Word Distance III
// Given an array of strings wordsDict and two strings that already exist in
// the array word1 and word2, return the shortest distance between the occurrence of
// these two words in the list.
// Note that word1 and word2 may be the same. It is guaranteed that they represent two
// individual words in the list.

function shortestWordDistance(
  wordsDict: string[],
  word1: string,
  word2: string,
): number {
  let sDist = Infinity;
  let idx1 = -1;
  let idx2 = -1;
  let sameWordPrevIdx = -1;
  for (let i = 0; i < wordsDict.length; i++) {
    let word = wordsDict[i];
    if (word1 !== word2) {
      if (word === word1) {
        idx1 = i;
      } else if (word === word2) {
        idx2 = i;
      }

      if (idx1 > -1 && idx2 > -1) {
        sDist = Math.min(sDist, Math.abs(idx1 - idx2));
      }
    } else {
      if (word === word1) {
        if (sameWordPrevIdx === -1) {
          sameWordPrevIdx = i;
          continue;
        } else {
          sDist = Math.min(sDist, Math.abs(i - sameWordPrevIdx));
          sameWordPrevIdx = i;
        }
      }
    }
  }
  return sDist;
}

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "makes"
// Output: 3
