// Given a binary search tree (BST), find the lowest common ancestor (LCA)
// node of two given nodes in the BST.
// The lowest common ancestor is defined between two nodes p and
// q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).

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
// Time: O(h) — h = tree height
// Space: O(h) — recursion stack, h = tree height
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (p === null || q == null) return null;
  if (!root || root === p || root === q) return root;

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

// optimal iterative solution
// Time: O(h) — h = tree height
// Space: O(1)
function lowestCommonAncestor2(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode,
): TreeNode | null {
  let curr = root;

  while (curr) {
    // both nodes are in the left subtree
    if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    }
    // both nodes are in the right subtree
    else if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    }
    // split point (or one equals curr)
    else {
      return curr;
    }
  }

  return null;
}
