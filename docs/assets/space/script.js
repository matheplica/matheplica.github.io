let img = [], arr = [];
let index = 0, left = 0, right = 0;
let msg = "]µ#|&[³", newMsg = "";
async function setup(){
  createCanvas(390, 510);
  for(let i=0; i<9; i++){
		img[i] = await loadImage("../assets/space/space"+i+".webp");
	}
	randMsg();
}
function draw(){
	tint(255, 16);
	image(img[index], 0, 30);
	strokeWeight(3);
	fill(0);
	noStroke();
	rect(0, 0, width, 30, 24);
	rect(0, 15, width, 15);
	rect(0, 420, width, 30);
	rect(0, 420, width, 90, 24);
	noStroke();
	fill(255, 220);
	textSize(44);
	text(newMsg, 98, 472);
	if(index<8){
	if(mouseX>330 && mouseX<390 && mouseY>430 && mouseY<490){
			right = 1;
			stroke(80);
	}else{ 
		stroke(255, 220);
	right = 0;
	}
	line(350, 442, 376, 462);
	line(350, 482, 376, 462);}
	if(index>0){
	if(mouseX>0 && mouseX<60 && mouseY>430 && mouseY<490){
			left = 1;
			stroke(80);
	}else{ 
		stroke(255, 220);
		left = 0;
	}
	line(40, 442, 12, 462);
	line(40, 482, 12, 462);
	}
}
function mouseClicked(){
	if(left==1 && index>0){ --index;
		randMsg();
	}else if(right==1 && index<8){ ++index;
		randMsg();
}}
function randMsg(){
	newMsg = "";
    for(let i=0; i<8; i++){
    	let j = msg.charAt(Math.floor(Math.random() * 8));
         newMsg += j;
    }
}



