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
    this.snakeDiv.style.border = '2px solid #1d3b2f';  // Darker green border for contrast
    this.snakeDiv.style.borderRadius = '5px';  // Slightly rounded corners
    this.snakeDiv.style.transform = 'translate(0, 0)';
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
      this.positionX += this.width;
    }

    else if (this.direction === "left") {
      this.positionX -= this.width;
    }
    else if (this.direction === "up") {
      this.positionY -= this.height;
    }
    else if (this.direction === "down") {
      this.positionY += this.height;
    }


    this.updatePosition();

    this.checkCollisionWall()
    clearInterval(this.moveInterval);
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
  checkCollisionWall() {
    const gameContainer = document.querySelector(".gameContainer-inside");
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;


    if (
      this.positionX < 0 ||
      this.positionX + this.width > containerWidth ||
      this.positionY < 0 ||
      this.positionY + this.height > containerHeight
    ) {
      const gameOverScreen = document.getElementById("gameOverScreen");
      gameOverScreen.style.display = "block";
      clearInterval(this.moveInterval);

    }

    return false;

  }
}




//Check if the snake touches the fruit → if yes:
//Move the fruit somewhere else.
//  then Increase the score or grow the snake.

//check collision with the wall


