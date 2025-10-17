let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values

x = 0
y = false
z = null


// print x, y, and z
console.log(x)
console.log(y)
console.log(z)



const a = "name";
const b = [];
const c = {};
/* arrays and objects are mutable, meaning that as long as you DONT change the VALUE of the array/object
 to anything else and you only add/remove values to the array/object, it will not throw an error */

// try to reassign a, b, and c to FALSY values

// using BRACKET NOTATION, assign a value to b

b[0] = 'name'

// using DOT NOTATION, assign a PROPERTY to c

c.name = 'matt'

// using DOT NOTATION, assign a METHOD to c

c.speak = function (){
  console.log('matt');
}

c.yell = function() {
  console.log(<b>MATT</b>)
}

// using BRACKET NOTATION, call the method in c
let type = 'speak'
c['type'](); // the type is now referencing the value(method) of speak, type will now do the same thing as speak would do 


// type allows you to see what k
// print a, b, and c
// While going through this activity, in you

// when creating a complex data type itll create a pointer that points to another location to memory
// simple data types store the value
// complex data types store a reference to a memory location