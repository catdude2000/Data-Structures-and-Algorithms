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

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function fizzBuzz(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'FizzBuzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  } else {
    return value.toString();
  }
}

function fizzBuzzKaryTree(root, k) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [{ node: root, level: 0 }];

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (level >= result.length) {
      result.push([]);
    }

    result[level].push(fizzBuzz(node.value));

    for (const child of node.children) {
      queue.push({ node: child, level: level + 1 });
    }
  }

  return result;
}

// Example usage
const rootNode = new TreeNode(1);
rootNode.children.push(new TreeNode(2), new TreeNode(3), new TreeNode(4));
rootNode.children[1].children.push(new TreeNode(5), new TreeNode(6));

const k = 3; // Change k value accordingly

const fizzBuzzTree = fizzBuzzKaryTree(rootNode, k);
console.log(fizzBuzzTree);

module.exports = { fizzBuzz, fizzBuzzKaryTree, TreeNode };
