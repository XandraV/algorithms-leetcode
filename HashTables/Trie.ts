class TrieNode {
  children: Map<string, TrieNode> = new Map(); // mapping a character to its child node
  isEnd: boolean = false; // marking whether a complete word ends at this node
}

// A Trie (prefix tree) is a tree data structure where each node represents
// a single character of a string. The root node is empty,
// and paths from root to nodes spell out prefixes of inserted words.
class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // Walks character by character from the root.
  // If a child node for that character doesn't exist, it creates one.
  // After processing all characters, it marks the last node's isEnd = true
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEnd = true;
  }

  // Uses find(word) and checks that the returned node exists and isEnd is true.
  // This ensures we match a full inserted word, not just a prefix.
  search(word: string): boolean {
    const node = this.find(word);
    return node !== null && node.isEnd;
  }

  // Uses find(prefix) and simply checks that the returned node is not null.
  // We don't care about isEnd since any partial match counts.
  startsWith(prefix: string): boolean {
    return this.find(prefix) !== null;
  }

  // private helper
  // Walks character by character from the root.
  // If at any point a character isn't found in children, it returns null.
  // Otherwise it returns the node where the prefix ends.
  private find(prefix: string): TrieNode | null {
    let node = this.root;
    for (const ch of prefix) {
      if (!node.children.has(ch)) {
        return null;
      }
      node = node.children.get(ch)!;
    }
    return node;
  }
}

//       (root)
//         |
//         a
//        / \
//       p   c
//       |   |
//       p●  e●
//       |
//       l
//       |
//       e●

// ● = isEnd: true

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
