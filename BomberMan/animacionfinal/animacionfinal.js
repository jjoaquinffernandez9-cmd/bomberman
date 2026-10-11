let fotogramas = [];
let indiceFotograma = 0;

let fondo;

let x;
let y;

let velocidad = 2.5;
let escalaRobot = 360;
let velocidadAnimacion = 8;

function preload() {
  // Cargar la imagen de fondo
  fondo = loadImage("fondo.png");

  // Cargar los 7 fotogramas del robot
  fotogramas[0] = loadImage("robotcamina1.png");
  fotogramas[1] = loadImage("robotcamina2.png");
  fotogramas[2] = loadImage("robotcamina3.png");
  fotogramas[3] = loadImage("robotcamina4.png");
  fotogramas[4] = loadImage("robotcamina5.png");
  fotogramas[5] = loadImage("robotcamina6.png");
  fotogramas[6] = loadImage("robotcamina7.png");
}

function setup() {
  createCanvas(800, 450);

  // Posición inicial del robot
  x = 10;
  y = height - escalaRobot / 2;
 
  imageMode(CENTER);
  frameRate(30);
}

function draw() {
  // Dibujar el fondo ocupando todo el lienzo
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);

  // Cambiar de fotograma para simular la caminata
  if (frameCount % velocidadAnimacion === 0) {
    if (indiceFotograma < 5) {
      indiceFotograma++;
    } else {
      // Alternar solamente entre las imágenes 6 y 7
      if (indiceFotograma === 5) {
        indiceFotograma = 6;
      } else {
        indiceFotograma = 5;
      }
    }
  }

  // Obtener el fotograma actual
  let robot = fotogramas[indiceFotograma];

  // Mantener las proporciones originales de la imagen
  let anchoRobot = escalaRobot * robot.width / robot.height;

  // Dibujar el robot encima del fondo
  imageMode(CENTER);
  image(robot, x, y, anchoRobot, escalaRobot);

  // Desplazar el robot hacia la derecha
  x += velocidad;

  // Si sale de la pantalla, vuelve a empezar por la izquierda
    if (x > width + anchoRobot / 2) {
    x = 50;
    indiceFotograma = 0;
  }
}
