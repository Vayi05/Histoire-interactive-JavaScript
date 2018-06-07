var btn_start = document.querySelector('.StartGame_button');
var galaxy_textTime = document.querySelector('.Galaxy_textTime span');
var btn_notReady = document.querySelector('.DescriptionButtons_buttons_notReady');
var btn_ready = document.querySelector('.DescriptionButtons_buttons_ready');
var btn_sureNotTry = document.querySelector('.ChangeOpenion_items_buttons_sure');
var btn_try = document.querySelector('.ChangeOpenion_items_buttons_try');
var profile_pictureOne = document.querySelector('.Profile_items_pictureOne');
var profile_pictureTwo = document.querySelector('.Profile_items_pictureTwo');
var input_pseudo = document.querySelector('.Profile_items_inputsGo_choosePseudo');
var submit_profile = document.querySelector('.Profile_items_inputsGo_submitGo');
var btn_returnHome = document.querySelector('.GoodBye_items_butonReturn');
var btn_submit = document.querySelector('#submit_pseudo');
var form = document.querySelector('form');
var input = document.querySelector('#input');
var messageChatOne = document.querySelector('.Chat_messages_one');
var messageChatTwo = document.querySelector('.Chat_messages_two');
var imageNathalie = document.querySelector('.Chat_items_picture_nathalie');

var counterTime = galaxy_textTime.textContent;

var startGame_container = document.querySelector('.StartGameContainer');
var galaxy_container = document.querySelector('.GalaxyContainer');
var description_container = document.querySelector('.DescriptionContainer');
var changeOpenion_container = document.querySelector('.ChangeOpenionContainer');
var profile_container = document.querySelector('.ProfileContainer');
var goodBye_container = document.querySelector('.GoodByeContainer');
var chat_container = document.querySelector('.ChatContainer');
var text_chatOne = document.querySelector('.Chat_messages_one_text');
var text_chatTwo = document.querySelector('.Chat_messages_two_text');
var currentDiv = document.querySelector("#div1");
var currentDiv2 = document.querySelector("#div2");
var currentDiv3 = document.querySelector("#div3");
var messageCurrentDiv = document.querySelector('#message');

var divLeftOne = document.querySelector('#divLeftOne');
var divLeftTwo = document.querySelector('#divLeftTwo');
var divLeftThree = document.querySelector('#divLeftThree');
var divLeftFour= document.querySelector('#divLeftFour');
var divLeftFive = document.querySelector('#divLeftFive');
var divLeftSix = document.querySelector('#divLeftSix');
var divLeftSeven= document.querySelector('#divLeftSeven');
var divLeftEight= document.querySelector('#divLeftEight');
var divLeftNine= document.querySelector('#divLeftNine');

var divRightThree = document.querySelector('#divRightThree');
var divRightFour = document.querySelector('#divRightFour');
var divRightFive = document.querySelector('#divRightFive');
var divRightSix = document.querySelector('#divRightSix');
var divRightSeven = document.querySelector('#divRightSeven');
var divRightEight = document.querySelector('#divRightEight');
var divRightNine = document.querySelector('#divRightNine');
var divRightTen = document.querySelector('#divRightTen');
var divRightEleven = document.querySelector('#divRightEleven');

var timer;


var messages = [
 {
  "textOne" : "Bonjour Obiwan<br>Désolée, tu n’es pas  <br>mon style d’homme, je <br>préfère les hommes <br> plus…poilus.<br>",
  "textTwo" : "Gimmikiss vous a <br>  nexté, voulez vous <br>réessayer ? Faites le <br> bon choix cette fois."
  }
];
var picMessageOne = messages[0].textOne;
var picMessageTwo = messages[0].textTwo;

