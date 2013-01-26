var canvas,
	ctx;

//Setup the canvas and maximize it to window size
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);	
}

function draw() {
		
}

var main = function() {
	update();
	draw();
}

setInterval("main()",20);
