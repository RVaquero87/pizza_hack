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
  let ingredientsSlider = document.querySelectorAll('#ingredients .box-ingredient-item > a');
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

  let level = 0;

  //Start Game
  startGameBtn.onclick = function startGame(){
    instructionsLightBox.classList.remove('active');

    //Canvas Slider Array
    let canvasSliderArray = [];

    //Draw ingredients Pizza
    let pizzaCanvas = new canvasPizza();
    
    //Click Slider Ingredients
    for(let i = 0; i < instructionsTabs.length; i++){
      ingredientsSlider[i].onclick = function(){
        ingredientsSlider[i].classList.toggle('active');
        if(canvasSliderArray.includes(this.id)){
          let selectIngredientId = canvasSliderArray.indexOf(this.id);
          canvasSliderArray.splice(selectIngredientId, 1)
          pizzaCanvas.printIngredient(canvasSliderArray)
        }else{
          canvasSliderArray.push(this.id)
          pizzaCanvas.printIngredient(canvasSliderArray);
        }
        console.log('canvasSliderArray',canvasSliderArray)
      }
    }
    console.log(ingredientsSlider)

    //Get Information Pizza
    let nameClient = clients[level].nameClient;
    let imgSrcClient = clients[level].srcClient;
    let ingredientsPizza = clients[level].ingredients;
    let time = clients[level].time;
    let clues = clients[level].clues;    
    
    // Chanfe img Client
    for(let i = 0; i < imgClient.length; i++){
      imgClient[i].setAttribute('src', imgSrcClient)
      imgClient[i].setAttribute('title', nameClient)
      imgClient[i].setAttribute('alt', nameClient)
    }

    //Build Game
    let gamelevel = new game(ingredientsPizza, time, clues);
    gamelevel.startClick();

    gamelevel.intervalId = setInterval(function(){
      
      //PlayingGame
      gamelevel.playingGame(canvasSliderArray);

      //Sucees or Sucees end
      if(gamelevel.checkWinner() === true){
        clearInterval(gamelevel.intervalId);
        succesLightBox.classList.add('active')
        
        continueBtn.onclick = function(){
          level++;
          pizzaCanvas.clearPizza();
          succesLightBox.classList.remove('active');
          for(let i = 0; i < instructionsTabs.length; i++){
            if(ingredientsSlider[i].classList.contains('active')){
              ingredientsSlider[i].classList.remove('active');
            }
          }
          startGame();
        }

        if(level == clients.length-1){
          sucessEndLightBox.classList.add('active')
        }

      }
      
      //Game Over
      if(gamelevel.checkGameOver() === true){
        clearInterval(gamelevel.intervalId);
        gameOverLightBox.classList.add('active')
      }
    },1000)

  }.bind(level, continueBtn)
  
  //continueBtn
  
  //resetBtn
  for(let i = 0; i < resetBtn.length; i++){
    resetBtn[i].onclick = function(e){
      location.reload();
    }
  }

}
