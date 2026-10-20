  let img = [];
  let banner = 0;
  let index = 0, alpha = 302;
  let left = 0, right = 0;
  async function setup(){
    createCanvas(396, 490);
    for(let i=0; i<8; i++){
  		img[i] = await loadImage("../assets/12-misunder/misunder-"+i+".webp");
 		}
    banner = await loadImage("../assets/12-misunder/banner.webp"); 
  }
  function draw(){
  	if(alpha>0) alpha-=2;
  	tint(255, alpha);
  	image(banner, 0, 400);
  	tint(255, 20);
  	image(img[index], 0, 0);
  	strokeWeight(3);
  	if(index<7){
  	noStroke();
  	fill(175, 20);
  	rect(336, 340, 60, 60, 10);
  	if(mouseX>336 && mouseX<396 && mouseY>340 && mouseY<400){
  			right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(356, 350, 384, 372);
  	line(356, 392, 384, 372);}
  	if(index>0){
  		noStroke();
  		fill(175, 20);
  		rect(0, 340, 60, 60, 10);
  	if(mouseX>0 && mouseX<60 && mouseY>340 && mouseY<400){
  			left = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		left = 0;
  	}
  	line(40, 350, 12, 372);
  	line(40, 392, 12, 372);
  	
  }
  }
  function mouseClicked(){
  	if(left==1 && index>0) --index;
  	else if(right==1 && index<7) ++index;
  }
 


