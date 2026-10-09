let textoActual = ["texto 0", "texto 1", "texto 2", "texto 3"];
let fondo = [];
let escena = {}


let TA = 0;

let vacio;


function sprite(archivo){
   return loadImage("data/" + archivo + ".png");
}


function preload()
{
     vacio=sprite("vacio");

     escena[0] = escena_0;
     escena[1] = escena_1;
     escena[2] = escena_2;

     //fondo[0]=loadImage("data/fondo1.png");

}


function interactivo(sprite, posX, posY, txt) 
 {
     if (dist(mouseX,mouseY, posX, posY) < sprite.width / 2 && mouseIsPressed)
     {
         TA = txt
     }
     image (sprite, posX - sprite.width / 2, posY - sprite.height / 2);

}


function escena_0()
 {
     interactivo (vacio, 200, 100, 1);
     interactivo (vacio, 80, 300, 2);

} 

function escena_1()
 {
     interactivo (vacio, 300, 50, 0);
     interactivo (vacio, 200, 67,2);

} 

function escena_2()
 {
     interactivo (vacio, 500,240,0);
     interactivo (vacio, 124,392,1);

}


function setup(){
    createCanvas(800,450);

}


function draw() {
     //image (fondo[TA],0,0.800,450);
     background(200)

     escena[TA]();

     textSize(24);
     fill(0);
     text(textoActual[TA],20,30);
 }
