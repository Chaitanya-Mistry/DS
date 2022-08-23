console.warn('Bubble Sort Algorithm implementation .. ');

const unSortedArray = [10,2,5,1,20,40];

// Bubble Sort Funciton Declaration ..
function bubbleSort(givenArray){
    let pass = 0;
    for (let i = 0; i < givenArray.length; i++) {
        let swap = false;
        pass++;
        for (let j = 0; j < givenArray.length; j++) {
            const element = givenArray[j];
            // Compare two adjacent elements
            if(element > givenArray[j+1]){
                swap = true;
                // Swap to elements if condition is satisfied.. 💱
                [givenArray[j],givenArray[j+1]] = [givenArray[j+1],givenArray[j]];
            }else{                
                continue;
            }                                 
        }
        // To reduce unnecessary comparision even if our array is sorted now ..
        if(!swap){             
            return {
                'noOFPass':pass,
                'sortedArray' : givenArray
            };
        }   
    }
}

// Bubble Sort Function Invoking ..
console.log('Total passes was taken: ',bubbleSort(unSortedArray).noOFPass);
console.log(bubbleSort(unSortedArray).sortedArray);