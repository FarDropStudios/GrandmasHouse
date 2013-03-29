//Tom Guererri
//GMA
//PileOfMeat
 
var PileOfMeat = function(startX, startY, tTileIndex, tImage) {
	var name = "Pile of Meat";
	var x = startX,
		image = tImage,
		y = startY,
		tileIndex = tTileIndex, 
		health = 3,
		chance;
	var tick = 0,
		imageX = 0;

	var getPos = function() {
		return tileIndex;
	}
	
	var getX = function() {
		return x;
	}
	
	var getY = function() {
		return y;
	}
	
	var getHealth = function() {
		return health;
	}

	var setHealth = function(tHealth) {
		health = tHealth;
	}
	var draw = function(ctx) {
		if(tick < 15) {
			tick++;
		} else {
			tick = 0;
			if(imageX < 300) {
				imageX += 60;
			} else {
				imageX = 0;
			}
		}
		ctx.drawImage(image, imageX, 0, 60, 60, x, y, 60, 60);
	}
	
	var aiUpdate = function() {
		
	}
	
	var getName = function() {
		return name;
	}

	return {
		aiUpdate: aiUpdate,
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
//AI: Never Do Anything

