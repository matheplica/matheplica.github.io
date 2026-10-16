    let right = [], left = [];
    let iLeft = 0; iRight = 0, high = 0, seed;
    async function setup(){
      createCanvas(396, 444);
      for(let i=0; i<10; i++){
    		left[i] = await loadImage("../assets/comix/lift/left"+nf(i, 2)+".webp");
    		right[i] = await loadImage("../assets/comix/lift/right"+nf(i, 2)+".webp");
    		shuffle(left, true);
    		shuffle(right, true);
   		}
   		seed = int(random(276));
    }
    function draw(){
    	randomSeed(seed);
    	tint(255, 20);
    	image(left[iLeft], 0, 0);
    	image(right[iRight], 216, 0); 
			textSize(21);
			high = 9-(int(mouseY/44));
			noStroke();
 			for(let i=0; i<10; i++){
 				fill(random(180, 260), random(140, 210), 120);
 				rect(184, 404-i*44, 30, 30, 5);
 				fill(255);
 				text(i, 193, 428-i*44); 
 			}
 			if(mouseX>184 && mouseX<214 && mouseY>0 && mouseY<424) {
 				noFill();
 				strokeWeight(5);
				stroke(255);
				rect(184, 404-high*44, 30, 30, 5); 
			}
    }
    function mouseClicked(){
				iLeft = high;
				iRight = high;
  }

