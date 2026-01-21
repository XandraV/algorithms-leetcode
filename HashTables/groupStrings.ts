// Perform the following shift operations on a string:
// Right shift: Replace every letter with the successive letter of the English alphabet,
// where 'z' is replaced by 'a'. For example, "abc" can be right-shifted to "bcd" or "xyz"
// can be right-shifted to "yza".
// Left shift: Replace every letter with the preceding letter of the English alphabet,
// where 'a' is replaced by 'z'. For example, "bcd" can be left-shifted to "abc" or "yza"
// can be left-shifted to "xyz".
// We can keep shifting the string in both directions to form an endless shifting sequence.

// For example, shift "abc" to form the sequence:
// ... <-> "abc" <-> "bcd" <-> ... <-> "xyz" <-> "yza" <-> .... <-> "zab" <-> "abc" <-> ...
// You are given an array of strings strings, group together all strings[i]
// that belong to the same shifting sequence. You may return the answer in any order.

function groupStrings(strings: string[]): string[][] {
  const distMap: Map<string, string[]> = new Map();

  for (let word of strings) {
    let distString = "";
    for (let i = 1; i < word.length; i++) {
      const diff = (word.charCodeAt(i) - word.charCodeAt(i - 1) + 26) % 26;
      distString += diff + ",";
    }

    if (distMap.has(distString)) {
      distMap.get(distString)?.push(word);
    } else {
      distMap.set(distString, [word]);
    }
  }
  console.log(distMap);
  return Array.from(distMap.values());
}
console.log(groupStrings(["abn", "aln"]));
// [['abn', 'aln']]
console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]));
// [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]

console.log("za".charCodeAt(1) - "za".charCodeAt(0) + 26); // 1
console.log("za".charCodeAt(1) % 26); //19
console.log("za".charCodeAt(0) % 26); //18
