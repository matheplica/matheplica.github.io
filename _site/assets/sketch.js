var allMenuItems;
var selMenu = -1, memMenu; indexCol = 0;
var canvas, first, press, alpha, down, yLine = -240, rotLine, colLine; 
var nLines = 30;
var cols = [];
var r = [];
let back, newBack;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  canvas.position(x, 212);
}
function windowResized() {
  centerCanvas();
}
function out(target, it) {
  var returnFunction = function(event) {  
   allMenuItems[it].style('background-color', '#fff');
   selMenu = -1; 
   press = false;
  }
return returnFunction;
}
function mouseReleased(){
newBack = back;
storeItem('newBack', newBack);
}
function mousePressed(){
press = false;
down = true;
}
function over(target, it) {
  var returnFunction = function(event) {
   selMenu = it;
  press = true;
  }
return returnFunction;
}
function setup() {
 canvas = createCanvas(450, 450);
 centerCanvas();
 canvas.style('z-index', '-1');
 allMenuItems = selectAll('.menu'); 
 url = getURL();
 if(url.endsWith('y/')||url.endsWith('x/')||url.endsWith('c/')||url.endsWith('e/')||url.endsWith('i/')||url.endsWith('t/')) first = false;
 else{ 
   select('footer').position(windowWidth/2-148, 640);
 first = true;}
 newBack = getItem('newBack');
 for(var i=0; i<nLines; i++){
 	cols[i] = color(random(255), random(210), 60);
 	r[i] = random(8, 48);
 }
 for(var iteration in allMenuItems) {
    menuItem = allMenuItems[iteration];
    menuItem.mouseOver(over(menuItem, iteration));
    menuItem.mouseOut(out(menuItem, iteration));
  }
  alpha = 255;
  rotLine = random(TWO_PI);
  colLine = color(random(128, 255), random(128, 210), 60, 120);
}
function draw(){
if(press){
if(selMenu==0) allMenuItems[0].style('background-color', back = color(128,random(128,255),random(128,255)));
else if(selMenu==1) allMenuItems[1].style('background-color', back = color(random(128, 255),random(128,255), 128));
else if(selMenu==2) allMenuItems[2].style('background-color', back = color(random(128, 255),128,random(128,255)));
else if(selMenu==3) allMenuItems[3].style('background-color', back = color(255,random(128,255),random(128,255)));
else if(selMenu==4) allMenuItems[4].style('background-color', back = color(random(128, 255),128,random(128,255)));
else if(selMenu==5) allMenuItems[5].style('background-color', back = color(random(128, 255),random(128,255),255));
}
if(!first){
fill(newBack);
noStroke();
rect(0, 0, width, height);
}else {drawBackground();}
if(first){ 
if(alpha>44) alpha-= 3; }
else {
if(alpha>182) alpha -= 1;
}
if(down && !first) alpha += 15;
else if(down && first) alpha += 35;
noStroke();
fill(255, alpha);
rect(0, 0, width, height);
push();
if(!first){
if(yLine>260){
colLine = color(random(128, 255), random(128, 210), 60, 120);
rotLine = random(TWO_PI);
yLine = -int(random(720, 1024));
}
translate(width/2, height/2);
yLine += 2;
rotate(rotLine);
stroke(colLine);
strokeWeight(30);
line(-300, yLine, 300, yLine);
pop();}
drawLogo();
}
function drawBackground(){
background(255, 201, 20);
for (var i=0; i<nLines; i++) {
 r[i] += random(-4, 4);
//offset[i] += random(0, 3);
if(indexCol==i) cols[i] = color(random(255), random(210), 60);
stroke(cols[i]);
strokeWeight(r[i]);
line(0, i*32, width, i*8-92);
}
if(indexCol<nLines){ 
if(frameCount%6==0) indexCol = int(random(0, nLines));}
else indexCol = 0;
}
function drawLogo(){
noStroke();
fill(255);
 beginShape();
  vertex(0, 0);
  vertex(width, 0);
  vertex(width, height);
  vertex(0, height);
  beginContour();
  vertex(368, 31);
  vertex(240, 31);
  vertex(240, 66);
  vertex(174, 67);
  vertex(174, 102);
  vertex(99, 102);
  vertex(99, 138);
  vertex(31, 137);
  vertex(31, 369);
  vertex(262, 369);
  vertex(262, 301);
  vertex(297, 301);
  vertex(298, 227);
  vertex(333, 226);
  vertex(333, 159);
  vertex(369, 159);
  endContour();
  beginContour();
  vertex(348, 52);
  vertex(263, 53);
  vertex(263, 66);
  vertex(333, 66);
  vertex(333, 138);
  vertex(348, 138);
  endContour();
  beginContour();
  vertex(312, 88);
  vertex(263, 89);
  vertex(262, 102);
  vertex(298, 102);
  vertex(299, 138);
  vertex(313, 138);
  endContour();
  beginContour();
  vertex(120, 280);
  vertex(120, 159);
  vertex(174, 159);
  vertex(173, 226);
  vertex(241, 226);
  vertex(241, 281);
  endContour();
  beginContour();
  vertex(52, 348);
  vertex(52, 159);
  vertex(98, 159);
  vertex(98, 302);
  vertex(241, 302);
  vertex(241, 348);
  endContour();
  beginContour();
  vertex(195, 89);
  vertex(195, 101);
  vertex(241, 101);
  vertex(241, 89);
  endContour();
  beginContour();
  vertex(195, 124);
  vertex(195, 138);
  vertex(239, 138);
  vertex(241, 124);
  endContour();
  beginContour();
  vertex(120, 124);
  vertex(120, 138);
  vertex(174, 138);
  vertex(174, 124);
  endContour();
  beginContour();
  vertex(195, 206);
  vertex(195, 160);
  vertex(241, 159);
  vertex(241, 205);
  endContour();
  beginContour();
  vertex(262, 205);
  vertex(262, 159);
  vertex(275, 159);
  vertex(276, 205);
  endContour();
  beginContour();
  vertex(312, 205);
  vertex(312, 159);
  vertex(298, 160);
  vertex(298, 205);
  endContour();
  beginContour();
  vertex(276, 280);
  vertex(276, 226);
  vertex(262, 226);
  vertex(262, 280);
  endContour();
  beginContour();
  vertex(275, 124);
  vertex(275, 138);
  vertex(262, 137);
  vertex(262, 125);
  endContour();
  endShape();
}

