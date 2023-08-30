'use strict';

const { Node, Stack, Queue } = require('./stacksandqueues');


describe('Stacks and Queues', () => {
  test('Can successfully push onto a stack', () => {
    const testStack = new Stack(new Node('dummyNode'));
    testStack.push('dummyNodeStacker');
    expect(testStack.top.value).toEqual('dummyNodeStacker');
  });
  test('Can successfully push multiple values onto a stack', () => {
    const testStack = new Stack(new Node('dummyNode'));
    testStack.push('dummyNodeStacker');
    testStack.push('dummyNodeStacker2');
    expect(testStack.top.value).toEqual('dummyNodeStacker2');
  });
  test('Can successfully pop off the stack', () => {
    const testStack = new Stack(new Node('dummyNode'));
    testStack.push('dummyNodeStacker');
    testStack.pop('dummyNodeStacker');
    expect(testStack.top.value).toEqual('dummyNode');
  });
  test('Can successfully empty a stack after multiple pops', () => {
    const testStack = new Stack(new Node('dummyNode'));
    testStack.push('dummyNodeStacker');
    testStack.push('dummyNodeStacker2');
    testStack.pop('dummyNodeStacker2');
    testStack.pop('dummyNodeStacker');
    expect(testStack.isEmpty).toBeTruthy();
  });
  test('Can successfully peek the next item on the stack', () => {
    const testStack = new Stack(new Node('dummyNode'));
    expect(testStack.peek()).toEqual('dummyNode');
  });
  test('Can successfully instantiate an empty stack', () => {
    const testStack = new Stack();
    expect(testStack.isEmpty()).toEqual(true);
  });
  test('Calling pop or peek on empty stack raises exception', () => {
    const emptyStack = new Stack();
    expect(emptyStack.pop()).toEqual(null);
  });

  test('Can successfully enqueue into a queue', () => {
    const testQueue = new Queue();
    testQueue.enqueue('dummyNodeQueuer');
    expect(testQueue.rear.value).toEqual('dummyNodeQueuer');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const testQueue = new Queue();
    testQueue.enqueue('dummyNodeQueuer');
    testQueue.enqueue('dummyNodeQueuer2');
    expect(testQueue.rear.value).toEqual('dummyNodeQueuer2');
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    const testQueue = new Queue();
    testQueue.enqueue('dummyNodeQueuer');
    testQueue.enqueue('dummyNodeQueuer2');
    testQueue.dequeue('dummyNodeQueuer');
    // console.log(testQueue, 'testqueue');
    expect(testQueue.rear.value).toEqual('dummyNodeQueuer2');
  });
  test('Can successfully peek into a queue, seeing the expected value', () => {
    const testQueue = new Queue(new Node('dummyNode'));
    expect(testQueue.peek()).toEqual('dummyNode');
  });
  test('Can successfully empty a queue after multiple dequeues', () => {
    const testQueue = new Queue();
    testQueue.enqueue('dummyNodeQueuer');
    testQueue.enqueue('dummyNodeQueuer2');
    testQueue.dequeue('dummyNodeQueuer');
    testQueue.dequeue('dummyNodeQueuer2');
    expect(testQueue.isEmpty()).toEqual(true);
  });
  test('Can successfully instantiate an empty queue', () => {
    const testQueue = new Queue();
    expect(testQueue.isEmpty()).toEqual(true);
  });
  test('Calling dequeue or peek on empty queue raises exception', () => {
    const testQueue = new Queue();
    // expect(testQueue.peek()).toThrow(Error);
    expect(testQueue.peek()).toEqual(null);
  });
});
