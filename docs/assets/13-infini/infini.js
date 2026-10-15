  let img = [];
  let index = 0,  xpos = 0;
  let left = 0, right = 0;
  async function setup(){
    createCanvas(480, 540);
    for(let i=0; i<16; i++){
  		img[i] = await loadImage("../assets/13-infini/infini-"+nf(i, 2)+".webp");
 		}
    
  }
  function draw(){
  	background(255);
  	image(img[max(0, index-1)], xpos-480, 0);
  	image(img[index], xpos, 0);
  	image(img[min(15, index+1)], xpos+480, 0);
  	if(xpos>0) xpos-=5;
  	else if(xpos<0) xpos+=8;
  	strokeWeight(3);
  	if(index<15){
  	noStroke();
  	fill(175, 90);
  	rect(420, 480, 60, 60, 10);
  	if(mouseX>410 && mouseX<470 && mouseY>480 && mouseY<540){
  			right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(440, 490, 468, 512);
  	line(440, 532, 468, 512);}
  	if(index>0){
  		noStroke();
  		fill(175, 90);
  		rect(0, 480, 60, 60, 10);
  	if(mouseX>0 && mouseX<60 && mouseY>480 && mouseY<540){
  			left = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		left = 0;
  	}
  	line(40, 490, 12, 512);
  	line(40, 532, 12, 512); 	
  	}
  }
  function mouseClicked(){
  	if(left==1 && index>0){ 
  		 index--;
  		 xpos = -480;	 		
  	}else if(right==1 && index<15){
  		index++;;
	  	xpos = 480;
	  	}
  }
