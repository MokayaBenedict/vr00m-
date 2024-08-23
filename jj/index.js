const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let carImage = new Image();
carImage.src = 'https://thumbs.dreamstime.com/b/orange-small-car-top-back-view-isolated-white-background-68689693.jpg';

let car = {
  x: canvas.width / 2 - 50,
  y: canvas.height - 100,
  width: 160,
  height: 150,
  speed: 1
};

function drawCar() {
  ctx.drawImage(carImage, car.x, car.y, car.width, car.height);
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

// Ensure the car image is loaded before starting the game loop
carImage.onload = function() {
  loop();
}