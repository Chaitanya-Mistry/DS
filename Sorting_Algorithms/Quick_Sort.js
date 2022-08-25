console.log('Quick Sort Algorithm Implemenation ..');

const array = [4,6,2,5,7,9,1,3];
const low = 0;
const high = array.length - 1;

console.log('Unsorted Array .. 🤐');
console.log(array);

quickSort(low, high,array);

console.log('Sorted Array .. 😄');
console.log(array);

// Quick Sort Algorithm ...
function quickSort(low, high,givenArray) {
    if (low < high) {
        const pivotPosition = partition(low, high,givenArray);
        // Further Do partitioning of our subarrays ➗ till we our array is sorted ...

        // for left subarray 👈    
        quickSort(low, pivotPosition - 1,givenArray);
        // for right subarray 👉    
        quickSort(pivotPosition + 1, high,givenArray);
    }
}

// Partition Function
function partition(low, high,givenArray) {
}
// To print given array
function printArray() {
    array.forEach(element => {
        console.log(element);
    });
}