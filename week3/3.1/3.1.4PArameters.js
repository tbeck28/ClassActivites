// Named Parameters
// write a function that takes two named parameters:

function para(p1 = 2,p2 = 4) {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
}

// print each named parameter,
// then return the parameters added together

console.log(5, 6)

// invoke the function and pass in two numbers


// invoke the function and pass in more than two numbers

console.log(para(5, 4, 2));

// invoke the function and pass in only one number

console.log(para(8));
// would be nan because the parameter is not declared

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

console.log(para(2));

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// correct syntax: function rest(1, 2, ...nums)

