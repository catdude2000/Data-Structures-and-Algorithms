'use strict';

const { Node, Stack, Queue } = require('./stacksandqueues');

const dummyStack = {
  value: 'a',
  next: {
    value: 'b',
    next: {
      value: 'c',
      next:'null'
    },
  },
};

describe('Stacks and Queues', () => {
  test('Can successfully push onto a stack', () => {
    const testStack = new Stack(dummyStack);
    
    expect(testStack.push(d)).
  })
});
