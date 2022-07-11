class StackNode{
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedListStack{
    constructor(){
        this.top = null;
    }
    // Traversal
    traversal(){
        let ptr = this.top;
        while(ptr){
            console.log(ptr.data);
            ptr = ptr.next;
        }
        return '';
    }
    
    // Stack Underflow 
    isEmpty(){
        if(this.top == null){
            console.log('Stack is underflow .. 😶');
            return 1;
        }else{ return 0 }
    }
    // Push Operation
    myPush(data){
        const newNode = new StackNode(data);
        // Overflow Condition
        if(newNode!=null){
            newNode.next = this.top;
            this.top = newNode;
        }else{
            console.log('Stack is OverFlow .. 😮');
        }
    }
    // POP Operation
    myPop(){
        // Check if there is an element in the stack or not.
        if(!this.isEmpty()){
            // Before deletion make sure to store the data to inform the user which data/node was deleted.
            const temp = this.top.data;
            this.top = this.top.next;
            return temp;
        }else{
            return 'Nothing was deleted since stack is empty 😒...';
        }
    }
    // Peek Operation (Top most node)
    peek(){
        if(!this.isEmpty()){
            return this.top.data;
        }
    }
}

const myLinkedStack = new LinkedListStack();

myLinkedStack.myPush(10);
myLinkedStack.myPush(20);
myLinkedStack.myPush(30);
myLinkedStack.myPush(40);

// console.log('The top-most node element is : ',myLinkedStack.peek());
// myLinkedStack.myPop();
// console.log('NOW , The top-most node element is : ',myLinkedStack.peek());

// console.log('Before POP Operation:');
// console.log(myLinkedStack.traversal());
// console.log('After POP Operation:');
// console.log(myLinkedStack.traversal());
