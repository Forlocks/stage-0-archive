console.log('Все пункты выполнены в соответствии с ТЗ.'); //Самооценка





document.querySelector('.burger-icon').addEventListener('click', function() { //Открытие бургер-меню при клике по иконке трёх полосок
  document.querySelector('.header').classList.add('open');
});

document.querySelector('.cross-icon').addEventListener('click', function() { //Закрытие бургер-меню при клике по иконке крестика
  document.querySelector('.header').classList.remove('open');
});

document.querySelector('.action-1').addEventListener('click', function() { //Закрытие бургер-меню при клике по ссылкам навигации
  document.querySelector('.header').classList.remove('open');
});
document.querySelector('.action-2').addEventListener('click', function() {
  document.querySelector('.header').classList.remove('open');
});
document.querySelector('.action-3').addEventListener('click', function() {
  document.querySelector('.header').classList.remove('open');
});
document.querySelector('.action-4').addEventListener('click', function() {
  document.querySelector('.header').classList.remove('open');
});
document.querySelector('.action-5').addEventListener('click', function() {
  document.querySelector('.header').classList.remove('open');
});

document.addEventListener("mouseup", function(event) { //Закрытие бургер-меню при клике вне его области
  var obj = document.querySelector(".header-right");
  if (!obj.contains(event.target)) {
    document.querySelector('.header').classList.remove('open');
  }
});





let offsetLeft = 0;
let widthWindow = window.innerWidth;
const sliderLine = document.querySelector('.about-slider-line');

window.addEventListener('resize', function() { //Контроль работы слайдера при изменении разрешения без обновления страницы
  offsetLeft = 0;

  sliderLine.style.left = offsetLeft + '%';

  document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
  document.getElementById('about-button-1').querySelector('.custom-button').classList.add('custom-button-selected');
  widthWindow = window.innerWidth;
});

document.getElementById('about-button-1').addEventListener('click', function() { //Функционал кнопок пагинации слайдера
  if (widthWindow > 1250) {
    offsetLeft = 0;
    sliderLine.style.left = offsetLeft + '%';
  } else {
    offsetLeft = 0;
    sliderLine.style.left = offsetLeft + 'px';
  }
  document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
  this.querySelector('.custom-button').classList.add('custom-button-selected');
});
document.getElementById('about-button-2').addEventListener('click', function() {
  if (widthWindow > 1250) {
    offsetLeft = -33.875;
    sliderLine.style.left = offsetLeft + '%';
  } else {
    offsetLeft = -475;
    sliderLine.style.left = offsetLeft + 'px';
  }
  document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
  this.querySelector('.custom-button').classList.add('custom-button-selected');
});
document.getElementById('about-button-3').addEventListener('click', function() {
  if (widthWindow > 1250) {
    offsetLeft = -67.750;
    sliderLine.style.left = offsetLeft + '%';
  } else {
    offsetLeft = -950;
    sliderLine.style.left = offsetLeft + 'px';
  }
  document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
  this.querySelector('.custom-button').classList.add('custom-button-selected');
});
document.getElementById('about-button-4').addEventListener('click', function() {
  offsetLeft = -1425;
  sliderLine.style.left = offsetLeft + 'px';
  document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
  this.querySelector('.custom-button').classList.add('custom-button-selected');
});
document.getElementById('about-button-5').addEventListener('click', function() {
  offsetLeft = -1900;
  sliderLine.style.left = offsetLeft + 'px';
  document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
  this.querySelector('.custom-button').classList.add('custom-button-selected');
});

document.getElementById('arrow-left').addEventListener('click', function() { //Функционал стрелки слайдера "Влево"
  offsetLeft = offsetLeft + 475;

  switch (offsetLeft) {
    case 0:
      sliderLine.style.left = offsetLeft + 'px';
      document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
      document.getElementById('about-button-1').querySelector('.custom-button').classList.add('custom-button-selected');
      break;
    case -475:
      sliderLine.style.left = offsetLeft + 'px';
      document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
      document.getElementById('about-button-2').querySelector('.custom-button').classList.add('custom-button-selected');
      break;
    case -950:
      sliderLine.style.left = offsetLeft + 'px';
      document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
      document.getElementById('about-button-3').querySelector('.custom-button').classList.add('custom-button-selected');
      break;
    case -1425:
      sliderLine.style.left = offsetLeft + 'px';
      document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
      document.getElementById('about-button-4').querySelector('.custom-button').classList.add('custom-button-selected');
      break;
    default:
      offsetLeft = offsetLeft - 475;
  }
});

