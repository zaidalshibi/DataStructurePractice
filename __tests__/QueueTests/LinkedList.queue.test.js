'use strict';

const LinkedList = require( '../../Queue/LinkedList' );

describe( 'test the linked list', () => {
    it( 'linked list append method', () => {
        const linkedList = new LinkedList();
        linkedList.append( 'zaid' );
        expect( linkedList.head.value ).toEqual( 'zaid' );
        expect( linkedList.head.next ).toBeNull();
    } );

    it( 'linked list size method', () => {
        const linkedList = new LinkedList();
        linkedList.append( 1 );
        linkedList.append( 2 );
        linkedList.append( 3 );
        const count = linkedList.size();
        expect( count ).toEqual( 3 );
    } );

    it( 'linked list deleteFromFront method', () => {
        const linkedList = new LinkedList();
        linkedList.append( 1 );
        linkedList.append( 2 );
        linkedList.append( 3 );
        linkedList.deleteFirstNode();
        expect( linkedList.head.value ).toEqual( 2 );
        expect( linkedList.head.next.value ).toEqual( 3 );
        expect( linkedList.head.next.next ).toBeNull();
    } );

    it( 'linked list deleteFromFront method - 1 node', () => {
        const linkedList = new LinkedList();
        linkedList.append( 1 );
        linkedList.deleteFirstNode();
        expect( linkedList.head ).toBeNull();
    } );

    it( 'linked list deleteFromFront method - 0 node', () => {
        const linkedList = new LinkedList();
        linkedList.deleteFirstNode();
        expect( linkedList.head ).toBeNull();
    } );

    it( 'linked list first node method', () => {
        const linkedList = new LinkedList();
        linkedList.append( 1 );
        let firstNode = linkedList.firstNode();
        expect( firstNode ).toEqual( 1 );
        linkedList.append( 2 );
        linkedList.append( 3 );
        firstNode = linkedList.firstNode();
        expect( firstNode ).toEqual( 1 );
    } );
} );

// Author : @zaidalshibi