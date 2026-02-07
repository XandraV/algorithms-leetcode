// 692. Top K Frequent Words
// Given an array of strings words and an integer k, return the k most frequent strings.
// Return the answer sorted by the frequency from highest to lowest.
// Sort the words with the same frequency by their lexicographical order.
function topKFrequentWords(words: string[], k: number): string[] {
  // Count frequency
  const freq = new Map<string, number>();
  for (let word of words) {
    freq.set(word, (freq.get(word) ?? 0) + 1);
  }

  // Convert to array and sort by frequency desc, then alphabetically
  const sorted = Array.from(freq.entries()).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1]; // frequency descending
    return a[0].localeCompare(b[0]); // alphabetical
  });

  // Take first k words
  return sorted.slice(0, k).map(([word, _]) => word);
}

console.log(
  topKFrequentWords(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4,
  ),
);

// ["the","is","sunny","day"]
