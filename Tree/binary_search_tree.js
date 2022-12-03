console.log("Binary Search Tree\n");

// Tree Node
class Node {
    constructor(val = null) {
        this.node_value = val;
        this.left = null;
        this.right = null;
    }
}

// Binary Search Tree 🌳
class BST {
    #rootNode;
    constructor(rootNodeVal = null) {
        this.#rootNode = rootNodeVal;
    }

    // Manage Insertion Order
    manageInsertion = (newNode, currentRootNode) => {
        // Less value
        if (newNode.node_value < currentRootNode.node_value) {
            if (currentRootNode.left === null) {
                currentRootNode.left = newNode;
            } else {
                this.manageInsertion(newNode, currentRootNode.left)
            }
        }
        // Greater value
        else if (newNode.node_value > currentRootNode.node_value) {
            if (currentRootNode.right === null) {
                currentRootNode.right = newNode;
            } else {
                this.manageInsertion(newNode, currentRootNode.right);
            }
        }
    }
    // Minimum node in tree 
    findMin = (rootNode = this.#rootNode) => {
        if (rootNode) {
            let minNode = rootNode.node_value;

            if (rootNode.left) {
                minNode = this.findMin(rootNode.left);
            }
            return minNode;
        } else {
            console.log("Binary search tree is empty ... 😑");
        }
    }
    // Maximum node in tree
    findMax = (rootNode = this.#rootNode) => {
        if (rootNode) {
            let maxNode = rootNode.node_value;

            if (rootNode.right) {
                maxNode = this.findMax(rootNode.right);
            }
            return maxNode;
        } else {
            console.log("BST is empty 😑");
        }
    }
    // 
    addNode = (nodeVal) => {
        const newNode = new Node(nodeVal);
        if (this.isEmpty()) {
            this.#rootNode = newNode;
        } else {
            this.manageInsertion(newNode, this.#rootNode);
        }
    }
    // 
    searchNode = (nodeVal, rootNode = this.#rootNode) => {
        if (!rootNode) {
            return false;
        } else {
            if (nodeVal === rootNode.node_value) {
                return true;
            } else if (nodeVal < rootNode.node_value) {
                return this.searchNode(nodeVal, rootNode.left);
            } else if (nodeVal > rootNode.node_value) {
                return this.searchNode(nodeVal, rootNode.right);
            } else {
                return false;
            }
        }
    }
    // 
    isEmpty = () => this.#rootNode === null;
    // 
    printBST = () => console.log(this.#rootNode);
}

// BST object
const bst = new BST();
bst.addNode(10);
bst.addNode(20);
bst.addNode(5);
bst.addNode(13);
bst.addNode(50);

let minVal = bst.findMin();
let maxVal = bst.findMax();
console.log("Min value : ", minVal);
console.log("Max value : ", maxVal);
// console.log(bst.printBST())
// const result = bst.searchNode(14);
// console.log(result);
// bst.printBST();