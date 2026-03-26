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

function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const val = myAdder(x, y);
  setText('outAdder', val);
}

function onDistanceClick() {
  const x1 = Number($('x1').value);
  const y1 = Number($('y1').value);
  const x2 = Number($('x2').value);
  const y2 = Number($('y2').value);
  const val = distance(x1, y1, x2, y2);
  setText('outDistance', val);
}

function onQuadraticClick() {
  const a = Number($('qa').value);
  const b = Number($('qb').value);
  const c = Number($('qc').value);
  const roots = quadratic(a, b, c);
  setText('outQuadratic', JSON.stringify(roots));
}

window.addEventListener('DOMContentLoaded', () => {
  $('btnMyFunc').addEventListener('click', onMyFuncClick);
  $('btnRandom').addEventListener('click', onRandomClick);
  $('btnAdder').addEventListener('click', onAdderClick);
  $('btnDistance').addEventListener('click', onDistanceClick);
  $('btnQuadratic').addEventListener('click', onQuadraticClick);
});