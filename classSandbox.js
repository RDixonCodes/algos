class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* PUSH: This function should accept a value
    Create a new node using the value passed to the function
    If there is no head property on the list, set the head and tail to be the newly created node.
    Otherwise set the next property on the tail to be the new node and set the tail property
    on the list to be the newly created node. Increment the length by one. */

    push(val) {
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /* POP pseudocode
    If there are no nodes in the list, return undefined.
    Loop through the list until you reach the tail
    Set the next property of the 2nd to last node to be null
    Set the tail to be the 2nd to last node
    Decrement the length of the list by 1
    Return the value of the removed node */

    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            return current;
    }

    /*SHIFT: pseudocode
    IF there are no nodes, return undefined
    Store the current head property in a variabel
    Set the head property to be the current head's next property
    Decrement the length by 1
    Return the value of the node removed*/

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }

    /* UNSHIFT: This function should accept a value. Create a new node using a value passed to the
    function. If there is no head property on the list, set the head and tail to be the 
    newly created node. Otherwise set the newly created node's next property to be the current
    head property on the list. */

    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }

    /* GET: This function should accept an index. If the index is less than zero or greater
    than or equal to the length of the list, return null. Loop through the list until you
    reach the index and return the node at the specific index */

    get(idx) {
        if(idx < 0 || idx >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== idx) {
            current = current.next;
            counter++;   
        }
        console.log(current)
        return current
    }

    /* SET: This function should accept an imdex and a value. Use the GET function
    to find the specific node. If the node is not found, return false.
    If the node is found, set the value of that node to be the value
    passed to the function and return true.*/

    set(idx, val) {
        var findNode = this.get(idx);
        if(findNode) {
            findNode.val = val;
            return true;
        }
        return false;
    }

    /* INSERT: If the index is less than zero or greater than the length, return false.
    If the index is the same as the length, push a new node to the end of the list. If
    the index is 0, UNSHIFT  a new node to the start of the list. Otherwise, using the get
    method, access the node at the index -1. Set the next property on that node to be the new
    node. Set the next property on the new node to be the previous next. Increment the length.
    Return true. */

    insert(idx, val) {
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) return thisList.push(val);
        if(idx === 0) return thisList.unshift(val);
        var newNode = new Node(val);
        var prevNode = this.get(idx - 1);
        var temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++
        return true;
    }


}

var thisList = new singlyList;

thisList.push(21);
thisList.push(34);
thisList.push(47);
// thisList.pop();
// thisList.shift();
// thisList.unshift(51);
// thisList.get(2);
// thisList.set(1,34);
thisList.insert(1, 30)

console.log(thisList);