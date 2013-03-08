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
		if(x > 840 || y > 540) {
			console.log("Prrrrrfect");
		}
		return powerUps;
	};
	
	function determinePowerUpType(powerUpType) {
		if(powerUpType == 0) {
			return;
		} else if(powerUpType == 1) {
			console.log("Grenade");
		} else if(powerUpType == 2) {
			console.log("Febreeze");
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
