var BASE_COLORS = [
	// new Color(207, 41, 12, 3, 3, 3),
	// new Color(216, 92, 16, 3, 3, 3),
	// new Color(224, 94, 24, 3, 3, 3),
	// new Color(234, 64, 44, 3, 3, 3),
	// new Color(6  , 64, 58, 3, 3, 3),
	// new Color(12 , 93, 60, 3, 3, 3),
	// new Color(16 , 64, 84, 3, 3, 3),
	// new Color(15 , 64, 88, 3, 3, 3),
	new Color(292, 41, 12, 3, 3, 3),
	new Color(305, 92, 16, 3, 3, 3),
	new Color(316, 94, 24, 3, 3, 3),
	new Color(330, 64, 44, 3, 3, 3),
	new Color(8  , 64, 58, 3, 3, 3),
	new Color(17 , 93, 60, 3, 3, 3),
	new Color(23 , 64, 84, 3, 3, 3),
	new Color(21 , 64, 88, 3, 3, 3),
];

function Color(h, s, l, hvar, svar, lvar){
	this.h = h;
	this.s = s;
	this.l = l;
	this.hvar = hvar;
	this.svar = svar;
	this.lvar = lvar;

	this.getColor = function(){
		return "hsl("+
			(h+random2(hvar*-1,hvar))+
			","+ 
			(s+random2(svar*-1,svar))+
			"%,"+
			(l+random2(lvar*-1,lvar))+
			"%)";
	}
};


var CANVAS_SIZE_IN_PIXELS = 20;

function init(){
	insertCells();
	fillColors();
}

function fiftyfifty() {
    return (Math.round(Math.random()) === 0);
}

function random(range){
	return Math.floor(Math.random()*(range - 1));
}

function random2(min, max){
	if(min > max){
		var t = max;
		max = min;
		min = t;
	}
	return Math.floor(Math.random() * (max - min) + min);
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
			//cells[i][j].setBackgroundColor("rgba("+random(255)+","+random(255)+","+random(255)+",1)");
			cells[i][j].setBackgroundColor(BASE_COLORS[random(BASE_COLORS.length)].getColor());
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
