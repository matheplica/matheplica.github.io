  let img = [];
  let index = 0;
  let left = 0, right = 0;
  async function setup(){
    createCanvas(480, 679);
    for(let i=0; i<4; i++){
  		img[i] = await loadImage("../assets/5-small/small-"+i+".webp");
 		}
    
  }
  function draw(){
  	tint(255, 20);
  	image(img[index], 0, 0);
  	strokeWeight(3);
  	if(index<3){
  	noStroke();
  	fill(175, 20);
  	rect(420, 308, 60, 60, 10);
  	if(mouseX>420 && mouseX<480 && mouseY>308 && mouseY<368){
  			right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(440, 320, 468, 340);
  	line(440, 360, 468, 340);}
  	if(index>0){
  		noStroke();
  		fill(175, 20);
  		rect(0, 308, 60, 60, 10);
  	if(mouseX>0 && mouseX<60 && mouseY>308 && mouseY<368){
  			left = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		left = 0;
  	}
  	line(40, 320, 12, 340);
  	line(40, 360, 12, 340);
  }}
  function mouseClicked(){
  	if(left==1 && index>0) --index;
  	else if(right==1 && index<3) ++index;
  }
 


