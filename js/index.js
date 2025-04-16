import { Snake } from './src/snake.js';
import { Fruit } from './src/food.js';


 

document.addEventListener('DOMContentLoaded', () => {
    const snake = new Snake(0, 0, 10, 10, "right");

    // Move the snake every 100ms
    setInterval(() => {
        snake.move();
    }, 100);

    // Handle arrow key controls
    window.addEventListener("keydown", (e) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            snake.changeDirection(e.key.replace("Arrow", "").toLowerCase());
        }
    });
});