// 418. Sentence Screen Fitting
// Given a rows x cols screen and a sentence represented as a list of strings,
//  return the number of times the given sentence can be fitted on the screen.
// The order of words in the sentence must remain unchanged, and a word cannot
// be split into two lines. A single space must separate two consecutive words in a line.

function wordsTyping(sentence: string[], rows: number, cols: number): number {
  const joined = sentence.join(" ") + " ";
  joined;
  const len = joined.length;
  let cursor = 0;

  for (let i = 0; i < rows; i++) {
    cursor += cols;
    cursor;
    if (joined[cursor % len] === " ") {
      // Landed on a space, move past it
      cursor++;
    } else {
      // Landed mid-word, back up
      while (cursor > 0 && joined[(cursor - 1) % len] !== " ") {
        // Because cursor isn't an index into joined — it's a total character count across all rows.
        // It can be much larger than joined.length.
        // We use % len to wrap it back to the correct position within the repeating sentence string.
        // cursor - 1 checks the character before the current position, and % len maps that
        // back into the joined string.
        cursor--;
      }
    }
  }

  // cursor is the total number of characters consumed across all rows.
  // len is the length of one full sentence (with trailing space).
  // So cursor / len = how many times the full sentence fits in that total character count.
  // Math.floor because a partial sentence at the end doesn't count.
  return Math.floor(cursor / len);
}

// console.log(wordsTyping(["helloopopo", "world"], 2, 8));
// console.log(wordsTyping(["hello", "world"], 2, 8));
// console.log(wordsTyping(["a", "bcd", "e"], 3, 6));
