const buttonHomeHistory = document.getElementById('history-button-home');
const buttonVolumeHistory = document.getElementById('history-button-volume');

buttonHomeHistory.addEventListener('click', function() {
  pageHistory.style.display = 'none';
  pageMenu.style.display = 'flex';
});

buttonVolumeHistory.addEventListener('click', function() {
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