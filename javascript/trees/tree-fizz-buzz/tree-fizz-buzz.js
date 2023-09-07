// ALGORITHM breadthFirst(root)
// // INPUT  <-- root node
// // OUTPUT <-- front node of queue to console

//   Queue breadth <-- new Queue()
//   breadth.enqueue(root)

//   while ! breadth.is_empty()
//     node front = breadth.dequeue()
//     OUTPUT <-- front.value

//     for child in front.children
//         breadth.enqueue(child)

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

// Example usage:
// const tree = new KaryTreeNode(15, [
//   new KaryTreeNode(9, [new KaryTreeNode(6)]),
//   new KaryTreeNode(10),
// ]);

// const modifiedTree = fizzBuzzKaryTree(tree);
// console.log(modifiedTree);

module.exports = { fizzBuzzKaryTree, KaryTreeNode };
