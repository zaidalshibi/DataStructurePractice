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
     * We create a variable called count and set it to 0. We then create a variable called pointer and
     * set it to the head of the list. We then create a while loop that runs as long as pointer is
     * truthy. Inside the while loop, we set pointer to the next node in the list. We then increment
     * count by 1. Finally, we return count
     * 
     * @return The number of nodes in the linked list.
     */
    size () {
        let count = 0;
        let pointer = this.head;
        while ( pointer ) {
            pointer = pointer.next;
            count++;
        }
        return count;
    }

    /**
     * We create a new node, and if the head is null, we set the head to the new node. Otherwise, we
     * traverse the list until we find the last node, and then we set the last node's next to the new
     * node
     * 
     * @param value The value to be added to the end of the list.
     * 
     * @return The last node in the linked list.
     */
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
        return;
    }

    /**
     * If the list is empty, return null. If the list has one node, return the node and set the head to
     * null. If the list has more than one node, return the head and set the head to the next node
     * 
     * @return The first node in the list.
     */
    deleteFirstNode () {
        if ( this.size() == 0 ) {
            return null;
        } else if ( this.size() == 1 ) {
            let result = this.head;
            this.head = null;
            return result;
        } else {
            let result = this.head;
            this.head = this.head.next;
            return result;
        }
    }

    /**
     * Return the value of the first node in the linked list.
     * 
     * @return The value of the first node in the linked list.
     */
    firstNode () {
        if ( !this.head ) {
            return null;
        } else {
            return this.head.value;
        }
    }
}

module.exports = LinkedList;

// Author : @zaidalshibi