// 250. Count Univalue Subtrees
// Given the root of a binary tree, return the number of uni-value subtrees.
// A uni-value subtree means all nodes of the subtree have the same value.

import { TreeNode } from "./TreeNode";

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Must check bottom-up — a subtree is uni-value only if both children's subtrees are
// uni-value and the children's values match the current node's value.
function countUnivalSubtrees(root: TreeNode | null): number {
  let count = 0;

  function isUnivalSubTree(node: TreeNode | null) {
    if (node === null) return true; // A null node is considered uni-value

    const isLeftSubtreeUnivalue = isUnivalSubTree(node.left);
    const isRightSubtreeUnivalue = isUnivalSubTree(node.right);

    if (!isLeftSubtreeUnivalue || !isRightSubtreeUnivalue) {
      return false;
    }
    // Check each child independently — if it exists, it must match.
    // We don't need both children to exist.
    // Nodes with only one child whose value matches the parent are still uni-value.
    // If left exists, its value must match
    if (node.left !== null && node.left.val !== node.val) return false;
    // If right exists, its value must match
    if (node.right !== null && node.right.val !== node.val) return false;
    // ^^ This correctly counts leaf nodes, single-child nodes, and two-child nodes.

    count++;
    return true;
  }

  isUnivalSubTree(root);

  return count;
}
