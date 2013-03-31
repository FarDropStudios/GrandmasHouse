/*
 *	Enemies.js
 *	Tyler St. Onge
 *
 *	Keeps track of each individual enemy and allows the retrival of enemies.
 */
var Enemies = function() {
	var enemies = [],
		gameAssets,
		player;
	
	var setGameAssets = function(tempGameAssets) {
		gameAssets = tempGameAssets;
	}
	
	var setPlayer = function(tPlayer) {
		player = tPlayer;
	} 
	
	var emptyEnemies = function() {
		enemies = [];
	}
	
	var getEnemyPos = function() {
		var positions = []
		for(var i = 0; i < enemies.length; i++) {
			positions[i] = enemies[i].getPos();
		}
		return positions;
	}
	
	var getInstanceOfEnemy = function(tileIndex) {
		var positions = getEnemyPos();
		for(var i = 0; i < enemies.length; i++) {
			if(enemies[i].getPos() == tileIndex) {
				return enemies[i];
			}
		}
		return null;
	}
	
	
	
	var update = function(map) {
		for(var i = 0; i < enemies.length; i++) {
			if(enemies[i].getHealth() <= 0) {
					if(enemies[i].getName() === "WigDemon"){
						enemies.splice(i,1);
					}else if(enemies[i].getName() === "Pile of Meat"){
						//coinDrop
						enemies.splice(i,1,new Penny(enemies[i].getX(), enemies[i].getY(), enemies[i].getPos(), gameAssets.getPenny()));
					} else if(enemies[i].getName() === "Dog") {
						console.log("dog");
						enemies.splice(i,1,new PileOfMeat(enemies[i].getX(), enemies[i].getY(), enemies[i].getPos(), gameAssets.getDeadDog()));
					} else if(enemies[i].getName() === "Rat") {
						console.log("rat");
						enemies.splice(i,1,new PileOfMeat(enemies[i].getX(), enemies[i].getY(), enemies[i].getPos(), gameAssets.getDeadRat()));
					} else if(enemies[i].getName() === "Cat") {
						console.log("cat");
						enemies.splice(i,1,new PileOfMeat(enemies[i].getX(), enemies[i].getY(), enemies[i].getPos(), gameAssets.getDeadCat()));
					} else if(enemies[i].getName() === "Penny") {
						player.addCoin(1);
						enemies.splice(i,1);
					} else if(enemies[i].getName() === "PurchaseBlock"){
						if(player.getCoin() >= 1){
							player.subtractCoin(1);
							enemies.splice(i,1);
						} else {
							enemies.splice(i,1,new PurchaseBlock(enemies[i].getX(), enemies[i].getY(), enemies[i].getPos(), gameAssets.getNickle()));
						}
						
					}
			}
					enemies[i].update(map);
		}
	}
	
	var enemiesAiUpdate = function(map) {
		for(var i = 0; i < enemies.length; i++) {
			enemies[i].aiUpdate(map);
		}
	}
	
	var addRat = function(startX, startY, startTileIndex) {
		enemies.push(new Rat(startX, startY, startTileIndex, gameAssets.getRat()));
	}
	var addPurchaseBlock = function(startX, startY, startTileIndex) {
		enemies.push(new PurchaseBlock(startX, startY, startTileIndex, gameAssets.getNickel()));
	}
	var addDog = function(startX, startY, startTileIndex) {
		enemies.push(new Dog(startX, startY, startTileIndex, gameAssets.getDog()));
	}
	var addCat = function(startX, startY, startTileIndex) {
		enemies.push(new Cat(startX, startY, startTileIndex, gameAssets.getCat()));
	}
	var addWigDemon = function(startX, startY, startTileIndex) {
		enemies.push(new WigMonster(startX, startY, startTileIndex, gameAssets.getWigDemon()));
	}
	var addGmaEnemy = function(startX, startY, startTileIndex) {
		enemies.push(new GrandmaEnemy(startX, startY, startTileIndex, gameAssets.getGrandma()));
	}
	var draw = function(ctx) {
		for(var i = 0; i < enemies.length; i++) {
			enemies[i].draw(ctx);
		}
	}
	
	return {
		enemiesAiUpdate: enemiesAiUpdate,
		setPlayer: setPlayer,
		getInstanceOfEnemy: getInstanceOfEnemy,
		setGameAssets: setGameAssets,
		emptyEnemies: emptyEnemies,
		addGmaEnemy: addGmaEnemy,
		getEnemyPos: getEnemyPos,
		update: update,
		addRat: addRat,
		addPurchaseBlock: addPurchaseBlock,
		addWigDemon: addWigDemon,
		addDog: addDog,
		addCat: addCat,
		draw: draw
	}
}