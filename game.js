class Game {
  constructor() {
    this.score = [0, 0];
    this.ball = new Ball(200, 200, 10, 2, 2);
    this.paddle1 = new Paddle(50, 175, 20, 100, 5);
    this.paddle2 = new Paddle(330, 175, 20, 100, 5);
  }

  update() {
    this.ball.move();

    if (this.ball.x - this.ball.radius < 0) {
      this.score[1]++;
      this.ball = new Ball(200, 200, 10, 2, 2);
    } else if (this.ball.x + this.ball.radius > 400) {
      this.score[0]++;
      this.ball = new Ball(200, 200, 10, 2, 2);
    }

    if (this.ball.y - this.ball.radius < 0 || this.ball.y + this.ball.radius > 400) {
      this.ball.speedY = -this.ball.speedY;
    }

    if (this.paddle1.checkCollision(this.ball)) {
      this.ball.collide(this.paddle1);
    }

    if (this.paddle2.checkCollision(this.ball)) {
      this.ball.collide(this.paddle2);
    }
  }

  getScore() {
    return this.score;
  }

  getBall() {
    return this.ball;
  }

  getPaddle1() {
    return this.paddle1;
  }

  getPaddle2() {
    return this.paddle2;
  }
}

export { Game, Ball, Paddle };