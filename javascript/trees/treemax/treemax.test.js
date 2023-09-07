'use strict';

const { BinaryTree, Node } = require('./treemax');

describe('BinaryTree', () => {
  test('should return null for an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.findMaximum(tree.root)).toBe(null);
  });
  test('should find the maximum value in a non-empty tree', () => {
    const tree = new BinaryTree(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(20);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.left = new Node(15);
    tree.root.right.right = new Node(25);
    expect(tree.findMaximum(tree.root)).toBe(25);
  });
  test('should find the max value even if multiple nodes have it', () => {
    const tree = new BinaryTree(10);
    tree.root.left = new Node(25);
    tree.root.right = new Node(20);
    tree.root.left.left = new Node(25);
    tree.root.left.right = new Node(25);
    tree.root.right.left = new Node(15);
    tree.root.right.right = new Node(25);
    expect(tree.findMaximum(tree.root)).toBe(25);
  });
});
