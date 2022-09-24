'use strict';

const LinkedList = require( "./LinkedList" );

/* The Queue class is a class that creates a queue data structure that has the methods enqueue,
dequeue, peek, and isEmpty */
class Queue {
    /**
     * The constructor function creates a new instance of the Queue class
     */
    constructor () {
        this.front = null;
        this.storage = new LinkedList;
    }


    /**
     * If the queue is empty, set the front to the value, otherwise append the value to the end of the
     * queue and set the front to the head of the queue.
     * 
     * @param value the value to be added to the queue
     */
    enqueue ( value ) {
        this.storage.append( value );
        if ( this.storage.size() == 1 ) {
            this.front = value;
        } else {
            this.front = this.storage.head.value;
        }
    }

    /**
     * The dequeue function removes the first node from the queue and returns the value of the node
     * 
     * @return The deleted node
     */
    dequeue () {
        let deletedNode = this.storage.deleteFirstNode();
        return deletedNode.value;
    }

    /**
     * It returns the first node in the storage
     * 
     * @return The first node in the stack
     */
    peek () {
        return this.storage.firstNode();
    }

    /**
     * If the front of the queue is null, then the queue is empty
     * 
     * @return The front of the queue
     */
    isEmpty () {
        if ( this.front == null ) return true;
        else return false;
    }
}

module.exports = Queue;

// Author : @zaidalshibi