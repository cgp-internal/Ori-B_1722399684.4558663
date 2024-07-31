import { Game, Ball, Paddle } from './game.js';
import { keyboardInputHandler } from './utils.js';

let game;
let keyboardState = {};

function init() {
  game = new Game();
  document.addEventListener('keydown', (event) => {
    const { onKeyDown } = keyboardInputHandler(event);
    if (onKeyDown) {
      keyboardState[onKeyDown] = true;
    }
  });

  document.addEventListener('keyup', (event) => {
    const { onKeyUp } = keyboardInputHandler(event);
    if (onKeyUp) {
      keyboardState[onKeyUp] = false;
    }
  });

  gameLoop();
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

function update() {
  game.update();

  if (keyboardState['up']) {
    game.getPaddle1().moveUp();
  }
  if (keyboardState['down']) {
    game.getPaddle1().moveDown();
  }

  const paddle2 = game.getPaddle2();
  paddle2.followBall(game.getBall());
}

function render() {
  const ctx = document.getElementById('game-board').getContext('2d');
  ctx.clearRect(0, 0, 400, 400);

  ctx.font = '24px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText(`Score: ${game.getScore()[0]} - ${game.getScore()[1]}`, 10, 10);

  game.getPaddle1().draw(ctx);
  game.getPaddle2().draw(ctx);
  game.getBall().draw(ctx);
}

init();