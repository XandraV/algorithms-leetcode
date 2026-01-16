/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// In preorder traversal, the first element is always the root of the tree (or subtree).
// preorder = [root, left1, left2, ..., right1, right2, ...]
// preorder[0] is the root of the current subtree.
// The left subtree starts right after the root, i.e., preorder[1]

// In inorder traversal, everything to the left of the root belongs to the left subtree,
// and everything to the right belongs to the right subtree.
// inorder = [left1, left2, ..., root, right1, right2, ...]

// postorder = [left1, left2, ..., right1, right2, ..., root] - not relevant here

const buildTree = function (preorder, inorder) {
  // Map each value to its index in inorder
  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  let preIndex = 0; // pointer in preorder

  function helper(inLeft, inRight) {
    if (inLeft > inRight) return null; // no nodes in this subtree

    // pick preorder[preIndex] as root
    const rootVal = preorder[preIndex];
    const root = new TreeNode(rootVal);

    // move pointer forward in preorder
    preIndex++;

    // recursively build left and right subtrees
    root.left = helper(inLeft, inorderMap.get(rootVal) - 1);
    root.right = helper(inorderMap.get(rootVal) + 1, inRight);

    return root;
  }

  return helper(0, inorder.length - 1);
};

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
