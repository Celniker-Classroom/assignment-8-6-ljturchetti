var counter = 0;
function myFunc(){
  counter = counter + 1;
  return counter;
}

function getRandomNum(max){
  max = parseInt(max);
  if (isNaN(max) || max < 1){
    return 0;
  }
  return Math.floor(Math.random() * max) + 1;
}

function myAdder(x, y){
  return parseFloat(x) + parseFloat(y);
}

function distance(x1, y1, x2, y2){
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx*dx + dy*dy);
}

function quadratic(a, b, c){
  let d = b*b - 4*a*c;

  if (d > 0){
    let r1 = (-b + Math.sqrt(d)) / (2*a);
    let r2 = (-b - Math.sqrt(d)) / (2*a);
    return [r1, r2];
  }
  else if (d === 0){
    return [-b/(2*a)];
  }
  else{
    let real = -b/(2*a);
    let imag = Math.sqrt(-d)/(2*a);
    return [real + "+" + imag + "i", real + "-" + imag + "i"];
  }
}

function $(id){ return document.getElementById(id); }
function setText(id, value){ $(id).textContent = value; }

function onMyFuncClick(){
  setText("outMyFunc", myFunc());
}

function onRandomClick(){
  setText("outRandom", getRandomNum($("maxRand").value));
}

function onAdderClick(){
  setText("outAdder", myAdder($("addX").value, $("addY").value));
}

function onDistanceClick(){
  setText("outDistance", distance(
    Number($("x1").value),
    Number($("y1").value),
    Number($("x2").value),
    Number($("y2").value)
  ));
}

function onQuadraticClick(){
  let roots = quadratic(
    Number($("qa").value),
    Number($("qb").value),
    Number($("qc").value)
  );
  setText("outQuadratic", roots);
}

window.onload = function(){
  $("btnMyFunc").onclick = onMyFuncClick;
  $("btnRandom").onclick = onRandomClick;
  $("btnAdder").onclick = onAdderClick;
  $("btnDistance").onclick = onDistanceClick;
  $("btnQuadratic").onclick = onQuadraticClick;
};