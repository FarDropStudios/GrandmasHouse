/*
 *	GameAssets.js
 *	Tyler St. Onge
 *
 *	Loads all assets of the game.
 */
 
var GameAssets = function() {
	var complete = false;
	var loader = new PxLoader(),
		tommy = loader.addImage('images/thomas.png'),
		tiles = loader.addImage('images/MedallionTiles.png'),
		player = loader.addImage('images/rat.png'),
		wigDemon = loader.addImage('images/wigDemon.png');
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
	var getWigDemon = function(){
		return wigDemon;
	}
	return {
		loader: loader,
		loadingStart: loadingStart,
		getIsComplete: getIsComplete,
		getCharacter: getCharacter,
		getTiles: getTiles,
		getRat: getRat,
		getWigDemon: wigDemon
	}	
}
