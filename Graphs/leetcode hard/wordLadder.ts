// 127. Word Ladder - hard
// A transformation sequence from word beginWord to word endWord using a dictionary wordList
// is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList,
// return the number of words in the shortest transformation sequence from beginWord
// to endWord, or 0 if no such sequence exists.

// SOLUTION Summary
// Use BFS starting from beginWord to explore all words one letter away.
// Keep track of visited words to prevent cycles.
// Generate neighbours by replacing each letter with a-z and checking if it’s in the dictionary.
// Increment a steps counter at each BFS level to track ladder length.
// If we find endWord, return the current ladder length.
// If BFS ends without finding endWord, return 0.

const abc = "abcdefghijklmnopqrstuvwxyz";
// helper function that generates all valid neighbours of a given word
const generateNeighbours = (
  word: string,
  dict: Set<string>,
  visited: Set<string>,
): string[] => {
  const res = [];
  // Loops through each position in the word.
  for (let i = 0; i < word.length; i++) {
    // Loops through all letters a-z.
    for (let letter of abc) {
      // Skips replacing the letter with itself (we only want actual changes).
      if (letter === word[i]) continue;
      // Creates a new word candidate by replacing the letter at index i with letter
      // This is a one-letter transformation of word
      let candidate = word.slice(0, i) + letter + word.slice(i + 1);
      // If the candidate is in the dictionary (dict) and hasn’t been visited yet, add it to res.
      if (dict.has(candidate) && !visited.has(candidate)) {
        res.push(candidate);
      }
    }
  }
  return res;
};

// bfs solution to find the shortest path from beginWord to endWord in the graph formed by the words in wordList
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const dict = new Set(wordList); // stores all words from the list for O(1) lookups.
  if (!dict.has(endWord)) return 0;
  const visited: Set<string> = new Set(); // tracks words we’ve already added to the BFS queue to avoid cycles.
  visited.add(beginWord);
  const queue: string[] = [beginWord];
  let steps = 1; // because the first word counts as step 1 in the ladder

  while (queue.length > 0) {
    // BFS loop: continues while there are words to process.
    // size stores the number of nodes in the current BFS level.
    // This ensures we increment steps once per BFS level, not per word.
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      // Processes each word in the current BFS level.
      //Removes the word from the queue for processing.
      const currNode = queue.shift();

      // Generate all valid neighbours for the current word
      const neighbours = generateNeighbours(currNode!, dict, visited);
      // For each neighbour:
      for (let neighbour of neighbours) {
        // If it is the endWord, return steps + 1 because the ladder is complete.

        if (neighbour === endWord) return steps + 1;
        // Otherwise, mark it as visited and add it to the queue for the next BFS level
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
    // After processing all words in the current BFS level, increment steps.
    // This effectively counts the length of the shortest transformation sequence so far.
    steps++;
  }
  return 0; // If BFS finishes and endWord is never reached, return 0 — no valid transformation exists.
}

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
); // 5
