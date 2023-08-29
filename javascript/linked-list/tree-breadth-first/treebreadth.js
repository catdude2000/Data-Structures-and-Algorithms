'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

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

const breadthFirst = (root) => {
  if (!root) {
    return null;
  }
  const result = [];
  const queue = new Queue();
  queue.enqueue(root);
  console.log(root, 'root');
  while (queue.front) {
    result.push(queue.front.value.value);
    console.log(queue.front, 'queue.front');
    if (queue.front.value.left) {
      console.log(queue.front.value.left, 'leftqueuenode');
      queue.enqueue(queue.front.value.left);
    }
    if (queue.front.value.right) {
      queue.enqueue(queue.front.value.right);
    }
    queue.dequeue();
    console.log(queue, 'queue');
  }
  console.log(result, 'result');
  return result;
};



module.exports = { breadthFirst, Queue, Node, BTNode };
