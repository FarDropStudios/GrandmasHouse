/*
 *	wigDemon.js
 *	Tyler St. Onge
 *
 *	Contains all values for each individual rat
 */
 
var WigDemon = function(startX, startY, tTileIndex, tImage) {
	var x = startX,
		sprite = tImage,
		y = startY,
		tileIndex = tTileIndex, 
		health = 1,
		moveTimer = 15,
		spriteLength = 540,
		spriteX = 0,
		tick = 0,
		moveAmount = 120,
		chance;

	var getPos = function() {
		return tileIndex;
	}
	
	var getHealth = function() {
		return health;
	}

	var setHealth = function(tHealth) {
		health = tHealth;
	}

	var update = function(map) {
		chance = Math.random();
		if(chance <= 0.20) {
			//DOWN
			tileIndex+=28;
			if(!map.getCollision(tileIndex) && y+moveAmount < 540) {
				y+=moveAmount;
			} else {
				tileIndex-=28;
			}
		} else if(chance > 0.20 && chance <= 0.30) {
			//UP
			tileIndex-=28;
			if(!map.getCollision(tileIndex) && y-moveAmount > 0) {
				y-=moveAmount;
			} else {
				tileIndex+=28;
			}
		} else if(chance > 0.40 && chance <= 0.70) {
			//LEFT
			tileIndex-=2;
			if(!map.getCollision(tileIndex) && x-moveAmount > 0) {
				x-=moveAmount;
			} else {
				tileIndex+=2;
			}
		} else {
			//RIGHT
			tileIndex+=2;
			if(!map.getCollision(tileIndex) && x+moveAmount < 840) {
				x+=moveAmount;
			} else {
				tileIndex-=2;
			}
		}
	}

	var draw = function(ctx) {
		if(tick < 15) {
			tick++;
		}
		if(tick === moveTimer) {
			if(spriteX === spriteLength) {
				spriteX = 0;
			} else {
				spriteX += 60;
			}
			tick = 0;
		}
		ctx.drawImage(sprite,spriteX,0,60,60,x,y,60,60);
	}

	return {
		getPos: getPos,
		getHealth: getHealth,
		setHealth: setHealth,
		update: update,
		draw: draw
	}	
}
