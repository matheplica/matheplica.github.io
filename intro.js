let seed = 0, back = 0, firstFrame = 0, lastFrame = 0, ww = 0, max = 0, time = 5;
function setup() {
  var cnv = createCanvas(windowWidth, 200);
  if(width>600) ww = 30;
  else ww = 20;
  max = width/ww;
  back = color(0, 180, 190, 90);
  cnv.parent('mysketch');
}

function draw() {
  randomSeed(seed);
  
  noStroke();
  //back = (back++)%255;
  fill(back);
  rectMode(CORNER);
  rect(0, 0, width, height);
  rectMode(CENTER);
  if(frameCount%time==0) {
   if(lastFrame<max){
      lastFrame++;
      time = 9;
   }else if(firstFrame<lastFrame){
    if(firstFrame%2==0) time = 12;
    else time = 9;  
    firstFrame++;
    }else{
      seed++;
      time = 5;
      if(seed%23==0) {
        back = color(0, random(100, 200), random(120, 220), 90);
        lastFrame = firstFrame = 0;      
      }
    }
  }
   stroke(255, 120);
  for(let i=0; i<ww; i++){
    strokeWeight(int(random(1, 5)));
    line(i*ww, -100, i*ww*random(1, 2), height);
  }
  noStroke();
  for(let i=firstFrame; i<lastFrame; i++){
		push();
		translate(random(width), height/2);
    rotate(random(PI));
    fill(random(355), random(228), 36, 180);
    rect(0, 0, random(20, 80), random(240, 320));
    pop();
  }
}
