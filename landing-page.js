var CANVAS_SIZE_IN_PIXELS = 300;

function init(){
	draw();
}

function random(range){
	return Math.floor(Math.random()*(range - 1));
}

function draw(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	canvas.height = CANVAS_SIZE_IN_PIXELS;
	canvas.width = CANVAS_SIZE_IN_PIXELS;
	for(i = 0; i < CANVAS_SIZE_IN_PIXELS; i++){
		for(j = 0; j < CANVAS_SIZE_IN_PIXELS; j++){
			context.fillStyle = "rgba("+random(255)+","+random(255)+","+random(255)+",1)";
			context.fillRect(i,j,1,1);
		}
	}
}

init();
