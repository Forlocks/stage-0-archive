const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const restart = document.getElementById('game-button-restart');
const buttonHomeGame = document.getElementById('game-button-home');
const buttonVolumeGame = document.getElementById('game-button-volume');
const buttonStatusGame = document.getElementById('game-button-status');

buttonHomeGame.addEventListener('click', function() {
  reloadGame();
  isPlay = false;
  pageGame.style.display = 'none';
  pageMenu.style.display = 'flex';
});
buttonVolumeGame.addEventListener('click', function() {
  if (volume == true) {
    volume = false;
    buttonVolumeMenu.setAttribute('src', 'assets/icons/volume-none.png');
    buttonVolumeGame.setAttribute('src', 'assets/icons/volume-none.png');
    buttonVolumeRules.setAttribute('src', 'assets/icons/volume-none.png');
    buttonVolumeHistory.setAttribute('src', 'assets/icons/volume-none.png');
    mainAudio.volume = 0;
    statusAudio.volume = 0;
    appleRedAudio.volume = 0;
    appleYellowAudio.volume = 0;
    appleGreenAudio.volume = 0;
  } else {
    volume = true;
    buttonVolumeMenu.setAttribute('src', 'assets/icons/volume.png');
    buttonVolumeGame.setAttribute('src', 'assets/icons/volume.png');
    buttonVolumeRules.setAttribute('src', 'assets/icons/volume.png');
    buttonVolumeHistory.setAttribute('src', 'assets/icons/volume.png');
    mainAudio.volume = 0.1;
    statusAudio.volume = 0.3;
    appleRedAudio.volume = 0.2;
    appleYellowAudio.volume = 0.2;
    appleGreenAudio.volume = 0.2;
  }
});
buttonStatusGame.addEventListener('click', function() {
  if (lifeCount > 0) {
    if (isPlay == true) {
      isPlay = false;
      buttonStatusGame.setAttribute('src', 'assets/images/play.png');
    } else {
      isPlay = true;
      buttonStatusGame.setAttribute('src', 'assets/images/pause.png');
    }
  }
});
restart.addEventListener('click', function() {
  reloadGame();
});



const life = document.querySelector('.right-panel');
const heartsArr = document.querySelectorAll('.heart');
const score = document.getElementById('score');
const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');



let lifeCount = 3;
let scoreCount = 0;



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
let potX = 295;
let potLeft = false;
let potRight = false;



pot.onload = function() { // Включение игры после загрузки спрайта котла
  game();
};



window.addEventListener('blur', function() { // Пауза при неактивной вкладке
  if (window.getComputedStyle(pageGame).display == 'flex' && lifeCount > 0) {
    isPlay = false;
    buttonStatusGame.setAttribute('src', 'assets/images/play.png');
  }
});
window.addEventListener('focus', function() { // Снятие с паузы при активной вкладке
  if (window.getComputedStyle(pageGame).display == 'flex' && lifeCount > 0) {
    isPlay = true;
    buttonStatusGame.setAttribute('src', 'assets/images/pause.png');
  }
});



document.addEventListener('keydown', function(event) { // Передвижение котла клавишами A и D
  if (event.code == 'KeyA') {
    potLeft = true;
  }
  if (event.code == 'KeyD') {
    potRight = true;
  }
});
document.addEventListener('keyup', function(event) {
  if (event.code == 'KeyA') {
    potLeft = false;
  }
  if (event.code == 'KeyD') {
    potRight = false;
  }
});


