'use strict';

class BTNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    // could do anything but we're just logging
    console.log(node.value);
    // go left
    if (node.left) {
      this.preOrder(node.left);
    }
    // go right
    if (node.right) {
      this.preOrder(node.right);
    }
    return;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
    super(root);
  }
  //if no root, num is now root
  add(number, node) {
    if (!this.root) {
      this.root = new BTNode(number);
      //can assign new BTNode(number) to smaler variable
      return;
    }

    if (number === node.value) {
      return;
    }
    if (number < node.value) {
      if (node.left) {
        this.add(number, node.left);
        return;
      } else {
        node.left = new BTNode(number);
        return;
      }
    }
    if (number > node.value) {
      if (node.right) {
        this.add(number, node.right);
        return;
      } else {
        node.right = new BTNode(number);
        return;
      }
    }
  }
}

export.modules = { BinarySearchTree, BTNode }
