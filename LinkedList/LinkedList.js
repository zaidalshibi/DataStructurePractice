'use strict';

const Node = require( './Node' );


class LinkedList {
    /**
     * The constructor function is a special function that is called when a new object is created
     */
    constructor () {
        this.head = null;
        this.next = null;
    }


    /**
     * Start at the head, count each node until you reach the end.
     * 
     * @return The number of nodes in the linked list.
     */
    size () {
        let count = 0;
        let node = this.head;
        while ( node ) {
            count++;
            node = node.next;
        }
        return count;
    }


    /**
     * Create a new node with the value passed to the function. Set the new node's next property to be
     * the current head property on the list. Finally, set the head property on the list to be that
     * newly created node.
     * @param value - The value to be inserted into the linked list.
     */
    insert ( value ) {
        const node = new Node( value );
        node.next = this.head;
        this.head = node;
    }


    /* Adding a new node to the end of the linked list. */
    append ( value ) {
        const node = new Node( value );
        if ( !this.head ) {
            this.head = node;
            return;
        }
        let currentNode = this.head;
        while ( currentNode.next ) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }


    /**
     * If the list is empty, do nothing. If the list has one node, set the head to null. If the list
     * has two nodes, set the head's next to null. If the list has an even number of nodes, set the
     * node before the middle node's next to the node after the middle node. If the list has an odd
     * number of nodes, set the node before the middle node's next to the node after the middle node
     * @returns The middle node is being deleted.
     */
    deleteMiddle () {
        if ( this.size() === 1 ) {
            this.head = null;
            return;
        } else if ( this.size() === 2 ) {
            this.head.next = null;
            return;
        } else if ( this.size() > 2 && this.size() % 2 === 0 ) {
            let count = ( this.size() / 2 );
            let currentNode = this.head;
            while ( count - 1 ) {
                currentNode = currentNode.next;
                count--;
            }
            currentNode.next = currentNode.next.next;
            return;
        } else if ( this.size() > 2 && this.size() % 2 !== 0 ) {
            let count = ( this.size() / 2 ) + 0.5;
            let currentNode = this.head;
            while ( count - 2 ) {
                currentNode = currentNode.next;
                count--;
            }
            currentNode.next = currentNode.next.next;
        } else {
            return;
        }
    }

    
}

module.exports = LinkedList;

// Author: @zaidalshibi