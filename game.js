/*
 *	game.js
 *	Tyler St. Onge
 *
 *	The main class for Grandma Defense
 */

var canvas,
	gui,
	ctxGui,
	ctx,
	w = window.innerWidth,
	h = window.innerHeight,
	scaleFactor = 1;

//Setup the canvas and maximize it to window size
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
gui = document.getElementById("gui");
ctxGui = gui.getContext("2d");
canvas.height = 540;
canvas.width = 840;
gui.height = 625;
gui.width = 945;

//Start loading GameAssets
gameAssets = new GameAssets();
gameAssets.loadingStart();

//initialize Player
player = new Player(60,60,gameAssets);

//initialize Enemies
var enemies = new Enemies();
enemies.setGameAssets(gameAssets);

//initialize maps
map = new Map(enemies, player, gameAssets);

//set event listeners
setEventListeners();

//When canvas is clicked, grab the X, and Y coords and update where the player is.
canvas.onclick = function(e) {
	enemies.update(map);
	player.moved();
	var position = canvas.getBoundingClientRect();
	var click = {
		x: e.clientX - position.left,
		y: e.clientY - position.top
	}
	player.update(click.x,click.y, map); //Send X, Y and the Map object so the player can detect collisions.
	console.log("CLICK!" + " X:"+click.x + " Y:" + click.y);
}

//When GUI is clicked grab X and Y coords and send to PowerUps
gui.onclick = function(e) {
	var pos = gui.getBoundingClientRect();
	var click = {
		x: e.clientX - pos.left,
		y: e.clientY - pos.top
	}
	player.setPowerUps(PowerUps.use(player.getPowerUps(), click.x, click.y, player));
}
//Event Listeners
function setEventListeners() {
	window.addEventListener("keydown", onKeyDown, false);
}
//function for movement
//possibly add a combat check in the collision here?
function onKeyDown(e) {
	key = e.keyCode;
	switch(key) {
		case 65: //A?
		case 37: //Left
			player.setTileIndex(player.getPos()-1);
			if(!map.getCollision(player.getPos(), "Player")) {
				player.setX(player.getX()-60);
				player.update(null,null,map);
			} else {
				player.setTileIndex(player.getPos()+1);
			}
			break;
		case 87: //W?
		case 38: //Up
			player.setTileIndex(player.getPos()-14);
			if(!map.getCollision(player.getPos(),"Player")) {
				player.setY(player.getY()-60);
				player.update(null,null,map);
			} else {
				player.setTileIndex(player.getPos()+14);
			}
			break;
		case 68: // D?
		case 39: //Right
			player.setTileIndex(player.getPos()+1);
			if(!map.getCollision(player.getPos(),"Player")) {
				player.setX(player.getX()+60);
				player.update(null,null,map);
			} else {
				player.setTileIndex(player.getPos()-1);
			}
			break;
		case 83: //S?
		case 40: //Down
			player.setTileIndex(player.getPos()+14);
			if(!map.getCollision(player.getPos(), "Player")) {
				player.setY(player.getY()+60);
				player.update(null,null,map);
			} else {
				player.setTileIndex(player.getPos()-14);
			}
			break;
	}
	player.exitCheck();
	player.moved();
	enemies.update(map);		
}

//UPDATE AND DRAW METHODS -- WHERE DA FUN HAPPENS DOE
function update() {
	//why is nothing updating? TG
	//NOW IT DO, *lipsmack*, my cousin eat onehalg peg. TS
	player.guiUpdate();
}

function draw() {
	//Clear the screen between every draw
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctxGui.clearRect(0,0,gui.width, gui.height);

	//draw map
	map.draw(ctx);

	//draw the player
	player.draw(ctx, ctxGui);
	
	//draw enemies
	enemies.draw(ctx);
	ctxGui.drawImage(gameAssets.getGmaNote(), 842, 525, 94,94);
}

var main = function() {
	update();
	draw();
}

//Run the Main method every 20ms.
setInterval("main()",20);
