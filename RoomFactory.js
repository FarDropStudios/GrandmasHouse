//Tom Guererri
//GMA
//RoomFactory.js
//Has room archetype and room sequence logic


var RoomFactory = function() {
	
	var powerUpRoomGenerate = function(){
		//has types of power up rooms
		//picks one at random.
		//randomize it
		chance = Math.random();	
	}
	var kitchenGenerate = function(){
		//returns basic archetype for kitchens
		 return [101,303,303,303,666,303,303,303,303,303,303,303,303,102,
	    	301,72,72,71,71,71,71,71,71,71,78,78,71,302,
	    	301,72,72,71,71,71,71,71,71,71,72,72,72,302, //72 safe linolium 
			301,71,72,71,71,71,71,71,71,71,71,71,72,302, //71 spawn linolium
			301,71,72,72,72,72,72,72,72,72,72,72,72,3,	//78 counter with sink
			301,71,72,71,71,71,71,71,71,71,71,71,72,302,
	    	301,71,72,71,71,71,71,71,71,71,71,72,72,302,
	    	301,71,72,71,71,71,71,71,71,71,71,72,72,302,
	    	201,304,304,304,304,304,304,304,304,304,304,304,304,202];
	}
	var junkRoomGenerate = function(){
		//returns the room directly after the bedroom
		return [101,303,303,303,303,666,
				303,303,303,303,303,303,303,102,
		    	301,2,2,1,8,9,1,1,0,0,2,2,2,302, //73 stairs
		    	301,2,2,1,1,1,1,1,1,0,2,2,73,302,
				301,0,2,1,1,1,0,0,1,0,1,2,2,302, //junk room
				301,0,2,1,1,1,1,1,1,1,0,2,0,302,
				301,0,2,1,2,2,2,2,2,2,2,2,0,302,
		    	301,0,2,1,2,0,1,1,1,0,0,2,2,302,
		    	301,0,2,2,2,0,1,1,1,0,0,2,2,302,
		    	201,304,304,304,304,304,304,304,304,304,304,304,304,202];
	}
	var bathRoomGenerate = function(){
		//returns the bathroom
	}
	var joesRoomGenerate = function(){
		//returns a high risk - reward room that is not required
	}
	var livingRoomGenerate = function(){
		//returns mini - boss room with different
	}
	var basicRoomGenerate = function(){
		 return [101,303,303,303,666,303,303,303,303,303,303,303,303,102,
		    	301,2,2,0,0,0,0,0,0,0,8,9,2,302,
		    	301,2,2,0,0,0,0,0,0,0,2,2,2,302,
				301,0,2,0,0,0,0,0,0,0,0,0,2,302,
				301,0,2,2,2,0,0,0,0,0,0,2,2,3,
				301,0,2,0,2,2,0,0,0,0,0,0,2,302,
		    	301,0,2,0,0,2,2,2,2,2,2,2,2,302,
		    	301,0,2,0,0,0,0,0,0,0,0,2,2,302,
		    	201,304,304,304,304,304,304,304,304,304,304,304,304,202];	
	}
	var shopKeeper = function(){
		//returns room with shop man
	}
	var bedRoomGenerate = function(){
		//returns bedroom
		return [101,303,303,303,303,15,16,666,303,303,303,303,303,102,
		    	301,2,2,11,12,13,14,19,0,0,0,0,0,302,			//2 = ground           11 = bed left
		    	301,2,2,2,2,2,2,2,2,2,2,0,0,302,				//3 = exit				12 = bed right
				301,2,2,0,0,0,2,2,2,0,2,0,0,302,				//301 = left side wall   13 = deskWithPC Left
				301,0,2,0,0,0,2,2,2,0,2,0,0,302,				//302 = right side wall  14 = deskWithPC Right
				301,0,2,2,2,0,2,2,2,0,2,0,0,302, //bedroom		//303 = top wall         19 = night stand
		    	301,0,0,0,0,0,2,2,2,0,2,2,2,3,					//304 = bottom wall      15 = Monitor Left
		    	301,0,0,0,0,0,2,2,2,2,2,2,2,302,				// 666 = Window			16 = Monitor Right
		    	201,304,304,304,304,304,304,304,304,304,304,304,304,202,];	
	}
	var assignRandomRoom = function(){
		//assigns which misc room gets added
		//from list of 
		//Joe's Room
		//ShopKeeper
		//
	}
	
	var changeBlockAt = function(room, index, newBlock) {
		room[room][index] === newBlock;
	}
	
	return {
			// changeBlockAt: changeBlockAt,
			bedRoomGenerate: bedRoomGenerate,
			assignRandomRoom: assignRandomRoom,
			shopKeeper:shopKeeper,
			basicRoomGenerate: basicRoomGenerate,
			livingRoomGenerate: livingRoomGenerate,
			joesRoomGenerate: joesRoomGenerate,
			bathRoomGenerate: bathRoomGenerate,
			junkRoomGenerate: junkRoomGenerate,
			kitchenGenerate: kitchenGenerate,
			powerUpRoomGenerate: powerUpRoomGenerate
		}
}
