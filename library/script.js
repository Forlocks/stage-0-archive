console.log('Я старался успеть как мог, но 1 сентября в универе спутало планы'); //Самооценка





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





let offsetLeft = 0; //Функционал слайдера
let widthWindow = window.innerWidth;
const sliderLine = document.querySelector('.about-slider-line');

window.addEventListener('resize', function() {
  offsetLeft = 0;

  sliderLine.style.left = offsetLeft + '%';

  document.querySelector('.custom-button-selected').classList.remove('custom-button-selected');
  document.getElementById('about-button-1').querySelector('.custom-button').classList.add('custom-button-selected');
  widthWindow = window.innerWidth;
});

document.getElementById('about-button-1').addEventListener('click', function() {
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

document.getElementById('arrow-left').addEventListener('click', function() {
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

document.getElementById('arrow-right').addEventListener('click', function() {
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







if (!Boolean(sessionStorage.getItem('id'))) { // ПОЛЬЗОВАТЕЛЬ НЕ АВТОРИЗОВАН
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
    if (window.innerWidth > 1250) {
      document.querySelector('.header-right').classList.add('black');
    }
    document.querySelector('main').classList.add('black');
    document.querySelector('footer').classList.add('black');
  });
  document.querySelector('.authorization-register').addEventListener('click', function() {
    document.querySelector('.modal-register').classList.add('modal-register-selected');
    document.querySelector('.authorization').classList.toggle('authorization-selected');
    document.querySelector('.header-left').classList.add('black');
    document.querySelector('.profile-icon-1').classList.add('black');
    document.querySelector('.burger-icon').classList.add('black');
    if (window.innerWidth > 1250) {
      document.querySelector('.header-right').classList.add('black');
    }
    document.querySelector('main').classList.add('black');
    document.querySelector('footer').classList.add('black');
  });
  document.getElementById('modal-img-login').addEventListener('click', function() {
    document.querySelector('.modal-login').classList.remove('modal-login-selected');
    document.querySelector('.header-left').classList.remove('black');
    document.querySelector('.profile-icon-1').classList.remove('black');
    document.querySelector('.burger-icon').classList.remove('black');
    if (window.innerWidth > 1250) {
      document.querySelector('.header-right').classList.remove('black');
    }
    document.querySelector('main').classList.remove('black');
    document.querySelector('footer').classList.remove('black');
  });
  document.getElementById('modal-img-register').addEventListener('click', function() {
    document.querySelector('.modal-register').classList.remove('modal-register-selected');
    document.querySelector('.header-left').classList.remove('black');
    document.querySelector('.profile-icon-1').classList.remove('black');
    document.querySelector('.burger-icon').classList.remove('black');
    if (window.innerWidth > 1250) {
      document.querySelector('.header-right').classList.remove('black');
    }
    document.querySelector('main').classList.remove('black');
    document.querySelector('footer').classList.remove('black');
  });
  document.addEventListener('mouseup', function(event) {
    let obj4 = document.querySelector('.modal-login-selected');
    if (!obj4.contains(event.target)) {
      document.querySelector('.modal-login-selected').classList.remove('modal-login-selected');
      document.querySelector('.header-left').classList.remove('black');
      document.querySelector('.profile-icon-1').classList.remove('black');
      document.querySelector('.burger-icon').classList.remove('black');
      if (window.innerWidth > 1250) {
        document.querySelector('.header-right').classList.remove('black');
      }
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
      if (window.innerWidth > 1250) {
        document.querySelector('.header-right').classList.remove('black');
      }
      document.querySelector('main').classList.remove('black');
      document.querySelector('footer').classList.remove('black');
    }
  });
  document.getElementById('login-question').addEventListener('click', function() {
    setTimeout(function() {document.querySelector('.modal-login').classList.add('modal-login-selected')}, 500);
  });
  document.getElementById('register-question').addEventListener('click', function() {
    setTimeout(function() {document.querySelector('.modal-register').classList.add('modal-register-selected')}, 500);
  });
  document.getElementById('login-question').addEventListener('click', function() {
    document.querySelector('.modal-register').classList.remove('modal-register-selected');
  });
  document.getElementById('register-question').addEventListener('click', function() {
    document.querySelector('.modal-login').classList.remove('modal-login-selected');
  });

  document.getElementById('authorization-log-in-cards').addEventListener('click', function() { // Открытие модального окна авторизации при клике по кнопке "Log In" в секции "Cards"
    document.querySelector('.modal-login').classList.add('modal-login-selected');
    document.querySelector('.authorization').classList.toggle('authorization-selected');
    document.querySelector('.header-left').classList.add('black');
    document.querySelector('.profile-icon-1').classList.add('black');
    document.querySelector('.burger-icon').classList.add('black');
    if (window.innerWidth > 1250) {
      document.querySelector('.header-right').classList.add('black');
    }
    document.querySelector('main').classList.add('black');
    document.querySelector('footer').classList.add('black');
  });

  document.getElementById('authorization-register-cards').addEventListener('click', function() { // Открытие модального окна регистрации при клике по кнопке "Sign Up" в секции "Cards"
    document.querySelector('.modal-register').classList.add('modal-register-selected');
    document.querySelector('.authorization').classList.toggle('authorization-selected');
    document.querySelector('.header-left').classList.add('black');
    document.querySelector('.profile-icon-1').classList.add('black');
    document.querySelector('.burger-icon').classList.add('black');
    if (window.innerWidth > 1250) {
      document.querySelector('.header-right').classList.add('black');
    }
    document.querySelector('main').classList.add('black');
    document.querySelector('footer').classList.add('black');
  });

  for (let i = 0; i <= 15; i++) { // Открытие модального окна авторизации при клике по кнопке "Buy"
    document.querySelectorAll('.book-description-buy')[i].addEventListener('click', function() {
      document.querySelector('.modal-login').classList.add('modal-login-selected');
      document.querySelector('.authorization').classList.toggle('authorization-selected');
      document.querySelector('.header-left').classList.add('black');
      document.querySelector('.profile-icon-1').classList.add('black');
      document.querySelector('.burger-icon').classList.add('black');
      if (window.innerWidth > 1250) {
        document.querySelector('.header-right').classList.add('black');
      }
      document.querySelector('main').classList.add('black');
      document.querySelector('footer').classList.add('black');
    });
  }

  let firstName = document.getElementById('first-name'); // Функционал формы регистрации
  let lastName = document.getElementById('last-name');
  let mail = document.getElementById('mail');
  let password = document.getElementById('password');
  let logOne = document.getElementById('logOne');
  let logTwo = document.getElementById('logTwo');
  let submitReg = document.getElementById('button-register');
  let submitLog = document.getElementById('button-log-in');
  let submitCard = document.getElementById('button-card');
  let storage = localStorage;

  submitReg.addEventListener('click', function (e) { // Отключение прокрутки при нажатии на кнопку "Sign Up"
    e.preventDefault();
    let item = link.getAttribute('href');
    document.querySelector(item).scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
    const stopScrollWindow = () => item.parentNode.scrollTo( window.scrollX, window.scrollY );
    document.body.addEventListener("click", () => stopScrollWindow(), {once: true});
  });
  submitLog.addEventListener('click', function (e) { // Отключение прокрутки при нажатии на кнопку "Log In"
    e.preventDefault();
    let item = link.getAttribute('href');
    document.querySelector(item).scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
    const stopScrollWindow = () => item.parentNode.scrollTo( window.scrollX, window.scrollY );
    document.body.addEventListener("click", () => stopScrollWindow(), {once: true});
  });
  submitCard.addEventListener('click', function (e) { // Отключение прокрутки при нажатии на кнопку "Check the card"
    e.preventDefault();
    let item = link.getAttribute('href');
    document.querySelector(item).scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
    const stopScrollWindow = () => item.parentNode.scrollTo( window.scrollX, window.scrollY );
    document.body.addEventListener("click", () => stopScrollWindow(), {once: true});
  });

  function User(firstName, lastName, mail, password, cardNumber) { // Конструктор создания объекта с данными пользователя
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.password = password;
    this.cardNumber = cardNumber;
  }

  function createId(storage) { // Создание Id пользователя по номеру
    return Object.keys(storage).length;
  }

  function generationNumber(min, max) { // Генерация случайного числа из диапазона
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function decimalToHexString(n) { // Перевод числа в шестнадцатиричный формат
    return n.toString(16);
  }
  function generationCardNumber() { // Генерация девятизначного номера карты в шестнадцатиричном формате
    let cardNumber = '';
    for (let i = 1; i <= 9; i++) {
      cardNumber += decimalToHexString( generationNumber(0, 15) ).toUpperCase();
    }
    return cardNumber;
  }

  submitReg.addEventListener('click', function() { // Функционал кнопки "Sign Up"
    let firstNameUser = firstName.value;
    let lastNameUser = lastName.value;
    let mailUser = mail.value;
    let passwordUser = password.value;
    let cardNumberUser = generationCardNumber();

    const FIRST_NAME_REGEXP = /^[A-Z][a-z]+$/;
    const LAST_NAME_REGEXP = /^[A-Z][a-z]+$/;
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const PASSWORD_REGEXP = /^[a-zA-Z0-9_]{8,20}$/;

    function isFirstNameValid(value) {
      return FIRST_NAME_REGEXP.test(value);
    }
    function isFirstNameValid(value) {
      return LAST_NAME_REGEXP.test(value);
    }
    function isEmailValid(value) {
      return EMAIL_REGEXP.test(value);
    }
    function isPasswordValid(value) {
      return PASSWORD_REGEXP.test(value);
    }

    if (firstNameUser == '' || lastNameUser == '' || mailUser == '' || passwordUser == '') {
      alert ('Fill in all the fields');
      return;
    }
    if (!isFirstNameValid(firstNameUser)) {
      alert ('The first name must begin with the only one capital letter and include at least two characters. Use only letters of the Latin alphabet. Just one word.');
      return;
    }
    if (!isFirstNameValid(lastNameUser)) {
      alert ('The last name must begin with a capital letter and include at least two characters. Use only letters of the Latin alphabet. Just one word.');
      return;
    }
    if (!isEmailValid(mailUser)) {
      alert ('Enter the correct email');
      return;
    }
    for (let i = 0; i < storage.length; i++) {
      if (mailUser == JSON.parse(storage.getItem(storage.key(i))).mail) {
        alert('A user with this email is already registered');
        return;
      }
    }
    if (!isPasswordValid(passwordUser)) {
      alert ('The password length must be from 8 to 20 characters. Only letters of the Latin alphabet, numbers and "_" can be used. Without spaces.');
      return;
    }

    let user = new User(firstNameUser, lastNameUser, mailUser, passwordUser, cardNumberUser);
    let userId = 'User' + createId(storage);
    storage[userId] = JSON.stringify(user);

    sessionStorage.setItem('id', userId);

    location.reload(); // ПЕРЕЗАГРУЗКА СТРАНИЦЫ
  });

  submitLog.addEventListener('click', function() { // Функционал кнопки "Log In"
    let userNumber = false; // Искомый пользователь

    if (logOne.value == '' || logTwo.value == '') {
      alert ('Fill in all the fields');
      return;
    }

    const PASSWORD_REGEXP = /^[a-zA-Z0-9_]{8,20}$/;

    function isPasswordValid(value) {
      return PASSWORD_REGEXP.test(value);
    }

    if (!isPasswordValid(logTwo.value)) {
      alert ('The password length must be from 8 to 20 characters. Only letters of the Latin alphabet, numbers and "_" can be used. Without spaces.');
      return;
    }

    let key; // Для работы с localStorage
    let value;

    for (let i = 0; i < storage.length; i++) { // Поиск запрашиваемого logOne
      key = storage.key(i);
      value = JSON.parse(storage.getItem(key));
      if (logOne.value == value.mail || logOne.value == value.cardNumber) {
        userNumber = storage.key(i);
        break;
      }
    }

    if (!userNumber) { //Если пользователь не найден в базе данных
      alert('The login is incorrect or does not exist');
      return;
    } else { // Если пользователь найден в базе данных, то начинается проверка пароля;
      if (logTwo.value == value.password) { //Если пароль совпал
        sessionStorage.setItem('id', userNumber);

        document.querySelector('.modal-login').classList.remove('modal-login-selected');
        document.querySelector('.header-left').classList.remove('black');
        document.querySelector('.profile-icon-1').classList.remove('black');
        document.querySelector('.burger-icon').classList.remove('black');
        if (window.innerWidth > 1250) {
          document.querySelector('.header-right').classList.remove('black');
        }
        document.querySelector('main').classList.remove('black');
        document.querySelector('footer').classList.remove('black');

        location.reload();
      } else { // Если пароль не совпал
        alert('Wrong password');
        return
      }
    }
  });
}





if (Boolean(sessionStorage.getItem('id'))) { // ПОЛЬЗОВАТЕЛЬ АВТОРИЗОВАН
  document.querySelector('.profile-icon-1').addEventListener('click', function() { // Функционал кнопки профиля
    document.querySelector('.authorization-complete').classList.toggle('authorization-complete-selected');
  });
  document.querySelector('.profile-icon-2').addEventListener('click', function() {
    document.querySelector('.authorization-complete').classList.toggle('authorization-complete-selected');
    document.querySelector('.header').classList.remove('open');
  });
  document.addEventListener('mouseup', function(event) {
    let obj1 = document.querySelector('.authorization-complete');
    let obj2 = document.querySelector('.profile-icon-1');
    let obj3 = document.querySelector('.profile-icon-2');
    if (!obj1.contains(event.target) && !obj2.contains(event.target) && !obj3.contains(event.target)) {
      document.querySelector('.authorization-complete').classList.remove('authorization-complete-selected');
    }
  });

  document.querySelectorAll('.authorization-register')[1].addEventListener('click', function() { // Функционал кнопки "Log Out"
    sessionStorage.clear();
    location.reload();
  });

  let storage = localStorage;
  let userActive = JSON.parse( storage.getItem( sessionStorage.getItem( sessionStorage.key(0) ) ) ); // Данные пользователя

  document.querySelector('.profile-icon-1').remove(); // Функционал кнопки профиля
  document.querySelector('.profile-icon-2').remove();
  document.getElementById('profile-icon-3').classList.add('profile-icon-3');
  document.getElementById('profile-icon-3').append( document.createTextNode(userActive.firstName[0] + userActive.lastName[0]) );
  document.getElementById('profile-icon-4').classList.add('profile-icon-4');
  document.getElementById('profile-icon-4').append( document.createTextNode(userActive.firstName[0] + userActive.lastName[0]) );
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 1250) {
      document.getElementById('profile-icon-3').style.display = 'flex';
    } else {
      document.getElementById('profile-icon-3').style.display = 'none';
    }
  });
    if (window.innerWidth <= 1250) {
      document.getElementById('profile-icon-3').style.display = 'flex';
    } else {
      document.getElementById('profile-icon-3').style.display = 'none';
    }
  document.querySelector('.profile-icon-3').addEventListener('click', function() {
    document.querySelector('.authorization-complete').classList.toggle('authorization-complete-selected');
  });
  document.querySelector('.profile-icon-4').addEventListener('click', function() {
    document.querySelector('.authorization-complete').classList.toggle('authorization-complete-selected');
    document.querySelector('.header').classList.remove('open');
  });
  document.addEventListener('mouseup', function(event) {
    let obj1 = document.querySelector('.authorization-complete');
    let obj2 = document.querySelector('.profile-icon-3');
    let obj3 = document.querySelector('.profile-icon-4');
    if (!obj1.contains(event.target) && !obj2.contains(event.target) && !obj3.contains(event.target)) {
      document.querySelector('.authorization-complete').classList.remove('authorization-complete-selected');
    }
  });
  document.getElementById('profile-icon-3').setAttribute('title', userActive.firstName + ' ' + userActive.lastName);
  document.getElementById('profile-icon-4').setAttribute('title', userActive.firstName + ' ' + userActive.lastName);
  document.querySelectorAll('.authorization-profile')[1].style.fontSize = '14px';
  document.querySelectorAll('.authorization-profile')[1].append( document.createTextNode(userActive.cardNumber) );
}