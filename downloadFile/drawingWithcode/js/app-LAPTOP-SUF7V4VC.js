let xPosition = 300;

function setup(){
    let myCanvas = createCanvas(600,400);
    myCanvas.parent('myContainer');

    background(55);
}

function draw(){
    noStroke();
    fill(255,0,0);
    ellipse(xPosition,200,50);

    xPosition = xPosition + 1;
}