 // create an Array using an Array literal

 let newArray = [1, 2, 3, 4, 5]
 
 
// access the 1st item in the Array

newArray[0];


// access the last item in the Array

newArray[4]

// print the length of the Array

console.log(newArray.length)

// use the length property to access the last item in the Array

newArray[newArray.length - 1]

// with for...of, loop over the Array, modify the value and add to a different Array

let array = [];
let currentIndex = 0;

for (newArray of newArray) {
    let newValue = newArray + 10;

    array[currentIndex] = newValue;
    currentIndex++;
}

console.log(array);