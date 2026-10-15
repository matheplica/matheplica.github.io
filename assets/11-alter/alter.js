  let img = [];
  let index = 0;
  let left = 0, right = 0;
  async function setup(){
    createCanvas(480, 612);
    for(let i=0; i<16; i++){
  		img[i] = await loadImage("../assets/11-alter/alter-"+nf(i, 2)+".webp");
 		}
    
  }
  function draw(){
  	tint(255, 20);
  	image(img[index], 0, 0);
  	strokeWeight(3);
  	if(index<15){
  	noStroke();
  	fill(175, 20);
  	rect(420, 288, 60, 60, 10);
  	if(mouseX>410 && mouseX<470 && mouseY>288 && mouseY<348){
  			right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(440, 300, 468, 320);
  	line(440, 340, 468, 320);}
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
  	else if(right==1 && index<15) ++index;
  }
 


