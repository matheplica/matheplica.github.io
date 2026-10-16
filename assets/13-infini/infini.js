  let img = [];
  let index = 0,  xpos = 0;
  let left = 0, right = 0;
  async function setup(){
    createCanvas(396, 404);
    for(let i=0; i<16; i++){
  		img[i] = await loadImage("../assets/13-infini/infini-"+nf(i, 2)+".webp");
 		}
    
  }
  function draw(){
  	background(255);
  	image(img[max(0, index-1)], xpos-396, 0);
  	image(img[index], xpos, 0);
  	image(img[min(15, index+1)], xpos+396, 0);
  	if(xpos>0) xpos-=4;
  	else if(xpos<0) xpos+=6;
  	strokeWeight(3);
  	if(index<15){
  	noStroke();
  	fill(175, 90);
  	rect(336, 344, 60, 60, 10);
  	if(mouseX>336 && mouseX<396 && mouseY>344 && mouseY<404){
  			right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(356, 356, 386, 376);
  	line(356, 396, 386, 376);
  	
  	}
  	if(index>0){
  		noStroke();
  		fill(175, 90);
  		rect(0, 344, 60, 60, 10);
  	if(mouseX>0 && mouseX<60 && mouseY>344 && mouseY<404){
  			left = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		left = 0;
  	}
  	line(40, 356, 12, 376);
  	line(40, 396, 12, 376); 	
  	}
  }
  function mouseClicked(){
  	if(left==1 && index>0){ 
  		 index--;
  		 xpos = -396;	 		
  	}else if(right==1 && index<15){
  		index++;;
	  	xpos = 396;
	  	}
  }
