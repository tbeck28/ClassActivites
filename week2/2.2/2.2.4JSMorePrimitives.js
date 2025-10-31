// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let boolie = true;
let favoriteSinger = 'Taylor Swift';
let billboard = 1;
let nothing = null; // you can sub null if you want to purposely leave a variable blank
let defined;


// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(typeof favoriteSinger);
console.log(typeof billboard);
console.log(typeof boolie);
console.log(typeof defined);
console.log(typeof nothing);

// create a variable that references a template literal
// inside the template literal, use two of the above variables

let output = `One of my favorite singers is ${favoriteSinger}, she is ranked ${billboard} on the billboard charts`;
console.log(output);

// reassign the value of the variable that references "null"
// print the value and its type

nothing = 'something';
console.log(nothing);
console.log(typeof nothing);

// print a variable that causes a ReferenceError
// alter the previous line to no longer cause a ReferenceError

let yourMom = 'Melissa';
console.log(yourMom);