/*
 *	Cat.js
 *	Tyler St. Onge & Tommy Guererri
 *
 *	Contains all values for each individual cat
 */
 
var Cat = function(startX, startY, tTileIndex, tImage) {
		var attackImage,
		attackTimer = 0,
		attackDraw = false;
	var name = "Cat";
	var x = startX,
		image = tImage,
		y = startY,
		tileIndex = tTileIndex, 
		health = 3,
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
		if(attackDraw && attackTimer < 15) {
			attackTimer++;
			ctx.drawImage(attackImage, x, y);
		} else {
			attackTimer = 0;
			attackDraw = false; 
		}
	}

	var getName = function() {
		return name;
	}
	
	var drawAttack = function(direction) {
		switch(direction) {
			case "left": attackImage = gameAssets.getAtkArrowRightToLeft();
				break;
			case "right": attackImage = gameAssets.getAtkArrowLeftToRight();
				break;
			case "up": attackImage = gameAssets.getAtkArrowDownToUp();
				break;
			case "down": attackImage = gameAssets.getAtkArrowUpToDown();
				break;
		}
		attackDraw = true;
	}
	
	return {
		getX: getX,
		drawAttack: drawAttack,
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