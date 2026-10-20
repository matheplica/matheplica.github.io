    let right = [], left = [];
    let index = 0, move = 0;
    async function setup(){
      createCanvas(396, 496);
      for(let i=0; i<5; i++){
    		left[i] = await loadImage("../assets/comix/colors/color-"+i+"A.webp");
    		right[i] = await loadImage("../assets/comix/colors/color-"+i+"B.webp");
   		}
    }
    function draw(){
    	//background(255);
    	fill(255);
    	noStroke();
    	rect(0, 0, width, 40);
    	rect(0, 436, width, 40);
    	fill(0);
    	textSize(24);
    	text("Click où tu veux", 100, 30);
    	if(index==4) text("Dessins colorisés par Zsuzy Toth", 20, 470);
    	tint(255, 24);
    	if(move<0) move +=3;
    	image(left[index], move, 40);
    	image(right[index], 198-move, 40); 
    }
    function mouseClicked(){
    		move = -198;
				index = ++index%5;
  }

