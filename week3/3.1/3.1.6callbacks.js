// "regular" functions
function greet(name) {
  return `Hello ${name}!`;
}

function welcome(name) {
  return `${name}, welcome!`;
}

function informAboutSale(name) {
  return `${name}, we're having a sale!`;
}

// function that takes a callback function as an argument
function getNameAndShowMessage(callback) {
  const name = prompt("Please Enter Your Name: ");
  alert(callback(name));
}

// pass each "regular" function into getAndShowMessage as a callback function

getNameAndShowMessage(greet)
getNameAndShowMessage(welcome)
getNameAndShowMessage(informAboutSale)


const greeting = (n) => `Hello ${n}`; // you can use concise body when your return statement only takes up one line

const greeting2 = (x) => { // you can use block body when your return function is more than one line, just remember to add 
    return `Hello ${x}`;
}

// with callback functions, you are more likely to use arrow syntax
getNameAndShowMessage( name => `hello ${name}`) // this compresses the function down