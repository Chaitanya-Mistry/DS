console.log('Circular Queue Implementation\n');

const queue = [];
queue.length = 5;

let rear = -1;
let front = -1;

// console.log('Before insertions...');
// traverseQ();

    enQ(10)
    enQ(20)
    enQ(30)
    enQ(40)
    enQ(50)

// console.log('After insertions...');
// traverseQ();

console.log('\nBefore deletion...');
console.log(queue);
// traverseQ();

deQ();
deQ();
deQ();
deQ();
deQ();
console.log('After deletion...');
// traverseQ();
console.log(queue);

console.log('Insertion');
enQ(60);
enQ(70);
enQ(80);
enQ(90);
deQ();
enQ(100)
enQ(200)
enQ(300)
console.log(queue)
// QUEUE Operations ..

// Traversal
function traverseQ(){
    if(front!= -1){
        for(let i = front; i <=rear; i++){
            console.log(queue[i]);
        }
    }else{
        console.log('There is nothing in the circular queue what should I traverse 😏');
    }
}

// Enqueue operations 
function enQ(data){
    // Check full condition
    if(!isFull()){
        if(front == -1){
            front++;
            rear++;
            queue[front] = data;
        }else{
            rear = ((rear+1)%queue.length);
            queue[rear] = data;
        }    
    }else{
        console.log(`Circular Queue is Full 💯`);
    }
}

// Dequeue operations
function deQ(){
    // Check empty condition before delete
    if(isEmpty()){
        console.log('There is nothing to delete from the ciruclar queue ⚔️');
    }else{
        // Reset front & rear if there is only one element left in the queue.
        if(front == rear){
            delete queue[front];
            front = -1;
            rear = -1;
        }else{
            delete queue[front];
            front = (front+1)%queue.length;
        }
    }
}

// isEmpty 
function isEmpty(){
    if(front == -1){
        return 1;
    }else{
        return 0;
    }
}

// isFull
function isFull(){
    if((front == 0 && rear == (queue.length-1)) || rear == front-1 || (front == (queue.length-1) && rear == 0)){
        return 1;
    }else{
        return 0;
    }
}