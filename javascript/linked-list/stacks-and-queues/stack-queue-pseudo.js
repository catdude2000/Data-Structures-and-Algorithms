'use strict';

const { Node, Stack } = require('./stacksandqueues');


class PsuedoQueue {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
    this.s1 = new Stack();
    this.s2 = new Stack();
  }
  enqueue(value) { //O(1) time
    while (this.s1.top !== null)
    {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(value);
    while (this.s2.top !== null)
    {
      this.s1.push(this.s2.pop());
    }
  }

  //   let node = new Node(value);
  //   let stack1 = new Stack(node);
  //   let queueStack = stack1.pop
  //   if (this.front) {
  //     this.rear.next = node;
  //   } else {
  //     this.front = node;
  //   }
  //   this.rear = node;
  // }
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
 // https://www.geeksforgeeks.org/queue-using-stacks/
