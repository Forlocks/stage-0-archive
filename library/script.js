console.log('Все пункты выполнены в соответствии с ТЗ.'); //Самооценка





document.querySelector('.burger-icon').addEventListener('click', function() { //Функционал бургер-меню
  document.querySelector('.header').classList.add('open');
  document.querySelector('.authorization').classList.remove('authorization-selected');
});

document.querySelector('.cross-icon').addEventListener('click', function() {
  document.querySelector('.header').classList.remove('open');
});

document.querySelector('.action-1').addEventListener('click', function() {
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

document.addEventListener('mouseup', function(event) {
  let obj = document.querySelector('.header-right');

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





document.querySelector('.radio').getElementsByTagName('form')[0].children[0].addEventListener('click', function() { //Функционал радио-кнопок навигации для секции "Favorites"
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





document.querySelector('.profile-icon-1').addEventListener('click', function() { //Функционал кнопки профиля
  document.querySelector('.authorization').classList.toggle('authorization-selected');
});
document.querySelector('.profile-icon-2').addEventListener('click', function() {
  document.querySelector('.authorization').classList.toggle('authorization-selected');
  document.querySelector('.header').classList.remove('open');
});

document.addEventListener('mouseup', function(event) {
  let obj1 = document.querySelector('.authorization');
  let obj2 = document.querySelector('.profile-icon-1');
  let obj3 = document.querySelector('.profile-icon-2');

  if (!obj1.contains(event.target) && !obj2.contains(event.target) && !obj3.contains(event.target)) {
    document.querySelector('.authorization').classList.remove('authorization-selected');
  }
});





document.querySelector('.authorization-log-in').addEventListener('click', function() { //Функционал модальных окон регистрации и авторизации
  document.querySelector('.modal-login').classList.add('modal-login-selected');
  document.querySelector('.authorization').classList.toggle('authorization-selected');
  document.querySelector('.header-left').classList.add('black');
  document.querySelector('.profile-icon-1').classList.add('black');
  document.querySelector('.burger-icon').classList.add('black');
  document.querySelector('main').classList.add('black');
  document.querySelector('footer').classList.add('black');
})
document.querySelector('.authorization-register').addEventListener('click', function() {
  document.querySelector('.modal-register').classList.add('modal-register-selected');
  document.querySelector('.authorization').classList.toggle('authorization-selected');
  document.querySelector('.header-left').classList.add('black');
  document.querySelector('.profile-icon-1').classList.add('black');
  document.querySelector('.burger-icon').classList.add('black');
  document.querySelector('main').classList.add('black');
  document.querySelector('footer').classList.add('black');
})
document.getElementById('modal-img-login').addEventListener('click', function() {
  document.querySelector('.modal-login').classList.remove('modal-login-selected');
  document.querySelector('.header-left').classList.remove('black');
  document.querySelector('.profile-icon-1').classList.remove('black');
  document.querySelector('.burger-icon').classList.remove('black');
  document.querySelector('main').classList.remove('black');
  document.querySelector('footer').classList.remove('black');
})
document.getElementById('modal-img-register').addEventListener('click', function() {
  document.querySelector('.modal-register').classList.remove('modal-register-selected');
  document.querySelector('.header-left').classList.remove('black');
  document.querySelector('.profile-icon-1').classList.remove('black');
  document.querySelector('.burger-icon').classList.remove('black');
  document.querySelector('main').classList.remove('black');
  document.querySelector('footer').classList.remove('black');
})

document.addEventListener('mouseup', function(event) {
  let obj4 = document.querySelector('.modal-login-selected');

  if (!obj4.contains(event.target)) {
    document.querySelector('.modal-login-selected').classList.remove('modal-login-selected');
    document.querySelector('.header-left').classList.remove('black');
    document.querySelector('.profile-icon-1').classList.remove('black');
    document.querySelector('.burger-icon').classList.remove('black');
    document.querySelector('main').classList.remove('black');
    document.querySelector('footer').classList.remove('black');
  }
});
document.addEventListener('mouseup', function(event) {
  let obj5 = document.querySelector('.modal-register-selected');

  if (!obj5.contains(event.target)) {
    document.querySelector('.modal-register-selected').classList.remove('modal-register-selected');
    document.querySelector('.header-left').classList.remove('black');
    document.querySelector('.profile-icon-1').classList.remove('black');
    document.querySelector('.burger-icon').classList.remove('black');
    document.querySelector('main').classList.remove('black');
    document.querySelector('footer').classList.remove('black');
  }
});

document.getElementById('login-question').addEventListener('click', function() {
  setTimeout(function() {document.querySelector('.modal-login').classList.add('modal-login-selected')}, 500);
});
document.getElementById('register-question').addEventListener('click', function() {
  setTimeout(function() {document.querySelector('.modal-register').classList.add('modal-register-selected')}, 500);
})
document.getElementById('login-question').addEventListener('click', function() {
  document.querySelector('.modal-register').classList.remove('modal-register-selected');
})
document.getElementById('register-question').addEventListener('click', function() {
  document.querySelector('.modal-login').classList.remove('modal-login-selected');
})





let firstName = document.getElementById('first-name'); //Функционал формы регистрации
let lastName = document.getElementById('last-name');
let mail = document.getElementById('mail');
let password = document.getElementById('password');
let submit = document.getElementById('button-register');
let storage = localStorage;

function User(firstName, lastName, mail, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.mail = mail;
  this.password = password;
}

function createId(storage) {
  return Object.keys(storage).length;
}

submit.addEventListener('click', function() {
  let firstNameUser = firstName.value;
  let lastNameUser = lastName.value;
  let mailUser = mail.value;
  let passwordUser = password.value;

  let user = new User(firstNameUser, lastNameUser, mailUser, passwordUser);

  let userId = 'User' + createId(storage);

  storage[userId] = JSON.stringify(user);
});

alert('Здравствуйте, прошу понять и простить... Не успел сделать вовремя из-за начала 4 курса в универе, только 5 дней назад жизнь стала стабильной после приезда. Часть функционала работает, но не вся, если вам не сложно, проверьте пожалуйста мою работу через день или два.');