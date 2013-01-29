var GameAssets = function() {
	var complete = false;
	var loader = new PxLoader(),
		tommy = loader.addImage('tommy.png'),
		tiles = loader.addImage('MedallionTiles.png'),
		player = loader.addImage('player.png');
	loader.addCompletionListener(function() {
		complete = true;
	});

	var loadingStart = function() {
		loader.start();
	}
	
	var getIsComplete = function() {
		return complete;
	}

	var getCharacter = function() {
		return tommy;
	}

	var getTiles = function() {
		return tiles;
	}

	return {
		loader: loader,
		loadingStart: loadingStart,
		getIsComplete: getIsComplete,
		getCharacter: getCharacter,
		getTiles: getTiles
	}	
}
