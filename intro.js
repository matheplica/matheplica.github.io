var seed = 0, ww = 0, mm = 0, dia = 40, rr = 255, gg = 255, bb = 255;
function setup() {
  var cnv = createCanvas(360, 280);
  cnv.parent('mysketch');
  //p5script.style("margin-left", "340px");
}

function draw() {
  randomSeed(seed);
  noStroke();
  background(255, 8);
  noFill();
  strokeWeight(12);
  for(var i=mm; i<ww; i++){
    for(var j=0; j<5; j++){
    if((i+j)%3==0){ 
      noFill();
      stroke(random(rr), random(gg), random(bb), int(random(2))*200);
      circle(30+i*50, 30+j*50, dia);
    } else { 
      noStroke();
      fill(random(rr), random(gg), random(bb), int(random(2))*255);    
      circle(30+i*50, 30+j*50, dia+10);}
    }
  }
  if(frameCount%60==0){  
    if(ww<7){
      ww++;
      seed = int(random(512));
    }else if(mm<6){
      mm++;
    }else {
      ww = mm = 0;
      rr = int(random(255));
      gg = int(random(255));
      bb = int(random(255));
    }
  }
}
