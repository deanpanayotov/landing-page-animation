var CANVAS_SIZE_IN_PIXELS = 20;

function init(){
	insertCells();
	fillColors();
}

function random(range){
	return Math.floor(Math.random()*(range - 1));
}

var table = document.getElementById('table');
var rows = new Array(CANVAS_SIZE_IN_PIXELS);
var cells = new Array(CANVAS_SIZE_IN_PIXELS);

function insertCells(){
	for(i = 0; i < CANVAS_SIZE_IN_PIXELS; i++){
		rows[i]	= table.insertRow(table.rows.length);
		cells[i] = new Array(CANVAS_SIZE_IN_PIXELS);
		for(j = 0; j < CANVAS_SIZE_IN_PIXELS; j++){
			cells[i][j] = rows[i].insertCell(j);
		}
	}
}

function fillColors(){
	for(i = 0; i < CANVAS_SIZE_IN_PIXELS; i++){
		for(j = 0; j < CANVAS_SIZE_IN_PIXELS; j++){
			cells[i][j].style.backgroundColor = "rgba("+random(255)+","+random(255)+","+random(255)+",1)";
		}
	}
}

init();
