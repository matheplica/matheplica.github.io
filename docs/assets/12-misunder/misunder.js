  let img = [];
  let banner = 0;
  let index = 0, alpha = 312;
  let left = 0, right = 0;
  async function setup(){
    createCanvas(480, 594);
    for(let i=0; i<8; i++){
  		img[i] = await loadImage("../assets/12-misunder/misunder-"+i+".webp");
 		}
    banner = await loadImage("../assets/12-misunder/banner.webp"); 
  }
  function draw(){
  	if(alpha>0) alpha-=2;
  	tint(255, alpha);
  	image(banner, 0, 480);
  	tint(255, 20);
  	image(img[index], 0, 0);
  	strokeWeight(3);
  	if(index<7){
  	noStroke();
  	fill(175, 20);
  	rect(420, 420, 60, 60, 10);
  	if(mouseX>410 && mouseX<470 && mouseY>420 && mouseY<480){
  			right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(440, 430, 468, 452);
  	line(440, 472, 468, 452);}
  	if(index>0){
  		noStroke();
  		fill(175, 20);
  		rect(0, 420, 60, 60, 10);
  	if(mouseX>0 && mouseX<60 && mouseY>420 && mouseY<480){
  			left = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		left = 0;
  	}
  	line(40, 430, 12, 452);
  	line(40, 472, 12, 452);
  	
  }
  }
  function mouseClicked(){
  	if(left==1 && index>0) --index;
  	else if(right==1 && index<7) ++index;
  }
 


