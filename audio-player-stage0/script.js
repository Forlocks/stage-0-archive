const audio = new Audio();

const buttonPlay = document.getElementById('button-play');
const buttonNext = document.getElementById('button-next');
const buttonBack = document.getElementById('button-back');
const buttonRepeat = document.getElementById('button-repeat');
const buttonVolume = document.getElementById('button-volume');
const bigCover = document.querySelector('body');
const smallCover = document.querySelector('.player-cover');
const songName = document.getElementById('song-name');
const songAuthor = document.getElementById('song-author');
const outputTime = document.getElementById('time');
const inputTime = document.getElementById('fader-time');
const inputVolume = document.getElementById('fader-volume');
const songLength = document.getElementById('song-length');

let isPlay = false;
let isRepeat = false;
let songNumber = 0;
let pauseTime = 0;

outputTime.value = '00:00';
audio.volume = 0.5;
progressVolume();

let songsArr = [];

songsArr[0] = {
  name: 'TIRED OF PROBLEMS',
  author: 'Nueki, Tolchonov, Glichery',
  song: 'assets/songs/song-1.mp3',
  cover: 'assets/images/img-1.mp3',
  time: '109'
};
songsArr[1] = {
  name: 'METAMORPHOSIS 2',
  author: 'Interworld',
  song: 'assets/songs/song-2.mp3',
  cover: 'assets/images/img-2.mp3',
  time: '137'
};
songsArr[2] = {
  name: 'I AM GOOD',
  author: 'David Guetta, Bebe Rexha',
  song: 'assets/songs/song-3.mp3',
  cover: 'assets/images/img-3.mp3',
  time: '175'
};

function playAudio() {
  isPlay = true;

  audio.src = songsArr[songNumber].song;
  audio.currentTime = pauseTime;
  audio.play();
}
function pauseAudio() {
  isPlay = false;

  pauseTime = audio.currentTime;
  audio.pause();
}
function changeDesign() {
  smallCover.setAttribute('src', `assets/images/img-${songNumber + 1}.jpg`);
  songName.firstChild.remove();
  songAuthor.firstChild.remove();
  songLength.firstChild.remove();
  songName.append(songsArr[songNumber].name);
  songAuthor.append(songsArr[songNumber].author);
  songLength.append( getTimeCode(songsArr[songNumber].time) );
  inputTime.setAttribute('max', songsArr[songNumber].time);
}
function getTimeCode(number) {
  let minute;
  let second;

  if (+number > 59) {
    minute = String(Math.trunc(+number / 60));

    if (+minute < 10) {
      minute = '0' + minute;
    }

    second = String(+number - +String(Math.trunc(+number / 60) * 60));

    if (+second < 10) {
      second = '0' + second;
    }
  } else {
    minute = '00';

    second = number;

    if (+number < 10) {
      second = '0' + number;
    }
  }

  return minute + ':' + second;
}
function getNumber(timeCode) {
  let minute;
  let second;

  minute = +timeCode.slice(0, 2);
  second = +timeCode.slice(3, 5);

  return +minute * 60 + +second;
}
function faderTimeUpdate(time) {
  outputTime.value = getTimeCode(time);
  audio.currentTime = time;
  pauseTime = time;
  progressTime();
}
function faderVolumeUpdate(volume) {
  audio.volume = volume / 100;
  progressVolume();

  if (audio.volume == 0) {
    buttonVolume.setAttribute('src', 'assets/icons/volume-none.png');
  } else {
    buttonVolume.setAttribute('src', 'assets/icons/volume.png');
  }
}
function progressTime() {
  inputTime.style.background = `linear-gradient(to right, #641288 ${getNumber(outputTime.value) * 100 / songsArr[songNumber].time}%, #ffffff ${getNumber(outputTime.value) * 100 / songsArr[songNumber].time}%)`;
}
function progressVolume() {
  inputVolume.style.background = `linear-gradient(to right, #641288 ${audio.volume * 100}%, #ffffff ${audio.volume * 100}%)`;
}

buttonPlay.addEventListener('click', function() {
  if (isPlay == false) {
    buttonPlay.setAttribute('src', 'assets/icons/pause.png');
    playAudio();
  } else {
    buttonPlay.setAttribute('src', 'assets/icons/play.png');
    pauseAudio();
  }
});
buttonNext.addEventListener('click', function() {
  buttonPlay.setAttribute('src', 'assets/icons/pause.png');

  songNumber = songNumber + 1;
  if (songNumber == songsArr.length) {
    songNumber = 0;
  }

  changeDesign();
  outputTime.value = '00:00';

  pauseTime = 0;
  playAudio();
});
buttonBack.addEventListener('click', function() {
  buttonPlay.setAttribute('src', 'assets/icons/pause.png');

  songNumber = songNumber - 1;
  if (songNumber == -1) {
    songNumber = songsArr.length - 1;
  }

  changeDesign();
  outputTime.value = '00:00';

  pauseTime = 0;
  playAudio();
});
buttonRepeat.addEventListener('click', function() {
  if (isRepeat == false) {
    isRepeat = true;
    buttonRepeat.setAttribute('src', 'assets/icons/repeat.png');
  } else {
    isRepeat = false;
    buttonRepeat.setAttribute('src', 'assets/icons/repeat-none.png');
  }
});
buttonVolume.addEventListener('click', function() {
  if (window.getComputedStyle(inputVolume).display == 'none') {
    inputVolume.style.display = 'flex';
  } else {
    inputVolume.style.display = 'none';
  }
});

audio.addEventListener('ended', function() {
    if (isRepeat == false) {
    buttonPlay.setAttribute('src', 'assets/icons/pause.png');

    songNumber = songNumber + 1;
    if (songNumber == songsArr.length) {
      songNumber = 0;
    }

    changeDesign();
    outputTime.value = '00:00'

    pauseTime = 0;
    playAudio();
  } else {
    buttonPlay.setAttribute('src', 'assets/icons/pause.png');

    outputTime.value = '00:00'

    pauseTime = 0;
    playAudio();
  }
})

setInterval(function() {
  if (isPlay == true) {
    outputTime.value = getTimeCode( getNumber(outputTime.value) + 1 );

    inputTime.value = getNumber(outputTime.value);
    progressTime();
  }
}, 1000);