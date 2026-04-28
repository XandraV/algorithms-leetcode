//187. Repeated DNA Sequences
// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.
// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences
// (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

function findRepeatedDnaSequences(s: string): string[] {
  const res: Set<string> = new Set();
  const seen: Set<string> = new Set();

  let left = 0;
  let tempString = "";
  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];
    tempString += currChar;
    if (tempString.length === 10) {
      if (seen.has(tempString)) {
        res.add(tempString);
      } else {
        seen.add(tempString);
      }
      tempString = tempString.slice(1);
      left++;
    }
  }
  return Array.from(res); // [...res];
}

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
// ["AAAAACCCCC","CCCCCAAAAA"]
