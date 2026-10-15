  let img = [];
  let index = 0;
  let left = 0, right = 0;
  async function setup(){
    createCanvas(397, 559);
    for(let i=0; i<8; i++){
  		img[i] = await loadImage("../assets/10-pratique/pratique-"+i+".webp");
 		}
    
  }
  function draw(){
  	tint(255, 20);
  	image(img[index], 0, 0);
  	strokeWeight(3);
  	if(index<7){
  	noStroke();
  	fill(175, 20);
  	rect(330, 288, 60, 60, 10);
  	if(mouseX>320 && mouseX<380 && mouseY>288 && mouseY<348){
  			right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(350, 300, 378, 320);
  	line(350, 340, 378, 320);}
  	if(index>0){
  		noStroke();
  		fill(175, 20);
  		rect(0, 288, 60, 60, 10);
  	if(mouseX>0 && mouseX<60 && mouseY>288 && mouseY<348){
  			left = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		left = 0;
  	}
  	line(40, 300, 12, 320);
  	line(40, 340, 12, 320);
  	
  }
  }
  function mouseClicked(){
  	if(left==1 && index>0) --index;
  	else if(right==1 && index<7) ++index;
  }
 


