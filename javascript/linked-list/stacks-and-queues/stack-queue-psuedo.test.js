'use strict';

// const { Node, Stack } = require('./stacksandqueues');
const { PsuedoQueue } = require('./stack-queue-pseudo');

describe('Stack-Queue-Psuedo', () => {
  test('Can succesfully enqueue a node', () => {
    const testPQueue = new PsuedoQueue(null);
    testPQueue.enqueue('dummynode');
    expect(testPQueue.top.value).toEqual('dummynode');
  });
});
