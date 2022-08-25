console.log('Quick Sort Algorithm Implemenation ..');

const array = [4, 6, 2, 5, 7, 9, 1, 3];
const low = 0;
const high = array.length - 1;

console.log('Unsorted Array .. 🤐');
console.log(array);

quickSort(low, high);

console.log('Sorted Array .. 😄');
console.log(array);

// Quick Sort Algorithm ...
function quickSort(low, high) {
    // To ensure there is atleast 2 elements in array .. 🦸‍♂️
    if (low < high) {
        const pivotPosition = partition(low, high);
        // Further Do partitioning of our subarrays ➗ til we our array is sorted ...

        // for left subarray 👈    
        quickSort(low, pivotPosition - 1);
        // for right subarray 👉    
        quickSort(pivotPosition + 1, high);
    }
}
// Array Partition
function partition(low, high) {
    const pivot = array[low]; // Select 1st (Left-Most) array element as "Pivot".
    let i = low;
    let j = high;

    while (true) {
        // To get a greater element than pivot 🔼
        while(array[i]<=pivot) i++;

        // To get a small element than pivot 🔽
        while(array[j]>pivot) j--;

        // Swap i and j 💱
        if(i<j){
            [array[i],array[j]] = [array[j],array[i]];
        }
        
        // Swap J and Pivot if I cross J 🚸
        if(i>j){
            [array[low],array[j]] = [array[j],array[low]];
            return j;
        }
    }

}
// To print given array
function printArray() {
    array.forEach(element => {
        console.log(element);
    });
}