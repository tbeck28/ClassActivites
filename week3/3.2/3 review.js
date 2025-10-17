
let animals = ['dog', 'cat', 'tiger', 'lamb'];

for (let critter of animals) {
    console.log(`i am petting a ${critter}`)
}

// for of is for arrays

// for in is for objects

let pet = {
    name: 'el doggo',
    type: 'dog',
    color: 'black',
}

for (const att in pet) {
    console.log(`${att} equals ${pet[att]}`)
}

for (let x = 0; x < anmimals.length; x++) {
    console.log(`i am petting a ${animals[x]}`)
}

function speak() {
    console.log('bark bark')
}


// try to use arrow functions when a function is only going to be used once
let speak2 = (name) => {
    console.log(`${name} saysbark`)
} 
speak2('El Doggo')