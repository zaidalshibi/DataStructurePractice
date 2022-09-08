'use strict';

const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
        this.next = null;
    }
    insert(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }
}

module.exports = LinkedList;

// Author: @zaidalshibi