const clickMe = document.querySelector('#click-me-btn');
const container = document.getElementById('container');
const closeBtn = document.querySelector('#close-btn');

clickMe.addEventListener('click', function(){
  container.style.display = 'flex';
});

closeBtn.addEventListener('click', function(){
  container.style.display = 'none';
});

//highest object in DOM

const biggestContainer = document.getElementsByClassName('flex-box');

window.addEventListener('click', function(event){
  let clickedEvent = event.target;

  if(clickedEvent === biggestContainer[0]) container.style.display = 'none';

});

//extra feature 

const dontClick = document.getElementById('dont-click');

const spam = function (){
  window.alert('Adoi u ni tekan bukan2');
  window.alert('Kan i dah tulis situ jangan tekan');
  window.alert('Gatal betul jari tu ek');
  window.alert('Nasib i sayang u');
  window.alert('Dah la cantik');
  window.alert('Comel pulak tu');
  window.alert('Pasni jangan tekan mengarut k');
  window.alert('Love u !');
}

dontClick.onclick = spam;