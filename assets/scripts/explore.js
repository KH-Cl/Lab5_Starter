// explore.js

window.addEventListener('DOMContentLoaded', init);

var speaker = window.speechSynthesis;
var text = document.getElementById('text-to-speak');
var voiceSel = document.getElementById('voice-select');
var face = document.querySelector('img');
var currentVoice;

function init() {
  const playBtn = document.querySelector('button');
  playBtn.addEventListener('click', playSpeech);
  speaker.addEventListener('voiceschanged', fillVoices);
  voiceSel.addEventListener('change', voiceSwitch);
  setInterval(facial, 5);
}

function fillVoices(){
  var voices = speaker.getVoices();
  for (let i = 0; i < voices.length; i++){
    const opt = document.createElement('option');
    opt.textContent = voices[i].name;
    voiceSel.appendChild(opt);
  }
}

function voiceSwitch(option){
  var voices = speaker.getVoices();
  console.log(option.target.value);
  for(let i = 0; i < voices.length; i++){
    if(voices[i].name === option.target.value){
      console.log(voices[i].name);
      currentVoice = voices[i];
    }
  }
}

function playSpeech(option){
  const utterance = new SpeechSynthesisUtterance(text.value);
  utterance.voice = currentVoice;
  speaker.speak(utterance);
}

function facial(){
  if(speaker.speaking){
    face.src = "assets/images/smiling-open.png";
  }
  else{
    face.src = "assets/images/smiling.png";
  }
}