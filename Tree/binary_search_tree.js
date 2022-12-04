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

    // DFS Traversal
    preOrderDfs = (rootNode = this.#rootNode) => {
        if (rootNode) {
            console.log(rootNode.node_value);
            this.preOrderDfs(rootNode.left);
            this.preOrderDfs(rootNode.right);
        }
    }
    inOrderDfs = (currentNode = this.#rootNode) => {
        if (currentNode) {
            this.inOrderDfs(currentNode.left);
            console.log(currentNode.node_value);
            this.inOrderDfs(currentNode.right);
        }
    }
    postOrderDfs = (currentNode = this.#rootNode) => {
        if (currentNode) {
            this.postOrderDfs(currentNode.left);
            this.postOrderDfs(currentNode.right);
            console.log(currentNode.node_value);
        }
    }

    // BFS Traversal
    bfsTraversal = (currentNode = this.#rootNode,setData = new Set()) => {
        if (currentNode) {
            if(!setData.has(currentNode.node_value)){
                console.log(currentNode.node_value);
                setData.add(currentNode.node_value);
            }
          
            if (currentNode.left) {
                setData.add(currentNode.left.node_value);
                console.log(currentNode.left.node_value);
            }
            if (currentNode.right) {
                setData.add(currentNode.right.node_value);
                console.log(currentNode.right.node_value);
            }
            this.bfsTraversal(currentNode.left,setData);
            this.bfsTraversal(currentNode.right,setData);
        }     
    }

    traversal = (type, mode) => {
        // BFS Traversal
        if (type === "BFS") {
            this.bfsTraversal();
        }
        // DFS Traversal
        else if (mode === "pre" && type === "DFS") {
            this.preOrderDfs();
        } else if (mode === "in" && type === "DFS") {
            this.inOrderDfs();
        } else if (mode === "post" && type === "DFS") {
            this.postOrderDfs();
        }
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
bst.addNode(3);
bst.addNode(7);
bst.addNode(20);
bst.addNode(13);
bst.addNode(50);

bst.traversal("BFS");
// bst.traversal("DFS", "pre");
// let minVal = bst.findMin();
// let maxVal = bst.findMax();
// console.log("Min value : ", minVal);
// console.log("Max value : ", maxVal);