var dataBetween = [
  {
  "textOne"  : "Bonjour Chui <br> Tu es très mignon!!",
  "textTwo" : "Si moi je suis mignon toi tu es <br> sublime, il n’y a pas de beauté comme <br> toi dans toute la galaxie",
  "textThree" : "Merci toi aussi, tu as de <br> beaux… astéroïdes….",
  "textFour" : "Tu vas me faire rougir…",
  "textFive" : "Dis-moi que fais-tu dans <br> la vie ?",
  "textSix" : "Je suis perruquier des <br> stars, je rase les <br> wookies morts pour en <br>faire de magnifiques <br> perruques.",
  "textSeven" : "Je suis pilote de <br> vaisseau pour le<br> seigneur Vador.",
  "textEight" : "O tu travaille pour <br>  le seigneur Vador… ",
  "textNine" : "Moi aussi j’ai un dark <br>  side 😊 ",
  "textTen" : "Je dois t’avouer quelque <br> chose, tu ressembles <br> beaucoup à mon ex…",
  "textTenEleven" : "J’espère que comme lui <br> tu es un expert dans le<br> massage de pied…",
  "textEleven" : "Eu les réflexions bof de <br> Coruscante non merci.",
  "textTwelve" : "Ouai géniale on pourra <br> faire des soirées <br> déguisées.",
  // "textThirtheen" : "J’espère que comme lui <br> tu es un expert dans le<br> massage de pied…",
  "textFourteen" : "Je deviendrai un expert <br> dans ce que tu voudras.",
  "textFifteen" : "Et tu veux pas 100 balles <br> et 1 mars aussi ?",
  "textSixteen" : "On se connais pas, je te <br> demande un massage <br> des pieds et tu dis oui !<br> J’ai besoin d’un homme <br> de caractère pas d’un <br> homme soumis ! Allez <br> bye.",
  "textSeventeen" : "Nan une paire de <br> Louboutin pour <br> sublimer mes pieds<br> après le massage fera<br> l’affaire 😊",
  "textEighteen" : "Bon écoute tu m’as <br> clairement l’air d’être le <br> wookie de ma vie. Veux <br> tu que l’on se rencontre <br> au tour d’un tatouine <br> sunrise ?",

  }
];

// Récupérer les textes dans le fichier data

var pickDataBetweenOne = dataBetween[0].textOne;
var pickDataBetweenTwo = dataBetween[0].textTwo;
var pickDataBetweenThree = dataBetween[0].textThree;
var pickDataBetweenFour = dataBetween[0].textFour;
var pickDataBetweenFive = dataBetween[0].textFive;
var pickDataBetweenSix = dataBetween[0].textSix;
var pickDataBetweenSeven = dataBetween[0].textSeven;
var pickDataBetweenEight = dataBetween[0].textEight;
var pickDataBetweenNine= dataBetween[0].textNine;
var pickDataBetweenTen= dataBetween[0].textTen;
var pickDataBetweenTenEleven= dataBetween[0].textTenEleven;
var pickDataBetweenEleven= dataBetween[0].textEleven;
var pickDataBetweenTwelve= dataBetween[0].textTwelve;
var pickDataBetweenThirteen= dataBetween[0].textThirtheen;
var pickDataBetweenFourteen= dataBetween[0].textFourteen;
var pickDataBetweenFifteen= dataBetween[0].textFifteen;
var pickDataBetweenSixteen= dataBetween[0].textSixteen;
var pickDataBetweenSeventeen= dataBetween[0].textSeventeen;
var pickDataBetweenEighteen= dataBetween[0].textEighteen;

btn_start.addEventListener('click', function(){
  galaxy_container.classList.add('is-active');
  startGame_container.remove('is-active');
  function startTime(){
    if (counterTime > 0) {
      counterTime--;
      galaxy_textTime.textContent = counterTime;
    }else{
      console.log('startTime')
      description_container.classList.add('is-active');
      galaxy_container.classList.remove('is-active');
      clearInterval(timer);
      var audio = new Audio('assets/Star-Wars.mp3');
      audio.play();
      setTimeout(function(){
        audio.pause()
      }, 50000)
      return;
    }
  }
  clearInterval(timer);
  timer = setInterval(startTime, 1000);
  console.log('hiii');
});

btn_notReady.addEventListener('click', function() {
  changeOpenion_container.classList.add('is-active');
  description_container.classList.remove('is-active');
  console.log('hello');
});
btn_ready.addEventListener('click', function() {
  profile_container.classList.add('is-active');
  description_container.classList.remove('is-active');
  console.log('hello how  are you');
});

btn_sureNotTry.addEventListener('click', function () {
  goodBye_container.classList.add('is-active');
  changeOpenion_container.classList.remove('is-active');
});
btn_try.addEventListener('click', function () {
  profile_container.classList.add('is-active');
  changeOpenion_container.classList.remove('is-active');
});
btn_returnHome.addEventListener('click', function () {
  startGame_container.add('is-active');
  startGame_container.classList.add('is-active');
  console.log('yoo');
});

// UNE FONCTION QUI SERT A ENLEVER LE STYLE AUX IMAGES
function addStyle(element) {
  element.style.border = "3px solid #FFE81F";
  element.style.boxShadow = "inset 0 0 1em gold, 0 0 2em #FFE81F";
  element.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
}

// UNE FONCTION QUI SERT A AJOUTER LE STYLE AUX IMAGES
function removeStyle(element) {
  element.style.border = '';
  element.style.boxShadow = '';
  element.style.backgroundColor = '';
}

// LES EVENEMENTS SUR LES PHOTOS DE PROFILS

