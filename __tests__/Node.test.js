'use strict';

const Node = require('../LinkedList/Node');

describe('Testing Node class', () => {
    it('should create a new node', () => {
        const node = new Node('foo');
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toBe('foo');
        expect(node.next).toBeNull();
    });
    });

// Author: @zaidalshibi
