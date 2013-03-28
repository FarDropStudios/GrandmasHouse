/*
 *  Combat.js
 *	Tom Guererri
 *
 *	Contains logic for combat and drawing for combat
 */

var Combat = {};
	//calls methods for getting and setting health
	//striker,struck,strikerPos,struckPos
	//if striker is player
	//get struck's health and --
	//call the drawAttack
	//if striker is enemy
	//which enemy
	//if basic enemy
	//get players health and --
	//call the drawAttack
	//update health and UI
	Combat.attack = function(striker, struck) {
		var xDif = striker.getX() - struck.getX();
		var yDif = striker.getY() - struck.getY();
		
		if(xDif < 0 && yDif === 0 ) {
			//RIGHT
			striker.drawAttack("right");
		} else if(xDif > 0 && yDif === 0) {
			//LEFT
			striker.drawAttack("left");
		} else if(xDif === 0 && yDif > 0) {
			//DOWN
			striker.drawAttack("down");
		} else if(xDif === 0 && yDif < 0) {
			//UP
			striker.drawAttack("up");
		}
		
		//struck.drawDefend();
		struck.setHealth(struck.getHealth() - 1);
		console.log("!ATTACK! Striker: "+striker.getName()+" // Struck: "+struck.getName());
		console.log(struck.getHealth());
	};

	Combat.kill = function(victim) {
		victim.setHealth(0);
	};
	
