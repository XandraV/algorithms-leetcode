// Lowest Common Ancestor of a Binary Tree
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// The lowest common ancestor is defined between two nodes p and q as the lowest node
// in T that has both p and q as descendants (where we allow a node to be a descendant of itself).

// postorder DFS because we need information from both subtrees before deciding
// whether the current node is the LCA
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
// Time: O(n) — n = number of nodes
// Space: O(h) — recursion stack, h = tree height
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  function dfs(root: TreeNode | null): TreeNode | null {
    let left: TreeNode | null | undefined = null;
    let right: TreeNode | null | undefined = null;
    if (!root) return null;
    if (root === p || root === q) return root;

    if (root.left) {
      left = dfs(root.left);
    }
    if (root.right) {
      right = dfs(root.right);
    }

    // return root if matches p or q
    if (left && right) {
      return root;
    }
    return left ?? right;
  }

  return dfs(root);
}
// alternative simpler implementation without inner function
// Time: O(n) — n = number of nodes
// Space: O(h) — recursion stack, h = tree height
function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (root === p || root === q || root === null) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left ? left : right;
}
