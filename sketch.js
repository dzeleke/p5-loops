function setup (){
    createCanvas(600,400);
    background(0.0);
}

function draw(){
    strokeWeight(4);
    stroke(0, 30,100,90);
    if(keyIsDown(LEFT_ARROW))
    background(62, 124, 224);
     if(keyIsDown(RIGHT_ARROW))
    background(219, 255, 40);
    if(keyIsDown(UP_ARROW))
    background(146, 23, 198);
    if(keyIsDown(DOWN_ARROW))
    background(160, 81, 104);
    
  var x = 0;
  while(x<width){ 
    fill(10,255,330);
    ellipse(x, 255,25, 125);
    x= x+50;
    
      
  }
  for(var x = 0; x < 650 ; x+=70){
     fill(20,200,80);
     ellipse(x,150, 45,25);
     
 }
  
 

 
  
 
 
// var value = 0;
//function draw() {
  //if (keyIsPressed === true) {
    //fill(0);
//  } else {
  //  fill(255);
  //}
  //rect(25, 25, 50, 50);
//}
    
}