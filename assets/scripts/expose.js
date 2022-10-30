// expose.js

window.addEventListener('DOMContentLoaded', init);
var hornImg = document.querySelector('img');
var hornAud = document.querySelector('audio');
var volumeImg = document.querySelector('div > img');
var state = 'none';
const jsConfetti = new JSConfetti();

function init() {
  const hornSel = document.getElementById('horn-select');
  const volRange = document.getElementById('volume');
  const playBtn = document.querySelector('button');
  /*var hornImg = document.querySelector('img');
  var hornAud = document.getElementsByClassName('hidden');
  var volumeImg = document.querySelector('div' > 'img');*/
  hornSel.addEventListener('change', hornChange);
  volRange.addEventListener('input', volChange);
  playBtn.addEventListener('click', playSound);

}

function hornChange(horn) {
  console.log
  state = horn.target.value;
  switch (horn.target.value){
    case 'air-horn':
      hornImg.src = "assets/images/air-horn.svg";
      hornAud.src = "assets/audio/air-horn.mp3";
      break;
    case 'car-horn':
      hornImg.src = "assets/images/car-horn.svg";
      hornAud.src = "assets/audio/car-horn.mp3";
      break;
    case 'party-horn':
      hornImg.src = "assets/images/party-horn.svg";
      hornAud.src = "assets/audio/party-horn.mp3";
      break;
    default:
      hornImg.src = "assets/images/no-image.png";
      hornAud.src = "";
  }
}

function volChange(vol){
  hornAud.volume = vol.target.value/100;
  if(vol.target.value >= 67){
    volumeImg.src = "assets/icons/volume-level-3.svg";
  }
  else if(vol.target.value >= 33){
    volumeImg.src = "assets/icons/volume-level-2.svg";
  }
  else if(vol.target.value >= 1){
    volumeImg.src = "assets/icons/volume-level-1.svg";
  }
  else{
    volumeImg.src = "assets/icons/volume-level-0.svg";
  }
}

function playSound(){
  hornAud.play();
  if(state == 'party-horn'){
    jsConfetti.addConfetti();
  }
}