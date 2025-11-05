const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: { value: 6, left: null, right: null },
      right: {
        value: 7,
        left: null,
        right: { value: 9, left: null, right: null },
      },
    },
    right: null,
  },
  right: {
    value: 3,
    left: null,
    right: {
      value: 5,
      left: { value: 8, left: null, right: null },
      right: null,
    },
  },
};

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    value: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function serialize(root: TreeNode | null): (number | null)[] {
  let res: Array<number | null> = [];
  function helper(node: TreeNode | null) {
    if (node === null) {
      res.push(null);
      return;
    }
    res.push(node.value);
    helper(node.left);
    helper(node.right);
  }
  helper(root);
  return res;
}

console.log(serialize(tree)); // [1,2,3,4,null,null,5,6,7,8,null,null,null,null,9]

function deserialize(treeArray: (number | null)[]): TreeNode | null {
  if (treeArray.length === 0) {
    return null;
  }

  let curr = treeArray.shift();
  if (curr === null) {
    return null;
  }

  const root = new TreeNode(curr!);
  root.left = deserialize(treeArray);
  root.right = deserialize(treeArray);

  return root;
}

const test = serialize(tree);

console.log(deserialize(test));
