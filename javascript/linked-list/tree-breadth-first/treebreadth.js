'use strict';

class BTNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Queue {
  constructor(front = null, rear = null) {
    this.front = front;
    this.rear = rear;
  }
  enqueue(value) { //O(1) time
    let node = new Node(value);
    if (this.front) {
      this.rear.next = node;
    } else {
      this.front = node;
    }
    this.rear = node;
  }
  dequeue() {
    if (!this.front) {
      return null;
    } else { let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.value;
    }
  }
}


const breadthFirstTraversal = (root) => {
  if (!root) {
    return null;
  }
  const result = [];
  const queue = new Queue();
  while (queue.length > 0) {
    const node = new BTNode(root);
    result.push(node.value);
    queue.enqueue(node.value);
    if (node.left) {
      result.push(node.right);
      queue.enqueue(node.left);
    }
    if (node.right) {
      result.push(node.right);
      queue.enqueue(node.right);
    }
    queue.dequeue(node.value);
  }
  return result;
};



module.exports = { breadthFirstTraversal, BTNode };
