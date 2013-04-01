/*
 *	Map.js	
 *	Tyler St. Onge & Tommy Guererri
 *	
 *	This class draws each room within the game. The rooms are current 14 blocks wide, and 9 high.
 *	Key: 0 = randomly generated block; 1 = wall block; 2 = empty/floor; block; 3 = exit;
 *	10 = Rat;
 */

//Could add a check for health at each valid index to see method if health is < 1. If so change tile index to remains/ground etc.

var Map = function(tempEnemies, tempPlayer, tGameAssets, tRoomFactory) {
	var lightMagI = 0,
		darkMagI = 0;
	var blockX = 0,
		tick = 0,
		grandmaCount = 0,
		index = 0,
		chancePowerUp,
		obstacleChance,
		countTimerForExplosion = 10,
		exit,
		blockY = 0,
		enemy = tempEnemies,
		player = tempPlayer, 
		room = 0,
		factory = tRoomFactory;
		renderEnemies = true,
		rooms = [],
		gameAssets = tGameAssets;
		
		for(var i = 0; i < 30; i++){
			if(i === 0){		//Bedroom
				rooms[i] = factory.bedRoomGenerate();
			}else if(i === 1){	//Junk Room
				rooms[i] = factory.junkRoomGenerate();
			}else if(i === 2){ //Shop Keeper
				rooms[i] = factory.shopKeeperRoomGenerate();
			//}else if(i === 4){	//Living Room
				//rooms[i] = factory.livingRoomGenerate();
			}else if(i === 15){	//Kitchen
				rooms[i] = factory.kitchenGenerate();
			}else{				//Basic Rooms
				rooms[i] = factory.basicRoomGenerate();
			}
		}	
	//Returns true if the block is solid
	var getCollision = function(tile, source) {
		enemyPositions = enemy.getEnemyPos();
		if(rooms[room][tile] === 1 
			|| rooms[room][tile] === 8 
			|| rooms[room][tile] === 9
			|| rooms[room][tile] === 1001
			|| rooms[room][tile] === 1002
			|| rooms[room][tile] === 1003
			|| rooms[room][tile] === 301
			|| rooms[room][tile] === 302
			|| rooms[room][tile] === 666
			|| rooms[room][tile] === 303
			|| rooms[room][tile] === 304
			|| rooms[room][tile] === 309
			|| rooms[room][tile] === 101
			|| rooms[room][tile] === 102
			|| rooms[room][tile] === 201
			|| rooms[room][tile] === 202
			|| rooms[room][tile] === 444
			|| rooms[room][tile] === 445
			|| rooms[room][tile] === 1999 //TV Top Left
			|| rooms[room][tile] === 1998 //TV  Top Right
			|| rooms[room][tile] === 2999 //TV Bottom Left
			|| rooms[room][tile] === 2998 //TV Bottom Right
			|| rooms[room][tile] === 11
			|| rooms[room][tile] === 12
			|| rooms[room][tile] === 13
			|| rooms[room][tile] === 14
			|| rooms[room][tile] === 78
			|| rooms[room][tile] === 88 //Oven
			|| rooms[room][tile] === 19) {
			return true;
		//POWER UP LOGIC
		} else if(rooms[room][tile] === 999 && source === "Player" ) {
			//SET FEBREEZE
			var playerPowerUps = player.getPowerUps()
			for(var i = 0; i < playerPowerUps.length; i++) {
				if(playerPowerUps[i] === 0) {
					playerPowerUps[i] = 1; //febreeze
					player.setPowerUps(playerPowerUps);
					rooms[room][tile] = 2;
					break;
				}
			}
		} else if(rooms[room][tile] === 998 && source === "Player" ) {
			//SET Glove
			var playerPowerUps = player.getPowerUps()
			for(var i = 0; i < playerPowerUps.length; i++) {
				if(playerPowerUps[i] === 0) {
					playerPowerUps[i] = 2; //gloves
					player.setPowerUps(playerPowerUps);
					rooms[room][tile] = 2;
					break;
					}
				} 
		}else if(rooms[room][tile] === 997 && source === "Player" ) {
			//SET Light Magic
			var playerPowerUps = player.getPowerUps()
			for(var i = 0; i < playerPowerUps.length; i++) {
				if(playerPowerUps[i] === 0) {
					playerPowerUps[i] = 3; //Light Magic
					player.setPowerUps(playerPowerUps);
					rooms[room][tile] = 2;
					break;
				}
			}
		} else if(rooms[room][tile] === 996 && source === "Player" ) {
			//SET Dark Magic
			var playerPowerUps = player.getPowerUps()
			for(var i = 0; i < playerPowerUps.length; i++) {
				if(playerPowerUps[i] === 0) {
					playerPowerUps[i] = 4; //Dark Magic
					player.setPowerUps(playerPowerUps);
					rooms[room][tile] = 2;
					break;
					}
				}
			} else if(rooms[room][tile] === 995 && source === "Player" ) {
			//SET Grenade
			var playerPowerUps = player.getPowerUps()
			for(var i = 0; i < playerPowerUps.length; i++) {
				if(playerPowerUps[i] === 0) {
					playerPowerUps[i] = 5; //Grenade
					player.setPowerUps(playerPowerUps);
					rooms[room][tile] = 2;
					break;
					}
				}
			}else {
			for(var i = 0; i < enemyPositions.length; i++) { //Rubber Gloves logics
				if(player.getPos() === enemyPositions[i]) {
					if(source == "Player") {
						Combat.attack(player, enemy.getInstanceOfEnemy(enemyPositions[i]));
						if(enemy.getInstanceOfEnemy(enemyPositions[i]).getName() === "Pile of Meat") {
							if(!player.getGloveState()){
								player.setMind(player.getMind() - 1);
							}
						}
					} else {
						Combat.attack(enemy.getInstanceOfEnemy(enemyPositions[i]), player);
					}
					return true;
				}
			}
			for(var ii = 0; ii < enemyPositions.length - 1; ii++) {
				if(enemyPositions[ii] === enemyPositions[ii+1]) {
					return true;
				}
			}
			return false;
		}
	};
	var getRoomsLength = function(){
		return rooms.length;
	}
	
	var getExit = function() {
		return exit;
	}
	
	//Returns what room the player is in
	var getRoom = function() {
		return room;
	};

	//Changes which room the player is in
	var setRoom = function(roomNum) {
		room = roomNum;
		enemies.emptyEnemies();
		renderEnemies = true;
		grandmaCount = 0;
	};
	//The draw function for the room, it takes the context as a parameter which
	//enables the method to draw on the canvas.
	var draw = function(ctx) {
		//refresh the block coordinates
		blockX = 0;
		blockY = 0;
		index = 0;
		if(tick > 10) {
			tick = 0;
		}
		for(var i = 0; i < 126; i++) {
			ctx.drawImage(gameAssets.getFloorTile(),blockX,blockY,60,60);
			//If block needs to be randomized
			if(rooms[room][i] === 0) {
				var chance = Math.random();
				//Randomize dat hoe
				chancePowerUp = Math.random();
				obstacleChance = Math.random();
				//35 percent chance that the block is solid, else its empty.
				if(chance < 0.35) {
					 if(obstacleChance > .6){
					 	rooms[room][i] = 1;//obstacle
					 } else if(obstacleChance > .4 && obstacleChance < .8){
					 	rooms[room][i] = 1001;//boxA0
					 } else if(obstacleChance < .4 && obstacleChance > .2){
					 	rooms[room][i] = 1002; //Chair
					 } else if(obstacleChance < .2 && obstacleChance > .0){
					 	rooms[room][i] = 1003; //Laundry
					 }
					 
				} else if(chance > 0.35 && chance < 0.45) {
					rooms[room][i] = 10; //enemy
				} else if(chance > .45 && chance < .5){
					 rooms[room][i] = 999;///power up
					if(chancePowerUp > 0.8){
					//do nothing -- its FEBREEZE
						return;
					}else if(chancePowerUp > 0.6){
					//Rubber Gloves. Change index to 998
						rooms[room][i] = 998;
					}else if(chancePowerUp > 0.4){
					//Light Magic. Change index to 997
						rooms[room][i] = 997;
					}else if(chancePowerUp > 0.2){
					//Dark Magic. Change index to 996
						rooms[room][i] = 996;
					}else if(chancePowerUp > 0.0){
					//Grenade. Change index to 995
						rooms[room][i] = 995;
					}
				} else {
					rooms[room][i] = 2; //floor
				}
			}
			if(rooms[room][i] === 0) {
				ctx.drawImage(gameAssets.getFloorTile(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 81){
				//Linolium
				console.log("Should be making a lot of linolium");
				ctx.drawImage(gameAssets.getLinolium(),blockX,blockY,60,60);
			}else if(rooms[room][i] === 1) {
				//OBSTACLE
				ctx.drawImage(gameAssets.getBox(),blockX,blockY,60,60);
			}else if(rooms[room][i] === 1001) {
			//OBSTACLE
			ctx.drawImage(gameAssets.getBoxA0(),blockX,blockY,60,60);
			}else if(rooms[room][i] === 1002) {
			//OBSTACLE
			ctx.drawImage(gameAssets.getChair(),blockX,blockY,60,60);
			}else if(rooms[room][i] === 1003) {
			//OBSTACLE
			ctx.drawImage(gameAssets.getLaundryBasket(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 2) {
				//FLOOR BLOCK
				ctx.drawImage(gameAssets.getFloorTile(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 3) {
				//EXIT BLOCK
				exit = index;
				ctx.drawImage(gameAssets.getRightDoor(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 73) {
				//EXIT BLOCK
				exit = index;
				ctx.drawImage(gameAssets.getStairs(),blockX,blockY,60,60);
			}else if(rooms[room][i] === 11){ 
				//bedleft
				ctx.drawImage(gameAssets.getBedLeft(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 19){ 
				//night stand
				ctx.drawImage(gameAssets.getNightStand(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 2998){ 
				//TV Bottom Right
				ctx.drawImage(gameAssets.getTVBottomRight(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 2999){ 
				//TV Bottom Left
				ctx.drawImage(gameAssets.getTVBottomLeft(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 1999){ 
				//TV Top Left
				ctx.drawImage(gameAssets.getTVTopLeft(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 1998){ 
				//TV Top Right
				ctx.drawImage(gameAssets.getTVTopRight(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 999){ 
				ctx.drawImage(gameAssets.getFebreeze(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 998){
				ctx.drawImage(gameAssets.getGlove(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 997){
				if(tick == 10) {
					if(lightMagI < 420) {
						lightMagI += 60;
					} else {
						lightMagI = 0;
					}
				} 
				ctx.drawImage(gameAssets.getLightMagic(),lightMagI,0,60,60,blockX, blockY, 60,60);
				///drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
			}else if(rooms[room][i] === 996){
				if(tick == 10) {
					if(darkMagI < 420) {
						darkMagI += 60;
					} else {
						darkMagI = 0;
					}
				} 
				ctx.drawImage(gameAssets.getDarkMagic(),darkMagI,0,60,60,blockX, blockY, 60,60);
			}else if(rooms[room][i] === 995){
				///drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
				ctx.drawImage(gameAssets.getGrenade(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 12){
				//bedRight
				ctx.drawImage(gameAssets.getBedRight(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 13){
				ctx.drawImage(gameAssets.getDeskLeftWithPC(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 14){
				ctx.drawImage(gameAssets.getDeskRightWithPC(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 15){
				ctx.drawImage(gameAssets.getPCTopLeft(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 16){
				ctx.drawImage(gameAssets.getPCTopRight(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 88){
				//oven
				ctx.drawImage(gameAssets.getOven(), blockX, blockY, 60,60);
			}else if(rooms[room][i] === 201){
				//bottomLeftCorner
				ctx.drawImage(gameAssets.getBottomWallLeft(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 202){
				//BottomRightCorner
				ctx.drawImage(gameAssets.getBottomWallRight(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 101){
				//UpperLeftCorner
				ctx.drawImage(gameAssets.getUpperWallLeft(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 102){
				//UpperRightCorner
				ctx.drawImage(gameAssets.getUpperWallRight(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 303){
				//Top Wall
				ctx.drawImage(gameAssets.getBasicWallTop(), blockX, blockY,60,60);
			} else if(rooms[room][i] === 309){
				//Top Wall
				ctx.drawImage(gameAssets.getWallOutletRight(), blockX, blockY,60,60);
			} else if(rooms[room][i] === 444){
				//ShopKeeper
				ctx.drawImage(gameAssets.getShopMan(), blockX, blockY,60,60);
			} else if(rooms[room][i] === 445){
				//Shop Sign
				ctx.drawImage(gameAssets.getShopSign(), blockX, blockY,60,60);
			} else if(rooms[room][i] === 5555){
				//explosion
				ctx.drawImage(gameAssets.getDarkExplosion(), blockX, blockY,60,60);
				console.log('explosion tile');
				countTimerForExplosion--;
				if(countTimerForExplosion <= 0){
					rooms[room][i] = 2;
					countTimerForExplosion = 10;
				}
			} else if(rooms[room][i] === 301){
				//Left Wall
				ctx.drawImage(gameAssets.getBasicWallLeft(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 302){
				//Right Wall
				ctx.drawImage(gameAssets.getBasicWallRight(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 304){
				//Bottom Wall
				ctx.drawImage(gameAssets.getBasicWallBottom(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 666){
				//Window
				ctx.drawImage(gameAssets.getBasicWallWindow(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 78){
				//Counter With Sink
				ctx.drawImage(gameAssets.getCounterBasicWithSink(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 72){
				//Linolium
				ctx.drawImage(gameAssets.getLinolium(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 8) {
				//CouchLeft
				ctx.drawImage(gameAssets.getCouchLeft(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 9) {
				//CouchRight
				ctx.drawImage(gameAssets.getCouchRight(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 10) {
				//Draw an enemy
				if(renderEnemies) { // draws one
					if(Math.random() > 0.65 && grandmaCount < 1){
						enemy.addGmaEnemy(blockX,blockY,index);
						grandmaCount++;
						console.log("spawnGma");
					} else if(Math.random() > .35){ 
						enemy.addRat(blockX,blockY, index);	
					} else if(Math.random() > .20) {
					  	enemy.addCat(blockX,blockY, index);
					} else if(Math.random() > .18){  	
						enemy.addDog(blockX, blockY, index); 
					} else if(Math.random() < .10){
						enemy.addWigDemon(blockX, blockY, index);
					}	
				}
			} else if(rooms[room][i] === 777){
				if(renderEnemies){
					enemy.addPurchaseBlock(blockX,blockY, index);
				} //draws one
				
			}
			//Advance to next block
                        blockX +=60;
			index++;
			//If the block is the last in the row, advance to the next row.
			if(blockX === 840) {
				blockX = 0;
				blockY+= 60;
			}
			
		}
		tick++;
		renderEnemies = false;
	};
	
	var flatten = function(center) {
		var indexMods = [-15,-14,-13,-1,1,13,14,15];
		for(var i = 0; i < indexMods.length; i++) {
			var tempIndex = indexMods[i]
			var tempIndex = center + tempIndex
			if(rooms[room][tempIndex] === 1 || rooms[room][tempIndex] === 11 || rooms[room][tempIndex] === 1001 
				|| rooms[room][tempIndex] === 1002 || rooms[room][tempIndex] === 1003 ||rooms[room][tempIndex] === 2) {
				rooms[room][tempIndex] = 5555;
				if(rooms[room][tempIndex] != 301
					|| rooms[room][tempIndex] != 101
					|| rooms[room][tempIndex] != 201
					|| rooms[room][tempIndex] != 304
					|| rooms[room][tempIndex] != 302
					|| rooms[room][tempIndex] != 309
					|| rooms[room][tempIndex] != 202
					|| rooms[room][tempIndex] != 302
					|| rooms[room][tempIndex] != 3
					|| rooms[room][tempIndex] != 102){
						rooms[room][tempIndex] = 5555;
					}
			}
		}
	};
	
	var grenade = function(center) {
		enemiesPositions = enemies.getEnemyPos();
		for(var i = 0; i < enemiesPositions.length; i++) {
			if(enemiesPositions[i] === center - 15 
				|| enemiesPositions[i] === center - 14
				|| enemiesPositions[i] === center - 13
				|| enemiesPositions[i] === center - 1
				|| enemiesPositions[i] === center + 1
				|| enemiesPositions[i] === center + 13
				|| enemiesPositions[i] === center + 14
				|| enemiesPositions[i] === center + 15) {
					Combat.kill(enemy.getInstanceOfEnemy(enemiesPositions[i]));
					var indexOfEnemyKilled = enemiesPositions[i]; 
					rooms[room][indexOfEnemyKilled] = 5555;
			}
		}
		flatten(center);	
	};
	
	var darkMagicSplash = function(center){
		enemiesPositions = enemies.getEnemyPos();
		for(var i = 0; i < enemiesPositions.length; i++) {
			if(    enemiesPositions[i] === center - 14
				|| enemiesPositions[i] === center - 1
				|| enemiesPositions[i] === center + 1
				|| enemiesPositions[i] === center + 14){
					Combat.kill(enemy.getInstanceOfEnemy(enemiesPositions[i]));
					rooms[room][enemiesPositions[i]] = 5555;	
				}
			}
		console.log("DarkMagicHere")
	};
	
	var getPlayerPos = function() {
		return player.getPos();
	}
	
	var getPlayer = function() {
		return player;
	}
	
	return {
		getPlayer: getPlayer,
		getPlayerPos: getPlayerPos,
		flatten: flatten,
		getRoomsLength: getRoomsLength,
		getCollision: getCollision,
		getExit: getExit,
		draw: draw,
		darkMagicSplash: darkMagicSplash,
		getRoom: getRoom,
		setRoom: setRoom,
		grenade: grenade
	};

};
