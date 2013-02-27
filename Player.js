/*
 *	Player.js
 *	Tyler St. Onge
 *
 *	Takes the parameters startX and startY, which initialize where the player is.
 */

var Player = function(startX, startY, image) {
	var x = startX,
		sprite = image,
		y = startY,
		lastMove = 0,
		tileIndex = 15,
		moveTimer = 15,
		spriteLength = 660,
		spriteX = 0,
		tick = 0,
		moveAmount = 60;

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

	var getPos = function() {
		return tileIndex;
	}
	
	var setTileIndex = function(tTileIndex) {
		tileIndex = tTileIndex
	}
	
	var update = function(tx, ty, map) {
		if(tx < x+120 && tx > x+60 && ty > y && ty < y+60) {
			tileIndex+=1;
			if(!map.getCollision(tileIndex)) {
				x+=moveAmount; //Right
			} else {
				tileIndex-=1;
			}
		}else if(tx < x && tx > x-60 && ty > y && ty < y+60) {
			tileIndex-=1;
			if(!map.getCollision(tileIndex)) {
				x-=moveAmount; //Left
			} else {
				tileIndex+=1;
			}
		}else if(ty < y+120 && ty > y+60 && tx > x && tx < x+60) {
			tileIndex+=14;
			if(!map.getCollision(tileIndex)) {
				y+=moveAmount; //Down
			} else {
				tileIndex-=14;
			}
		}else if(ty < y && ty > y-60 && tx > x && tx < x+60) {
			tileIndex-=14;
			if(!map.getCollision(tileIndex)) {
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

	var draw = function(ctx) {
		if(lastMove > 250) {
			if(tick < moveTimer) {
				tick++;
			}
			if(tick === moveTimer) {
				if(spriteX === spriteLength) {
					spriteX = 0;
				} else {
					spriteX += 60;
				}
				tick = 0;
				lastMove = 0;
				ctx.drawImage(sprite,spriteX,0,60,60,x,y,60,60);
			}
		} else {
			lastMove++;
		}
		ctx.drawImage(sprite,spriteX,0,60,60,x,y,60,60);
	}

	var moved = function() {
		lastMove = 0;	
	}
	
	return {
		getX: getX,
		getY: getY,
		setX: setX,
		setY: setY,
		getPos: getPos,
		setTileIndex: setTileIndex,
		update: update,
		moved: moved,
		exitCheck: exitCheck,
		draw: draw
	}
}
