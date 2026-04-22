// This function groups anagrams from an array of strings
function groupAnagrams(strs: string[]): string[][] {
  // key - sorted word, value words[]
  const aMap: Map<string, string[]> = new Map();

  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");
    if (aMap.has(sortedWord)) {
      aMap.get(sortedWord)?.push(word);
    } else {
      aMap.set(sortedWord, [word]);
    }
  }

  return Array.from(aMap.values());
}

function groupAnagrams1(strs: string[]): string[][] {
  // key - sorted word, value words[]
  const aMap: Map<string, string[]> = new Map();

  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");
    let wordInMap = aMap.get(sortedWord);

    aMap.set(sortedWord, wordInMap ? [...wordInMap, word] : [word]);
  }

  return Array.from(aMap.values());
}

console.log(
  "Output: ",
  JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])),
);
