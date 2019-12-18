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
	let levelActually = document.getElementById('level-actually');
  let levelTotal = document.getElementById('level-total');
  let ingredientsSlider = document.querySelectorAll('#ingredients .box-ingredient-item > a');
  let imgClient = document.querySelectorAll('#client img');
  
  //btn
  let startOneBtn = document.getElementById('btn-start');
  let startGameBtn = document.getElementById('start-game');
  let resetBtn = document.getElementsByClassName('reset');
  let continueBtn = document.getElementById('continue-game');

  //LightBox 
  let succesLightBox = document.getElementById('success-continue');
  let succesClient = document.getElementById('success-client');
  let successEndLightBox = document.getElementById('success-end');
  let successEndClient = document.getElementById('success-client-end');
  let gameOverLightBox = document.getElementById('game-over');
  let gameOverClient = document.getElementById('game-over-client');
  
  //Slider load
  sliderLoad();
  
  //Charge Img Canvas Pizza
  for(let i = 0; i < ingredientsSlider.length; i++){
    if(ingredientsSlider[i].id != 'sal' && ingredientsSlider[i].id != 'aceite'){
      window[ingredientsSlider[i].id + 'Canvas'] = new Image();
      window[ingredientsSlider[i].id + 'Canvas'].src = `assets/img/pizza/${ingredientsSlider[i].id}.svg`;
      window[ingredientsSlider[i].id + 'Canvas'].height = 100;
      window[ingredientsSlider[i].id + 'Canvas'].width = 100;
    }
  }

  //Load Songs & add DOM
  window.songStart = new Audio();
  window.songStart.src = 'assets/song/start.mp3';
  window.songSuccess = new Audio();
  window.songSuccess.src = 'assets/song/success.mp3';
  window.songSuccessEnd = new Audio();
  window.songSuccessEnd.src = 'assets/song/success-end.mp3';
  window.songGameOver = new Audio();
  window.songGameOver.src = 'assets/song/game-over.mp3';
  document.body.append(window.songStart);
  document.body.append(window.songSuccess);
  document.body.append(window.songSuccessEnd);
  document.body.append(window.songGameOver);
  for(let i = 0; i < clients.length; i++){
    window['gameSong-' + [i]] = new Audio()
    window['gameSong-' + [i]].src = clients[i].songSRC;
    window['gameSong-' + [i]].classList = 'soundLevel';
    window['gameSong-' + [i]].setAttribute('loop', '');
    document.body.append(window['gameSong-' + [i]])
  }
  let allSongs = document.querySelectorAll('audio')
  let levelSongs = document.querySelectorAll('audio.soundLevel')

  //Btn Start First Screen
  startOneBtn.onclick = function(e){
    starScreen.classList.remove('active');
    gameScreen.classList.add('active');
    instructionsLightBox.classList.add('active');
    window.songStart.play();
    printLevel();
  }
  
  //Instructions Tabs
  for(let i = 0; i < instructionsTabs.length; i++){
    instructionsTabs[i].onclick = function(e){
      let instructionsTabsId = instructionsTabs[i].getAttribute('data-box');
      let instructionsTabsDiv = document.getElementById(instructionsTabsId)
      if(instructionsTabs[i].classList.contains('active')){
        for(let j = 0; j < instructionsTabs.length; j++){
          instructionsTabs[j].classList.remove('active');
        }
        for(let j = 0; j < instructionsBoxTabs.length; j++){
          instructionsBoxTabs[j].classList.remove('active');
        }
        instructionsTabs[i].classList.remove('active');
        instructionsTabsDiv.classList.remove('active');
      } else {
        
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

    //Sound
    stopSong()
    for(let i = 0; i <= level; i++){
      if(i === level) levelSongs[i].play();
    }

    //Print Level
    printLevel();

    //Canvas Slider Array
    let canvasSliderArray = [];
    let canvasSliderArrayIndex = [];

    //Draw ingredients Pizza
    let pizzaCanvas = new canvasPizza();
    
    //Click Slider Ingredients
    for(let i = 0; i < ingredientsSlider.length; i++){
      ingredientsSlider[i].onclick = function(){
        ingredientsSlider[i].classList.toggle('active');
        if(canvasSliderArray.includes(this.id)){
          let selectIngredientId = canvasSliderArray.indexOf(this.id);
          canvasSliderArray.splice(selectIngredientId, 1)
          canvasSliderArrayIndex.splice(selectIngredientId, 1)
          gamelevel.printScore(canvasSliderArray);
          pizzaCanvas.printIngredient(canvasSliderArray, canvasSliderArrayIndex)
        }else{
          canvasSliderArray.push(this.id)
          canvasSliderArrayIndex.push(this.dataset.depth)
          gamelevel.printScore(canvasSliderArray);
          pizzaCanvas.printIngredient(canvasSliderArray, canvasSliderArrayIndex);
        }
      }
    }

    //Get Information Pizza
    let nameClient = clients[level].nameClient;
    let imgSrcClient = clients[level].srcClient;
    let ingredientsPizza = clients[level].ingredients;
    let time = clients[level].time;
    let clues = clients[level].clues;   
    let successMessage = clients[level].success;
    let gameOverMessage = clients[level].gameOver;
    
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

        if(level == clients.length-1){
          successEndClient.innerText = successMessage;
          successEndLightBox.classList.add('active')
        
          //Sound
          stopSong()
          window.songSuccessEnd.play();
        
        } else {
          succesClient.innerText = successMessage;
          succesLightBox.classList.add('active')
        
          //Sound
          stopSong()
          window.songSuccess.play();
        
        }
        
        continueBtn.onclick = function(){
          level++;
          pizzaCanvas.clearPizza();
          succesLightBox.classList.remove('active');
          for(let i = 0; i < ingredientsSlider.length; i++){
            if(ingredientsSlider[i].classList.contains('active')){
              ingredientsSlider[i].classList.remove('active');
            }
          }
          startGame();
        }

      }
      
      //Game Over
      if(gamelevel.checkGameOver() === true){
        clearInterval(gamelevel.intervalId);
        gameOverClient.innerText = gameOverMessage
        gameOverLightBox.classList.add('active')

        //Sound
        stopSong()
        window.songGameOver.play();

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

  //Functions
  function printLevel(){
    levelActually.innerText = new String(level + 1)
    levelTotal.innerText = new String(clients.length)
  }

  function stopSong(){
    for(let i = 0; i < allSongs.length; i++){
      allSongs[i].pause();
      allSongs[i].currentTime = 0;
    }
  }

}