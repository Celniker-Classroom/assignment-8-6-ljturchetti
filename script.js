let counter = 0;
function myFunc(){
  counter++;
  return counter;
}

function getRandomNum(max){
  let limit = parseInt(max);
  if (isNaN(limit) || limit < 1) {
    return 0;
  }
  return Math.floor(Math.random() * limit) + 1;
}

function myAdder(x, y){
  return Number(x) + Number(y);
}

function distance(x1, y1, x2, y2){
  let a = x2 - x1;
  let b = y2 - y1;
  return Math.sqrt(a * a + b * b);
}

function quadratic(a, b, c){
  let disc = b * b - 4 * a * c;

  if (disc > 0) {
    let r1 = (-b + Math.sqrt(disc)) / (2 * a);
    let r2 = (-b - Math.sqrt(disc)) / (2 * a);
    return [r1, r2];
  } else if (disc === 0) {
    return [-b / (2 * a)];
  } else {
    let real = -b / (2 * a);
    let imag = Math.sqrt(-disc) / (2 * a);
    return [real + "+" + imag + "i", real + "-" + imag + "i"];
  }
}