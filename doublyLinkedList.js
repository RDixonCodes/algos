class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /* PUSH: Create a new node with the value passed to the function. 
    If the head property is null set the head and tail to be the newly created node.
    If not, set the next property on the tail to be that node. Set the previous property 
    on the newly created node. If not, set the next property on the tail to be that node.
    Set the previous property on the newly created node to be the tail.
    Set the tail to be the newly created node.
    Increment the length.
    Return the doubly linked list.*/

    push(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // creates the new tail
            newNode.prev = this.tail; // sets up the previous pointer to the old tail
            this.tail = newNode; // creates the new tail
        }
        this.length++;
        return this;
    }

    /* POP: If there's no head, return undefined.
    Store the current tail in a variable to return later.
    If the length is 1, set the head and tail to be null.
    Update the tail to be the previous node.
    Set the newTail's next to null
    Decrement the length.
    Return the value removed.*/

    pop() {
        if(!this.head) return undefined;
        var currentTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null; // Needed to sever the connection from old tail.
        }
        this.length--;
        return currentTail;
    }

    /* SHIFT: If length is 0, return undefined. Store the current head property in a variable.
    If the length is one, set the head to be null, set the tail to be null. Update the head to be the next
    of the old head. Set the head to be the next of the old head. Set the head's prev property to null. 
    Set the old head's next to null. Decrement the length. Return old head.*/

    shift() {
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    /* UNSHIF: Creat a new node with the value passed to the function. If the length is 0,
    set the head to be the new node, set the tail to be the new node. Otherwise, set the prev
    property on the head of the list to be the new node. Set the next property on the new node
    to be the head property. Update the head to be the new node. Increment the length. Return the list.*/

    unshift(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /* GET: If the index is less than 0 or greater or equal to the length, return null.
    If the index is less than or equal to half the length of the list, loop through the list starting
    from the head and loop towards the middle. Return the node once it is found.
    If the index is greater than half the lendth fo the list, loop through the list starting from the tail and loop
    towards the middle, return the node once it is found*/

    get(idx) {
        if(idx < 0 || idx >= this.length) return null;
        if(idx <= this.length/2) {
        var counter = 0;
        var current = this.head;
        while(counter !== idx) {
            current = current.next;
            counter++;
        }
    } else {
        var counter = this.length - 1;
        var current = this.tail;
        while(counter !== idx) {
            current = current.prev;
            counter--;
        }
    }
    console.log(current)
        return current;
}   

    /* Create a variable which is the result of the GET method at the index passed to the function.
    If the GET method returns a valid node, set the value of the node to be the value passed to the 
    function, return TRUE. Otherwise, return false.*/

    set(idx, val) {
        var foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false
    }

    /* INSERT: If the index is less than zero or greater than or equal to the length, return false.
    If the index is 0, unshift. If the index is the same as the length, push. 
    Use the get method to access the index -1. Set the next and prev properties on the correct nodes to link everything
    together. Increment the length. Return true.
    */

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);
        var newNode = new Node(val)
        var beforeNode = this.get(idx - 1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode, newNode.prev =  beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    /*Remove: If the index is less than zero or greater than or equal to the 
    length return undefined. If the index is 0, SHIFT. If the index is the same
    as teh length-1, POP. Use the get method to retrieve the item to be removed.
    Update the next and prev properties to remove the found node from the list.
    Set next and prev to null on the found node. Decrement the length.
    Return the removed node.*/

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();
        var removedNode = this.get(idx);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        // removedNode.prev.next = removedNode.next, removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

    reverse() {
        if(this.length === 0) return undefined;
        var temp = null;
        var current = this.head;
        while(current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        if(temp !== null) {
            this.head = temp.prev;
        }
        return this;
    }
}

list = new doublyLinkedList();

list.push(90);
list.push(95);
list.push(100);
list.push(105);
// list.push(105);
// list.push(110);
// // list.pop();
// list.shift();
// list.unshift(85)
// list.get(3);
// list.set(3, 25)
// list.insert(0, 80);
// list.remove(1)
list.reverse();
console.log(list)