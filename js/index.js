



document.addEventListener('DOMContentLoaded', () => {
    let snake;
    let fruit;
    let moveInterval;
    let score = 0;
    let isPaused = false;



    function startGame() {
        if (moveInterval) {
            clearInterval(moveInterval); //   clean up
        }
        if (snake) {
            snake.snakeDiv.remove(); //   remove old snake div
        }


        score = 0;         // restart score
        updateScore();



        // Crée un nouveau Snake
        snake = new Snake(0, 0, 10, 10, "right");
        snake.listenKeyPress();
        fruit = new Fruit();

        // Bouger le snake toutes les 100ms
        moveInterval = setInterval(() => {
            if (!isPaused) {
                snake.move();
                checkFruitCollision();
            }
        }, 150);





    }


    // start button
    const startBtn = document.getElementById("startButton");
    startBtn.addEventListener("click", () => {
        startGame();
        startBtn.style.display = "none"; // Hide after click
    });

    // pause button 
    const pauseBtn = document.getElementsByClassName("pause-Button")[0];
    pauseBtn.addEventListener("click", () => {
        if (isPaused === true) {
            isPaused = false;
        } else {
            isPaused = true;
        }
        pauseBtn.textContent = isPaused ? "▶️ Resume" : "⏸ Pause";
    });
    window.addEventListener("keydown", (pressSpace) => {
        if (pressSpace.code === "Space") {
            pressSpace.preventDefault(); // ALERT!!! : this prevent page from scrolling
            if (isPaused === true) {
                isPaused = false;
            } else {
                isPaused = true;
            }

            pauseBtn.textContent = isPaused ? " Resume" : "⏸ Pause";
        }
    });



    //  arrow key controls
    window.addEventListener("keydown", (press) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(press.key)) {
            snake.changeDirection(press.key.replace("Arrow", "").toLowerCase());
        }
    });


    function updateScore() {
        const scoreElement = document.getElementById("score");
        if (scoreElement) {
            scoreElement.textContent = `Score: ${score}`;
        }
    }

    //Fruit colliding

    function isColliding(rect1, rect2) {
        return !(
            rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom
        );
    }

    setInterval(() => {
        const snakeRect = snake.snakeDiv.getBoundingClientRect();
        const fruitRect = fruit.fruit.getBoundingClientRect();

        if (isColliding(snakeRect, fruitRect)) {
            console.log("Snake ate the fruit");
            fruit.changePosition(); // Move fruit somewhere else
            //we can also grow the snake or update score here
            score++;
            updateScore();
            const beepSound = document.getElementById("beepSound");
            beepSound.play();



        }


    }, 100);



    document.getElementById("restartButton").addEventListener("click", () => {
        startGame();
        document.getElementById("gameOverScreen").style.display = "none";
    });



});