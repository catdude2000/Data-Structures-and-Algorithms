const {  BinarySearchTree, BTNode } = require('./trees'); // Import your classes

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


// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// For a Binary Search Tree, can successfully add a left child and right child properly to a node
// Can successfully return a collection from a pre-order traversal
// Can successfully return a collection from an in-order traversal
// Can successfully return a collection from a post-order traversal
// Returns true	false for the contains method, given an existing or non-existing node value
