//Tom Guererri
//GMA
//PurchaseBlock.js
 
var PurchaseBlock = function(startX, startY, tTileIndex, tImage) {
	var name = "PurchaseBlock";
	var x = startX,
		image = tImage,
		y = startY,
		tileIndex = tTileIndex, 
		health = 1,
		chance;

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
		ctx.drawImage(image, x, y, 60, 60);
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
		//update: update,
		draw: draw
	}	
}
//AI: Never Do Anything

