'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = new Node(root);
  }

  findMaximum(node) {
    if (!this.root) {
      return null;
    }
    let maxValue = null;
    // could do anything but we're just logging
    console.log(node.value);
    if ( node.value > maxValue) {
      maxValue = node.value;
    }
    if (node.left) {
      this.findMaximum(node.left);
    }
    if (node.right) {
      this.findMaximum(node.right);
    }
    return maxValue;
  }
}

module.exports = { BinaryTree, Node };
