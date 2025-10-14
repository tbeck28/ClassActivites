// TODO: using the function expressions below, refactor them into function declarations
function greet() {
  console.log("Hello!");
};

function threeModTwo() {
  console.log(3 % 2);
};

let age = 18;

function checkDrivingAge() { // age should be in parenthesis but were not there yet
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};

function twoPlusTwo () {
  let x = 2 + 2;
  console.log(x); // youre doing things too complicated, console.log(2+2);
}

twoPlusTwo();
greet();
threeModTwo();
checkDrivingAge();

