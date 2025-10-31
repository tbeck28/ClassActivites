// print the outer HTML of the navigation bar
let nav = document.querySelector('.nav')
console.log(nav.outerHTML)
// print the inner HTML of the navigation bar
console.log(nav.innerHTML)

// print the text content of the #class-schedule-list element
console.log(document.querySelector('#class-schedule-list').textContent)

// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector('.class-week');
firstClassWeek.classList.add('week-1')

// select the img element and add a src attribute
document.querySelector("#dog-picture").src =
  "https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";

// change the font color of the h1 element
document.querySelector('h1').style.color = 'color: red;'
