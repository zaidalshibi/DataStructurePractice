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
     * We start at the head, and while the next node exists, we keep moving to the next node. Once we
     * reach the end, we set the next node to null
     * 
     * @return The last node in the linked list.
     */
    deleteLastNode () {
        let currentNode = this.head;
        if ( currentNode.next == null ) {
            this.head = null;
            return;
        }
        while ( currentNode.next.next ) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        return;
    }

    /**
     * We start at the head, and while the current node has a next node, we keep moving to the next
     * node. Once we reach the end of the list, we return the value of the last node
     * 
     * @return The value of the last node in the linked list.
     */
    lastNode(){
        let currentNode = this.head
        if ( currentNode.next == null ) {
            return this.head.value
        }
        while(currentNode.next){
            currentNode = currentNode.next
        }
        return currentNode.value
    }
}

module.exports = LinkedList;

// Author : @zaidalshibi