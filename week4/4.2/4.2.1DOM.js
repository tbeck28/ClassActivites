// select all unordered list (ul) elements
let getUL = document.querySelectorAll('ul'); // yes it can go either way document.elementByTagName('ul');
console.log(getUL);

// select all elements with the class "class-week"
let classWeek = document.getElementByClassName('class-week') // correct
console.log(classWeek);

// select all elements with the class "nav-bar"
let nav = document.getElementByClassName('nav-bar'); // yes document.querySelectorAll('.nav-bar') include the class(.) for all query
console.log(nav)

// select the element with the id "dog-picture" and save it to a variable
let dog = document.getElementById('dog-picture'); // yes document.querySelectorAll('#dog-picture');
console.log(dog)
