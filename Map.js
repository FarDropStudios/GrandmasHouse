/*
 *	Map.js	
 *	Tyler St. Onge
 *	
 *	This class draws each room within the game. The rooms are current 14 blocks wide, and 9 high.
 *	Key: 0 = randomly generated block; 1 = wall block; 2 = empty/floor; block; 3 = exit;
 *	10 = Rat;
 */
var Map = function(tileSet) {
	var blockX = 0,
		index = 0,
		chance,
		blockY = 0,
		tiles = tileSet, 
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
	var getCollision = function(tile) {
		if(rooms[room][tile] === 1) {
			return true;
		} else {
			false;
		}
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
		index = 0;
		for(var i = 0; i < rooms[room].length; i++) {
			//If block needs to be randomized
			if(rooms[room][i] === 0) {
				//Randomize dat hoe
				chance = Math.random();
				//20 percent chance that the block is solid, else its empty.
				if(chance < 0.20) {
					rooms[room][i] = 1;
				} else if(chance > 0.20 || chance < 0.25) {
					rooms[room][i] = 10;
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
			} else if(rooms[room][i] === 10) {
				ctx.drawImage(tiles,480,60,60,60,blockX,blockY,60,60);
			}
			//Advance to next block
                        blockX +=60;
			index++;
			//If the block is the last in the row, advace to the next row.
			if(blockX === 840) {
				blockX = 0;
				blockY+= 60;
			}
                }
	};


	return {
		getCollision: getCollision,
		draw: draw,
		getRoom: getRoom,
		setRoom: setRoom
	};

};
