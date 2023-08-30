# Code Challenge 5 Linked Lists

Create a Node class and a Linked List class.  Make sure Linked List class can insert a node, identify if it includes a node, and print out the list as a string.

## Whiteboard Process
<!-- Embedded whiteboard image -->

## Approach & Efficiency

For insert we used a basic function that creates an instance of the Node class that we were given in class by the instructor.  We then assign it to the head of the list.  For includes we used a while loop with an if statement that returns true if the wanted value is the current value.  toString was done in class.

## Solution

npm test linked-list

```insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
}
includes(value) {
    let current = this.head;
    while (current) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  };
  ```
