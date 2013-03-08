/*
 *	Player.js
 *	Tyler St. Onge
 *
 *	Takes the parameters startX and startY, which initialize where the player is.
 */

var Player = function(startX, startY, tGameAssets) {
	var name = "Player";
	var x = startX,
		health = 5;
		gameAssets = tGameAssets,
		sprite = gameAssets.getCharacter(),
		y = startY,
		lastMove = 0,
		tileIndex = 15,
		moveTimer = 15,
		spriteLength = 660,
		spriteX = 0,
		tick = 0,
		moveAmount = 60,
		dead = false;

	var getX = function() {
		return x;
	}

	var getY = function() {
		return y;
	}

	var setX = function(tX) {
		x = tX;
	}

	var setY = function(tY) {
		y = tY;
	}

	var setHealth = function(tH) {
		health = tH;
	}

	var getPos = function() {
		return tileIndex;
	}
	
	var getHealth = function() {
		return health;
	}
	
	var setTileIndex = function(tTileIndex) {
		tileIndex = tTileIndex;
	}
	
	var update = function(tx, ty, map) {
		if(health <= 0) {
			dead = true;
		}
		if(tx < x+120 && tx > x+60 && ty > y && ty < y+60) {
			tileIndex+=1;
			if(!map.getCollision(tileIndex, "Player")) {
				x+=moveAmount; //Right
			} else {
				tileIndex-=1;
			}
		}else if(tx < x && tx > x-60 && ty > y && ty < y+60) {
			tileIndex-=1;
			if(!map.getCollision(tileIndex, "Player")) {
				x-=moveAmount; //Left
			} else {
				tileIndex+=1;
			}
		}else if(ty < y+120 && ty > y+60 && tx > x && tx < x+60) {
			tileIndex+=14;
			if(!map.getCollision(tileIndex, "Player")) {
				y+=moveAmount; //Down
			} else {
				tileIndex-=14;
			}
		}else if(ty < y && ty > y-60 && tx > x && tx < x+60) {
			tileIndex-=14;
			if(!map.getCollision(tileIndex, "Player")) {
				y-=moveAmount; //Up
			} else {
				tileIndex+=14;
			}
		}
		if(tileIndex === map.getExit()) {
			x = 60;
			y = 60;
			tileIndex=15;
			if(map.getRoom() === 1)
				map.setRoom(-1);
			else
				map.setRoom(1);
		}
		console.log(tileIndex);
	}

	var exitCheck = function() {
		if(tileIndex === map.getExit()) {
			x = 60;
			y = 60;
			tileIndex=15;
			if(map.getRoom() === 1)
				map.setRoom(-1);
			else
				map.setRoom(1);
		}
	}

	var draw = function(ctx, guiCtx) {
		if(lastMove > 250) {
			if(tick < moveTimer) {
				tick++;
			}
			if(tick === moveTimer) {
				if(spriteX === spriteLength) {
					spriteX = 0;
					lastMove = 0;
				} else {
					spriteX += 60;
				}
				tick = 0;
				ctx.drawImage(gameAssets.getCharacter,spriteX,0,60,60,x,y,60,60);
			}
		} else {
			lastMove++;
			spriteX = 0;
		}
		//spritePositionX changes depending on health
		//IF STATEMENTS to set healthPosX
		//guiCtx.drawImage(IMAGE, spritePositionX, 0, 16, 16, X(around 10), >540, 60, 60);
		ctx.drawImage(sprite,spriteX,0,60,60,x,y,60,60);
	}

	var moved = function() {
		lastMove = 0;	
	}
	
	var getName = function() {
		return name;
	}
	
	var isDead = function() {
		return dead;
	}
	
	return {
		getName: getName,
		getX: getX,
		getY: getY,
		getHealth: getHealth,
		setX: setX,
		setY: setY,
		setHealth: setHealth,
		getPos: getPos,
		setTileIndex: setTileIndex,
		update: update,
		moved: moved,
		exitCheck: exitCheck,
		isDead: isDead,
		draw: draw
	}
}