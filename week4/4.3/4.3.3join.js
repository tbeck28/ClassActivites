const arrOne = ["a", [0], "b"];
const arrTwo = [1, 2, "c", ["d", 3]];

// concatenate arrTwo, 4, and "e" to arrOne and save the resulting array to a variable
let newarr = arrOne.concat(arrTwo, 4, 'e');
// print the new, merged array
console.log(newarr)

// join the merged array and print the result
const newStr = newarr.join();
