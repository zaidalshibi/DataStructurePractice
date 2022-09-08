'use strict';

const LinkedList = require('../LinkedList/LinkedList');

describe('Testing Linked List class', () => {
    it('should create a new linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList).toBeDefined();
        expect(linkedList).toBeInstanceOf(LinkedList);
        expect(linkedList.head).toBeNull();
        expect(linkedList.next).toBeNull();
    });
});
