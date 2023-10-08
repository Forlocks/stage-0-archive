const pageMenu = document.querySelector('.page-menu');
const pageGame = document.querySelector('.page-game');
const pageRating = document.querySelector('.page-rating');
const buttonPlay = document.getElementById('menu-button-play');
const buttonRating = document.getElementById('menu-button-rating');
const buttonVolume = document.getElementById('menu-button-volume');

let volume = true;

buttonPlay.addEventListener('click', function() {
  pageMenu.style.display = 'none';
  pageGame.style.display = 'flex';
});

buttonRating.addEventListener('click', function() {
  pageMenu.style.display = 'none';
  pageRating.style.display = 'flex';
});

buttonVolume.addEventListener('click', function() {
  if (volume == true) {
    volume = false;
    buttonVolume.setAttribute('src', 'assets/icons/volume-none.png');
  } else {
    volume = true;
    buttonVolume.setAttribute('src', 'assets/icons/volume.png');
  }
});