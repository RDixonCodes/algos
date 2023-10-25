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
    //                                       **INSERTING**
    insert(value) {
        //Create a new node.
        var newNode = new Node(value);
        //Starting at the root, check if there is a root, if not - the root now becomes the new node
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
            //If there is a root, check if the value of the new node is greater than or less than the value of the root
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value){
                //If it is less - Check to see if there is a node to the left
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                 //If there is not, add the node as the right property
                 //If there is, move to that node and repeat these steps   
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                         //If there is not, add that node as the left property
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

    //DFS(PreOrder) steps - recursively: Create a variabel to store the values of nodes visited. 
    //Store the root of the BST in a variable called current. Write a helper fucntion which accepts a node.
    //Push the value of the node to the variable that stores the values.
    //If the node has a left property, call the helper function with the left property on the node.
    // If the node has a right property, call the helper function with the right property on the node.
    //Invoke the helper function with the current variable. Return the array of values.

    DFSPreOrder() {
        var visited = [];
        current = this.root;
        // can use a variable (current) if you don't want to start at the root
        function traverse(node){
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return visited;
    }

    //DFS(PostOrder) steps - recursively:
    //Create a variable to store the values of nodes visited. Store the root of the BST in a variable called current.
    //Write a helper function which accepts a node.
    //If the node has a right property, call the helper function with the right property on the node
    //Push the value of the node to the variable that stores the values
    //Invoke the helper function with the current variable
    //Return the array of values

    DFSPostOrder() {
        var visited = [],
        sum = 0;

        function helper(node) {
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
            visited.push(node.value);
        }
        helper(this.root);
        //add sum of all nodes visited
        for(var i = 0; i < visited.length; i++){
            sum += visited[i]
        }
        
        return `Visited nodes: [${visited}]. Sum of all nodes visited: ${sum}.`;
    }

    //DFS(In Order) steps - recursively:
    //Create a variabel to store the values of nodes visited.
    //Store the root of the BST in a variable called current.
    //Write a helper function which accepts a node.
    //If the node has a left property, call the helper function with the left property on the node.
    //Push the value of the node to the variable that stores the values.
    //If the node has right property, call the helper function with the right property on the node.
    //Invoke the helper function with the current variable.

    DFSInOrder() {
        var data = [],
            current = this.root;
            function traverse(node){
                //refactor to remove conditional
                node.left && traverse(node.left);
                data.push(node.value);
                node.right && traverse(node.right);
            }
            traverse(current);
            return data;
    }
};

var tree = new BST();
tree.insert(10)
tree.insert(7)
tree.insert(13)
tree.insert(5)
tree.insert(17)
tree.insert(9)
tree.insert(11)

console.log(tree)
console.log(tree.contains(5))
console.log(tree.BFS())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())

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



