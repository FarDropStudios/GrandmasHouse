/*
 *	GameAssets.js
 *	Tyler St. Onge & Tommy Guererri
 *
 *	Loads all assets of the game.
 */
 
var GameAssets = function() {
	var complete = false;
	var loader = new PxLoader(),
		couchLeft = loader.addImage('images/houseObjects/couchLeftTile.png'),
		couchRight = loader.addImage('images/houseObjects/couchRightTile.png'),
		tommy = loader.addImage('images/houseOccupants/tomScratchSheet.png'),
		tiles = loader.addImage('images/MiscImages/MedallionTiles.png'),
		player = loader.addImage('images/houseOccupants/rat.png'),
		couch = loader.addImage('images/houseObjects/couch.png'),
		floor = loader.addImage('images/wallsFloor/floorTileCarpet.png')
		wigDemon = loader.addImage('images/houseOccupants/wigSheetHover.png');
		basicWallTop = loader.addImage('images/wallsFloor/basicWallTop.png');
		basicWallBottom = loader.addImage('images/wallsFloor/basicWallBottom.png');
		basicWallRight = loader.addImage('images/wallsFloor/basicWallRight.png');
		basicWallLeft = loader.addImage('images/wallsFloor/basicWallLeft.png');
		upperWallRight = loader.addImage('images/wallsFloor/upperRightWall.png');
		upperWallLeft = loader.addImage('images/wallsFloor/upperLeftWall.png');
		bottomWallRight = loader.addImage('images/wallsFloor/bottomRightWall.png');
		bottomWallLeft = loader.addImage('images/wallsFloor/bottomLeftWall.png');
		basicWallWindow = loader.addImage('images/wallsFloor/basicWallWindow.png');
		cat = loader.addImage('images/houseOccupants/cat.png');
		dog = loader.addImage('images/houseOccupants/dog.png');
		grandma = loader.addImage('images/houseOccupants/grandMa.png');
		
	loader.addCompletionListener(function() {
		complete = true;
	});

	//Start loading the images
	var loadingStart = function() {
		loader.start();
	}
	
	//Returns true if the images are loaded
	var getIsComplete = function() {
		return complete;
	}
	//returns wallWindow
	var getBasicWallWindow = function() {
		return basicWallWindow;
	}
	
	//returns basic wall for top row of level
	var getBasicWallTop = function(){
		return basicWallTop;
	}
	//returns basic wall for bottom of level
	var getBasicWallBottom = function(){
		return basicWallBottom;
	}
	//returns basic wall for right of level
	var getBasicWallRight = function(){
		return basicWallRight;
	}
	//returns basic wall for left of level
	var getBasicWallLeft = function(){
		return basicWallLeft;
	}
	//returns wall for top right corner
	var getUpperWallRight = function(){
		return upperWallRight;
	}
	//returns wall for top left corner
	var getUpperWallLeft = function() {
	    return upperWallLeft;
	}
	//returns wall for bottom right corner
	var getBottomWallRight = function(){
		return bottomWallRight;
	}
	//returns wall for bottom left corner
	var getBottomWallLeft = function(){
		return bottomWallLeft;
	}
	//Returns the character image
	var getCharacter = function() {
		return tommy;
	}

	//Return rat
	var getRat = function() {
		return player;
	}

	//Returns the tile sheet.
	var getTiles = function() {
		return tiles;
	}
	//returns the wigDemon
	var getWigDemon = function() {
		return wigDemon;
	}
	//returns entire couch (bad)
	var getCouch = function() {
		return couch;
	}
	//returns floor tile
	var getFloorTile = function() {
		return floor;
	}
	//returns left couch tile
	var getCouchLeft = function() {
		return couchLeft;	
	}
	//returns right couch tile
	var getCouchRight = function() {
		return couchRight;
	}
	//returns Cat
	var getCat = function() {
		return cat;
	}
	//returns Dog
	var getDog = function() {
		return dog;
	}
	//returns Grandma
	var getGrandma = function(){
		return grandma;
	}
	return {
		loader: loader,
		loadingStart: loadingStart,
		getIsComplete: getIsComplete,
		getGrandma:getGrandma,
		getDog:getDog,
		getCat:getCat,
		getCharacter: getCharacter,
		getTiles: getTiles,
		getRat: getRat,
		getCouch: getCouch,
		getCouchLeft: getCouchLeft,
		getCouchRight: getCouchRight,
		getFloorTile: getFloorTile,
		getWigDemon: getWigDemon,
		getBasicWallBottom: getBasicWallBottom,
		getBasicWallTop: getBasicWallTop,
		getBasicWallLeft: getBasicWallLeft,
		getBasicWallRight: getBasicWallRight,
		getUpperWallLeft: getUpperWallLeft,
		getUpperWallRight: getUpperWallRight,
		getBottomWallRight: getBottomWallRight,
		getBottomWallLeft: getBottomWallLeft,
		getBasicWallWindow: getBasicWallWindow
	}	
}
