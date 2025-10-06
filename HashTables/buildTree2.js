/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// inorder = [left1, left2, ..., root, right1, right2, ...]
// postorder = [left1, left2, ..., right1, right2, ..., root] - not relevant here

var buildTree = function (inorder, postorder) {
  // Map each value to its index in inorder
  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  let preIndex = postorder.length - 1; // pointer in postorder

  function helper(inLeft, inRight) {
    if (inLeft > inRight) return null; // no nodes in this subtree

    // pick postorder[preIndex] as root
    const rootVal = postorder[preIndex];
    const root = new TreeNode(rootVal);

    // move pointer backwards in postorder
    preIndex--;

    // recursively build right and left subtrees
    root.right = helper(inorderMap.get(rootVal) + 1, inRight);
    root.left = helper(inLeft, inorderMap.get(rootVal) - 1);

    return root;
  }

  return helper(0, inorder.length - 1);
};
