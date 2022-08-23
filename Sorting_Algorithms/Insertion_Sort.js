console.warn('Insertion sort algorithm implementation');

const unsortedArray = [5,2,8,20,50,6];
                    // 0 1 2  3 4  5
printArray(unsortedArray);

// To print given array
function printArray(givenArray){
    givenArray.forEach(element => {
        console.log(element);
    });
}