/*
 *	game.js
 *	Tyler St. Onge
 *
 *	The main class for Grandma Defense
 */

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

//initialize Player
player = new Player(60,60,gameAssets.getCharacter());

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
			} else {
				player.setTileIndex(player.getPos()+1);
			}
			break;
		case 87: //W?
		case 38: //Up
			player.setTileIndex(player.getPos()-14);
			if(!map.getCollision(player.getPos(),"Player")) {
				player.setY(player.getY()-60);
			} else {
				player.setTileIndex(player.getPos()+14);
			}
			break;
		case 68: // D?
		case 39: //Right
			player.setTileIndex(player.getPos()+1);
			if(!map.getCollision(player.getPos(),"Player")) {
				player.setX(player.getX()+60);
			} else {
				player.setTileIndex(player.getPos()-1);
			}
			break;
		case 83: //S?
		case 40: //Down
			player.setTileIndex(player.getPos()+14);
			if(!map.getCollision(player.getPos(), "Player")) {
				player.setY(player.getY()+60);
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

}

function draw() {
	//Clear the screen between every draw
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//draw map
	map.draw(ctx);

	//draw the player
	if(!player.isDead()) {
		player.draw(ctx);
	}
	
	//draw enemies
	enemies.draw(ctx);
}

var main = function() {
	update();
	draw();
}

//Run the Main method every 20ms.
setInterval("main()",20);
