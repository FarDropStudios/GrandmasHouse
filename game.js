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
	//startScreen,
	//ctxStartScreen,
	lastMove,
	w = window.innerWidth,
	h = window.innerHeight,
	scaleFactor = 1,
	//start = true;

//Setup the canvas and maximize it to window size
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
gui = document.getElementById("gui");
ctxGui = gui.getContext("2d");
//startScreen = document.getElementById("startscreen");
//ctxStartScreen = startScreen.getContext("2d");
canvas.height = 540;
canvas.width = 840;
gui.height = 625;
gui.width = 945;
//startScreen.height = 625;
//startScreen.width = 945;

//Start loading GameAssets
gameAssets = new GameAssets();
gameAssets.loadingStart();

//Start Screen Drawing

//ctxStartScreen.drawImage(gameAssets.getStartPoster(),200,0,640,960);
//ctxStartScreen.fillText("Grandma's House",100,100);

//initialize Player
player = new Player(60,60,gameAssets);

//initialize Enemies
var enemies = new Enemies();
enemies.setGameAssets(gameAssets);
enemies.setPlayer(player);

//initialize RoomFactory
roomFactory = new RoomFactory();

//initialize maps
map = new Map(enemies, player, gameAssets, roomFactory);

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
	player.setPowerUps(PowerUps.use(player.getPowerUps(), click.x, click.y, player, map));
}



function handleHammer(e) {
	enemies.update(map);
	player.moved();
	e.gesture.preventDefault();
	switch(e.gesture.direction) {
		case 'left': 	player.left();
							e.gesture.stopDetect();
							break;
		case 'right': 	player.right();
							e.gesture.stopDetect();
							break;
		case 'up': 		player.up();
							e.gesture.stopDetect();
							break;
		case 'down': 	player.down();
							e.gesture.stopDetect();
							break;
	}
}

//Event Listeners
function setEventListeners() {
	window.addEventListener("keydown", onKeyDown, false);
	Hammer(canvas).on("swipeleft swiperight swipeup swipedown", handleHammer);
}
//function for movement
//possibly add a combat check in the collision here?
function onKeyDown(e) {
	key = e.keyCode;
		if(player.isDead() != true && player.getMind() > 0){
		switch(key) {
			case 49: //Power-up 1 	
				player.setPowerUps(PowerUps.useShortcut(player.getPowerUps(), 1, player, map));
				break;
			case 50: //Power-up 2 	
				player.setPowerUps(PowerUps.useShortcut(player.getPowerUps(), 2, player, map));
				break;
			case 51: //Power-up 3
				player.setPowerUps(PowerUps.useShortcut(player.getPowerUps(), 3, player, map));
				break;
			case 52: //Power-up 4
				player.setPowerUps(PowerUps.useShortcut(player.getPowerUps(), 4, player, map));
				break;
			case 53: //Power-up 5
				player.setPowerUps(PowerUps.useShortcut(player.getPowerUps(), 5, player, map));
				break;
			case 65: 
			case 37: //Left
				player.setTileIndex(player.getPos()-1);
				if(!map.getCollision(player.getPos(), "Player")) {
					player.setX(player.getX()-60);
					player.update(null,null,map);
				} else {
					player.setTileIndex(player.getPos()+1);
				}
				break;
			case 87: 
			case 38: //Up
				player.setTileIndex(player.getPos()-14);
				if(!map.getCollision(player.getPos(),"Player")) {
					player.setY(player.getY()-60);
					player.update(null,null,map);
				} else {
					player.setTileIndex(player.getPos()+14);
				}
				break;
			case 68: 
			case 39: //Right
				player.setTileIndex(player.getPos()+1);
				if(!map.getCollision(player.getPos(),"Player")) {
					player.setX(player.getX()+60);
					player.update(null,null,map);
				} else {
					player.setTileIndex(player.getPos()-1);
				}
				break;
			case 83: 
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
		//if(start) {
			//start = false;
			//startScreen.style.zIndex = -1;
		//}
		player.exitCheck();
		player.moved();
		enemies.update(map);
		lastMove = 0;
	}  		
}

//UPDATE AND DRAW METHODS -- WHERE DA FUN HAPPENS DOE
function update() {
	//why is nothing updating? TG
	//NOW IT DO, *lipsmack*, my cousin eat onehalg peg. TS
	player.guiUpdate();
	enemies.enemiesAiUpdate(map);
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
