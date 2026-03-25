//Notes:

let counter = 0;
//my counter function
function myFunc(){
  counter ++;
  return counter;
}

console.log(myFunc());
console.log(myFunc());
console.log(myFunc());
console.log(myFunc());

// ----- Functions to implement -----

// 1) myFunc(): persistent counter
// Already handled by your 'counter' and 'myFunc' above!

// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max) {
  let limit = parseInt(max);
  // Check if it's not a number or less than 1
  if (isNaN(limit) || limit < 1) {
    return 0;
  }
  // Standard 1 to max formula
  return Math.floor(Math.random() * limit) + 1;
}

// 3) myAdder(x, y): numeric sum
function myAdder(x, y) {
  // Convert strings to numbers so "3"+"5" doesn't become "35"
  return parseFloat(x) + parseFloat(y);
}

// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2) {
  // TODO: Use Math.sqrt() and the distance formula
}

// 5) quadratic(a, b, c)
function quadratic(a, b, c) {
  // TODO: still have to calculate the discrimanant and return array