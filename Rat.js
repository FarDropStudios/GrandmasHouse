/*
 *	Rat.js
 *	Tyler St. Onge & Tommy Guererri
 *
 *	Contains all values for each individual rat
 */
 
var Rat = function(startX, startY, tTileIndex, tImage) {
	var name = "Rat";
	var x = startX,
		image = tImage,
		y = startY,
		tileIndex = tTileIndex, 
		health = 3,
		leftBound = true,
		moveAmount = 60,
		chance;

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
		
		
		tileIndex--;
		if(!map.getCollision(tileIndex) && leftBound) {
			//GO LEFT
			x-=moveAmount;
		} else {
			leftBound = false;
			tileIndex++;
		}
		
		tileIndex++;
		if(!map.getCollision(tileIndex) && !leftBound) {
			//go right
			x+=moveAmount;
		} else {
			leftBound = true;
			tileIndex--;
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
//AI: Stick to perimeter of map. Randomly cross to other side if line of sight is clear. Once crossing continue crossing no matter what

