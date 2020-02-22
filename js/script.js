const menu = document.querySelector('.menu');
const ipad = window.matchMedia('screen and (max-width:800px)')
const burgerButton = document.querySelector('#burger-menu');
const pincha = document.querySelector('#pincha');


ipad.addListener(validation)
function validation(event){
  console.log(event.matches);
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow);
    pincha.addEventListener('click', hideShow);
  }else {
    burgerButton.removeEventListener('click', hideShow);
    pincha.removeEventListener('click', hideShow);
  }
}

function hideShow(){
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  }else {
    menu.classList.add('is-active');
  }
}
