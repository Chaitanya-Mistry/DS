class Stack{
    constructor(){
        this.items = [];
        this.items.length = 5;
        this.top = -1;
    }

    // Stack Traversal
    stackTraversal = () => {
        if(!this.isEmpty()){
            this.items.forEach(currentItem => {
                console.log(currentItem);
            });
        }
    }
    // Top most element
    peek = () => {
        if(!this.isEmpty()){
            console.log(`The top-most element of the stack is : ${this.items[this.top]}`);
        }
    }
    // Empty stack checker
    isEmpty = () => {
        if(this.items.length === 0 || this.top < 0){
            console.log('Stack is Empty 👎');
            return 1;
        }else{
            // console.log('Stack is Not Empty 👍');
            return 0;
        }
    }
    // Full stack checker
    isFull = () => {
        if(this.items.length === 0){
            // console.log('Stack is NOT full ❎');
            return 0;
        }
        else if(this.top === this.items.length-1){
            console.log('Stack is full ... 💯');
            return 1;
        }else{
            // console.log('Stack is NOT full ❎');
            return 0;
        }
    }
    // Push Operation in stack
    myPush = (data) =>{
        if(!this.isFull()){
            this.top = this.top + 1;
            this.items[this.top] = data;
        }else{
            console.log(`Stack is Full Sir .. I can't insert ${data} 😒`);
        }
    }
    // POP Operation in stack
    myPop = () =>{
        if(!this.isEmpty()){
            // Before deletion make sure to store the data to inform the user which data is deleted.
            const deletedData = this.items[this.top];
            // Delete the element 
            delete this.items[this.top];
            // Decrement top pointer which points to the top-most element.
            this.top = this.top - 1;
            return deletedData;
        }else{
            console.log('Stack is already empty Sir ... 😒');
            return 'Nothing was deleted since stack is empty ...';
        }
    }
}

const myStack = new Stack();

myStack.myPush(100);
myStack.myPush(200);
myStack.myPush(300);
myStack.myPush(400);

myStack.peek();
myStack.myPop();
myStack.peek();