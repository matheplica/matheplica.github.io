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
 if(url.endsWith('r/')||url.endsWith('x/')||url.endsWith('t/')||url.endsWith('e/')||url.endsWith('i/')||url.endsWith('t/')) first = false;
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
  vertex(378, 31);
  vertex(250, 31);
  vertex(250, 66);
  vertex(184, 67);
  vertex(184, 102);
  vertex(109, 102);
  vertex(109, 138);
  vertex(41, 137);
  vertex(41, 369);
  vertex(272, 369);
  vertex(272, 301);
  vertex(308, 301);
  vertex(308, 227);
  vertex(343, 226);
  vertex(343, 159);
  vertex(378, 159);
  endContour();
  beginContour();
  vertex(358, 52);
  vertex(273, 53);
  vertex(273, 66);
  vertex(343, 66);
  vertex(343, 138);
  vertex(358, 138);
  endContour();
  beginContour();
  vertex(322, 88);
  vertex(273, 89);
  vertex(273, 102);
  vertex(308, 102);
  vertex(308, 138);
  vertex(322, 138);
  endContour();
  beginContour();
  vertex(130, 280);
  vertex(130, 159);
  vertex(184, 159);
  vertex(184, 226);
  vertex(251, 226);
  vertex(251, 281);
  endContour();
  beginContour();
  vertex(62, 348);
  vertex(62, 159);
  vertex(108, 159);
  vertex(108, 302);
  vertex(251, 302);
  vertex(251, 348);
  endContour();
  beginContour();
  vertex(205, 89);
  vertex(205, 101);
  vertex(251, 101);
  vertex(251, 89);
  endContour();
  beginContour();
  vertex(205, 124);
  vertex(205, 138);
  vertex(249, 138);
  vertex(249, 124);
  endContour();
  beginContour();
  vertex(130, 124);
  vertex(130, 138);
  vertex(184, 138);
  vertex(184, 124);
  endContour();
  beginContour();
  vertex(205, 206);
  vertex(205, 160);
  vertex(251, 159);
  vertex(251, 205);
  endContour();
  beginContour();
  vertex(272, 205);
  vertex(272, 159);
  vertex(285, 159);
  vertex(285, 205);
  endContour();
  beginContour();
  vertex(322, 205);
  vertex(322, 159);
  vertex(308, 160);
  vertex(308, 205);
  endContour();
  beginContour();
  vertex(286, 280);
  vertex(286, 226);
  vertex(272, 226);
  vertex(272, 280);
  endContour();
  beginContour();
  vertex(285, 124);
  vertex(285, 138);
  vertex(272, 137);
  vertex(272, 125);
  endContour();
  endShape();
}
