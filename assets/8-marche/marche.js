  let img = [];
  let index = 0, haut = 0, bas = 0, ypos = 0;
  async function setup(){
    createCanvas(396, 420);
    for(let i=0; i<12; i++){
  		img[i] = await loadImage("../assets/8-marche/marche-"+nf(i, 2)+".webp");
 		}   
  }
  function draw(){
  	image(img[max(0, index-1)], 0, ypos-210);
  	image(img[index], 0, ypos+70);
  	image(img[min(11, index+1)], 0, ypos+350);
  	fill(255);
  	noStroke();
  	rect(0, 0, 396, 80);
  	rect(0, 340, 396, 80);
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
  		rect(300, 360, 60, 60, 10);
  	if(mouseX>300 && mouseX<360 && mouseY>360 && mouseY<420){
  			bas = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		bas = 0;
  	}
  		line(310, 382, 332, 400);
  		line(350, 382, 332, 400); 	
  	}
  }
  function mouseClicked(){
  	if(haut==1 && index>0){ 
  		ypos = -280;
  		--index;
  	}else if(bas==1 && index<11){ 
	  	++index;	
  		ypos = 280;
  	
  	}
  }
 


