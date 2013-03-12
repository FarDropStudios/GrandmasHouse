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
		if(leftBound && !upBound) {
			tileIndex--;
			if(!map.getCollision(tileIndex)) {
				//GO LEFT
				x-=moveAmount;
			} else {
				tileIndex++;
				leftBound = false;
			}
		} else {
			tileIndex++;
			if(!map.getCollision(tileIndex)) {
				//GO RIGHT
				x+=moveAmount;
			} else {
				tileIndex--;
				leftBound = true;
			}
		}
		if(!leftBound && upBound) {
			tileIndex -= 14;
			if(!map.getCollision(tileIndex)) {
				//GO Up
				x-=moveAmount;
			} else {
				tileIndex += 14;
				upBound = false;
			}
		} else {
			tileIndex += 14;
			if(!map.getCollision(tileIndex)) {
				//GO RIGHT
				x+=moveAmount;
			} else {
				tileIndex -= 14;
				upBound = true;
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