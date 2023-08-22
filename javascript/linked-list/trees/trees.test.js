const { BinaryTree, BinarySearchTree, BTNode } = require('./trees'); // Import your classes

describe('BinaryTree', () => {
  it('should correctly insert a node', () => {
    const tree = new BinaryTree();
    const tNode = new BTNode(5);
    tree.add(tNode);
    // Write assertions to check if the node was inserted correctly
  });

  // Add more test cases for other BinaryTree methods
});

describe('BinarySearchTree', () => {
  it('should correctly insert a node', () => {
    const tree = new BinarySearchTree();
    tree.add(5);
    // Write assertions to check if the node was inserted correctly
  });

  // Add more test cases for other BinarySearchTree methods
});

describe('TreeNode', () => {
  it('should correctly create a node', () => {
    new BTNode(5);
    // Write assertions to check if the node was created correctly
  });

  // Add more test cases for other TreeNode-related functionality
});
