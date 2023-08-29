'use strict';

const { Node, Stack } = require('./stacksandqueues');

class PsuedoQueue {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    let node = new Node(value);
    while (this.s1.top !== null)
    {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(node);
    while (this.s2.top !== null)
    {
      this.s1.push(this.s2.pop());
    }
  }
  dequeue() {
    if (!this.s1.top) {
      return null;
    }
    let x = this.s1.top;
    this.s1.pop();
    return x;
  }
}

 // https://www.geeksforgeeks.org/queue-using-stacks/

module.exports = {PsuedoQueue};
