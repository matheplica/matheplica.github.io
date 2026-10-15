    let img = [], left = [];
    let index = 0, oldIndex = 0, seed = 0;
    let sinus = 0.3;
    let x = 0, y = 0, alpha = 255, mode = -1, number = 15;    		
    async function setup(){
      createCanvas(480, 600);
      for(let i=0; i<16; i++){
    		img[i] = await loadImage("../assets/comix/4x4/4x"+nf(i, 2)+".webp");
   			left[i] = false;
   		}
   		index = int(random(16));
   		left[index] = false;
   		seed = int(random(1000));
    }
    function draw(){
       	randomSeed(seed);     
      	if(number==0) {
      	if(frameCount%12==0) seed++;   
      	noStroke();
     	  fill(255);
      	rect(0, 0, width,60);
    	  rect(0, 540, width, 60);    	
      	fill(0, 190);
      	text("Tu as tout", 170, 40);
      	text("découvert !", 176, 580); 
      	tint(255, 8);
      	image(img[index], 0, 60);
      }else{     
  	    background(255);
        fill(255);
		    tint(255);
		    image(img[oldIndex], 0, 60); 
		    tint(255, alpha);
		    image(img[index], x, y+60);
      }
      strokeWeight(4);
      stroke(160);
      if(mouseX<60 && mouseX>0 && mouseY<60 && mouseY>0) stroke(255, 20, 20);
      line(20, 20, 50, 50);
      line(20, 20, 20, 40);
      line(20, 20, 40, 20);
      stroke(160);
      if(mouseX>420 && mouseX<480 && mouseY<60 && mouseY>0) stroke(155, 20, 120);
      line(460, 20, 430, 50);
      line(460, 20, 460, 40);
      line(460, 20, 440, 20);
      stroke(160);
      if(mouseX<60 && mouseX>0 && mouseY>540 && mouseY<600) stroke(205, 220, 20);
      line(20, 580, 50, 550);
      line(20, 580, 20, 560);
      line(20, 580, 40, 580);
      stroke(160);
      if(mouseX>420 && mouseX<480 && mouseY>540 && mouseY<600) stroke(155, 120, 220);
      line(460,580, 430, 550);
      line(460,580, 460, 560);
      line(460,580, 440, 580);
      textSize(30);
      fill(0);
      noStroke();
      if(number>2) text("Il reste "+number+" dessins à voir", 74, 580);
      else if(number==2) text("Il en reste encore deux", 84, 580);
      else if(number==1) text("Plus que un, courage", 94, 580);
      if(number>0) text("Choisis ta route", 128, 40);
      if(mode==0){
      	if(x<0) x+=0.25;
      	y = x;
      }else if(mode==1){
      	if(x>0) x-=0.25;
      	y = -x;
			}else if(mode==2){
      	if(x<0) x+=0.25;
      	y = -x;
			}else if(mode==3){
      	if(x>0) x-=0.25;
      	y = x;
      }
      if(alpha<255) alpha+=4;
      else mode = -1;
      for(let i=0; i<3; i++){
   	    if(number==0){ fill(random(192, 300), random(80), random(280), 1);
   	    	circle(random(100, 400), random(200, 400), random(240, 340));
   	    }else {fill(192, random(180), random(240), alpha/9);
    	  	circle(random(100, 400), random(160, 460), random(140, 240));
    	 }}
    }
    function mouseClicked(){
    	if(mouseX<60 && mouseX>0 && mouseY<60 && mouseY>0){ 
    		oldIndex = index;
    		mode = 0;
    		index = (index+12)%16;
    		x = y = -12;
    		adapt(); 
    		}else if(mouseX>420 && mouseX<480 && mouseY<60 && mouseY>0){ 
    		oldIndex = index;  
    		mode = 1;
    		index = 4*int(index/4)+((index+3)%4);
    		x = 12;
    		y = -12;
    		adapt(); 
    		}else if(mouseX<60 && mouseX>0 && mouseY>540 && mouseY<600){  
    		oldIndex = index;   	
    		mode = 2;
    		index = 4*int(index/4)+((index+1)%4);
    		x=-12;
    		y=12;
    		adapt(); 
    		}else if(mouseX>420 && mouseX<480 && mouseY>540 && mouseY<600){  
    		oldIndex = index;  	
    		mode = 3;
    		index = (index+4)%16;
    		x = y = 12;
    		adapt(); 
    		}  
  }
  function adapt(){
  		seed++;
    	left[index] = true;
    	number = 0;
    	alpha = 0;
    	for(let i=0; i<15; i++){
    		if(left[i]==false) ++number;
    	}
    	
  }
