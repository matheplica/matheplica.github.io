  let img = [];
  let index = 0;
  let left = 0, right = 0;
  async function setup(){
    createCanvas(396, 550);
    for(let i=0; i<8; i++){
  		img[i] = await loadImage("../assets/2-temps/temps-"+i+".webp");
 		}
    
  }
  function draw(){
  	tint(255, 16);
  	if(index==7) tint(255);
  	image(img[index], 0, 0);
  	strokeWeight(3);
  	if(index<7){
 		 	noStroke();
  		fill(205, 20);
  		rect(336, 268, 60, 60, 10);
  		if(mouseX>336 && mouseX<396 && mouseY>308 && mouseY<368){	right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(356, 280, 384, 300);
  	line(356, 320, 384, 300);
  	}
  	if(index>0){
  	noStroke();
  	fill(205, 20);
  	rect(0, 268, 60, 60, 10);
  	if(mouseX>0 && mouseX<60 && mouseY>308 && mouseY<368)						{
  			left = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		left = 0;
  	}line(40, 280, 12, 300);
  	line(40, 320, 12, 300);
  }}
  function mouseClicked(){
  	if(left==1 && index>0) --index;
  	else if(right==1 && index<7) ++index;
  }
 


