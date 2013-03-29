/*
 *	Rat.js
 *	Tyler St. Onge & Tommy Guererri
 *
 *	Contains all values for each individual rat
 */
 
var Rat = function(startX, startY, tTileIndex, tImage) {
	var attackImage,
		attackTimer = 0,
		attackDraw = false;
	var name = "Rat";
	var waiting = false;
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

	var aiUpdate = function(map) {
		var player = map.getPlayer();
		if(waiting === true) {
			if(tileIndex === player.getPos() + 14) {
				drawAttack("down");
				player.setHealth(player.getHealth() - 1);
			} else if(tileIndex === player.getPos() - 14) {
				drawAttack("up");
				player.setHealth(player.getHealth() - 1);
			} else if(tileIndex === player.getPos() - 1) {
				drawAttack("right");
				player.setHealth(player.getHealth() - 1);
			} else if(tileIndex === player.getPos() + 1) {
				drawAttack("left");
				player.setHealth(player.getHealth() - 1);
			}
		waiting = false;
		}
	} 

	var update = function(map) {	
		if(leftBound) {
			tileIndex--;
			if(!map.getCollision(tileIndex)) {
				//GO LEFT
				image = gameAssets.getRat();
				x-=moveAmount;
			} else {
				tileIndex++;
				leftBound = false;
			}
		} else {
			tileIndex++;
			if(!map.getCollision(tileIndex)) {
				//GO RIGHT
				image = gameAssets.getOppositeRat();
				x+=moveAmount;
			} else {
				tileIndex--;
				leftBound = true;
			}
		}
		waiting = true;
	}

	var draw = function(ctx) {
		ctx.drawImage(image, x, y, 60, 60);
		//DRAW ATTK
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
		aiUpdate: aiUpdate,
		drawAttack: drawAttack,
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