function animationFrames() {
  setTimeout(function() {
    requestAnimationFrame(game);
  }, 10);
};
function game() { // Игровой цикл
  if (isPlay == true) {
    render();
    update();
  }
  animationFrames();
}
function update() { // Покадровое обновление координат объектов
  for (let i = 0; i < appleCell.length; i++) {
    if (appleCell[i].status === 2) {
      if (appleCell[i].y <= 614 || appleCell[i].y <= 616 || appleCell[i].y <= 618) {
        appleCell[i].y += appleCell[i].dy;
      } else {
        appleCell[i].status = 0;
        appleCell[i].y = startY[i];
        if (appleCell[i].item == appleGreen) {
          lifeCount -= 1;
          heartsArr[lifeCount].setAttribute('src', 'assets/images/heart-black.png');
          if (appleGreenAudio.currentTime == 0) {
            appleGreenAudio.play();
          } else {
            appleGreenAudio.currentTime = 0;
            appleGreenAudio.play();
          }
          if (lifeCount == 0) {
            isPlay = false;
            for (let i = 0; i < localStorage.length; i++) {
              if (localStorage.key(i).slice(0, 6) != 'potion') {
                localStorage.removeItem(localStorage.key(i));
              }
            }
            for (let i = 0; i < localStorage.length; i++) {
              if (localStorage.key(i).slice(0, 6) != 'potion') {
                localStorage.removeItem(localStorage.key(i));
              }
            }
            localStorage.setItem(`potion${localStorage.length + 1}`, JSON.stringify({result: (scoreCount > 99) ? 'win' : 'lose', score: scoreCount}));
            getHistory();
            (scoreCount > 99) ? win.style.display = 'flex' : lose.style.display = 'flex';
            restart.style.display = 'flex';
            statusAudio.play();
          }
        }
      }

      if ((appleCell[i].y == 550 || appleCell[i].y == 552 || appleCell[i].y == 554) && appleCell[i].x + 22 >= potX && appleCell[i].x + 22 <= potX + 80) {
        appleCell[i].status = 0;
        appleCell[i].y = startY[i];
        if (appleCell[i].item == appleRed) {
          scoreCount += 1;
          score.firstChild.remove();
          score.append(scoreCount);
          if (appleRedAudio.currentTime == 0) {
            appleRedAudio.play();
          } else {
            appleRedAudio.currentTime = 0;
            appleRedAudio.play();
          }
        } else if (appleCell[i].item == appleYellow) {
          scoreCount += 15;
          score.firstChild.remove();
          score.append(scoreCount);
          if (appleYellowAudio.currentTime == 0) {
            appleYellowAudio.play();
          } else {
            appleYellowAudio.currentTime = 0;
            appleYellowAudio.play();
          }
        } else if (appleCell[i].item == appleGreen) {
          if (appleRedAudio.currentTime == 0) {
            appleRedAudio.play();
          } else {
            appleRedAudio.currentTime = 0;
            appleRedAudio.play();
          }
        }
      }
    }
  }

  if (potLeft == true && potX - 7 >= 0) {
    potX -= 7;
  }

  if (potRight == true && potX + 7 <= 590) {
    potX += 7;
  }
}
function render() { // Отрисовка изображений объектов
  context.drawImage(background, 0, 0, 670, 670);
  context.drawImage(pot, potSprite, 0, 80, 86, potX, 584, 80, 86);

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
  } else if (chance < 0.25) {
    appleCell[number].item = appleGreen;
    appleCell[number].dy = 4;
  } else if (chance <= 1) {
    appleCell[number].item = appleRed;
    appleCell[number].dy = 2;
  }
}
function reloadGame() {
  isPlay = true;

  win.style.display = 'none';
  lose.style.display = 'none';
  restart.style.display = 'none';


  for (let i = 0; i < appleCell.length; i++){
    appleCell[i].item = appleRed;
    appleCell[i].status = 0;
    appleCell[i].y = startY[i];
    appleCell[i].dy = 2;
  }

  potSprite = 0;
  potX = 295;

  lifeCount = 3;
  scoreCount = 0;

  heartsArr[0].setAttribute('src', 'assets/images/heart-red.png');
  heartsArr[1].setAttribute('src', 'assets/images/heart-red.png');
  heartsArr[2].setAttribute('src', 'assets/images/heart-red.png');
  score.firstChild.remove();
  score.append(scoreCount);
  buttonStatusGame.setAttribute('src', 'assets/images/pause.png');

  for (let i = 0; i < 10; i++) { // Стартовый спавн 10 яблок
    spawn();
  }
}



for (let i = 0; i < 10; i++) { // Стартовый спавн 10 яблок
  spawn();
}

setInterval(function() { // Падение яблока каждые 2 секунды
  if (isPlay == true) {
    let number = getRandomNumber(0, 14);

    while (appleCell[number].status !== 1) {
      number += 1;
      if (number == appleCell.length) {
        number = 0;
      }
    }

    appleCell[number].status = 2;
  }
}, 2000);

setInterval(function() { // Спавн яблока в свободной ячейке каждые 2 секунды
  if (isPlay == true) {
    spawn();
  }
}, 2000);


setInterval(function() { // Анимация котла
  if (isPlay == true) {
    if ((potSprite + 80) < 960) {
      potSprite += 80;
    } else {
      potSprite = 0;
    }
  }
}, 50);