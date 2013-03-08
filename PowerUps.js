/*
 *	PowerUp.js
 *	Tommy Guererri
 *
 *	Contains array of power ups and methods similar to enemies.js.
 */
var PowerUps = {};
	
	/**
	 *	Usage of power ups 
	 */
	PowerUps.use = function(powerUps, x, y, player) {
		if(x > 850 && x < 918 && y > 25 && y < 94) {
			determinePowerUpType(powerUps[0], player);
			powerUps[0] = 0;
		} else if(x > 850 && x < 918 && y > 125 && y < 194) {
			determinePowerUpType(powerUps[1], player);
			powerUps[1] = 0;
		} else if(x > 850 && x < 918 && y > 225 && y < 294) {
			determinePowerUpType(powerUps[2], player);
			powerUps[2] = 0;
		} else if(x > 850 && x < 918 && y > 325 && y < 394) {
			determinePowerUpType(powerUps[3], player);
			powerUps[3] = 0;
		} else if(x > 850 && x < 918 && y > 425 && y < 494) {
			determinePowerUpType(powerUps[4], player);
			powerUps[4] = 0;
		}
		return powerUps;
	};
	
	PowerUps.useShortcut = function(powerUps, num, player) {
		if(num === 1) {
			determinePowerUpType(powerUps[0], player);
			powerUps[0] = 0;
		} else if(num === 2) {
			determinePowerUpType(powerUps[1], player);
			powerUps[1] = 0;
		} else if(num === 3) {
			determinePowerUpType(powerUps[2], player);
			powerUps[2] = 0;
		} else if(num === 4) {
			determinePowerUpType(powerUps[3], player);
			powerUps[3] = 0;
		} else if(num === 5) {
			determinePowerUpType(powerUps[4], player);
			powerUps[4] = 0;
		}
		return powerUps;
	};
	
	function determinePowerUpType(powerUpType, player) {
		if(powerUpType == 0) {
			return; // do nothing
		} else if(powerUpType == 1) {
			//Febreeze
			player.setMind(player.getMind() + 3);
			if(player.getMind() > 9) {
				player.setMind(9);
			}
		} else if(powerUpType == 2) {
			//Glove
			console.log("glove");
		} else if(powerUpType == 3) {
			//White Magic
			player.setHealth(5);
		} else if(powerUpType == 4) {
			//Dark Magic
		} else if(powerUpType == 5) {
			//Grenade
		} else {
			console.log("U dun goofed");
		}
	}
