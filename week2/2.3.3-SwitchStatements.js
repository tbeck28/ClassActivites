let ages = 25;

switch (ages) {
    case 25: {
        let message = 'I would prefer not to';
        console.log(message);
        break;
    }
    
    case 27: {
        let message = 'I like my if else better';
        console.log(message);
        break;
    }

    case 29: {
        let message = 'this is bullshit';
        console.log(message);
        break;4
    }
};

// Correct these statements so they make sense
// Sunday = 0, Monday = 1, ... Saturday = 6
// re-assign day to any number from 0 - 7 to test the result
let day = 1;
let dayName = `Today`;

// Complete this switch case statement to produce the correct results please.

switch (day) {

  case 4:
    dayName = 'Today is Wednesday';
    console.log(dayName)
    break;
}
  case 1:
    dayName = 'Today is Monday';
    console.log(dayName);
    break;

  // Note the code blocks in the next 2 cases: Why?
  case 4: {
    const message = `Today is **{what day goes here}**`;
    console.log(message);
    break;
  }
  case **{`Which case goes here`}** : {
    const message = `Tomorrow it's the weekend!`;
    console.log(message);
    break;
  }
  default:
    console.log(**{`Write a sassy default message here`}**);
    break;
  case **{`Which case goes here`}** :
    console.log(`Today is Tuesday`);
    break;
  // write a case here for the weekend (how many days in the weekend?)
  case :
    alert(`It's the Weekend !!`);

}
if (dayName !== 'Today'){
console.log(dayName);
}

/*
if you do: 
case x
case x

it will do both cases
*/