/*
 *	Player.js
 *	Tyler St. Onge
 *
 *	Takes the parameters startX and startY, which initialize where the player is.
 */

var Player = function(startX, startY, tGameAssets) {
	var name = "Player";
	var x = startX,
		mindPosX = 0,
		powerUps = [0,0,0,0,0],
		health = 5,
		mind = 4;
		gameAssets = tGameAssets,
		y = startY,
		lastMove = 0,
		tileIndex = 15,
		moveTimer = 15,
		spriteLength = 660,
		spriteX = 0,
		tick = 0,
		moveAmount = 60,
		healthPosX = 0,
		dead = false;

	var getX = function() {
		return x;
	}

	var getY = function() {
		return y;
	}

	var getPowerUps = function() {
		return powerUps;
	}
	
	var getMind = function() {
		return mind;
	}

	var setX = function(tX) {
		x = tX;
	}

	var setY = function(tY) {
		y = tY;
	}

	var setHealth = function(tH) {
		health = tH;
	}
	
	var setMind = function(tM) {
		mind = tM;
	}

	var getPos = function() {
		return tileIndex;
	}
	
	var getHealth = function() {
		return health;
	}
	
	var setTileIndex = function(tTileIndex) {
		tileIndex = tTileIndex;
	}
	
	var setPowerUps = function(tPowerUps) {
		powerUps = tPowerUps;
	}
	
	var update = function(tx, ty, map) {
				
		if(tx < x+120 && tx > x+60 && ty > y && ty < y+60) {
			tileIndex+=1;
			if(!map.getCollision(tileIndex, "Player")) {
				x+=moveAmount; //Right
			} else {
				tileIndex-=1;
			}
		}else if(tx < x && tx > x-60 && ty > y && ty < y+60) {
			tileIndex-=1;
			if(!map.getCollision(tileIndex, "Player")) {
				x-=moveAmount; //Left
			} else {
				tileIndex+=1;
			}
		}else if(ty < y+120 && ty > y+60 && tx > x && tx < x+60) {
			tileIndex+=14;
			if(!map.getCollision(tileIndex, "Player")) {
				y+=moveAmount; //Down
			} else {
				tileIndex-=14;
			}
		}else if(ty < y && ty > y-60 && tx > x && tx < x+60) {
			tileIndex-=14;
			if(!map.getCollision(tileIndex, "Player")) {
				y-=moveAmount; //Up
			} else {
				tileIndex+=14;
			}
		}
		if(tileIndex === map.getExit()) {
			x = 60;
			y = 60;
			tileIndex=15;
			if(map.getRoom() === 1)
				map.setRoom(-1);
			else
				map.setRoom(1);
		}
		console.log(tileIndex);
	}

	var guiUpdate = function() {
				//HEALTH BAR
		if(health <= 0) {
			healthPosX = 300;
			dead = true;
		} else if(health == 1){
			healthPosX = 240;
		} else if(health == 2) {
			healthPosX = 180;
		} else if(health == 3) {
			healthPosX = 120;
		} else if(health == 4) {
			healthPosX = 60;
		} else if(health == 5) {
			healthPosX = 0;
		}
		
		//MIND METER
		if(mind <= 0) {
			mindPosX = 540;
		} else if(mind == 1) {
			mindPosX = 480;
		} else if(mind == 2) {
			mindPosX = 420;
		} else if(mind == 3) {
			mindPosX = 360;
		} else if(mind == 4) {
			mindPosX = 300;
		} else if(mind == 5) {
			mindPosX = 240;
		} else if(mind == 6) {
			mindPosX = 180;
		} else if(mind == 7) {
			mindPosX = 120;
		} else if(mind == 8) {
			mindPosX = 60;
		} else if(mind == 9) {
			mindPosX = 0;
		}
	}

	var exitCheck = function() {
		if(tileIndex === map.getExit()) {
			x = 60;
			y = 60;
			tileIndex=15;
			if(map.getRoom() === 1)
				map.setRoom(-1);
			else
				map.setRoom(1);
		}
	}

	var draw = function(ctx, guiCtx) {
		if(lastMove > 250) {
			if(tick < moveTimer) {
				tick++;
			}
			if(tick === moveTimer) {
				if(spriteX === spriteLength) {
					spriteX = 0;
					lastMove = 0;
				} else {
					spriteX += 60;
				}
				tick = 0;
				ctx.drawImage(gameAssets.getCharacter(),spriteX,0,60,60,x,y,60,60);
			}
		} else {
			lastMove++;
			spriteX = 0;
		}
		//POWER UPS
		guiCtx.drawImage(gameAssets.getBorderImage(), 847, 26, 68, 69);
		guiCtx.drawImage(gameAssets.getBorderImage(), 847, 126, 68, 69);
		guiCtx.drawImage(gameAssets.getBorderImage(), 847, 226, 68, 69);
		guiCtx.drawImage(gameAssets.getBorderImage(), 847, 326, 68, 69);
		guiCtx.drawImage(gameAssets.getBorderImage(), 847, 426, 68, 69);
		var powPosY = 30; 
		for(var i = 0; i < powerUps.length; i++) {
				switch(powerUps[i]) {
					case 0: powPosY += 100;
							break;
					case 1: guiCtx.drawImage(gameAssets.getFebreeze(), 850, powPosY);
							powPosY += 100;
							break;
					case 2: guiCtx.drawImage(gameAssets.getGlove(), 850, powPosY);
							powPosY += 100;
							break;
					case 3: guiCtx.drawImage(gameAssets.getLightMagic(), 850, powPosY);
						///drawImage(gameAssets.getLightMagic(),0,60,480,60,850,powPosY,60,60); help
							powPosY += 100;
							break;
					case 4: guiCtx.drawImage(gameAssets.getDarkMagic(), 850, powPosY);
						///drawImage(gameAssets.getLightMagic(),0,60,600,60,850,powPosY,60,60);	help
							powPosY += 100;
							break;
					case 5: guiCtx.drawImage(gameAssets.getGrenade(), 850, powPosY);
							powPosY += 100;
							break;
				}
		}
		
		//HEALTH & MENTAL BAR 
		guiCtx.drawImage(gameAssets.getBorderImage(), 18, 548, 68, 69);
		guiCtx.drawImage(gameAssets.getHealthMeter(), healthPosX, 0, 60, 60, 20, 550, 60, 60);
		guiCtx.drawImage(gameAssets.getBorderImage(), 94, 548, 69, 69);
		guiCtx.drawImage(gameAssets.getMindMeter(), mindPosX, 0, 60, 60, 100, 558, 60, 60);
		
		//CHARACTER
		ctx.drawImage(gameAssets.getCharacter(),spriteX,0,60,60,x,y,60,60);
	}

	var moved = function() {
		lastMove = 0;	
	}
	
	var getName = function() {
		return name;
	}
	
	var isDead = function() {
		return dead;
	}
	
	return {
		getMind: getMind,
		getName: getName,
		getX: getX,
		getY: getY,
		getHealth: getHealth,
		getPowerUps: getPowerUps,
		setMind: setMind,
		setX: setX,
		setY: setY,
		setHealth: setHealth,
		setPowerUps: setPowerUps,
		getPos: getPos,
		setTileIndex: setTileIndex,
		update: update,
		guiUpdate: guiUpdate,
		moved: moved,
		exitCheck: exitCheck,
		isDead: isDead,
		draw: draw
	}
}
