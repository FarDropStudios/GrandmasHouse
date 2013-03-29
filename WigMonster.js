/*
 *	WigMonster.js

 *	Tyler St. Onge and Tommy Guererri

 *	Contains all values for each individual Wig Demon
 */
 
var WigMonster = function(startX, startY, tTileIndex, tImage) {
	var attackImage,
		attackTimer = 0,
		attackDraw = false;
	var name = "WigDemon";
	var waiting = false;
	var x = startX,
		sprite = tImage,
		y = startY,
		tileIndex = tTileIndex, 
		health = 1,
		moveTimer = 15,
		spriteLength = 540,
		spriteX = 0,
		tick = 0,
		moveAmount = 120,
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

	var update = function(map) {
		chance = Math.random();
		if(chance <= 0.20) {
			//DOWN
			tileIndex+=28;
			if(!map.getCollision(tileIndex) && y+moveAmount < 540) {
				y+=moveAmount;
			} else {
				tileIndex-=28;
			}
		} else if(chance > 0.20 && chance <= 0.30) {
			//UP
			tileIndex-=28;
			if(!map.getCollision(tileIndex) && y-moveAmount > 0) {
				y-=moveAmount;
			} else {
				tileIndex+=28;
			}
		} else if(chance > 0.40 && chance <= 0.70) {
			//LEFT
			tileIndex-=2;
			if(!map.getCollision(tileIndex) && x-moveAmount > 0) {
				x-=moveAmount;
			} else {
				tileIndex+=2;
			}
		} else {
			//RIGHT
			tileIndex+=2;
			if(!map.getCollision(tileIndex) && x+moveAmount < 840) {
				x+=moveAmount;
			} else {
				tileIndex-=2;
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
		}
		if(tick === moveTimer) {
			if(spriteX === spriteLength) {
				spriteX = 0;
			} else {
				spriteX += 60;
			}
			tick = 0;
		}
		ctx.drawImage(sprite,spriteX,0,60,60,x,y,60,60);
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
		getName: getName,
		drawAttack: drawAttack,
		getPos: getPos,
		getHealth: getHealth,
		setHealth: setHealth,
		update: update,
		draw: draw
	}	
}
//AI: Divebomb towards player