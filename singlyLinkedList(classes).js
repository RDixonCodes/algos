// Creating a CLASS

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
    }
    fullName() { //class METHOD
        return `My full name is ${this.firstName} ${this.lastName} and my grade level is ${this.grade}.`;
    }
    markLate(){ // adding an instance method.
        this.tardies += 1;
        if(this.tardies >= 3){
            return `${this.firstName}, YOU ARE EXPELLED!`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
    }

    static enrollStudents() { //class Method
        return "STUDENT ENROLLED!";
    }
}

let student1 = new Student ("Asher", "Sage", 2); // new (key word) helps to instantiate  new student.

console.log(student1.grade)
console.log(student1.markLate())
console.log(student1.markLate())
console.log(student1.markLate())
console.log(Student.enrollStudents())
console.log(student1.fullName())

console.log(student1)

// SINGLY LINKED LIST:

//parts of LINKED list.. val (piece of data). next (reference to next node).

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/* PUSH: */

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //This function should accept a value
    push(val) {//method that places values in list
        //Create new node
        var newNode = new Node(val);
        //If there is no head property on the list, set the head and tail to be the newly created node.
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        //Otherwise set the next property on the tail to be the new node and set the tail property
        // - on the list to be the newly created node.
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //Increment the length by one.
        this.length ++;
        return this
    }

    // POP pseudocode

// Set the next property of the 2nd to last node to be null
// Set the tail to be the 2nd to last node
// Decrement the length of the list by 1
//Return the value of the removed node 

    pop() {
        // If there are no nodes in the list, return undefined.
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        // Loop through the list until you reach the tail
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null; // deletes the end of the list so the newTail can become the tail.
        this.length --;
        return current
    }

    //SHIFT: pseudocode

    shift() {
        // IF there are no nodes, return undefined
        if(!this.head) return undefined;
        // Store the current head property in a variabel
        var currentHead = this.head;
        // Set the head property to be the current head's next property
        this.head = currentHead.next;
        // Decrement the length by 1
        this.length--;
        //Return the value of the node removed
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
        return this;
    }

    /* GET: This function should accept an index. If the index is less than zero or greater
    than or equal to the length of the list, return null. Loop through the list until you
    reach the index and return the node at the specific index */

    get(idx) {
        if(idx < 0 || idx >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== idx){
            current = current.next;
            counter++;
        }
        return current;
    }

    /* SET: This function should accept an imdex and a value. Use the GET function
    to find the specific node. If the node is not found, return false.
    If the node is found, set the value of that node to be the value
    passed to the function and return true.*/

    set(idx, val) {
        var foundNode = this.get(idx);
        if(foundNode){
            foundNode.val = val;
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
        if(idx === this.length) return list.push(val);
        if(idx === 0) return this.unshift(val);
        var newNode = new Node(val)
        var prev = this.get(idx - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    /* If the index is less than zero or greater than the length, return undefined. If the
    index is the same as the length - 1, pop. If the index is 0, SHIFT. Otherwise, 
    using the GET method, access the node at the index - 1. Set the next property 
    on that node to be the next of the next node. Decrement the length. Return the value of 
    the node removed.*/

    remove(idx) {
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === this.length - 1) return this.pop();
        if(idx === 0) return this.shift();
        var previousNode = this.get(idx - 1)
        var removed = previousNode.next;
        this.length--;
        return removed;    
    }
    /* Create a variable called node and initialize it to the head property. 
    Swap the head and tail. Create a variable called next. Create a variable called prev.
    Loop through the list. Set next to be the next property on whatever node is. Set prev to be the value of
    the node variable. Set the node variable to be the value of the next variable.*/

    reverse() {
        //Create a variable called node and initialize it to the head property.
        var node = this.head;
        //Swap the head and tail.
        this.head = this.tail;
        this.tail = node;this.insert
        //Create a variable called next.
        var next;
        //Create a variable called prev.
        var prev = null;
        //Loop through the list.
        for(var i = 0; i < this.length; i++) {
            //Set next to be the next property on whatever node is.
            next = node.next;
            node.next = prev;
            //Set prev to be the value of the node variable.
            prev = node;
            //Set the node variable to be the value of the next variable.
            node = next;
        }
        return this;
    }


}

var list = new SinglyLinkedList()
list.push("this")
list.push("is")
list.push("working")
// console.log(list.get(1))
// list.set(2,34)
// list.insert(0,45)
// list.remove(0)
list.reverse()
// list.pop()
// list.shift()
// list.unshift(23)
// list.shift()
// list.push("GOODBYE")
//One way of linking nodes.
// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

console.log(list)

// class newLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val) {
//         var newNode = new Node(val);
//         if(!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
// }

// var pList = new newLinkedList()

// pList.push(43);
// pList.push(34);
// pList.push(28);

// console.log(pList)