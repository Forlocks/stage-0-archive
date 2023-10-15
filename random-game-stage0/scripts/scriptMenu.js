const mainAudio = new Audio();
const statusAudio = new Audio();
const appleRedAudio = new Audio();
const appleYellowAudio = new Audio();
const appleGreenAudio = new Audio();

mainAudio.volume = 0.1;
statusAudio.volume = 0.3;
appleRedAudio.volume = 0.2;
appleYellowAudio.volume = 0.2;
appleGreenAudio.volume = 0.2;

mainAudio.src = 'assets/sounds/mainAudio.mp3';
statusAudio.src = 'assets/sounds/statusAudio.mp3';
appleRedAudio.src = 'assets/sounds/appleRedAudio.mp3';
appleYellowAudio.src = 'assets/sounds/appleYellowAudio.mp3';
appleGreenAudio.src = 'assets/sounds/appleGreenAudio.mp3';

document.addEventListener('click', function() {
  mainAudio.play();
});
mainAudio.addEventListener('ended', function() {
  mainAudio.play();
});


const pageMenu = document.querySelector('.page-menu');
const pageGame = document.querySelector('.page-game');
const pageRules = document.querySelector('.page-rules');
const pageHistory = document.querySelector('.page-history');
const buttonPlay = document.getElementById('menu-button-play');
const buttonRules = document.getElementById('menu-button-rules');
const buttonHistory = document.getElementById('menu-button-history');
const buttonVolumeMenu = document.getElementById('menu-button-volume');
const resultsArr = document.querySelectorAll('.results');
const scoresArr = document.querySelectorAll('.scores');

let isPlay = false; // Стартовое состояние игры
let volume = true;

buttonPlay.addEventListener('click', function() {
  isPlay = true;
  pageMenu.style.display = 'none';
  pageGame.style.display = 'flex';
});

buttonRules.addEventListener('click', function() {
  pageMenu.style.display = 'none';
  pageRules.style.display = 'flex';
});

buttonHistory.addEventListener('click', function() {
  pageMenu.style.display = 'none';
  pageHistory.style.display = 'flex';
});

buttonVolumeMenu.addEventListener('click', function() {
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

function getHistory() {
  for (let i = 0; i < localStorage.length && i < 10; i++) {
    resultsArr[i].innerHTML = '';
    scoresArr[i].innerHTML = '';

    resultsArr[i].append(JSON.parse(localStorage.getItem(`game${localStorage.length - i}`)).result);
    scoresArr[i].append(JSON.parse(localStorage.getItem(`game${localStorage.length - i}`)).score);

    if (JSON.parse(localStorage.getItem(`game${localStorage.length - i}`)).result == 'lose') {
      resultsArr[i].style.color = '#ff0000';
      scoresArr[i].style.color = '#ff0000';
    } else {
      resultsArr[i].style.color = '#00ff00';
      scoresArr[i].style.color = '#00ff00';
    }
  }
}

getHistory();