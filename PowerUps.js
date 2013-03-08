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
			console.log("p-up two");
		} else if(x > 850 && x < 918 && y > 225 && y < 294) {
			console.log("p-up three");
		} else if(x > 850 && x < 918 && y > 325 && y < 394) {
			console.log("p-up four");
		} else if(x > 850 && x < 918 && y > 425 && y < 494) {
			console.log("p-up five");
		}
		return powerUps;
	};
	
	function determinePowerUpType(powerUpType, player) {
		if(powerUpType == 0) {
			return;
		} else if(powerUpType == 1) {
			//Febreeze
			player.setMind(player.getMind() + 3);
		} else if(powerUpType == 2) {
			console.log("Grenade");
		} else if(powerUpType == 3) {
			console.log("Rubber Gloves");
		} else if(powerUpType == 4) {
			console.log("Dark Magic");
		} else if(powerUpType == 5) {
			console.log("Light Magic");
		} else {
			console.log("U dun goofed");
		}
	}
