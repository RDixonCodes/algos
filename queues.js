/*QUEUES*/

/** Queues class */

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }

    /*This function accepts some value. Create a new node using that value passed to the function.
    If there are no nodes in the queue, set this node to be the first and last property of the queue.*/
    // enqueue(val) {
    //     var newNode = new Node(val);
    //     if(!this.first) {
    //         this.first = newNode;
    //         this.last = newNode;
    //     } else {
    //         this.last.next = newNode;
    //         this.last = newNode;
    //     }
    //     return ++this.size;
    // }

    /**If there is no first property, just return null. Store the first property in a variable. See if the first is the
    same as the last(check if there is only 1 node). If so, set the first and last to be null. If there is more than 1 node,
    set the first property to be the next property of first. Decrement the size by 1.
     */
//     dequeue() {
//         if(!this.first) return null;
//         var temp = this.first;
//         if(this.first === this.last) {
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size --;
//         return temp.value;
// }

// }

// var newQ = new Queue()

// newQ.enqueue("FIRST")
// newQ.enqueue("SECOND")
// newQ.enqueue("THIRD")

// newQ.dequeue()


// console.log(newQ)


/** Queue using arrays */

// var q = [];

// q.push("FIRST")
// q.push("SECOND")
// q.push("THIRD")

// q.shift()
// q.shift()
// q.shift()

// q.unshift("FIRST")
// q.unshift("SECOND")
// q.unshift("THIRD")

// q.pop()
// q.pop()
// q.pop()

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

//PRIORITY QUEUES:
//Write the Min Binary Heap - lower number means higher priority.
//Each Node has a val and a priority. Use the priority to build the heap
//Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
//Dequeue method removes root element, returns it, and rearranges heap using priority.

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
       let idx = this.values.length - 1;
       const element = this.values[idx];
       while(idx > 0) {
        let parentIdx = Math.floor((idx - 1)/2);
        let parent = this.values[parentIdx];
        if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    //REMOVING: Swap the first value in the values property with the last one.
    //Pop from the values property, so you can return the value at the end.
    //Have the new root "sink down" to the correct spot..
    //Your parent index starts at 0(the root). Find the index of the left child:2 * index + 1
    //(make sure its not out of bounds).
    //Find the index of the right child: 2 * index + 2(make sure its not out of bounds)
    //If the left or right child is greater than the element...swap. If both left and right children are 
    //larger, swap with the largest child.
    //The child index you swapped to now becomes the new parent index.
    //Keep looping and swapping until neither child is larger than the element.
    //Return the old root.

    dequeue() {
        //edge case: single value continues to be logged when array should be emptied
        const minVal = this.values[0];
        const endVal = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = endVal;
            //trickle down
            this.sinkDown();    
        }
        return minVal;
    }
    //[33,39,41,18,27,12]
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();

ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());//edge case resolved by logging undefined showing that all items have been dequeued.
