'use strict';

const Stack = require( '../../Stack/Stack' );

describe( 'Testing the stack class', () => {
    
    /* This is testing the constructor of the Stack class. */
    it( 'test creating a new ins.', () => {
        const newStack = new Stack();
        expect( newStack instanceof Stack ).toBeTruthy();
        expect( newStack.peek() ).toBeNull();
    } );

    /* Testing the pushItem method. */
    it( 'Test pushing to the stack', () => {
        const newStack = new Stack();
        newStack.pushItem( 1 );
        expect( newStack.top ).toEqual( 1 );
        newStack.pushItem( 2 );
        expect( newStack.top ).toEqual( 2 );
        newStack.pushItem( 3 );
        expect( newStack.top ).toEqual( 3 );
        newStack.pushItem( 4 );
        expect( newStack.top ).toEqual( 4 );
    } );

    /* Testing the popItem method. */
    it( 'Testing the pop from the stack', () => {
        const newStack = new Stack();
        expect( newStack.popItem() ).toBeNull;
        newStack.pushItem( 1 );
        newStack.pushItem( 2 );
        newStack.pushItem( 3 );
        newStack.pushItem( 4 );
        expect( newStack.popItem() ).toEqual( 3 );
        expect( newStack.peek() ).toEqual( 3 );
        expect( newStack.popItem() ).toEqual( 2 );
        expect( newStack.peek() ).toEqual( 2 );
        expect( newStack.popItem() ).toEqual( 1 );
        expect( newStack.peek() ).toEqual( 1 );
    } );
} );