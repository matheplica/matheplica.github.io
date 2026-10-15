  let img = [];
  let index = 0, haut = 0, bas = 0, ypos = 0;
  async function setup(){
    createCanvas(480, 460);
    for(let i=0; i<12; i++){
  		img[i] = await loadImage("../assets/8-marche/marche-"+nf(i, 2)+".webp");
 		}   
  }
  function draw(){
  	image(img[max(0, index-1)], 0, ypos-280);
  	image(img[index], 0, ypos+60);
  	image(img[min(11, index+1)], 0, ypos+400);
  	fill(255);
  	noStroke();
  	rect(0, 0, 480, 60);
  	rect(0, 400, 480, 60);
  	if(ypos>0) ypos-=4;
  	else if(ypos<0) ypos+=5;
  	strokeWeight(3);
  	if(index>0){
  		 	noStroke();
 		  	fill(175);
  		rect(20, 0, 60, 60, 10);
  	if(mouseX>20 && mouseX<80 && mouseY>0 && mouseY<60){
  			haut = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		haut = 0;
  	}
  		line(30, 36, 50, 18);
  		line(70, 36, 50, 18);
  	}
  	if(index<11){
  	noStroke();
  		fill(175);
  		rect(390, 400, 60, 60, 10);
  	if(mouseX>390 && mouseX<450 && mouseY>400 && mouseY<460){
  			bas = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		bas = 0;
  	}
  		line(400, 422, 422, 440);
  		line(440, 422, 422, 440); 	
  	}
  }
  function mouseClicked(){
  	if(haut==1 && index>0){ 
  		ypos = -340;
  		--index;
  	}else if(bas==1 && index<11){ 
	  	++index;	
  		ypos = 340;
  	
  	}
  }
 


