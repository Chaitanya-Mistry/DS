console.log('Selection sort algorithm .. 🤏');

const array = [20,11,3,50,45,30,1,2];

console.log('Unsorted Array .. 🤐');

printArray(array);
selectionSort(array);

console.log('Sorted Array .. 😄');
printArray(array);

// Selection sort algo
function selectionSort(givenArray){

    for(let i=0;i<givenArray.length;i++){
        let minimum = i;

        for(let j= i+1; j<givenArray.length;j++){
            // Select the minimum element's index in each loop.
            if(givenArray[j] < givenArray[minimum]){
                minimum = j;
            }
        }
        // Put selected element in the correct position 
        [givenArray[i],givenArray[minimum]] = [givenArray[minimum],givenArray[i]];
    }
}

// To print given array
function printArray(givenArray){
    givenArray.forEach(element => {
        console.log(element);
    });
}