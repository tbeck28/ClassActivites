const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firsta = arr.indexOf('a')
let firstb = arr.indexOf('b')
let firstc = arr.indexOf('c')

// find the last index of "a", "b", and "c"
let lasta = arr.lastIndexOf('a')
let lastb = arr.lastIndexOf('b')
let lastc = arr.lastIndexOf('c')

// if the first index and last index of "a" is not the same, remove the last instance
let firstIndex = firsta;
let lastIndex = lasta;

while (firstIndex != lastIndex){
  arr.splice(lastIndex, 1);
  lastIndex = arr.lastIndexOf('a');
}
// repeat until there is just one "a"

function cleanse (array, duplicate) {
  let firstIndex = array.indexOf(duplicate)
  let lastIndex = array.lastIndexOf(duplicate)

  while (firstIndex != lastIndex){
  arr.splice(lastIndex, 1);
  lastIndex = arr.lastIndexOf(duplicate);
}
}


cleanse(arr,'a')
cleanse(arr,'b')
cleanse(arr,'c')
console.log(arr)
