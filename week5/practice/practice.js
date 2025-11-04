const pizzaOrders = [
  {
    orderId: 101,
    customer: "Alice",
    size: "large",
    toppings: ["pepperoni", "mushrooms"],
    delivered: true,
    price: 18.99
  },
  {
    orderId: 102,
    customer: "Bob",
    size: "medium",
    toppings: ["sausage", "onions", "greenpeppers"],
    delivered: false,
    price: 15.49
  },
  {
    orderId: 103,
    customer: "Charlie",
    size: "small",
    toppings: ["cheese"],
    delivered: true,
    price: 10.99
  },
  {
    orderId: 104,
    customer: "Dana",
    size: "large",
    toppings: ["bacon", "pineapple"],
    delivered: false,
    price: 19.99
  },
  {
    orderId: 105,
    customer: "Eli",
    size: "medium",
    toppings: ["mushrooms", "olives", "extracheese"],
    delivered: true,
    price: 16.49
  }
];

// for each executes a provided function once for each array element and iterates over the array items without mutating the original array:
//  name.forEach = variable => console.log(variable.object name)
// WHEN ADDING IN A FUNCTION: GLOBAL VARIABLE(SUM) = THING YOURE ADDING + SUM
/* 
pizzaOrders.forEach(customer => console.log(customer.customer));
pizzaOrders.forEach(customer => console.log(customer.price));

let size = 0;
pizzaOrders.forEach(customer => {
    if (customer.size === 'medium'){
        size++;
    }
})
console.log(size)


 
let sum = 0;

pizzaOrders.forEach(priceTotal => {
    sum = priceTotal.price + sum;    
});
console.log(sum)

// map uses the results from the function adn returns the results into an array
// syntax: variable declaration = array.map(variable => array.key)
//console.log(variable)

const prices = pizzaOrders.map(customer => customer.price)
console.log(prices)

const top = pizzaOrders.map(customer => customer.toppings)
console.log(top);
*/

// filter returns the truthy values you are specifically searching for from an array and puts the results in a new array
// syntax: variable declaration = array.filter(new variable => {
//   return variable.key === specified value })
// console.log(variable)

 /*
const price = pizzaOrders.filter(prices => {
    return prices.price == 16.49
})
console.log(price)


const delivered = pizzaOrders.filter(deliver => {
    return deliver.delivered === true; // when using multi-line arrow functions, YOU HAVE TO RETURN!
})
console.log(delivered)

const sizeL = pizzaOrders.filter(large => (large.size === 'large'));
console.log(sizeL)

const mush = pizzaOrders.filter(pizza => pizza.toppings.includes('mushrooms'));
console.log(mush);
*/

const cheeseP = pizzaOrders.filter(cheese => cheese.toppings.every(toppings => toppings === 'cheese'))
console.log(cheeseP)