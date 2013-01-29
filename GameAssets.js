var GameAssets = function() {
	var complete = false;
	var loader = new PxLoader(),
		tommy = loader.addImage('tommy.png'),
		tiles = loader.addImage('MedallionTiles.png'),
		player = loader.addImage('player.png');
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

	return {
		loader: loader,
		loadingStart: loadingStart,
		getIsComplete: getIsComplete,
		getCharacter: getCharacter,
		getTiles: getTiles,
		getRat: getRat
	}	
}
