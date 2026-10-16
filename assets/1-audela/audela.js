  let img = [];
  let index = 0;
  let left = 0, right = 0;
  async function setup(){
    createCanvas(396, 558);
    for(let i=0; i<9; i++){
  		img[i] = await loadImage("../assets/1-audela/audela-"+i+".webp");
 		}
    
  }
  function draw(){
  	tint(255, 20);
  	image(img[index], 0, 0);
  	strokeWeight(3);
  	if(index<8){
  	noStroke();
  	fill(175, 20);
  	rect(336, 308, 60, 60, 10);
  	if(mouseX>336 && mouseX<396 && mouseY>308 && mouseY<368){
  			right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(356, 320, 384, 340);
  	line(356, 360, 384, 340);}
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
  	else if(right==1 && index<8) ++index;
  }
 


