class Paddle {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.direction = 0;
  }

  moveUp() {
    this.y -= this.speed;
    if (this.y < 0) this.y = 0;
  }

  moveDown() {
    this.y += this.speed;
    if (this.y + this.height > 400) this.y = 400 - this.height;
  }

  getTop() {
    return this.y;
  }

  getBottom() {
    return this.y + this.height;
  }

  getLeft() {
    return this.x;
  }

  getRight() {
    return this.x + this.width;
  }

  checkCollision(ball) {
    if (ball.x + ball.radius > this.x && ball.x - ball.radius < this.x + this.width) {
      if (ball.y + ball.radius > this.y && ball.y - ball.radius < this.y + this.height) {
        return true;
      }
    }
    return false;
  }
}

export { Paddle };