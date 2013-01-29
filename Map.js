/*
 *	
 *
 */
var Map = function() {
	var blockX = 0,
		tileIndex = 15,
		blockY = 0, 
		room = 0,
		rooms = [];
		rooms[0] = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,
		    	1,0,0,0,0,0,0,0,0,0,0,0,0,1,
		    	1,0,0,0,0,0,0,0,0,0,0,0,0,1,
                    	1,0,0,0,0,0,0,0,0,0,0,0,0,1,
                    	1,0,0,0,0,0,0,0,0,0,0,0,0,1,
                    	1,0,0,0,0,0,0,0,0,0,0,0,0,1,
		    	1,0,0,0,0,0,0,0,0,0,0,0,0,1,
		    	1,0,0,0,0,0,0,0,0,0,0,0,0,2,
		    	1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	
	var getCollision = function() {
		if(rooms[room][tileIndex] === 1) {
			return true;
		} else {
			false;
		}
	};

	var setTileIndex = function(tileNum) {
		tileIndex += tileNum;
		console.log(tileIndex);
	};

	var getRoom = function() {
		return room;
	};

	var setRoom = function(roomNum) {
		room = roomNum;
	};

	var draw = function(ctx) {
		blockX = 0;
		blockY = 0;
		for(var i = 0; i < rooms[room].length; i++) {
			if(rooms[room][i] === 0) {
				ctx.fillStyle = 'black';
			} else if(rooms[room][i] === 1) {
				ctx.fillStyle = 'green';
			} else if(rooms[room][i] === 2) {
				ctx.fillStyle = 'red';
			}
			ctx.fillRect(blockX, blockY, 60, 60);
                        blockX +=60;
			if(blockX === 840) {
				blockX = 0;
				blockY+= 60;
			}
                }
	};

	return {
		getCollision: getCollision,
		setTileIndex: setTileIndex,
		draw: draw,
		getRoom: getRoom,
		setRoom: setRoom
	};

};
