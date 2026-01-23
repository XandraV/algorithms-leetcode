// Given an array of strings wordsDict and
// two strings that already exist in the array word1 and word2,
// return the shortest distance between the occurrence of these two words in the list.
// Note that word1 and word2 may be the same.
// It is guaranteed that they represent two individual words in the list.

// O(n) time, O(1) space
function shortestWordDistance(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  let word1Index = -1;
  let word2Index = -1;
  let distance = Infinity;
  let tempDistance = Infinity;

  for (let i = 0; i < wordsDict.length; i++) {
    const word = wordsDict[i];

    // if word1 === word2
    if (word1 === word2 && word1Index > -1 && word === word1) {
      if (word2Index === -1) {
        word2Index = i; // first occurrence
      } else {
        word1Index = word2Index; // shift (first) previous occurrence
        word2Index = i; // current occurrence
      }
      tempDistance = Math.abs(word1Index - i);
      distance = Math.min(distance, tempDistance);
    } else if (word === word1) {
      if (word2Index > -1) {
        tempDistance = Math.abs(word2Index - i);
        distance = Math.min(distance, tempDistance);
      }
      word1Index = i;
    } else if (word === word2) {
      if (word1Index > -1) {
        tempDistance = Math.abs(word1Index - i);
        distance = Math.min(distance, tempDistance);
      }
      word2Index = i;
    } else {
      continue;
    }
  }
  return distance;
}

const wordsDict = ["practice", "makes", "perfect", "coding", "makes"],
  word1 = "makes",
  word2 = "coding";

console.log(shortestWordDistance(wordsDict, word1, word2)); // 1

const wordsDict2 = ["practice", "makes", "perfect", "coding", "makes"],
  word12 = "makes",
  word22 = "makes";

console.log(shortestWordDistance(wordsDict2, word12, word22)); // 3

const wordsDict3 = ["a", "c", "a", "a"],
  word13 = "a",
  word23 = "a";

console.log(shortestWordDistance(wordsDict3, word13, word23)); // 1
