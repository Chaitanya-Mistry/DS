console.warn('Insertion sort algorithm implementation');

const array = [20,11,3,50,45,30,1,2];

console.log('Unsorted Array .. 🤐');
printArray(array);
insertionSort(array);
console.log('Sorted Array .. 😄');
printArray(array);

// Insertion sort algorithm
function insertionSort(givenArray){

    for(let i=1;i<givenArray.length;i++){
        const temp = givenArray[i]; // Current array element
        let j = i-1; 

        // Shiftin the elements until perfect place for "temp" is found.. 🚂
        while(j>=0 && givenArray[j] > temp){
            givenArray[j+1] = givenArray[j];
            j--;
        }
        givenArray[j+1] = temp;
    }

}
// To print given array
function printArray(givenArray){
    givenArray.forEach(element => {
        console.log(element);
    });
}