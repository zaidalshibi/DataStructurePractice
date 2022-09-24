'use strict';

const LinkedList = require ('./LinkedList')

/* The Stack class is a wrapper for the LinkedList class that allows for the use of the push, pop, and
peek methods */
class Stack {

    /**
     * The constructor function creates a new LinkedList object and sets the top property to null
     */
    constructor(){
        this.storage = new LinkedList()
        this.top = null
    }

    /**
     * The pushItem function takes in a value and adds it to the end of the storage array
     * 
     * @param value The value to be pushed onto the stack.
     */
    pushItem(value){
        this.storage.append(value);
        this.top = value;
    }

    /**
     * If the stack is not empty, delete the last node in the storage linked list, set the top to the
     * last node in the storage linked list, and return the top. If the stack is empty, return null
     * 
     * @return The top of the stack
     */
    popItem(){
        if (this.storage.size() !== 0){
            this.storage.deleteLastNode();
            this.top = this.storage.lastNode();
            return this.top
        } else {
            return null
        }
    }

    /**
     * The peek function returns the top of the stack
     * 
     * @return The top of the stack
     */
    peek(){
        return this.top
    }

    isEmpty(){
        if (this.top == null) return true 
        else return false
    }
}

module.exports = Stack