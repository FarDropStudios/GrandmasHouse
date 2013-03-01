/*
 *	Map.js	
 *	Tyler St. Onge & Tommy Guererri
 *	
 *	This class draws each room within the game. The rooms are current 14 blocks wide, and 9 high.
 *	Key: 0 = randomly generated block; 1 = wall block; 2 = empty/floor; block; 3 = exit;
 *	10 = Rat;
 */

//Could add a check for health at each valid index to see method if health is < 1. If so change tile index to remains/ground etc.

var Map = function(tempEnemies, tempPlayer, tGameAssets) {
	var blockX = 0,
		index = 0,
		chance,
		exit,
		blockY = 0,
		enemy = tempEnemies,
		player = tempPlayer, 
		room = 0,
		renderEnemies = true,
		rooms = [],
		gameAssets = tGameAssets;
		rooms[0] = [101,303,303,303,303,303,666,303,303,303,303,303,303,102,
		    	301,2,2,0,0,8,9,0,0,0,0,0,0,302,
		    	301,2,2,0,0,0,0,0,0,0,0,0,0,302,
				301,0,0,0,0,0,0,0,0,0,0,0,0,302,
				301,0,0,0,0,0,0,0,0,0,2,0,0,302,
				301,0,0,0,0,0,0,0,0,0,2,0,0,302,
		    	301,0,0,0,0,0,0,0,0,0,2,2,2,3,
		    	301,0,0,0,0,0,0,0,0,0,0,2,2,302,
		    	201,304,304,304,304,304,304,304,304,304,304,304,304,202,];
		rooms[1] = [101,303,303,303,303,666,303,303,303,303,303,303,303,102,
		    	301,2,2,0,0,0,0,0,0,0,8,9,2,302,
		    	301,2,2,0,0,0,0,0,0,0,2,2,2,3,
				301,0,0,0,0,0,0,0,0,0,0,0,2,302,
				301,0,0,0,0,0,0,0,0,0,0,0,0,302,
				301,0,0,0,0,0,0,0,0,0,0,0,0,302,
		    	301,0,0,0,0,0,0,0,0,0,0,2,2,302,
		    	301,0,0,0,0,0,0,0,0,0,0,2,2,302,
		    	201,304,304,304,304,304,304,304,304,304,304,304,304,202];
	
	//Returns true if the block is solid
	var getCollision = function(tile) {
		enemyPositions = enemy.getEnemyPos();
		if(rooms[room][tile] === 1 
			|| rooms[room][tile] === 8 
			|| rooms[room][tile] === 9
			|| rooms[room][tile] === 301
			|| rooms[room][tile] === 302
			|| rooms[room][tile] === 303
			|| rooms[room][tile] === 304
			|| rooms[room][tile] === 101
			|| rooms[room][tile] === 102
			|| rooms[room][tile] === 201
			|| rooms[room][tile] === 202) {
			return true;
		} else {
			for(var i = 0; i < enemyPositions.length; i++) {
				if(player.getPos() === enemyPositions[i]) {
					return true;
				//combat(player,)
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

	var getExit = function() {
		return exit;
	}
	
	//Returns what room the player is in
	var getRoom = function() {
		return room;
	};

	//Changes which room the player is in
	var setRoom = function(roomNum) {
		room += roomNum;
		enemies.emptyEnemies();
		renderEnemies = true;
	};
	//The draw function for the room, it takes the context as a parameter which
	//enables the method to draw on the canvas.
	var draw = function(ctx) {
		//refresh the block coordinates
		blockX = 0;
		blockY = 0;
		index = 0;
		for(var i = 0; i < rooms[room].length; i++) {
			ctx.drawImage(gameAssets.getFloorTile(),blockX,blockY,60,60);
			//If block needs to be randomized
			if(rooms[room][i] === 0) {
				//Randomize dat hoe
				chance = Math.random();
				//20 percent chance that the block is solid, else its empty.
				if(chance < 0.20) {
					rooms[room][i] = 1;
				} else if(chance > 0.21 && chance < 0.25) {
					rooms[room][i] = 10;
				} else {
					rooms[room][i] = 2;
				}
			}
			if(rooms[room][i] === 1) {
				//WALL BLOCK
				ctx.drawImage(gameAssets.getCouch(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 2) {
				//FLOOR BLOCK
				ctx.drawImage(gameAssets.getFloorTile(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 3) {
				//EXIT BLOCK
				exit = index;
				ctx.drawImage(gameAssets.getRightDoor(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 201){
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
			} else if(rooms[room][i] === 8) {
				//CouchLeft
				ctx.drawImage(gameAssets.getCouchLeft(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 9) {
				//CouchRight
				ctx.drawImage(gameAssets.getCouchRight(),blockX,blockY,60,60);
			} else if(rooms[room][i] === 10) {
				//Draw an enemy
				if(renderEnemies) {
					if(Math.random() > 0.65){
						enemy.addCat(blockX, blockY, index);
					} else if(Math.random() > .35){ 
						enemy.addRat(blockX,blockY, index);	
					} else if(Math.random() > .20) {
					  	enemy.addDog(blockX,blockY, index);
					} else {  	
						enemy.addWigDemon(blockX, blockY, index); 
					}	
				}
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
		renderEnemies = false;
	};
	

	return {
		getCollision: getCollision,
		getExit: getExit,
		draw: draw,
		getRoom: getRoom,
		setRoom: setRoom
	};

};
