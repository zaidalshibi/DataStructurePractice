'use strict';

const Queue = require( '../../Queue/Queue' );

describe( 'Testing Queue class', () => {

    /* This is testing the constructor of the Queue class. */
    it( 'test creating a new ins.', () => {
        const newQueue = new Queue();
        expect( newQueue instanceof Queue ).toBeTruthy();
        expect( newQueue.peek() ).toBeNull();
    } );

    /* The below code is testing the enqueue method of the Queue class. */
    it( 'test enqueue method', () => {
        const newQueue = new Queue();
        newQueue.enqueue( 1 );
        expect( newQueue.front ).toEqual( 1 );
        newQueue.enqueue( 2 );
        expect( newQueue.front ).toEqual( 1 );
        expect( newQueue.peek() ).toEqual( 1 );
    } );

    /* Testing the dequeue method. */
    it( 'test dequeue method', () => {
        const newQueue = new Queue();
        newQueue.enqueue( 1 );
        newQueue.enqueue( 2 );
        newQueue.enqueue( 3 );
        expect( newQueue.dequeue() ).toEqual( 1 );
        expect( newQueue.peek() ).toEqual( 2 );
    } );

    /* Testing the isEmpty method. */
    it( 'Testing the isEmpty method', () => {
        const newQueue = new Queue();
        expect( newQueue.isEmpty() ).toBeTruthy();
        newQueue.enqueue( 1 );
        expect( newQueue.isEmpty() ).toBeFalsy();
    } );
} );