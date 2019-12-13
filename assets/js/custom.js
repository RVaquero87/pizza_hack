// let DOM
window.onload = function() {

  //Screen start
  let starScreen = document.getElementById('start-box');
  
  //Screen instructions
  let instructionsLightBox = document.getElementById('instructions');
  let instructionsBoxTabs = document.querySelectorAll('#instructions .subtitle + div');
  let instructionsTabs = document.querySelectorAll('#instructions .subtitle');
  
  //Screen game
  let gameScreen = document.getElementById('game-box');
  let ingredientsSlider = document.querySelectorAll('#ingredients .box-ingredient-item a');
  let imgClient = document.querySelectorAll('#client img');
  
  //btn
  let startOneBtn = document.getElementById('btn-start');
  let startGameBtn = document.getElementById('start-game');
  let resetBtn = document.getElementsByClassName('reset');
  let continueBtn = document.getElementById('continue-game');

  //LightBox 
  let succesLightBox = document.getElementById('sucess-continue');
  let sucessEndLightBox = document.getElementById('sucess-end');
  let gameOverLightBox = document.getElementById('game-over');
  

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

    //Canvas Slider Array
    let canvasSliderArray = [];

    //Click Slider Ingredients
    for(let i = 0; i < instructionsTabs.length; i++){
      ingredientsSlider[i].onclick = function(e){
        ingredientsSlider[i].classList.toggle('active');
        if(canvasSliderArray.includes(this.id)){
          let selectIngredientId = canvasSliderArray.indexOf(this.id);
          canvasSliderArray.splice(selectIngredientId, 1)
        }else{
          canvasSliderArray.push(this.id)
        }
        console.log('canvasSliderArray',canvasSliderArray)
      }
    }

    //Get Information Pizza
    let nameClient = clients[0].nameClient;
    let imgSrcClient = clients[0].srcClient;
    let ingredientsPizza = clients[0].ingredients;
    let time = clients[0].time;
    let clues = clients[0].clues;
    
    // Chanfe img Client
    for(let i = 0; i < imgClient.length; i++){
      imgClient[i].setAttribute('src', imgSrcClient)
      imgClient[i].setAttribute('title', nameClient)
      imgClient[i].setAttribute('alt', nameClient)
    }

    //Build Game
    game = new game(ingredientsPizza, time, clues);
    game.startClick();

    game.intervalId = setInterval(function(){
      
      //PlayingGame
      game.playingGame(canvasSliderArray);

      //Sucees or Sucees end
      if(game.checkWinner() === true){
        clearInterval(game.intervalId);
        succesLightBox.classList.add('active')
      }
      
      //Game Over
      if(game.checkGameOver() === true){
        clearInterval(game.intervalId);
        gameOverLightBox.classList.add('active')
      }
    },1000)

  }
  
  //resetBtn
  for(let i = 0; i < resetBtn.length; i++){
    resetBtn[i].onclick = function(e){
      location.reload();
    }
  }

}
