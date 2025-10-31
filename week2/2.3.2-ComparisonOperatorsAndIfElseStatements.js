let age = 25;

// Write an If Else statement

// if age is greater than or equal to 25,
// console.log "Renting a car is more affordable."
// if age is less than 25
// console.log "Renting a car is very expensive."

if (age >= 25) {
    console.log('Renting a car is more affordable')
} else {
    console.log('Renting is very expensive')
}
// Chaining if statements: if - else if - ... - else

// if age is greater than or equal to 25,

// console.log "Renting a car is more affordable."
// if age is greater than or equal to 18
// console.log "Renting a car is very expensive."
// if age is less than 18
// console.log "You cannot legally rent a car."

if(age >= 25) {
    console.log('Renting a car is more affordable');
} else if (age >= 18) {
    console.log('Renting is very expensive');
} else {
    console.log('You cannot legally rent a car')
}




const ages = 'old enough';

switch (ages) {
    case "not old enough" : {
        const message = 'I would prefer not to';
        console.log(message);
        break;
    }
    
    case "not old enough": {
        const message = 'I like my if else better';
        console.log(message);
        break;
    }

    case 29: {
        const message = 'this is bullshit';
        console.log(message);
        break;4
    }
};