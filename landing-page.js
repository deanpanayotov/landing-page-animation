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
			cells[i][j] = new Cell(rows[i].insertCell(j));
		}
	}
}

function fillColors(){
	for(i = 0; i < CANVAS_SIZE_IN_PIXELS; i++){
		for(j = 0; j < CANVAS_SIZE_IN_PIXELS; j++){
			cells[i][j].setBackgroundColor("rgba("+random(255)+","+random(255)+","+random(255)+",1)");
		}
	}
}

function Cell(cell){
	this.cell = cell;
	this.active = false;
	this.backgroundColor = "#FCC347";
	cell.style.backgroundColor = this.backgroundColor;
	this.setBackgroundColor = function (color) {
		cell.style.backgroundColor = color;
	}
}

init();
