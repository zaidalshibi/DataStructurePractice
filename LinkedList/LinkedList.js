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
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
}

module.exports = LinkedList;

// Author: @zaidalshibi