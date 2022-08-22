console.log('Queue implementation using linked list ...');

// Create a node for our linked list ..
class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}
// Create a linked list to hold our nodes(Data) ..
class QueueLinkedList{
    constructor(){
        this.front = this.rear = -1;
    }

    // Traversal of linked list
    traverse = () => {
       let ptr = this.front;

       if(ptr){
            while(ptr != null){
                console.log(`${ptr.data}`);
                ptr = ptr.next;
            }
       }else{
        console.log('Queue is already empty, nothing to traverse .. 😁');
       }
    }
    // Enqueue operation
    enQ = (data) => {
        const newNode = new Node(data);
        // Queue is full if new node was not created .. 😅
        if(!newNode){
            console.log('Sorry, new node was not created ... 😅');
        }
        else if(this.isFirstNode()){
            this.front = newNode;
            this.rear = newNode;
            newNode.next = null;
            console.log(`New Node with data ${data} has been created successfully 😄`);    
        }else{
            const prevNode = this.rear;
            prevNode.next = newNode;
            this.rear = newNode;
            console.log(`New Node with data ${data} has been created successfully 😄`);    
        }
    }

    // Dequeue operation
    deQ = () => {
        if(this.isEmpty()){
            return "Queue of linked list is empty, cannot perform deletion (deQ) operation 😑";
        }else{
            const deletedNode = this.front.data;
            // Move the front pointer to the next available node
            this.front = this.front.next;
            return deletedNode;
        }
    }

    // isEmpty condition
    isEmpty = () => {
        if(this.front == -1 || this.front == null){
            return 1;
        }else{
            return 0;
        }
    }
    // First Node is being created ?
    isFirstNode = () => {
        if(this.front == -1){
            // console.log('Queue is empty');
            return 1;
        }else{
            // console.log('Queue is not empty');
            return 0;
        }
    }
}
// Create an instance of linked list;

const queueLinkedList = new QueueLinkedList();

queueLinkedList.enQ(10);
queueLinkedList.enQ(20);
queueLinkedList.enQ(30);

console.log('After insertion ..');
queueLinkedList.traverse();

console.log('Deleted element is : ',queueLinkedList.deQ());
console.log('Deleted element is : ',queueLinkedList.deQ());
console.log('Deleted element is : ',queueLinkedList.deQ());
console.log('Deleted element is : ',queueLinkedList.deQ());
console.log('');
queueLinkedList.traverse();
