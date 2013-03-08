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
		//stricker.drawAttack();
		//struck.drawDefend();
		struck.setHealth(struck.getHealth() - 1);
		console.log("!ATTACK! Striker: "+striker.getName()+" // Struck: "+struck.getName());
		console.log(struck.getHealth());
	};
