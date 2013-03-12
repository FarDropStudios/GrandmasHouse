/*
 *	Cat.js
 *	Tyler St. Onge & Tommy Guererri
 *
 *	Contains all values for each individual cat
 */
 
var Cat = function(startX, startY, tTileIndex, tImage) {
	var name = "Cat";
	var x = startX,
		image = tImage,
		y = startY,
		tileIndex = tTileIndex, 
		health = 3,
		moveAmount = 60,
		chance,
		leftBound = true,
		horizBound = true;
		upBound = false;

	var getPos = function() {
		return tileIndex;
	}
	var getX = function(){
		return x;
	}
	var getY = function(){
		return y;
	}
	var getHealth = function() {
		return health;
	}

	var setHealth = function(tHealth) {
		health = tHealth;
	}

	var update = function(map) {
		if(horizBound) {
			if(leftBound) {
				tileIndex--;
				if(!map.getCollision(tileIndex)) {
					//GO LEFT
					x-=moveAmount;
				} else {
					tileIndex++;
					leftBound = false;
					horizBound = false;
					upBound = true;
				}
			} else {
				tileIndex++;
				if(!map.getCollision(tileIndex)) {
					//GO RIGHT
					x+=moveAmount;
				} else {
					tileIndex--;
					leftBound = true;
					horizBound = false;
					upBound = false;
				}
			}
		} else {
			if(upBound) {
				tileIndex -= 14;
				if(!map.getCollision(tileIndex)) {
					//GO UP
					y-=moveAmount;
				} else {
					tileIndex += 14;
					upBound= false;
					horizBound = true;
					leftBound = false;
				}
			} else {
				tileIndex += 14;
				if(!map.getCollision(tileIndex)) {
					//GO DOWN
					y+=moveAmount;
				} else {
					tileIndex -= 14;
					upBound = true;
					horizBound = true;
					leftBound = true;
				}
			}			
		}
	}

	var draw = function(ctx) {
		ctx.drawImage(image, x, y, 60, 60);
	}

	var getName = function() {
		return name;
	}

	return {
		getX: getX,
		getY: getY,
		getName: getName,
		getPos: getPos,
		getHealth: getHealth,
		setHealth: setHealth,
		update: update,
		draw: draw
	}	
}
//AI:Walk Forward until collision
//turn right