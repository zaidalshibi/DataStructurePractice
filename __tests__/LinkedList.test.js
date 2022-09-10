'use strict';

const LinkedList = require('../LinkedList/LinkedList');

describe('Testing Linked List class', () => {

    // Test 1
    // Can successfully instantiate an empty linked list
    /* This is a test case that is testing the constructor of the LinkedList class. */
    it('should create a new linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList).toBeDefined();
        expect(linkedList).toBeInstanceOf(LinkedList);
        expect(linkedList.head).toBeNull();
        expect(linkedList.next).toBeNull();
    });

    // ToDo : Insert method .insert(value) 
    // Test 2
    // Can properly insert into the linked list
    /* This is a test case that is testing the insert method of the LinkedList class. */
    it('should insert a new node', () => {
        const linkedList = new LinkedList();
        linkedList.insert('zaid');
        expect(linkedList.head.value).toEqual('zaid');
        expect(linkedList.head.next).toBeNull();
    });
    // Test 3
    // Can successfully insert multiple nodes into the linked list
    /* This is a test case that is testing the insert method of the LinkedList class. */
    it('should insert multiple nodes at the begining', () => {
        const linkedList = new LinkedList();
        linkedList.insert('zaid');
        linkedList.insert('mohammed');
        linkedList.insert('ahmad');
        expect(linkedList.head.value).toEqual('ahmad');
        expect(linkedList.head.next.value).toBe('mohammed');
        expect(linkedList.head.next.next.value).toBe('zaid');
        expect(linkedList.head.next.next.next).toBeNull();
    });

    // ToDo : Append method .append(value)
    // Test 4
    // Can successfully append a node to the end of the linked list
    /* This is a test case that is testing the append method of the LinkedList class. */
    it('should append a new node to empty linked list', () => {
        const linkedList = new LinkedList();
        linkedList.append('zaid');
        expect(linkedList.head.value).toEqual('zaid');
        expect(linkedList.head.next).toBeNull();
    });
    // Test 5
    // Can successfully append multiple nodes to the end of a linked list
    /* This is a test case that is testing the append method of the LinkedList class. */
    it('should append multiple nodes to non-empty linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert('zaid');
        linkedList.append('mohammed');
        linkedList.append('ahmad');
        expect(linkedList.head.value).toEqual('zaid');
        expect(linkedList.head.next.value).toEqual('mohammed');
        expect(linkedList.head.next.next.value).toEqual('ahmad');
        expect(linkedList.head.next.next.next).toBeNull();
    });

    // ToDo : Size method .size()
    // Test 6
    // Can successfully return the number of nodes in the linked list
    /* This is a test case that is testing the size method of the LinkedList class. */
    it('should return the size of the linked list', () => {
        const linkedList = new LinkedList();
        linkedList.insert('zaid');
        linkedList.append('mohammed');
        linkedList.append('ahmad');
        expect(linkedList.size()).toEqual(3);
    });

    // ToDo : Delete Middle method .deleteMiddle()
    // Test 7
    // Can successfully delete the first node of the linked list when the size = 1
    /* This is a test case that is testing the deleteMiddle method of the LinkedList class. */
    it('should delete the middle node when the list has only one node', () => {
        const linkedList = new LinkedList();
        linkedList.insert('zaid');
        linkedList.deleteMiddle();
        expect(linkedList.head).toBeNull();
    });
    // Test 8
    // Can successfully delete the second node of the linked list when the size = 2
    /* This is a test case that is testing the deleteMiddle method of the LinkedList class. */
    it('should delete the middle node when the list has only two nodes', () => {
        const linkedList = new LinkedList();
        linkedList.insert('zaid');
        linkedList.append('mohammed');
        linkedList.deleteMiddle();
        expect(linkedList.head.value).toEqual('zaid');
        expect(linkedList.head.next).toBeNull();
    });
    // Test 9
    // Can successfully delete the middle node of the linked list when the size is even
    /* This is a test case that is testing the deleteMiddle method of the LinkedList class. */
    it('should delete the middle node when the list has an even number of nodes', () => {
        const linkedList = new LinkedList();
        linkedList.insert('zaid');
        linkedList.append('mohammed');
        linkedList.append('ahmad');
        linkedList.append('laila');
        linkedList.deleteMiddle();
        expect(linkedList.head.value).toEqual('zaid');
        expect(linkedList.head.next.value).toEqual('mohammed');
        expect(linkedList.head.next.next.value).toEqual('laila');
        expect(linkedList.head.next.next.next).toBeNull();
    });
    // Test 10
    // Can successfully delete the middle node of the linked list when the size is odd (3 nodes)
    /* This is a test case that is testing the deleteMiddle method of the LinkedList class. */
    it('should delete the middle node when the list has an odd number of nodes (3 nodes)', () => {
        const linkedList = new LinkedList();
        linkedList.insert('zaid');
        linkedList.append('mohammed');
        linkedList.append('ahmad');
        linkedList.deleteMiddle();
        expect(linkedList.head.value).toEqual('zaid');
        expect(linkedList.head.next.value).toEqual('ahmad');
        expect(linkedList.head.next.next).toBeNull();
    });
    // Test 11
    // Can successfully delete the last node of the linked list when the size is odd (5 nodes)
    /* This is a test case that is testing the deleteMiddle method of the LinkedList class. */
    it('should delete the middle node when the list has an odd number of nodes (5 nodes)', () => {
        const linkedList = new LinkedList();
        linkedList.insert('zaid');
        linkedList.append('mohammed');
        linkedList.append('ahmad');
        linkedList.append('laila');
        linkedList.append('alaa');
        linkedList.deleteMiddle();
        expect(linkedList.head.value).toEqual('zaid');
        expect(linkedList.head.next.value).toEqual('mohammed');
        expect(linkedList.head.next.next.value).toEqual('laila');
        expect(linkedList.head.next.next.next.value).toEqual('alaa');
        expect(linkedList.head.next.next.next.next).toBeNull();
    });
    // Test 12
    // Can successfully return when we try to delete the middle node of the linked list when the size is 0
    /* This is a test case that is testing the deleteMiddle method of the LinkedList class. */
    it('should return when we try to delete the middle node of the linked list when the size is 0', () => {
        const linkedList = new LinkedList();
        expect(linkedList.deleteMiddle()).toBeUndefined();
    });
});

// Author: @zaidalshibi