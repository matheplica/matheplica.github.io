let tables = [], numberFile;

function preload() {
    for(let i=0;i<2; i++){
       tables[i] = loadTable('rapport'+i+'.csv', 'csv', 'header');
    } 
}
function setup() {
	createCanvas(500, 300);
 
}
function draw(){
  background(20, 20, 212);
  textSize(32);
  fill(255);
  stroke(255);
  for(let k = 0; k<tables.length; k++){
    for (let r = 0; r < tables[k].getRowCount(); r++){
      for (let c = 0; c < tables[k].getColumnCount(); c++) {
        text(tables[k].getString(r, c), r*60, c*90+k*30);
      }
    }
  }
}
