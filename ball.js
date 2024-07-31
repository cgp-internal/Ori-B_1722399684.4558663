class Ball {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off walls
    if (this.x - this.radius < 0 || this.x + this.radius > 400) {
      this.speedX = -this.speedX;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > 400) {
      this.speedY = -this.speedY;
    }
  }

  collide(paddle) {
    if (this.x + this.radius > paddle.x &&
        this.x - this.radius < paddle.x + paddle.width &&
        this.y + this.radius > paddle.y &&
        this.y - this.radius < paddle.y + paddle.height) {
      this.speedX = -this.speedX;
    }
  }
}

export { Ball };