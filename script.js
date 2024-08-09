let Optioncontainer = document.getElementById("container");
let tag = document.getElementById("tag");
let score = document.getElementById("score");
let score1 = 0;
var randomColor = null;
// gentrate the random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate the random colors
function generateRandomColors() {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

function checkColorCode(el) {
  let clickColor = el.target.style.backgroundColor;
  if (clickColor === randomColor) {
    score1++;
    score.innerText = `Correct! Your score: ${score1}`;
    start();
  }
}
function start() {
  const colorArray = Array.from({
    length: 6,
  }).map(generateRandomColors);
  console.log(colorArray);
  
  // pick random item from array
  randomColor = colorArray[getRandomNumber(0, 5)];
  tag.innerText = randomColor;
  Optioncontainer.innerHTML = ""; // clear previous divs
  for (const color of colorArray) {
    const div = document.createElement("div");
    div.addEventListener("click", checkColorCode);
    div.style.backgroundColor = color;
    Optioncontainer.append(div);
  }
}

window.addEventListener("load", () => start());
