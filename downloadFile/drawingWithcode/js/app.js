let r, g, b;
let circleR, circleG, circleB;

function setup(){
    let myCanvas = createCanvas(600,600);
    myCanvas.parent('myContainer');
    
    r = random(255); 
    g = random(255); 
    b = random(255); 

    background (r,g,b)
    
    circleR = random(255);
    circleG = random(255);
    circleB = random(255);

}

function Change() {
    r = random(255); // Change the values of red, green, blue
    g = random(255);
    b = random(255);
    background(r, g, b); // Set new background color
    
    circleR = random(255);
    circleG = random(255);
    circleB = random(255);
    
}    
function BasicFace(){
    circle (300,300,400);
    strokeWeight(4);
    fill(circleR, circleG, circleB);        
    console.log("BasicFace function called");
}

function draw(){
        BasicFace();

        if (mouseX < width / 2 && mouseY < height / 2) {
            fill(circleR, circleG, 0); 
          } else if (mouseX >= width / 2 && mouseY < height / 2) {
            fill(0, circleG, circleB); 
          } else if (mouseX < width / 2 && mouseY >= height / 2) {
            fill(circleR, 0, circleB); 
          } else {
            fill(0, circleG, 0); 
          }
       ellipse(mouseX, mouseY, 50, 50);    
    }