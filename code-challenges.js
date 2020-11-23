// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

const threeDivider = (value) => {
  if (value % 3 === 0){
    return `${value} is divisible by 3`
  } else {
    return `${value} is not divisible by 3`
  }
}

console.log(threeDivider(num1))
console.log(threeDivider(num2))
console.log(threeDivider(num3))



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//write a function that takes in an array
const firstLetter = (array) => {
  //define a local variable that will be the new array with all the uppercased words
  //map over the values (expected to be strings) in the original array
  let upperCasedArray = array.map(string => {
    // uppercase the first letter in each string and then add it on to the rest of the strng with the 1st letter sliced off
    return string.charAt(0).toUpperCase() + string.slice(1);
  })
  //return the new array
  return upperCasedArray
}

console.log(firstLetter(randomNouns))





// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const sortedArray = (array) => {
  //define a local variable to equal the new filtered Array
  //filter through the array to return only the strings
  let stringsOnly = array.filter(value => {
    return typeof value == "number"
  })
  return stringsOnly.sort(function(a, b){return a-b})
}

console.log(sortedArray(mixedDataArray))




// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

//create a function that takes in a string
const firstVowel = (string) => {
  //write a for loop that loops through the length of the string
  for(i=0; i<string.length; i++)
  //test if the value at each index of the string is a vowel
  if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u" || string[i] == "A" || string[i] == "E" || string[i] == "I" || string[i] == "O" || string[i] == "U"){
    //if the value is a vowel then return that index
    return i
  }
}

console.log(firstVowel(vowelTester1))
console.log(firstVowel(vowelTester2))


//   if string.charAt(0) === "a" && string.charAt(0) === "e" && string.charAt(0) === "i" && string.charAt(0) === "o" && string.charAt(0) === "u" && string.charAt(0) === "A" && string.charAt(0) === "E" && string.charAt(0) === "I" && string.charAt(0) === "O" && string.charAt(0) === "U"
// }






// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

//create a function that takes in a number, a mathematical operator, and another number as arguments
const calculator = (numb1, symbol, numb2) => {
  //
  if(symbol === "/" && numb2 === 0){
    return "Can't divide by 0!"
  } else if(symbol === "/"){
    return numb1 / numb2
  } else if(symbol === "*"){
    return numb1 * numb2
  }else if(symbol === "+"){
    return numb1 + numb2
  } else if(symbol === "-"){
    return numb1 - numb2
  } else if(symbol === "%"){
    return numb1 % numb2
  } else {
    return `${symbol} is not a valid mathematical operator`
  }
}

//I initially tried to just use the symbol as a mathematical argument but I couldn't get it to perform the function in the return, so I had to separate it to a bunch of if/else statements. I think there is probably a better or shorter way to do this. 


// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"

console.log(calculator(50, "#", 12))
//output = # is not a valid mathematical operator
