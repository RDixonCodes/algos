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
};

var tree = new BST();
tree.insert(10)
tree.insert(7)
tree.insert(13)
tree.insert(16)
tree.insert(2)
tree.insert(6)

console.log(tree)

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