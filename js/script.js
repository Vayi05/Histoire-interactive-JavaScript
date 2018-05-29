
var start_btn = document.querySelector('.button');
var container = document.querySelector('.container');
var container2 = document.querySelector('.container2');
var container3 = document.querySelector('.container3');
var time = document.querySelector('.text-time span');
var counter = time.textContent;
var button_try = document.querySelector('.button-try');
var button_sur = document.querySelector('.button-sur');
var container4 = document.querySelector('.container4');
var notReady_button = document.querySelector('.notReady-button');
var ready_button = document.querySelector('.ready-button');
var container5 =  document.querySelector('.container5');
var choise_picture = document.querySelector('.picture1');
var choise_picture2 = document.querySelector('.picture2');
var input_choisePseudo = document.querySelector('.input-pseudoChoise');
var btn_submit = document.querySelector('.submit-go');
var container6 = document.querySelector('.container6');
var btn_return = document.querySelector('.button-return');

var write_pseudo = input_choisePseudo.value;



start_btn.addEventListener('click', function(){
  container2.classList.add('is-active');
  container.classList.add('is-hidden');
  function startTime(){
    if (counter > 0) {
      counter--;
      time.textContent = counter;
    }else{
      container3.classList.add('is-active');
      container2.classList.add('is-hidden');
    }
  }
  clearInterval();
  setInterval(startTime, 1000);
  console.log('hiii');
  console.log(startTime);
});


notReady_button.addEventListener('click', function() {
  container4.classList.add('is-active');
  container3.classList.add('is-hidden');
  console.log('ffff');
});
ready_button.addEventListener('click', function() {
  container5.classList.add('is-active');
  container3.classList.add('is-hidden');
  console.log('ffff');
});

button_try.addEventListener('click', function() {
  container5.classList.add('is-active');
  container4.classList.add('is-hidden');
  console.log('hiiii');
});
button_sur.addEventListener('click', function() {
  container6.classList.add('is-active');
  container4.classList.add('is-hidden');
  console.log('hiiii');
});
choise_picture.addEventListener('click', function () {
  console.log('ph 11111');
});
choise_picture2.addEventListener('click', function () {

});
btn_return.addEventListener('click', function () {
  container.classList.remove('is-hidden');
  container6.classList.add('is-hidden');
  container2.classList.remove('is-hidden');
  container2.classList.remove('is-active');
});
btn_submit.addEventListener('click', function () {
  var erreur = document.createElement('div');

  if (write_pseudo === '') {
  erreur.innerHTML += 'ERREUR'
  console.log('errrrrr');
  return;
}else {
 console.log('fine');
}
})
