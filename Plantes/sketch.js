let tables = [], numberFile;

function preload() {
    numberFile = loadStrings('number.txt');  
}
function setup() {
	createCanvas(500, 300);
  for(let i=0;i<numberFile; i++){
       tables[i] = loadTable('rapport'+i+'.csv', 'csv', 'header');
    }
}
function draw(){
  background(200, 220, 212);
  textSize(32);
  for(let k = 0; k<tables.length; k++){
    for (let r = 0; r < tables[k].getRowCount(); r++){
      for (let c = 0; c < tables[k].getColumnCount(); c++) {
        text(tables[k].getString(r, c), r*60, c*90+k*30);
      }
    }
  }
}
