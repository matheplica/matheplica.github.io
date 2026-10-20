  let img = [];
  let index = 0, left = 0, right = 0, rot1 = 0.0, rot2 = 0.0;
  async function setup(){
    createCanvas(390, 558);
    for(let i=0; i<15; i++){
  		img[i] = await loadImage("../assets/collages/col-"+nf(i, 2)+".webp");
 		}
    
  }
  function draw(){
  	tint(255, 36);
  	imageMode(CENTER);
  	push();
  	if(rot1<0.01) rot1 += 0.04;
  	else if(rot2>0.01) rot2 -= 0.04;
  	translate(width/2, height/2);
  	rotate(rot1);
  	rotate(rot2);
  	image(img[index], 0, 0);
  	pop();
  	strokeWeight(3);
  	if(index<14){
  	noStroke();
  	fill(175, 20);
  	rect(330, 308, 60, 60, 10);
  	if(mouseX>330 && mouseX<390 && mouseY>308 && mouseY<368){
  			right = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  	right = 0;
  	}
  	line(350, 320, 376, 340);
  	line(350, 360, 376, 340);}
  	if(index>0){
  		noStroke();
  		fill(175, 20);
  		rect(0, 308, 60, 60, 10);
  	if(mouseX>0 && mouseX<60 && mouseY>308 && mouseY<368){
  			left = 1;
				stroke(80);
  	}else{ 
  		stroke(255);
  		left = 0;
  	}
  	line(40, 320, 12, 340);
  	line(40, 360, 12, 340);
  }}
  function mouseClicked(){
  	if(left==1 && index>0){ 
  	--index;
  	rot2 = int(random(2, 5))*0.4;
  	}else if(right==1 && index<14){
  	 rot1 = -int(random(2, 5))*0.4;
  	 ++index;}
  }
 


