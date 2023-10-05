// 文字轉語音
const msg = new SpeechSynthesisUtterance();
msg.text = document.querySelector('[name="text"]').value
let allVoices = [];
let voices = [];
const langFilter = document.querySelector('#langFilter');
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakBtn = document.querySelector('#speak');
const pauseBtn = document.querySelector('#pause');
const resumeBtn = document.querySelector('#resume');
const stopBtn = document.querySelector('#stop');

isStart = false;


 // 語言選擇
function voiceFilter(){
    voices = allVoices
    .filter(voice=>voice?.name.toLowerCase()
    .includes('natural') && voice?.name.toLowerCase()
    .includes(langFilter.value.toLowerCase()));
    voicesDropdown.innerHTML = voices
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join("");
    // default select
    voicesDropdown.value = voices[2]?.name;
    msg.voice= voices[2]||voices[0];
}
function populateVoices(){
  allVoices = this.getVoices();
  voiceFilter();
}

function setVoice(){
  msg.voice = voices.find(voice => voice.name === this.value)
  toggle();
}

function setOption(){
  msg[this.name] = this.value
  toggle();
}

function toggle(startOver = true){
  setIsStart(startOver);
  speechSynthesis.cancel()
  if(startOver){
    speechSynthesis.speak(msg)
  }
}

function setIsStart(start){
    isStart = start;
    speakBtn.disabled = isStart;
}

function resume(){
    speechSynthesis.resume();
}

function pause(){
    speechSynthesis.pause();
}

//default 
options.forEach(option => msg[option.name] = option.value);

speechSynthesis.addEventListener('voiceschanged',populateVoices);
voicesDropdown.addEventListener('input',setVoice);
langFilter.addEventListener('input',voiceFilter);
options.forEach(option => option.addEventListener('input',setOption));
speakBtn.addEventListener('click',toggle);
pauseBtn.addEventListener('click',pause);
resumeBtn.addEventListener('click',resume);
stopBtn.addEventListener('click',toggle.bind(null,false));
msg.addEventListener('end', ()=>{setIsStart(false);});