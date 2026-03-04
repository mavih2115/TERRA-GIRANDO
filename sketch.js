function setup() { 
    creatCanvas(1920,1080, WEBGL);//plano 3D
    terra=loadImage('terrajpl)
}

function draw() { 
    background(205, 102, 94);//cor de fundo
    rotatey(millis()/1000);//rotação da terra 
    TextTrackCue(terra);//textura da terra, imagem.
    Sphere(80, 100);//esfera 3D
}