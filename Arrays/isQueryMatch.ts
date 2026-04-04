const sentence = "The quick fox has a big brown fox";
const k = 2;
// if match, return indices in the sentence of the words that match

// quick dog - not a match
// quick fox - match

// strategy: ARRAY(words, strings, sentence) + HASHMAP(lookup) + DISTANCE TRACKING
function isMatch(sentence: string, query: string, k: number): number[][] {
  let minDistResult = null;
  const [word1, word2] = query.split(" ");
  const result: number[][] = [];

  const words = sentence.split(" ");
  let minDistance = words.length; // Initialize minDistance to the maximum possible distance
  let idx1 = -1;
  let idx2 = -1;

  for (let i = 0; i < words.length; i++) {
    let curr = words[i].toLowerCase();

    if (curr === word1) {
      idx1 = i;
      if (idx2 > -1 && Math.abs(idx1 - idx2) <= k) {
        let currDist = Math.abs(idx1 - idx2);
        if (currDist < minDistance) {
          minDistance = currDist;
          minDistResult = [idx1, idx2];
        }
        result.push([idx1, idx2]);
      }
    }
    if (curr === word2) {
      idx2 = i;
      if (idx1 > -1 && Math.abs(idx1 - idx2) <= k) {
        let currDist = Math.abs(idx1 - idx2);
        if (currDist < minDistance) {
          minDistance = currDist;
          minDistResult = [idx1, idx2];
        }
        result.push([idx1, idx2]);
      }
    }
  }
  console.log(minDistResult); // [1,2]

  return result;
}

console.log(isMatch(sentence, "quick fox", 8));
//console.log(isMatch(sentence, "quick dog", k));
