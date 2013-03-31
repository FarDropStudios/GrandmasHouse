/*
 *	GrandmaEnemy.js
 *	Tyler St. Onge & Tommy Guererri
 *
 *	Contains all values for each individual gma
 */
 
var GrandmaEnemy = function(startX, startY, tTileIndex, tImage) {
		var attackImage,
		attackTimer = 0,
		attackDraw = false;
	var name = "gmaEnemy";
	var waiting = "false";
	var x = startX,
		image = tImage,
		y = startY,
		tileIndex = tTileIndex, 
		health = 1,
		moveAmount = 60,
		tick = 0,
		imageX = 0,
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
		waiting = true;
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