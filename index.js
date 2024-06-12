// game.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let car = {
  x: canvas.width / 2,
  y: canvas.height - 100,
  width: 50,
  height: 100,
  speed: 1
};

function drawCar() {
  ctx.fillStyle = 'red';
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

function update() {
  // Move the car forward
  car.y -= car.speed;

  // If the car goes off the top, wrap it to the bottom
  if (car.y + car.height < 0) {
    car.y = canvas.height;
  }
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  update();
  drawCar();
  requestAnimationFrame(loop);
}

loop();