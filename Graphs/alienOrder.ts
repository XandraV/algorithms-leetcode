// 269. Alien Dictionary
// There is a new alien language that uses the English alphabet.
// However, the order of the letters is unknown to you.
// You are given a list of strings words from the alien language's dictionary.
// Now it is claimed that the strings in words are sorted lexicographically
// by the rules of this new language.
// If this claim is incorrect, and the given arrangement of string in words
// cannot correspond to any order of letters, return "".
// Otherwise, return a string of the unique letters in the new alien language
// sorted in lexicographically increasing order by the new language's rules.
// If there are multiple solutions, return any of them.

function alienOrder(words: string[]): string {
  const graph = new Map<string, Set<string>>();
  const state = new Map<string, number>();
  // 0 = unvisited, 1 = visiting, 2 = visited

  // 1. Initialize graph with all unique characters
  for (const word of words) {
    for (const char of word) {
      if (!graph.has(char)) {
        graph.set(char, new Set());
      }
    }
  }

  // 2. Build edges from adjacent words
  for (let i = 1; i < words.length; i++) {
    const prev = words[i - 1];
    const curr = words[i];

    const minLen = Math.min(prev.length, curr.length);
    let foundDifference = false;

    for (let j = 0; j < minLen; j++) {
      if (prev[j] !== curr[j]) {
        graph.get(prev[j])!.add(curr[j]);
        foundDifference = true;
        break;
      }
    }

    // Prefix invalid case
    if (!foundDifference && prev.length > curr.length) {
      return "";
    }
  }
  console.log(graph);
  const result: string[] = [];

  // 3. DFS with cycle detection
  function dfs(node: string): boolean {
    const nodeState = state.get(node) ?? 0;

    if (nodeState === 1) return false; // cycle - in the current recursion path ie ound a back-edge
    if (nodeState === 2) return true; // already processed, proved it does NOT lead to a cycle, safe to ignore

    state.set(node, 1); // visiting

    for (const neighbor of graph.get(node)!) {
      if (!dfs(neighbor)) return false;
    }

    state.set(node, 2); // visited
    result.push(node); // post-order push
    return true;
  }

  // 4. Run DFS for all nodes
  for (const node of graph.keys()) {
    if ((state.get(node) ?? 0) === 0) {
      if (!dfs(node)) return "";
    }
  }

  // reverse because we pushed post-order
  return result.reverse().join("");
}

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
// wertf
