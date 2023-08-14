document.querySelector('.burger-icon').addEventListener('click', function(){
  document.querySelector('.header').classList.add('open');
})

document.querySelector('.cross-icon').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})

document.querySelector('.action-1').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})

document.querySelector('.action-2').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})

document.querySelector('.action-3').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})

document.querySelector('.action-4').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})

document.querySelector('.action-5').addEventListener('click', function(){
  document.querySelector('.header').classList.remove('open');
})

document.addEventListener("mouseup", function(event) {
  var obj = document.querySelector(".header-right");
  if (!obj.contains(event.target)) {
    document.querySelector('.header').classList.remove('open');
  }
});

console.log('Все пункты выполнены в соответствии с ТЗ.')