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
		//holds basic archetype for kitchens
		chance = Math.random
		//randomize room
	}
	var junkRoomGenerate = function(){
		//returns the room directly after the bedroom
		
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
		//returns basic room
	}
	var shopKeeper = function(){
		//returns room with shop man
	}
	var bedRoomGenerate = function(){
		//returns bedroom
		var room = [101,303,303,303,303,15,16,666,303,303,303,303,303,102,
		    	301,2,2,11,12,13,14,19,0,0,0,0,0,302,			//2 = ground           11 = bed left
		    	301,2,2,2,2,2,2,2,2,2,2,0,0,302,				//3 = exit				12 = bed right
				301,2,2,0,0,0,2,2,2,0,2,0,0,302,				//301 = left side wall   13 = deskWithPC Left
				301,0,2,0,0,0,2,2,2,0,2,0,0,302,				//302 = right side wall  14 = deskWithPC Right
				301,0,2,2,2,0,2,2,2,0,2,0,0,302, //bedroom		//303 = top wall         19 = night stand
		    	301,0,0,0,0,0,2,2,2,0,2,2,2,3,					//304 = bottom wall      15 = Monitor Left
		    	301,0,0,0,0,0,2,2,2,2,2,2,2,302,				// 666 = Window			16 = Monitor Right
		    	201,304,304,304,304,304,304,304,304,304,304,304,304,202,];
		return room;
	}
	var assignRandomRoom = function(){
		//assigns which misc room gets added
		//from list of 
		//Joe's Room
		//ShopKeeper
		//
	}
	
	return {
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
