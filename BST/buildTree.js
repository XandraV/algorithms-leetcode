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

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  // Every time we take the first element of the current preorder slice
  // → that’s the root of the current subtree.
  const rootVal = preorder[0];
  // index of root in the inorder array
  const rootIndex = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1), // prev rootVal, index 0 has been used hence we move on to the next one index=1 and slice up until after current root
    inorder.slice(0, rootIndex) // left side without rootIndex in inorder array
  );

  root.right = buildTree(
    preorder.slice(rootIndex + 1), // rootVal has been used hence we move on to the next one
    inorder.slice(rootIndex + 1) // right side without rootIndex as that's the root :)
  );

  return root;
};

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
