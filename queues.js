/*QUEUES*/

/** Queues class */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /*This function accepts some value. Create a new node using that value passed to the function.
    If there are no nodes in the queue, set this node to be the first and last property of the queue.*/
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    /**If there is no first property, just return null. Store the first property in a variable. See if the first is the
    same as the last(check if there is only 1 node). If so, set the first and last to be null. If there is more than 1 node,
    set the first property to be the next property of first. Decrement the size by 1.
     */
    dequeue() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size --;
        return temp.value;
}

}

var newQ = new Queue()

newQ.enqueue("FIRST")
newQ.enqueue("SECOND")
newQ.enqueue("THIRD")

newQ.dequeue()


console.log(newQ)


/** Queue using arrays */

var q = [];

q.push("FIRST")
q.push("SECOND")
q.push("THIRD")

q.shift()
q.shift()
q.shift()

q.unshift("FIRST")
q.unshift("SECOND")
q.unshift("THIRD")

q.pop()
q.pop()
q.pop()

// console.log(q)

/************** How to pull current date/time *********************/
// const date1 = new Date();

// let day = date1.getDate();
// let month = date1.getMonth();
// let year = date1.getFullYear();

// let time = date1.getSeconds();

// let currentDate = `${month} - ${day} - ${year}`;

// let date = new Date().toLocaleDateString() /** Will give date in standard format */

// /** Can use slice to pull date out of a json response */

// let date2  = new Date().toJSON().slice(0, 10);

// console.log(currentDate)
// console.log(day)
// console.log(time)
// console.log(date)
// console.log(date2)

// const time1 = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

// console.log(time1)

