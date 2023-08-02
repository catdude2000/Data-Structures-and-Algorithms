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
    node.next = top;
    let top = node;
  }
  pop() {
    let temp = top;
    top = top.next;
    temp.next = null;
    return temp.value; //or just temp
  }
  peek() {
    return top.value;
  }
}
