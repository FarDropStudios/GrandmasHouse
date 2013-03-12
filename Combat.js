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
		//-1: Right, +1 = Left, +14 = Up, -14 = Down
		var difference = striker.getPos() - struck.getPos();
		switch(difference) {
			case -1: //striker.drawAttack("right");
				break;
			case 1: //striker.drawAttack("left");
				break;
			case 14: //striker.drawAttack("up");
				break;
			case -14: //stricker.drawAttack("down");
				break;
		}
		//struck.drawDefend();
		struck.setHealth(struck.getHealth() - 1);
		console.log("!ATTACK! Striker: "+striker.getName()+" // Struck: "+struck.getName());
		console.log(struck.getHealth());
	};

	Combat.kill = function(victim) {
		victim.setHealth(0);
	};
