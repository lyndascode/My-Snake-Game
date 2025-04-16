//create a snake with new div
// to do : 
/*if snake doesnt eat food : 
  then continue top and left right etc 
else : 
  call the function foodRandomPosition
  and make the snake bigger with one div 
*/

class Snake {
  constructor(x, y, width, height, direction) {
        this.positionX = x;
        this.positionY = y;
        this.width = width;
        this.height = height;
      this.direction = direction;
      

      //create the new div for the snake 
         this.snakeDiv = document.createElement("div");
        this.snakeDiv.classList.add("snake");
        this.snakeDiv.style.position = "absolute";
         this.snakeDiv.style.width = `${this.width}px`;
         this.snakeDiv.style.height = `${this.height}px`;
        this.snakeDiv.style.backgroundColor = "green"; // green snake
      this.updatePosition(); //we have to everytime change its position 
        // Get game container and append the snake in it 
      const gameContainer = document.querySelector(".gameContainer-inside");
      gameContainer.appendChild(this.snakeDiv);
  }
  
  //Now the methods

  
     updatePosition() {
        this.snakeDiv.style.left = `${this.positionX}px`;
        this.snakeDiv.style.top = `${this.positionY}px`;
    }
    
    changeDirection(newDirection) {
        this.direction = newDirection;
    }

    
    // THE Method to move the snake based on the current direction
    move() {
      
      if (this.direction === "right") {
        this.positionX += this.width;}
     
      else if (this.direction === "left") {
        this.positionX -= this.width;
      }
      else if (this.direction === "up"){
        this.positionY -= this.height;}
      else if (this.direction === "down"){
        this.positionY += this.height;}


        this.updatePosition();
  }
  

  //Now everytime a user presses the keys, it will use the method move

  //lets create a method that will do that 

  listenKeyPress() {
    addEventListener("keydown", (press) => {
      if (press.key === "ArrowLeft" && this.direction !== "right") {
        this.changeDirection("left")
      }
      
      if (press.key === "ArrowRight" && this.direction !== "left") {
        this.changeDirection("right")
      }

      if (press.key === "ArrowUp" && this.direction !== "down") {
        this.changeDirection("up")
      }

      if (press.key === "ArrowDown" && this.direction !== "up") {
        this.changeDirection("down")
      }

    });
  }

}
 

const snake = newSnake(10, 10, 10, 20, "right");
setInterval(() => {
  snake.move();
},100)