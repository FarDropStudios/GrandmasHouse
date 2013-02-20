/*
 *	WigDemon.js
 *	Tyler St. Onge
 *
 *	Contains all values for each individual rat
 */
 
var WigDemon = function(startX, startY, tTileIndex, tImage) {
	var x = startX,
		image = tImage,
		y = startY,
		tileIndex = tTileIndex, 
		health = 1,
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
			tileIndex+=14;
			if(!map.getCollision(tileIndex)) {
				y+=moveAmount;
			} else {
				tileIndex-=14;
			}
		} else if(chance > 0.20 && chance <= 0.30) {
			//UP
			tileIndex-=14;
			if(!map.getCollision(tileIndex)) {
				y-=moveAmount;
			} else {
				tileIndex+=14;
			}
		} else if(chance > 0.40 && chance <= 0.70) {
			//LEFT
			tileIndex-=1;
			if(!map.getCollision(tileIndex)) {
				x-=moveAmount;
			} else {
				tileIndex+=1;
			}
		} else {
			//RIGHT
			tileIndex+=1;
			if(!map.getCollision(tileIndex)) {
				x+=moveAmount;
			} else {
				tileIndex-=1;
			}
		}
	}

	var draw = function(ctx) {
		ctx.drawImage(image, x, y, 60, 60);
	}

	return {
		getPos: getPos,
		getHealth: getHealth,
		setHealth: setHealth,
		update: update,
		draw: draw
	}	
}
