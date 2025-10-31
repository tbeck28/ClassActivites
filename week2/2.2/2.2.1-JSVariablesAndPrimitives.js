// create a constant variable called "name" that references a string
const name = 'Quinn';

// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = 'Opalite';

// create a reassignable variable called "wage" that references a number
let wage = 25;

// create a variable called "age" that references a number, should it be reassignable?
let age = 26;

// create a variable called "onlyChild" that references a boolean
let onlyChild = false;

// create a variable called "satisfied" that references a boolean
let satisfied = true;

// print the types of two variables that reference two different data types (typeof)
console.log(typeof favoriteSong);
console.log(typeof wage);

// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = 'Computers';

// print the data type of "favoriteThing"
console.log(typeof favoriteThing);

// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = 'Elizabeth Taylor';

// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 34;
console.log(typeof favoriteThing);

// Happy Birthday!
// Reassign "age" to a new value
age = 27;

// You got a big raise at work.
// Reassign "wage" to a new value
wage = 26;

// Your raise changed your job satisfaction.
// Assign "satisfied" to true

// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log('Ended up getting a raise from my lovely boss, I make ' + wage + ' now, so I guess it is ' + satisfied + ' that I am happy');
