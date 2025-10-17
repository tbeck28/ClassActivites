 // wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function


function addNumbersFrom1To100(number){
    let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i; // if you place your return statement here then the loop would stop 
}
return total //placing it here would allow the loop to run until the predetermined statement is met
}

// invoke the function and console.log its value
// ? what do you expect ?
let totalSum = addNumbersFrom1To100();
console.log(totalSum);

// try to print the variable "total" outside the function
console.log(total)

// examine the code below,

// ? which console.log statement will not print when you invoke the parentAndChildScope function ?
function childScope(param) {
  const childVariable = "I am in the child's scope";
  console.log("Child Scope, Parent Variable:", param);
  console.log("Child Scope, Child Variable:", childVariable);
}

function parentAndChildScope() {
  const parentVariable = "I am in the parent's scope";
  childScope(parentVariable);
  console.log("Parent Scope, Parent Variable:", parentVariable);
  console.log("Parent Scope, Child Variable:", childVariable); /* this would be undefined because the variable that we are trying to reach is a local variable
  that is not in the same block of code
  */
}
