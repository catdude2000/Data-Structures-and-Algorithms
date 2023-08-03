class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
// }

class Stack {
  constructor(top = null) {
    this.top = top;
  }
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (!this.top){
      return null;
    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp; //or just temp
  }
  peek() {
    return this.top.value;
  }
  isEmpty() {
    return this.top = null;
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
  peek() {
    if (!this.front) {
      return null;
    } else {
      return this.front.value;
    }
  }
  isEmpty() {
    return this.front = null;
  }
}

module.exports = { Node, Stack, Queue };
