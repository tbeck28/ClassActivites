// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4); // primitive value
console.log("Hello, world" === "Hello, world"); // primitive value

// strings numbers and booleans area all defined length variables

let x = false;  //primitive
let y = x; // primitive because they are copying the value x = false y = false
console.log(x === y); // true because false = false which is true
x = !x; // true x = true y = false
console.log(x === y); // false because true does not equal false

console.log([1, 2, "c"] === [1, 2, "c"]); // complex, it is a data type since it is an array, false because the memory addresses do not match, each new array gets stored in a separate location
console.log({} === {}); // false

y = { id: 1 };
x = y; // assigns the memory location to x // true 
console.log(x === y);
y.id += 1; // y.id = 2
console.log(x.id === y.id); // should not match, different locations  // the actual answer is true because the memory address was modified earlier in line 19

let user1 = {name: 'Matt', age: 21}
let admin1 = user1; // this is referencing the same memory location that user1 is located in