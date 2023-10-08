const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

let background = new Image();
background.src = 'assets/images/game-background.jpg';
let appleGreen = new Image();
appleGreen.src = 'assets/images/apple-green.png';
let appleYellow = new Image();
appleYellow.src = 'assets/images/apple-yellow.png';
let appleRed = new Image();
appleRed.src = 'assets/images/apple-red.png';

let appleCell = [
  {item: appleRed, x: 160, y: 75},
  {item: appleRed, x: 295, y: 45},
  {item: appleRed, x: 395, y: 75},
  {item: appleRed, x: 480, y: 140},
  {item: appleRed, x: 570, y: 120},
  {item: appleRed, x: 75, y: 140},
  {item: appleRed, x: 75, y: 140},
  {item: appleRed, x: 260, y: 125},
  {item: appleRed, x: 355, y: 145},
  {item: appleRed, x: 155, y: 200},
  {item: appleRed, x: 300, y: 240},
  {item: appleRed, x: 405, y: 265},
  {item: appleRed, x: 580, y: 270},
  {item: appleRed, x: 80, y: 300},
  {item: appleRed, x: 550, y: 370},
  {item: appleRed, x: 170, y: 380}
]

background.onload = function() {
  game();
};

function game() { // Игровой цикл
  render();
  update();
  requestAnimFrame(game);
}
function update() { // Покадровое обновление
  for (let i = 0; i < appleCell.length; i++) {
    if (appleCell[i].y <= 615) {
      appleCell[i].y += 5;
    }
  }
}
function render() { // Отрисовка
  context.drawImage(background, 0, 0, 670, 670);

  for (let i = 0; i < appleCell.length; i++) {
    context.drawImage(appleCell[i].item, appleCell[i].x, appleCell[i].y, 44, 50);
  }
}
function spawn() {
  for (let i = 0; i < appleCell.length; i++) {
    let chance = Math.random();

    if (chance < 0.05) {
      appleCell[i].item = appleYellow;
    } else if (chance < 0.15) {
      appleCell[i].item = appleGreen;
    } else if (chance <= 1) {
      appleCell[i].item = appleRed;
    }
  }
}

spawn();

















































let requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequesAnimationFrame ||
         function(callback) {
           window.setTimeout(callback, 1000 / 20);
         };
})();

















































