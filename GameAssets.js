/*
 *	GameAssets.js
 *	Tyler St. Onge
 *
 *	Loads all assets of the game.
 */
 
var GameAssets = function() {
	var complete = false;
	var loader = new PxLoader(),
		couchLeft = loader.addImage('images/couchLeftTile.png'),
		couchRight = loader.addImage('images/couchRightTile.png'),
		tommy = loader.addImage('images/tomScratchSheet.png'),
		tiles = loader.addImage('images/MedallionTiles.png'),
		player = loader.addImage('images/rat.png'),
		couch = loader.addImage('images/couch.png'),
		floor = loader.addImage('images/floorTileCarpet.png')
		wigDemon = loader.addImage('images/wigSheetHover.png');
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
	
	var getWigDemon = function() {
		return wigDemon;
	}
	
	var getCouch = function() {
		return couch;
	}
	
	var getFloorTile = function() {
		return floor;
	}
	
	var getCouchLeft = function() {
		return couchLeft;	
	}
	
	var getCouchRight = function() {
		return couchRight;
	}
	return {
		loader: loader,
		loadingStart: loadingStart,
		getIsComplete: getIsComplete,
		getCharacter: getCharacter,
		getTiles: getTiles,
		getRat: getRat,
		getCouch: getCouch,
		getFloorTile: getFloorTile,
		getWigDemon: getWigDemon
	}	
}