profile_pictureOne.addEventListener('click', function () {
  addStyle(profile_pictureOne);
  removeStyle(profile_pictureTwo);
});

profile_pictureTwo.addEventListener('click', function () {
  addStyle(  profile_pictureTwo);
  removeStyle(profile_pictureOne);
  });

// BUTTON submit
profile_pictureOne.addEventListener('click', function () {
  btn_submit.addEventListener('click', function(event) {
    event.preventDefault();
    var value = input.value;
    if (value === '') {
      return;
    }else {
      chat_container.classList.add('is-active');
      profile_container.classList.remove('is-active');
      currentDiv.style.display = 'block';
      currentDiv.innerHTML = pickDataBetweenOne;
      text_chatOne.innerHTML = pickDataBetweenTwo;
      text_chatTwo.innerHTML = pickDataBetweenThree;
      messageChatOne.addEventListener('click', function () {
        currentDiv3.style.display = 'block';
        currentDiv3.innerHTML = pickDataBetweenTwo;
        divLeftOne.innerHTML = pickDataBetweenFour;
        divLeftTwo.innerHTML = pickDataBetweenFive;
        divLeftOne.style.display = 'block';
        divLeftOne.innerHTML = pickDataBetweenFour;
        divLeftTwo.style.display = 'block';
        divLeftTwo.innerHTML = pickDataBetweenFive;
        text_chatOne.innerHTML = pickDataBetweenSix;
        text_chatTwo.innerHTML = pickDataBetweenSeven;

        messageChatTwo.addEventListener('click', function () {
          divRightThree.style.display = 'block';
          divRightThree.innerHTML = pickDataBetweenSeven;
          divLeftThree.style.display = 'block';
          divLeftThree.innerHTML = pickDataBetweenEight;
          divLeftFour.style.display = 'block';
          divLeftFour.innerHTML = pickDataBetweenNine;
          divLeftFive.style.display = 'block';
          divLeftFive.innerHTML = pickDataBetweenTen;
          divLeftSix.style.display = 'block';
          divLeftSix.innerHTML = pickDataBetweenTenEleven;
          imageNathalie.setAttribute('src', 'assets/img/laure4.png');
          text_chatOne.innerHTML = pickDataBetweenFourteen;
          text_chatTwo.innerHTML = pickDataBetweenFifteen;
          messageChatOne.addEventListener('click', function () {

          });
          messageChatTwo.addEventListener('click', function () {
            divLeftSeven.style.display = 'block';
            divLeftSeven.innerHTML = pickDataBetweenSeventeen;
            divLeftEight.style.display = 'block';
            divLeftEight.innerHTML = pickDataBetweenEighteen;
          });
        });
        messageChatOne.addEventListener('click', function () {
          divRightThree.style.display = 'block';
          divRightThree.innerHTML = pickDataBetweenSix;
          divLeftThree.style.display = 'block';
          divLeftThree.innerHTML = pickDataBetweenTwelve;
          imageNathalie.setAttribute('src', 'assets/img/laure3.png');
          divLeftFive.style.display = 'block';
          divLeftFive.innerHTML = pickDataBetweenTen;
          divLeftSix.style.display = 'block';
          divLeftSix.innerHTML = pickDataBetweenTenEleven;
          text_chatOne.innerHTML = pickDataBetweenFourteen;
          text_chatTwo.innerHTML = pickDataBetweenFifteen;
        });
      });
      messageChatTwo.addEventListener('click', function () {
        currentDiv3.style.display = 'block';
        currentDiv3.innerHTML = pickDataBetweenThree;
        divLeftOne.style.display = 'block';
        divLeftOne.innerHTML = pickDataBetweenEleven;
        imageNathalie.setAttribute('src', 'assets/img/laure.png');
      });
    }
    });
});

profile_pictureTwo.addEventListener('click', function () {
  btn_submit.addEventListener('click', function(event) {
    event.preventDefault();
    var value = input.value;
    if (value === '') {
      return;
    }else {
      chat_container.classList.add('is-active');
      profile_container.classList.remove('is-active');
      currentDiv.style.display = 'block';
      currentDiv2.style.display = 'block';
      currentDiv.innerHTML = picMessageOne;
      currentDiv2.innerHTML = picMessageTwo;
      text_chatOne.innerHTML = "Oui";
      text_chatTwo.innerHTML = "Non";
    }
    });
});

function addStyleDiv(items) {
  items.style.width = "50%";
  items.style.borderRadius = "50% 20% / 10% 40%";
  items.style.backgroundColor = "#fff";
  items.style.textAlign = "center";
  items.style.padding = "1em";
}
