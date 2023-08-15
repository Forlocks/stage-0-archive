document.querySelector('.burger-icon').addEventListener('click', function(){
  document.querySelector('.header').classList.add('open');
})
//Открытие меню при клике по иконке бургер-меню

document.querySelector('.cross-icon').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})
//Закрытие меню при клике по иконке крестика

document.querySelector('.action-1').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})
//Закрытие меню при клике по первой ссылке навигации

document.querySelector('.action-2').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})
//Закрытие меню при клике по второй ссылке навигации

document.querySelector('.action-3').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})
//Закрытие меню при клике по третьей ссылке навигации

document.querySelector('.action-4').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})
//Закрытие меню при клике по четвёртой ссылке навигации

document.querySelector('.action-5').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})
//Закрытие меню при клике по пятой ссылке навигации

document.addEventListener("mouseup", function(event) {
  var obj = document.querySelector(".header-right");
  if (!obj.contains(event.target)) {
    document.querySelector('.header').classList.remove('open');
  }
});
//Закрытие меню при клике вне его области

console.log('Все пункты выполнены в соответствии с ТЗ.')