'use strict';

/* A Node is an object that has a value and a pointer to the next Node. */
class Node {
    constructor ( value, next = null ) {
        this.value = value;
        this.next = next;
    }
}

module.exports = Node;

// Author : @zaidalshibi