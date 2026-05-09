// 230. Kth Smallest Element in a BST
// Given the root of a binary search tree, and an integer k,
// return the kth smallest value (1-indexed) of all the values of
// the nodes in the tree.

function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;
  let result = -1;

  function inOrder(node: TreeNode | null) {
    // Base case or if we already found the result, stop recursing
    if (!node || result !== -1) return;

    // 1. Go as far left as possible (smallest values)
    inOrder(node.left);

    // 2. Process the current node
    count++;
    if (count === k) {
      result = node.val;
      return;
    }

    // 3. Go right
    inOrder(node.right);
  }

  inOrder(root);
  return result;
}
