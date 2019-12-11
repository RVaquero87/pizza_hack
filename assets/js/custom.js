// let DOM
window.onload = function() {

  let starScreen = document.getElementById('start-box');
  let instructionsLightBox = document.getElementById('instructions');
  let instructionsTabs = document.querySelectorAll('#instructions .subtitle');
  let instructionsBoxTabs = document.querySelectorAll('#instructions .subtitle + div');
  let gameScreen = document.getElementById('game-box');
  let succesLightBox = document.getElementById('sucess');
  let sucessEndLightBox = document.getElementById('sucess-end');
  let gameOverLightBox = document.getElementById('game-over');
  let startOneBtn = document.getElementById('btn-start');
  let startGameBtn = document.getElementById('start-game');
  let continueBtn = document.getElementById('continue-game');
  let resetBtn = document.getElementsByClassName('reset');
  
  //Slider load
  sliderLoad();
  
  //Btn Start First Screen
  startOneBtn.onclick = function(e){
    starScreen.classList.remove('active');
    gameScreen.classList.add('active');
    instructionsLightBox.classList.add('active');
  }
  
  //Instructions Tabs
  for(let i = 0; i < instructionsTabs.length; i++){
    instructionsTabs[i].onclick = function(e){
      
      let instructionsTabsId = instructionsTabs[i].getAttribute('data-box');
      let instructionsTabsDiv = document.getElementById(instructionsTabsId)

      if(!instructionsTabs[i].classList.contains('active')){

        for(let j = 0; j < instructionsTabs.length; j++){
          instructionsTabs[j].classList.remove('active');
        }

        for(let j = 0; j < instructionsBoxTabs.length; j++){
          instructionsBoxTabs[j].classList.remove('active');
        }
        
        instructionsTabs[i].classList.add('active');
        instructionsTabsDiv.classList.add('active');

      }


    }
  }

  //Start Game
  startGameBtn.onclick = function(e){
    instructionsLightBox.classList.remove('active');
  }
  
  //resetBtn
  for(let i = 0; i < resetBtn.length; i++){
    resetBtn[i].onclick = function(e){
      location.reload();
    }
  }

}
