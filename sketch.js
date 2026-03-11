let terra;

function preload(){
    terra = loadImage('terra.jpg')
}
function setup() { 
    creatCanvas(1920,1080, WEBGL);//plano 3D
   }

function draw() { 
    background(205, 102, 94);//cor de fundo
    rotatey(millis()/1000);//rotação da terra 
    textTrackCue(terra);//textura da terra, imagem.
    sphere(80, 100);//esfera 3D
}
