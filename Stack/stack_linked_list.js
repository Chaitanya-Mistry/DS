class StackNode{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

const head = new StackNode(10);
const second = new StackNode(20);
const third = new StackNode(30);

head.next = second;
second.next = third;

console.log('Before Push:');
listTraversal(head);

console.log('\nAfter Push:');
listTraversal(head);

// Linked List Traversal
function listTraversal(head){
    let ptr = head;
    while(ptr){
        console.log(ptr.data);
        ptr = ptr.next;
    }
}

// Push Operation
function myPush(){

}