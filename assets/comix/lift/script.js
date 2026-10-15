    let right = [], left = [];
    let iLeft = 0; iRight = 0, high = 0, oldHigh = 0, seed;
    async function setup(){
      createCanvas(500, 560);
      for(let i=0; i<10; i++){
    		left[i] = await loadImage("../assets/comix/lift/left"+nf(i, 2)+".webp");
    		right[i] = await loadImage("../assets/comix/lift/right"+nf(i, 2)+".webp");
    		shuffle(left, true);
    		shuffle(right, true);
   		}
   		seed = int(random(278));
    }
    function draw(){
    	randomSeed(seed);
    	tint(255, 20);
    	image(left[iLeft], 0, 0);
    	image(right[iRight], 270, 0); 
			textSize(21);
			high = 9-(int(mouseY/56));
			noStroke();
 			for(let i=0; i<10; i++){
 				fill(random(180, 260), random(140, 210), 120);
 				rect(228, 510-i*56, 40, 40, 5);
 				fill(255);
 				text(i, 242, 538-i*56); 
 			}
 			if(mouseX>228 && mouseX<268 && mouseY>0 && mouseY<560) {
 				noFill();
 				strokeWeight(5);
				stroke(255);
				rect(228, 510-high*56, 40, 40, 5); 
			}
    }
    function mouseClicked(){
				iLeft = high;
				iRight = high;
  }

