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
	var waiting = false;
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
		if(tileIndex === map.getPlayerPos() + 14) {
			tileIndex -= 14;
			if(!map.getCollision(tileIndex)) {
				y-=moveAmount;
			} else {
				tileIndex += 14;
			}
		} else if(tileIndex === map.getPlayerPos() - 14) {
			tileIndex += 14;
			if(!map.getCollision(tileIndex)) {
				y+=moveAmount;
			} else {
				tileIndex -= 14;
			}
		} else if(tileIndex === map.getPlayerPos() - 1) {
			tileIndex += 1;
			if(!map.getCollision(tileIndex)) {
				x+=moveAmount;
			} else {
				tileIndex -= 1;
			} 
		} else if(tileIndex === map.getPlayerPos() + 1) {
			tileIndex -= 1;
			if(!map.getCollision(tileIndex)) {
				x-=moveAmount;
			} else {
				tileIndex += 1;
			}		 
		} else {
			if(horizBound) {
				if(leftBound) {
					tileIndex--;
					if(!map.getCollision(tileIndex)) {
						//GO LEFT
						image = gameAssets.getCat();
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
						image = gameAssets.getOppositeCat();
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