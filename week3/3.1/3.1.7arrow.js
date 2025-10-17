 // refactor the functions below into arrow syntax

 
 
 
 


 // concise
 
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}

const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;




// concise
function greet(name) {
  return `Hello, ${name}`;
}

const greet = (x) => `Hello, ${x}`







// concise

const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};



const timeOfDay = (name, timeOfDay) => `Hello ${name}, good ${timeOfDay}`;



const timeOfDay1 = (name, timeOfDay) => {
    const greeting = `Hello ${name}, good ${timeOfDay}`
    return greeting
}











// block

function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}

const tripleAndHalf = (num) => {
    let triple = num * 3;
    return triple / 2;
}

const triple = (num) => (num * 3) / 2;



// block

function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}


const sumTwoNumbers = (num1, num2) => {
    let sum = num1 + num2;
    console.log(`The sum of your numbers is ${sum}.`) // i got this wrong, i left this out
    return sum;
}




function name (parameters) => {
    **code**
}
const concise = (x) => (`${x}`)

const block = (x) => {

}
