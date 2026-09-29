const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

// Tamanho de cada "bloco" da grade do jogo
const box = 20;
let score = 0;

// A cobra é um array de coordenadas
let snake = [{ x: 9 * box, y: 10 * box }];

// Comida em posição aleatória
let food = {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box
};

let d = "";
let gameInterval;

// Escuta as setas do teclado
document.addEventListener("keydown", direction);
restartBtn.addEventListener("click", resetGame);

function direction(event) {
    let key = event.keyCode;
    if (key == 37 && d != "RIGHT") d = "LEFT";
    else if (key == 38 && d != "DOWN") d = "UP";
    else if (key == 39 && d != "LEFT") d = "RIGHT";
    else if (key == 40 && d != "UP") d = "DOWN";
}

function draw() {
    // Limpa a tela
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenha a cobra
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "#2ecc71" : "#27ae60";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "#000";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // Desenha a comida
    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(food.x, food.y, box, box);

    // Posição atual da cabeça
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Determina a nova posição baseada na direção
    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;

    // Verifica se comeu a comida
    if (snakeX == food.x && snakeY == food.y) {
        score++;
        scoreElement.innerHTML = score;
        food = {
            x: Math.floor(Math.random() * (canvas.width / box)) * box,
            y: Math.floor(Math.random() * (canvas.height / box)) * box
        };
    } else {
        // Remove a cauda se não comeu (para a cobra andar)
        snake.pop();
    }

    let newHead = { x: snakeX, y: snakeY };

    // Verifica colisão com paredes ou próprio corpo
    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(gameInterval);
        alert("Game Over! Sua pontuação foi: " + score);
    }

    // Adiciona a nova cabeça no início do array
    snake.unshift(newHead);
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    clearInterval(gameInterval);
    score = 0;
    scoreElement.innerHTML = score;
    snake = [{ x: 9 * box, y: 10 * box }];
    d = "";
    food = {
        x: Math.floor(Math.random() * (canvas.width / box)) * box,
        y: Math.floor(Math.random() * (canvas.height / box)) * box
    };
    gameInterval = setInterval(draw, 100);
}

// Inicia o jogo rodando a 10 quadros por segundo
gameInterval = setInterval(draw, 100);