document.getElementById('arrow-right').addEventListener('click', function() { //Функционал стрелки слайдера "Вправо"
  offsetLeft = offsetLeft - 475;

  switch (offsetLeft) {
    case -475:
      sliderLine.style.left = offsetLeft + 'px';
      document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
      document.getElementById('about-button-2').querySelector('.custom-button').classList.add('custom-button-selected');
      break;
    case -950:
      sliderLine.style.left = offsetLeft + 'px';
      document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
      document.getElementById('about-button-3').querySelector('.custom-button').classList.add('custom-button-selected');
      break;
    case -1425:
      sliderLine.style.left = offsetLeft + 'px';
      document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
      document.getElementById('about-button-4').querySelector('.custom-button').classList.add('custom-button-selected');
      break;
    case -1900:
      sliderLine.style.left = offsetLeft + 'px';
      document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
      document.getElementById('about-button-5').querySelector('.custom-button').classList.add('custom-button-selected');
      break;
    default:
      offsetLeft = offsetLeft + 475;
  }
});





document.querySelector('.radio').getElementsByTag('form')[0].children[0].addEventListener('click', function() {
  if (document.querySelector('.favorites-winter').classList.contains('season-selected-two')) {
    return;
  } else {
    document.querySelector('.radio').getElementsByTagName('form')[0].children[0].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[1].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[2].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[3].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[0].setAttribute('id', 'active');
    document.querySelector('.season-selected-two').classList.add('season-selected-one');
    document.querySelector('.season-selected-two').classList.remove('season-selected-two');
    setTimeout(function() {
      document.querySelector('.season-selected-one').classList.remove('season-selected-one');
      if (document.querySelector('.radio').getElementsByTagName('form')[0].children[0].hasAttribute('id')) {
        document.querySelector('.favorites-winter').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[1].hasAttribute('id')) {
        document.querySelector('.favorites-spring').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[2].hasAttribute('id')){
        document.querySelector('.favorites-summer').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[3].hasAttribute('id')){
        document.querySelector('.favorites-autumn').classList.add('season-selected-two');
      }
    }, 500)
  }
});
document.querySelector('.radio').getElementsByTagName('form')[0].children[1].addEventListener('click', function() {
  if (document.querySelector('.favorites-spring').classList.contains('season-selected-two')) {
    return;
  } else {
    document.querySelector('.radio').getElementsByTagName('form')[0].children[0].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[1].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[2].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[3].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[1].setAttribute('id', 'active');
    document.querySelector('.season-selected-two').classList.add('season-selected-one');
    document.querySelector('.season-selected-two').classList.remove('season-selected-two');
    setTimeout(function() {
      document.querySelector('.season-selected-one').classList.remove('season-selected-one');
      if (document.querySelector('.radio').getElementsByTagName('form')[0].children[0].hasAttribute('id')) {
        document.querySelector('.favorites-winter').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[1].hasAttribute('id')) {
        document.querySelector('.favorites-spring').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[2].hasAttribute('id')){
        document.querySelector('.favorites-summer').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[3].hasAttribute('id')){
        document.querySelector('.favorites-autumn').classList.add('season-selected-two');
      }
    }, 500)
  }
});
document.querySelector('.radio').getElementsByTagName('form')[0].children[2].addEventListener('click', function() {
  if (document.querySelector('.favorites-summer').classList.contains('season-selected-two')) {
    return;
  } else {
    document.querySelector('.radio').getElementsByTagName('form')[0].children[0].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[1].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[2].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[3].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[2].setAttribute('id', 'active');
    document.querySelector('.season-selected-two').classList.add('season-selected-one');
    document.querySelector('.season-selected-two').classList.remove('season-selected-two');
    setTimeout(function() {
      document.querySelector('.season-selected-one').classList.remove('season-selected-one');
      if (document.querySelector('.radio').getElementsByTagName('form')[0].children[0].hasAttribute('id')) {
        document.querySelector('.favorites-winter').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[1].hasAttribute('id')) {
        document.querySelector('.favorites-spring').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[2].hasAttribute('id')){
        document.querySelector('.favorites-summer').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[3].chasAttribute('id')){
        document.querySelector('.favorites-autumn').classList.add('season-selected-two');
      }
    }, 500)
  }
});
document.querySelector('.radio').getElementsByTagName('form')[0].children[3].addEventListener('click', function() {
  if (document.querySelector('.favorites-autumn').classList.contains('season-selected-two')) {
    return;
  } else {
    document.querySelector('.radio').getElementsByTagName('form')[0].children[0].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[1].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[2].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[3].removeAttribute('id');
    document.querySelector('.radio').getElementsByTagName('form')[0].children[3].setAttribute('id', 'active');
    document.querySelector('.season-selected-two').classList.add('season-selected-one');
    document.querySelector('.season-selected-two').classList.remove('season-selected-two');
    setTimeout(function() {
      document.querySelector('.season-selected-one').classList.remove('season-selected-one');
      if (document.querySelector('.radio').getElementsByTagName('form')[0].children[0].hasAttribute('id')) {
        document.querySelector('.favorites-winter').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[1].hasAttribute('id')) {
        document.querySelector('.favorites-spring').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[2].hasAttribute('id')){
        document.querySelector('.favorites-summer').classList.add('season-selected-two');
      } else if (document.querySelector('.radio').getElementsByTagName('form')[0].children[3].hasAttribute('id')){
        document.querySelector('.favorites-autumn').classList.add('season-selected-two');
      }
    }, 500)
  }
});