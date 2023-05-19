'use strict';

const LinkedList = require('./index');

describe('Linked List'), () => {
  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
  });
};
