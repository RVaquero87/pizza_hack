class game {
  constructor(ingredientsPizza, time, clues) {
    this.ingredientsPizza = ingredientsPizza;
    this.ingredientsWrong = [];
    this.ingredientsOk = [];
    this.clues = clues;
    this.time = time;
    this.currentTime = time;
    this.intervalId = 0;
  }
  startClick(){
    clock.innerText = this.time;
    this.printScore();
    this.printClues();
  }
  playingGame(){
    this.printTime();
    if(this.currentTime%5 == 0){
      this.printClues()
    }
  }
  buildIngredientsOk(arrayCanvas){
    this.ingredientsOk  = arrayCanvas.filter(function(ingredient){
      if(this.ingredientsPizza.includes(ingredient)) return ingredient;
    }.bind(this))
  }
  buildIngredientsWrong(arrayCanvas){
    this.ingredientsWrong  = arrayCanvas.filter(function(ingredient){
      if(!this.ingredientsPizza.includes(ingredient)) return ingredient;
    }.bind(this))
  }
  printTime(){
    this.currentTime-=1
    clock.innerText = this.currentTime;
  }
  printScore(arrayCanvas){
    if(!arrayCanvas) arrayCanvas = []
    this.buildIngredientsWrong(arrayCanvas);
    this.buildIngredientsOk(arrayCanvas);
    mistakes.innerText = new String(this.ingredientsWrong.length).padStart(2, '00');
    sucess.innerText = new String(this.ingredientsOk.length).padStart(2, '00');
    marker.innerText = new String(this.ingredientsPizza.length).padStart(2, '00');
  }
  printClues(){;
   if(this.currentTime >= this.time/2){
      let hardCluesIndex = Math.floor(Math.random()* this.clues.hardClues.length);
      clue.innerText = this.clues.hardClues[hardCluesIndex]
    }else{
      let easyCluesIndex = Math.floor(Math.random() * this.clues.easyClues.length);
      clue.innerText = this.clues.easyClues[easyCluesIndex];
    }
  }
  checkGameOver(){
    if(this.currentTime === 0){
      return true;
    }
    return false;
  }
  checkWinner(){
    if(this.ingredientsPizza.length === this.ingredientsOk.length && this.ingredientsWrong.length === 0){
      this.printScore()
      return true;
    }
    return false;
  }
}