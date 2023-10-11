const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

let isPlay = true; // Стартовое состояние игры


let background = new Image();
background.src = 'assets/images/game-background.jpg';
let appleGreen = new Image();
appleGreen.src = 'assets/images/apple-green.png';
let appleYellow = new Image();
appleYellow.src = 'assets/images/apple-yellow.png';
let appleRed = new Image();
appleRed.src = 'assets/images/apple-red.png';
let pot = new Image();
pot.src = 'assets/images/potSprite.png';


let appleCell = [
  {item: appleRed, status: 0, x: 160, y: 76, dy: 2},
  {item: appleRed, status: 0, x: 295, y: 46, dy: 2},
  {item: appleRed, status: 0, x: 395, y: 76, dy: 2},
  {item: appleRed, status: 0, x: 480, y: 140, dy: 2},
  {item: appleRed, status: 0, x: 570, y: 120, dy: 2},
  {item: appleRed, status: 0, x: 75, y: 140, dy: 2},
  {item: appleRed, status: 0, x: 260, y: 126, dy: 2},
  {item: appleRed, status: 0, x: 355, y: 146, dy: 2},
  {item: appleRed, status: 0, x: 155, y: 200, dy: 2},
  {item: appleRed, status: 0, x: 300, y: 240, dy: 2},
  {item: appleRed, status: 0, x: 405, y: 266, dy: 2},
  {item: appleRed, status: 0, x: 580, y: 270, dy: 2},
  {item: appleRed, status: 0, x: 80, y: 300, dy: 2},
  {item: appleRed, status: 0, x: 550, y: 370, dy: 2},
  {item: appleRed, status: 0, x: 170, y: 380, dy: 2}
];
let startY = [76, 46, 76, 140, 120, 140, 126, 146, 200, 240, 266, 270, 300, 370, 380];
let potSprite = 0;


pot.onload = function() { // Включение игры после загрузки спрайта котла
  game();
};

document.addEventListener('click', function() { // Включение и выключение игры при клике на странице
  if (isPlay == true) {
    isPlay = false;
  } else {
    isPlay = true;
    game();
  }
})

function game() { // Игровой цикл
  if (isPlay == false) {
    return;
  } else {
    render();
    update();
    requestAnimationFrame(game);
  }
}
function update() { // Покадровое обновление координат объектов
  for (let i = 0; i < appleCell.length; i++) {
    if (appleCell[i].status === 2) {
      if (appleCell[i].y <= 614 || appleCell[i].y <= 616 || appleCell[i].y <= 618) {
        appleCell[i].y += appleCell[i].dy;
      } else {
        appleCell[i].status = 0;
        appleCell[i].y = startY[i];
      }
    }
  }
}
function render() { // Отрисовка изображений объектов
  context.drawImage(background, 0, 0, 670, 670);
  context.drawImage(pot, potSprite, 0, 80, 86, 295, 584, 80, 86);

  for (let i = 0; i < appleCell.length; i++) {
    if (appleCell[i].status === 1 || appleCell[i].status === 2) {
      context.drawImage(appleCell[i].item, appleCell[i].x, appleCell[i].y, 44, 50);
    }
  }
}



function getRandomNumber(min, max) { // Получение рандомного числа в диапазоне
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function spawn() { // Спавн яблока в псевдо-рандомной ячейке
  let number = getRandomNumber(0, 14);
  let chance = Math.random();

  while (appleCell[number].status !== 0) {
    number += 1;
    if (number == appleCell.length) {
      number = 0;
    }
  }

  appleCell[number].status = 1;

  if (chance < 0.05) {
    appleCell[number].item = appleYellow;
    appleCell[number].dy = 6;
  } else if (chance < 0.3) {
    appleCell[number].item = appleGreen;
    appleCell[number].dy = 4;
  } else if (chance <= 1) {
    appleCell[number].item = appleRed;
    appleCell[number].dy = 2;
  }
}




for (let i = 0; i < 10; i++) { // Стартовый спавн 5 яблок
  spawn();
}

let firstApple = getRandomNumber(0, 14); // Мгновенное падение 1 яблока
while (appleCell[firstApple].status !== 1) {
  firstApple += 1;
  if (firstApple == appleCell.length) {
    firstApple = 0;
  }
}
appleCell[firstApple].status = 2;

setInterval(function() { // Падение яблока каждые 2 секунды
  let number = getRandomNumber(0, 14);

  while (appleCell[number].status !== 1) {
    number += 1;
    if (number == appleCell.length) {
      number = 0;
    }
  }

  appleCell[number].status = 2;
}, 2000);

setInterval(function() { // Спавн яблока в свободной ячейке каждые 2 секунды
  spawn();
}, 2000);


setInterval(function() { // Спавн яблока в свободной ячейке каждые 2 секунды
  if ((potSprite + 80) < 960) {
    potSprite += 80;
  } else {
    potSprite = 0;
  }
}, 75);


