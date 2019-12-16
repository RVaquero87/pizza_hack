class canvasPizza {
  constructor() {
    this.ctx = document.getElementById('pizza-canvas').getContext('2d');
    this.width = 300;
    this.height = 300;
  }
  printIngredient(arrayIngredients, orderIndexArray){ 
    arrayIngredients = this.sortArrayIndex(arrayIngredients,orderIndexArray);
    
    this.clearPizza();    
    arrayIngredients.forEach(function(ingredientID){
      if(ingredientID != 'sal'){

        if(ingredientID != 'aceite'){
          var imgIngredient = window[ingredientID + 'Canvas']
        }
        
        console.log('imgIngredient', imgIngredient)
        switch (ingredientID) {
          case 'aceite':
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#cdd84b";
            this.ctx.fillRect(0,0,300,300)
            this.ctx.closePath();
            this.ctx.restore();
            break;
          case 'aceitunas-negras':
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(100, imgIngredient, 18, 22)
            break;
          case 'aceitunas-verdes':
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(100, imgIngredient, 18, 22)
            break;
          case 'ajo':
            imgIngredient.height = 170;
            imgIngredient.width = 100;
            this.generateDraw(100, imgIngredient, 1, 3)
            break;
          case 'albahaca':
            imgIngredient.height = 70;
            imgIngredient.width = 100;
            this.generateDraw(80, imgIngredient, 5, 10)
            break;
          case 'alcachofas':
            imgIngredient.height = 88;
            imgIngredient.width = 100;
            this.generateDraw(20, imgIngredient, 20, 40)
            break;
          case 'anchoas':
            imgIngredient.height = 90;
            imgIngredient.width = 100;
            this.generateDraw(10, imgIngredient, 60, 80)
            break;
          case 'bacon':
            imgIngredient.height = 110;
            imgIngredient.width = 100;
            this.generateDraw(50, imgIngredient, 10, 15)
            break;
          case 'berenjena':
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(20, imgIngredient, 30, 35)
            break;
          case 'carne-picada':
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(80, imgIngredient, 10, 15)
            break;
          case 'cebolla':
            imgIngredient.height = 105;
            imgIngredient.width = 100;
            this.generateDraw(40, imgIngredient, 20, 25)
            break;
          case 'fresas':
            imgIngredient.height = 110;
            imgIngredient.width = 100;
            this.generateDraw(25, imgIngredient, 22, 25)
            break;
          case 'huevo-duro':
            imgIngredient.height = 105;
            imgIngredient.width = 100;
            this.generateDraw(20, imgIngredient, 22, 25)
            break;
          case 'jamon':
            imgIngredient.height = 190;
            imgIngredient.width = 100;
            this.generateDraw(150, imgIngredient, 8, 12)
            break;
          case 'maiz':
            imgIngredient.height = 130;
            imgIngredient.width = 100;
            this.generateDraw(80, imgIngredient, 8, 10)
            break;
          case 'mozarella':
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(20, imgIngredient, 35, 40)
            break;
          case 'oregano':
            imgIngredient.height = 170;
            imgIngredient.width = 100;
            this.generateDraw(200, imgIngredient, 1, 3)
            break;
          case 'pimienta-negra':
            imgIngredient.height = 190;
            imgIngredient.width = 100;
            this.generateDraw(200, imgIngredient, 1, 2)
            break;
          case 'pimiento':
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(100, imgIngredient, 25, 30)
            break;
          case 'pina':
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(70, imgIngredient, 15, 20)
            break;
          case 'pollo':
            imgIngredient.height = 120;
            imgIngredient.width = 100;
            this.generateDraw(80, imgIngredient, 10, 15)
            break;
          case 'salami':
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(50, imgIngredient, 20, 25)
            break;
          case 'setas':
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(80, imgIngredient, 20, 25)
            break;
          case 'tomate':
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(70, imgIngredient, 20, 30)
            break;
          default:
            imgIngredient.height = 290;
            imgIngredient.width = 290;
            this.ctx.drawImage(imgIngredient, 5, 5, imgIngredient.width, imgIngredient.height)
            break;    
        }      
      }
    }.bind(this))
  }
  calculeRandoms(minNum, maxNum){
    return Math.floor(Math.random()*(maxNum - minNum) + minNum);
  }
  porportionImg(height, width){
    return height/width;
  }
  generateDraw(numMax, imgIngredient, NumSizeMain, NumSizeMax){
    console.log('imgIngredient2', imgIngredient)
    for(let numDraw = 0; numDraw <= numMax; numDraw++){
      let sizeRandom = this.calculeRandoms(NumSizeMain,NumSizeMax);
      let positionRandomX = this.calculeRandoms(0, 300);
      let positionRandomY = this.calculeRandoms(0, 300);
      this.ctx.drawImage(imgIngredient, positionRandomX, positionRandomY, sizeRandom, sizeRandom*this.porportionImg(imgIngredient.height, imgIngredient.width))
    }
  }
  sortArrayIndex(arrayIngredients, orderIndexArray){
    arrayIngredients = arrayIngredients.map(function(ingredient, indexIngredient){
      return orderIndexArray[indexIngredient] + "-" + ingredient;
    }).sort().map(function(ingredient){
      return ingredient.slice(2,ingredient.length)
    }) 
    return arrayIngredients;
  }
  clearPizza(){
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
}