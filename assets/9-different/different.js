  let img = [];
  let index = 0;
  let left = 0, right = 0;
  async function setup(){
    createCanvas(396, 630);
    for(let i=0; i<15; i++){
  		img[i] = await loadImage("../assets/9-different/different-"+nf(i, 2)+".webp");
 		}
    
  }
  function draw(){
  	tint(255, 20);
  	image(img[index], 0, 0);
  	strokeWeight(3);
  	if(index<14){
  	noStroke();
  	fill(175, 20);
  	rect(335, 340, 60, 60, 10);
  	if(mouseX>330 && mouseX<390 && mouseY>340 && mouseY<400){
  			right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(357, 352, 385, 372);
  	line(357, 392, 385, 372);}
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
  	line(40, 352, 12, 372);
  	line(40, 392, 12, 372);
  	
  }
  }
  function mouseClicked(){
  	if(left==1 && index>0) --index;
  	else if(right==1 && index<14) ++index;
  }
 


