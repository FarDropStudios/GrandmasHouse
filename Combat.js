/*
 *  Combat.js
 *	Tom Guererri
 *
 *	Contains logic for combat and drawing for combat
 */
//calls methods for getting and setting health
var Combat = function() {
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
	var attack = function(striker, struck, strikerPos, struckPos) {
		if(stricker !instanceof WigMonster) {
			//stricker.drawAttack();
			//struck.drawDefend();
			struck.setHealth(struck.getHealth - 1);
		} else {
			wigDemonSequence();
		}
	}

	//if adv enemy (wigDemon)
	//call the drawSpecialAttack
	//if striker is power up spell
	//get struck's health and --
	//call the drawSpell
	//update powerUps and UI
	function wigDemonSequence() {
		//Do WigDemonStuff
	}
	
	//var drawSpecialAttack
	//special attack at that position
	var specialAttack(specialAttackName) {
		//Special Attacks
	}
}
