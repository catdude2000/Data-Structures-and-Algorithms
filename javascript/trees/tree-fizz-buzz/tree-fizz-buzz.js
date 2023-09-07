class KaryTreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function fizzBuzzKaryTree(root) {
  function fizzBuzz(node) {
    if (node === null) {
      return null;
    }
    let newValue = '';
    if (node.value % 3 === 0) {
      newValue += 'Fizz';
    }
    if (node.value % 5 === 0) {
      newValue += 'Buzz';
    }
    if (newValue === '') {
      newValue = node.value;
    }
    const newChildren = [];
    for (const child of node.children) {
      newChildren.push(fizzBuzz(child));
    }
    return new KaryTreeNode(newValue, newChildren);
  }
  return fizzBuzz(root);
}

module.exports = { fizzBuzzKaryTree, KaryTreeNode };
