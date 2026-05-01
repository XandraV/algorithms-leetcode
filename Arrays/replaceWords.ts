// 648. Replace Words
// In English, we have a concept called root, which can be followed by some other
// word to form another longer word - let's call this word derivative.
//  For example, when the root "help" is followed by the word "ful",
// we can form a derivative "helpful".
// Given a dictionary consisting of many roots and a sentence consisting of
// words separated by spaces, replace all the derivatives in the sentence with the root forming it.
// If a derivative can be replaced by more than one root, replace it with the root
// that has the shortest length.
// Return the sentence after the replacement.

function replaceWords(dictionary: string[], sentence: string): string {
  dictionary.sort((a, b) => a.length - b.length);
  return sentence
    .split(" ")
    .map((word) => {
      // use map to create a new array with replaced words, instead of mutating the original sentence
      for (const root of dictionary) {
        if (word.startsWith(root)) {
          return root;
        }
      }
      // instead of mutating the original word, we return root if found,
      //  otherwise return the original word
      return word;
    })
    .join(" ");
}

// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"
