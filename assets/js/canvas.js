class canvasPizza {
  constructor() {
    this.ctx = document.getElementById('pizza-canvas').getContext('2d');
    this.width = 300;
    this.height = 300;
  }
  printIngredient(arrayIngredients){ 
    this.clearPizza();    
    arrayIngredients.forEach(function(ingredientID){
        let imgIngredient;
        if(ingredientID != 'aceite'){
          imgIngredient = new Image();
          imgIngredient.src = `assets/img/pizza/${ingredientID}.svg`;
        }
        console.log('ingredientID', ingredientID, 'imgIngredient', imgIngredient)
        switch (ingredientID) {
          case 'aceite':
            console.log('aceite');
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.fillStyle = "#cdd84b";
            this.ctx.fillRect(0,0,300,300)
            this.ctx.closePath();
            this.ctx.restore();
            break;
          case 'aceitunas-negras':
            imgIngredient.onload = function(){
              imgIngredient.height = 100;
              imgIngredient.width = 100;
              this.generateDraw(100, imgIngredient, 18, 22)
            }.bind(this)
            break;
          case 'aceitunas-verdes':
            imgIngredient.onload = function(){
              imgIngredient.height = 100;
              imgIngredient.width = 100;
              this.generateDraw(100, imgIngredient, 18, 22)
            }.bind(this)
            break;
          case 'ajo':
            imgIngredient.onload = function(){
              imgIngredient.height = 170;
              imgIngredient.width = 100;
              this.generateDraw(100, imgIngredient, 1, 3)
            }.bind(this)
            break;
          case 'albahaca':
            imgIngredient.onload = function(){
              imgIngredient.height = 70;
              imgIngredient.width = 100;
              this.generateDraw(80, imgIngredient, 5, 10)
            }.bind(this)
            break;
          case 'alcachofas':
            imgIngredient.onload = function(){
              imgIngredient.height = 88;
              imgIngredient.width = 100;
              this.generateDraw(20, imgIngredient, 20, 40)
            }.bind(this)
            break;
          case 'anchoas':
            imgIngredient.onload = function(){
              imgIngredient.height = 90;
              imgIngredient.width = 100;
              this.generateDraw(10, imgIngredient, 60, 80)
            }.bind(this)
            break;
          case 'bacon':
            imgIngredient.onload = function(){
              imgIngredient.height = 110;
              imgIngredient.width = 100;
              this.generateDraw(50, imgIngredient, 10, 15)
            }.bind(this)
            break;
          case 'berenjena':
            imgIngredient.onload = function(){
              imgIngredient.height = 100;
              imgIngredient.width = 100;
              this.generateDraw(20, imgIngredient, 30, 35)
            }.bind(this)
            break;
          case 'carne-picada':
            imgIngredient.onload = function(){
              imgIngredient.height = 100;
              imgIngredient.width = 100;
              this.generateDraw(80, imgIngredient, 10, 15)
            }.bind(this)
            break;
          case 'cebolla':
            imgIngredient.onload = function(){
              imgIngredient.height = 105;
              imgIngredient.width = 100;
              this.generateDraw(40, imgIngredient, 20, 25)
            }.bind(this)
            break;
          case 'fresas':
            imgIngredient.onload = function(){
              imgIngredient.height = 110;
              imgIngredient.width = 100;
              this.generateDraw(25, imgIngredient, 22, 25)
            }.bind(this)
            break;
          case 'huevo-duro':
            imgIngredient.onload = function(){
              imgIngredient.height = 105;
              imgIngredient.width = 100;
              this.generateDraw(20, imgIngredient, 22, 25)
            }.bind(this)
            break;
          case 'jamon':
            imgIngredient.onload = function(){
              imgIngredient.height = 190;
              imgIngredient.width = 100;
              this.generateDraw(150, imgIngredient, 8, 12)
            }.bind(this)
            break;
          case 'maiz':
            imgIngredient.onload = function(){
              imgIngredient.height = 130;
              imgIngredient.width = 100;
              this.generateDraw(80, imgIngredient, 8, 10)
            }.bind(this)
            break;
          case 'mozarella':
            imgIngredient.onload = function(){
              imgIngredient.height = 100;
              imgIngredient.width = 100;
              this.generateDraw(20, imgIngredient, 35, 40)
            }.bind(this)
            break;
          case 'oregano':
            imgIngredient.onload = function(){
              imgIngredient.height = 170;
              imgIngredient.width = 100;
              this.generateDraw(200, imgIngredient, 1, 3)
            }.bind(this)
            break;
          case 'pimienta-negra':
            imgIngredient.onload = function(){
              imgIngredient.height = 190;
              imgIngredient.width = 100;
              this.generateDraw(200, imgIngredient, 1, 2)
            }.bind(this)
            break;
          case 'pimiento':
            imgIngredient.onload = function(){
              imgIngredient.height = 100;
              imgIngredient.width = 100;
              this.generateDraw(100, imgIngredient, 25, 30)
            }.bind(this)
            break;
          case 'pina':
            imgIngredient.onload = function(){
              imgIngredient.height = 100;
              imgIngredient.width = 100;
              this.generateDraw(70, imgIngredient, 15, 20)
            }.bind(this)
            break;
          case 'pollo':
            imgIngredient.onload = function(){
              imgIngredient.height = 120;
              imgIngredient.width = 100;
              this.generateDraw(80, imgIngredient, 10, 15)
            }.bind(this)
            break;
          case 'salami':
            imgIngredient.onload = function(){
              imgIngredient.height = 100;
              imgIngredient.width = 100;
              this.generateDraw(50, imgIngredient, 20, 25)
            }.bind(this)
            break;
          case 'setas':
            imgIngredient.onload = function(){
              imgIngredient.height = 100;
              imgIngredient.width = 100;
              this.generateDraw(80, imgIngredient, 20, 25)
            }.bind(this)
            break;
          case 'tomate':
          imgIngredient.onload = function(){
            imgIngredient.height = 100;
            imgIngredient.width = 100;
            this.generateDraw(70, imgIngredient, 20, 30)
          }.bind(this)
          break;
          default:
            imgIngredient.onload = function(){
              imgIngredient.height = 290;
              imgIngredient.width = 290;
              this.ctx.drawImage(imgIngredient, 5, 5, imgIngredient.width, imgIngredient.height)
            }.bind(this)  
            break;    
        }      
    }.bind(this))
  }
  generateDraw(numMax, imgIngredient, NumSizeMain, NumSizeMax){
    for(let numDraw = 0; numDraw <= numMax; numDraw++){
      let sizeRandom = this.calculeRandoms(NumSizeMain,NumSizeMax);
      let positionRandomX = this.calculeRandoms(0, 300);
      let positionRandomY = this.calculeRandoms(0, 300);
      this.ctx.drawImage(imgIngredient, positionRandomX, positionRandomY, sizeRandom, sizeRandom*this.porportionImg(imgIngredient.height, imgIngredient.width))
    }
  }
  calculeRandoms(minNum, maxNum){
    return Math.floor(Math.random()*(maxNum - minNum) + minNum);
  }
  porportionImg(height, width){
    return height/width;
  }
  clearPizza(){
    this.ctx.clearRect(0, 0, this.width, this.height)
  }
}