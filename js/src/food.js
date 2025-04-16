/*class fruit {
    constructor(position, color) {
        this.position = position; 
        this.color = color;
    }

    fruitRandomPosition(x, y ){
         x = Math.floor(Math.random ()*70);
         y = Math.floor(Math.random ()*50);

         return { "x":  x, "y":  y};
} 
}

 const fruit = document.getElementById ('fruit');
function fruitRandomPosition(){
    let x = Math.floor(Math.random ()*70);
    let y = Math.floor(Math.random ()*50);
    
}

fruitRandomPosition();  */

 

 

 class Fruit {
  constructor() {
    this.fruit = document.querySelector(".fruit");
    this.gameContainer = document.querySelector(".gameContainer-inside");
    this.fruitSize = 10;

    this.changePosition();
  }

  changePosition() {
    const gameContainerWidth = this.gameContainer.clientWidth;
    const gameContainerHeight = this.gameContainer.clientHeight;

    const maxX = gameContainerWidth - this.fruitSize;
    const maxY = gameContainerHeight - this.fruitSize;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    this.fruit.style.left = `${randomX}px`;
    this.fruit.style.top = `${randomY}px`;
  }
}

// Instantiate the fruit
const fruit = new Fruit();
