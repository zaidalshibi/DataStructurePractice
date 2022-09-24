'use strict';

const LinkedList = require ('../../Stack/LinkedList')

describe('test the linked list', ()=>{
    it('linked list append method', () => {
        const linkedList = new LinkedList();
        linkedList.append('zaid');
        expect(linkedList.head.value).toEqual('zaid');
        expect(linkedList.head.next).toBeNull();
    })

    it('linked list size method', () => {
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        const count = linkedList.size();
        expect(count).toEqual(3);
    })

    it('linked list deleteFromEnd method', ()=>{
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.deleteLastNode();
        expect(linkedList.head.value).toEqual(1);
        expect(linkedList.head.next.value).toEqual(2);
        expect(linkedList.head.next.next).toBeNull();
    })

    it('linked list deleteFromEnd method - 1 node', () => {
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.deleteLastNode();
        expect(linkedList.head).toBeNull();
    })

    it('linked list last node method', () => {
        const linkedList = new LinkedList();
        linkedList.append(1);
        let lastNode = linkedList.lastNode();
        expect(lastNode).toEqual(1);
        linkedList.append(2);
        linkedList.append(3);
        lastNode = linkedList.lastNode();
        expect(lastNode).toEqual(3);
    })
})