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
    it('should insert a new node', () => {
        const linkedList = new LinkedList();
        linkedList.insert('foo');
        expect(linkedList.head.value).toEqual('foo');
        expect(linkedList.head.next).toBeNull();
    });
    it('should insert multiple nodes at the begining', () => {
        const linkedList = new LinkedList();
        linkedList.insert('foo');
        linkedList.insert('bar');
        linkedList.insert('baz');
        expect(linkedList.head.value).toEqual('baz');
        expect(linkedList.head.next.value).toBe('bar');
        expect(linkedList.head.next.next.value).toBe('foo');
        expect(linkedList.head.next.next.next).toBeNull();
    });
    it('should append a new node to empty linked list', () => {
        const linkedList = new LinkedList();
        linkedList.append('foo');
        expect(linkedList.head.value).toEqual('foo');
        expect(linkedList.head.next).toBeNull();
    });
    it('should append multiple nodes to non-empty linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert('foo');
        linkedList.append('bar');
        linkedList.append('baz');
        expect(linkedList.head.value).toEqual('foo');
        expect(linkedList.head.next.value).toEqual('bar');
        expect(linkedList.head.next.next.value).toEqual('baz');
        expect(linkedList.head.next.next.next).toBeNull();
    });
});

// Author: @zaidalshibi