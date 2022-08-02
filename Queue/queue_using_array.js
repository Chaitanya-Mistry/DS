console.log('Simple Queue using array .. 🧍 🧍 🧍 .. \n');

const queue = [];
queue.length = 5;

let rear = -1;
let front = -1;

console.log('Before Insertion ..');
traverseQ();
console.log('After Insertion ..');
enQ(10);
enQ(20);
enQ(30);
enQ(40);
enQ(50);
traverseQ();

console.log('Before Deletion ..');
traverseQ();

console.log('After Deletion ..');
deQ();
deQ();
deQ();
traverseQ();

console.log(peekQ())

// QUEUE Operations ..

// Traversal
function traverseQ(){
    if(front!= -1){
        for(let i = front; i <=rear; i++){
            console.log(queue[i]);
        }
    }else{
        console.log('There is nothing in the queue what should I traverse 😏');
    }
}

// PEEK operation
function peekQ(){
   if(!isEmpty()){
      return queue[front];
   }else{
    return'Queue is empty .. 👎';
   }
}
// Enqueue(Add) operation
function enQ(data){
    // display message if queue is full ..
    if(isFull()){
        console.log('Queue is FULL ❎');
        return;
    }
    // if queue is not full then add data 
    else{
        // Check for first element
        if(front == -1){
            front++;
            rear++;
            queue[front] = data;
        }else{
            rear = rear + 1;
            queue[rear] = data;
        }
    }
}

// Dequeue(Remove) operation
function deQ(){
    // delete data only if queue is not empty
    if(!isEmpty()){
        // Last element in the queue
        if(front == rear){
            front = rear = -1;
        }else{
            front++;
        }
    }else{
        console.log('Queue is already empty 😏');
    }
}

// IS FULL
function isFull(){
    if(rear == (queue.length-1)){
        return 1;
    }else{
        return 0;
    }
}

// IS EMPTY
function isEmpty(){
    if(rear == -1){
        return 1;
    }else{
        return 0;
    }
}