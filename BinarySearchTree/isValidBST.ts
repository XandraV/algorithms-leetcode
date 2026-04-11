// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys strictly less than the node's key.
// The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Time: O(n) — visit each node once
// Space: O(h) — recursion stack, h = tree height
function isValidBST(root: TreeNode | null): boolean {
  // Each node must satisfy min < node.val < max
  // Bounds are propagated down the tree recursively
  function dfs(
    node: TreeNode | null,
    min: number | null,
    max: number | null,
  ): boolean {
    if (!node) return true;

    if ((max !== null && node.val >= max) || (min !== null && node.val <= min))
      return false;

    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }

  return dfs(root, null, null);
}
