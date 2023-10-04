//BinarySearchTree Class

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }
// };

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// };

// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// console.log(tree);

//  **INSERTING**
//**STEPS: Create a new node. Starting at the root, check if there is a root, if not - the root now becomes the new node */
//If there is a root, check if the value of the new node is greater than or less than the value of the root
//If it is greater - Check to see if there is a node to the right. If there is move to the node and repeat thses steps
//If there is not, add the node as the right property
//If is is less - Check to see if there is a node to the left
//If there is, move to that node and repeat these steps
//If there is not, add that node as the left property

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
//* FIND(contains): Starting at the root - Check if there is a root, if not - search is finished. 
// If there is a rot check if the value of the new node is the value we are looking for if found, search is over. 
// If not, check to see if the value is greater than or less than the value of the root
// if it is greater - Check to see if there is a node to the right. If there is, move to that node and repeat these steps
// If there is not, we're done searching! - If it is less, check to see if there is a node to the left.
// If there is, move to that node and repeat these steps. iF there is not, we're done searching.

    contains(value) {
        if(this.root === null) return false;
        var current = this.root,
        found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
//BFS(steps - iteratively) Create a queue(this can be an array) and a variable to store the values of nodes visited.
//Place the root node in the queue. Loop as long as there is anything in the queue. Dequeue a node from the queue and
//push the value of the node into the variable that stores the nodes. If there is a left property on the node dequeued -
//add it the queue. If there is a right property on the node dequeued - add it to the queue.
//Return the variable that stores the values.

    BFS() {
        var queue = [],
            data = [],
            node = this.root;
        //first in
        queue.push(node);
        while(queue.length){
            //first out
            node = queue.shift()
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

};

var tree = new BST();
tree.insert(10)
tree.insert(7)
tree.insert(13)
tree.insert(5)
tree.insert(17)

console.log(tree)
console.log(tree.contains(5))
console.log(tree.BFS())

//refactored version of INSERT.

// class BinarySearchTree {
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         var newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }
//         var current = this.root;
//         while(true){
//             if(value === current.value) return undefined;
//             if(value < current.value){
//                 if(current.left === null){
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if(current.right === null){
//                     current.right = newNode;
//                     return this;
//                 } 
//                 current = current.right;
//             }
//         }
//     }
// }

//BFS(steps - iteratively) Create a queue(this can be an array) and a variable to store the values of nodes visited.
//Place the root node in the queue. Loop as long as there is anything in the queue. Dequeue a node from the queue and
//push the value of the node into the variable that stores the nodes. If there is a left property on the node dequeued -
//add it the queue. If there is a right property on the node dequeued - add it to the queue.
//Return the variable that stores the values.


