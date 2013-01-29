var canvas,
	ctx,
	w = window.innerWidth,
	h = window.innerHeight,
	scaleFactor = 1;

//Setup the canvas and maximize it to window size
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.height = 540;
canvas.width = 840;

//Start loading GameAssets
gameAssets = new GameAssets();
gameAssets.loadingStart();

//initialize keys
var rat = new Rat(180,120,31);

//initialize Player
player = new Player(60,60,gameAssets.getCharacter());

//initialize maps
map = new Map(gameAssets.getTiles());

/* UNNEEDED CODE? DUNNO, DUN CARE

Set up listeners
setEventHandlers();

Some attempts at making the game crossplatform 

window.addEventListener('resize', function(evt) {
	scaleFactor = Math.min(window.innerWidth/w, window.innerHeight/h);
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	ctx = canvas.getContext("2d");
}, false);



Event handlers
function setEventHandlers() {
	window.addEventListener("keydown", onKeydown, false);
	window.addEventListener("keyup", onKeyup, false);
}

Checks if the key is pressed, if it is change the key in Keys class to True, so it can be checked 
//In other classes.
function onKeydown(e) {
	keys.onKeyDown(e);
}
//Checks when the key is no longer pressed and changes the key in the Keys class to false
function onKeyup(e) {
	keys.onKeyUp(e);
}
*/

//When canvas is clicked, grab the X, and Y coords and update where the player is.
canvas.onclick = function(e) {
	rat.update(map);
	var position = canvas.getBoundingClientRect();
	var click = {
		x: e.clientX - position.left,
		y: e.clientY - position.top
	}
	player.update(click.x,click.y, map); //Send X, Y and the Map object so the player can detect collisions.
	console.log("CLICK!" + " X:"+click.x + " Y:" + click.y);
}

//UPDATE AND DRAW METHODS -- WHERE DA FUN HAPPENS DOE
function update() {
}

function draw() {
	//Clear the screen between every draw
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//draw map
	map.draw(ctx);

	rat.draw(ctx, gameAssets.getRat());

	//draw the player
	player.draw(ctx);

	//Draw a grid guide for debugging and development purposes
	/*
	var index = 0;
	for(var iy = 0; iy < canvas.height; iy++) {
		for(var ix = 0; ix < canvas.width; ix++) {
			ctx.fillStyle = 'rgba(255,250,250,0.2)';
			ctx.fillRect(ix, iy, 61, 61);
			ctx.fillText(index, ix+30, iy+29);
			index++;
			ix+=60;
		}
		iy+=60;
	}
	*/
}

var main = function() {
	update();
	draw();
}

//Run the Main method every 20ms.
setInterval("main()",20);
