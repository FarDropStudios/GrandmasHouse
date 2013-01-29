/*
 *	Map.js	
 *	Tyler St. Onge
 *	
 *	This class draws each room within the game. The rooms are current 14 blocks wide, and 9 high.
 *	Key: 0 = randomly generated block; 1 = wall block; 2 = empty/floor; block; 3 = exit;
 */
var Map = function(tileSet) {
	var blockX = 0,
		tileIndex = 15,
		blockY = 0,
		tiles = tileSet,
		chance, 
		room = 0,
		rooms = [];
		rooms[0] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		    	1,2,2,0,0,0,0,0,0,0,0,0,0,1,
		    	1,2,2,0,0,0,0,0,0,0,0,0,0,1,
                    	1,0,0,0,0,0,0,0,0,0,0,0,0,1,
                    	1,0,0,0,0,0,0,0,0,0,0,0,0,1,
                    	1,0,0,0,0,0,0,0,0,0,0,0,0,1,
		    	1,0,0,0,0,0,0,0,0,0,0,2,2,1,
		    	1,0,0,0,0,0,0,0,0,0,0,2,2,3,
		    	1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	
	//Returns true if the block is solid
	var getCollision = function() {
		if(rooms[room][tileIndex] === 1) {
			return true;
		} else {
			false;
		}
	};

	//Keeps track of where the player is within the room array, takes a parameter tileNum which adds to the 
	//accumulator tileIndex
	var setTileIndex = function(tileNum) {
		tileIndex += tileNum;
	};

	//Returns the tileIndex AKA the players position.
	var getTileIndex = function() {
		return tileIndex;	
	};

	//Returns what room the player is in
	var getRoom = function() {
		return room;
	};

	//Changes which room the player is in
	var setRoom = function(roomNum) {
		room = roomNum;
	};

	//The draw function for the room, it takes the context as a parameter which
	//enables the method to draw on the canvas.
	var draw = function(ctx) {
		//refresh the block coordinates
		blockX = 0;
		blockY = 0;
		for(var i = 0; i < rooms[room].length; i++) {
			//If block needs to be randomized
			if(rooms[room][i] === 0) {
				//Randomize dat hoe
				chance = Math.random();
				//20 percent chance that the block is solid, else its empty.
				if(chance < 0.20) {
					rooms[room][i] = 1;
				} else {
					rooms[room][i] = 2;
				}
			}
			if(rooms[room][i] === 1) {
				//WALL BLOCK
				ctx.drawImage(tiles,0,480,60,60,blockX,blockY,60,60);
			} else if(rooms[room][i] === 2) {
				//FLOOR BLOCK
				ctx.drawImage(tiles,480,60,60,60,blockX,blockY,60,60);
			} else if(rooms[room][i] === 3) {
				//EXIT BLOCK
				ctx.fillStyle = 'red';
				ctx.fillRect(blockX,blockY,60,60);
			}
			//Advance to next block
                        blockX +=60;
			//If the block is the last in the row, advace to the next row.
			if(blockX === 840) {
				blockX = 0;
				blockY+= 60;
			}
                }
	};


	return {
		getCollision: getCollision,
		getTileIndex: getTileIndex,
		setTileIndex: setTileIndex,
		draw: draw,
		getRoom: getRoom,
		setRoom: setRoom
	};

};
