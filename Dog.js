/*
 *	Dog.js
 *	Tyler St. Onge
 *
 *	Contains all values for each individual dog
 */
 
var Dog = function(startX, startY, tTileIndex, tImage) {
	var attackImage,
	attackTimer = 0,
	attackDraw = false;
	var name = "Dog";
	var waiting = true;
	var x = startX,
		image = tImage,
		y = startY,
		tileIndex = tTileIndex, 
		health = 5,
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
		if (tileIndex >= 0 && tileIndex <= 13 && map.getPlayerPos() >= 0 && map.getPlayerPos() <= 13 ||
			tileIndex >= 14 && tileIndex <= 27 && map.getPlayerPos() >= 14 && map.getPlayerPos() <= 27 ||
			tileIndex >= 28 && tileIndex <= 41 && map.getPlayerPos() >= 28 && map.getPlayerPos() <= 41 ||
			tileIndex >= 42 && tileIndex <= 55 && map.getPlayerPos() >= 42 && map.getPlayerPos() <= 55 ||
			tileIndex >= 56 && tileIndex <= 69 && map.getPlayerPos() >= 56 && map.getPlayerPos() <= 69 ||
			tileIndex >= 70 && tileIndex <= 83 && map.getPlayerPos() >= 70 && map.getPlayerPos() <= 83 ||
			tileIndex >= 84 && tileIndex <= 97 && map.getPlayerPos() >= 84 && map.getPlayerPos() <= 97 ||
			tileIndex >= 98 && tileIndex <= 112 && map.getPlayerPos() >= 98 && map.getPlayerPos() <= 112 ||
			tileIndex >= 113 && tileIndex <= 126 && map.getPlayerPos() >= 113 && map.getPlayerPos() <= 126) {
			if(tileIndex - map.getPlayerPos() > 0) {
				//LEFT
				tileIndex-=1;
				if(!map.getCollision(tileIndex)) {
					x-=moveAmount;
					image = gameAssets.getDog();
				} else {
					tileIndex+=1;
				}				
			} else {
				//RIGHT
				tileIndex+=1;
				if(!map.getCollision(tileIndex)) {
					x+=moveAmount;
					image = gameAssets.getOppositeDog();
				} else {
					tileIndex-=1;
				}				
			}
		} else if(tileIndex % 14 === map.getPlayerPos() % 14) {
			if(tileIndex - map.getPlayerPos() > 0) {
				//UP
				tileIndex-=14;
				if(!map.getCollision(tileIndex)) {
					y-=moveAmount;
				} else {
					tileIndex+=14;
				}				
			} else {
				//DOWN
				tileIndex+=14;
				if(!map.getCollision(tileIndex)) {
					y+=moveAmount;
				} else {
					tileIndex-=14;
				}				
			}
		} else {
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
					image = gameAssets.getDog();
				} else {
					tileIndex+=1;
				}
			} else {
				//RIGHT
				tileIndex+=1;
				if(!map.getCollision(tileIndex)) {
					x+=moveAmount;
					image = gameAssets.getOppositeDog();
				} else {
					tileIndex-=1;
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
		aiUpdate: aiUpdate,
		getX: getX,
		getY: getY,
		drawAttack: drawAttack,
		getName: getName,
		getPos: getPos,
		getHealth: getHealth,
		setHealth: setHealth,
		update: update,
		draw: draw
	}	
}
//AI: If player walks in line of sight walk down that row/column until player is in line of sight


