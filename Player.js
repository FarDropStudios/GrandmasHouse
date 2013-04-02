/*
 *	Player.js
 *	Tyler St. Onge
 *  Tommy Guererri
 *
 *	Takes the parameters startX and startY, which initialize where the player is.
 */

var Player = function(startX, startY, tGameAssets) {
	var name = "Player";
	//Attack Animation Variables
	var attackImage,
		attackTimer = 0,
		attackDraw = false;
	//Terminal variables
	var terminal = [];
		terminal[0] = "", terminal[1] = "", terminal[2] = "", terminal[3] = "", terminal[4] = "";
	//Achievment variables
	var roomCount = 0;
	//Messy code
	var x = startX,
		playerImage = gameAssets.getCharacter();
		mindPosX = 0,
		powerUps = [0,0,0,0,0],
		health = 15,
		coins = 0,
		mind = 6;
		gameAssets = tGameAssets,
		y = startY,
		wearingGloves = false;
		lastMove = 0,
		tileIndex = 15,
		moveTimer = 15,
		spriteLength = 660,
		spriteX = 0,
		tick = 0,
		moveAmount = 60,
		healthPosX = 0,
		dead = false;
	
	//------------------- SOUND MANAGER START --------------------------- 
	soundManager.url = 'soundManagerFiles/';
	soundManager.flashVersion = 9; 
	soundManager.useHighPerformance = true; // reduces delays 
 
	// reduce the default 1 sec delay to 500 ms 
	soundManager.flashLoadTimeout = 500; 
 
	// mp3 is required by default, but we don't want any requirements 
	soundManager.audioFormats.mp3.required = false; 
 	
 	soundManager.setup({
 		preferFlash: false
 	});
 	
	// flash may timeout if not installed or when flashblock is installed 
	soundManager.ontimeout(function(status) { 
    // no flash, go with HTML5 audio 
	    soundManager.useHTML5Audio = true; 
	    soundManager.preferFlash = false; 
	    soundManager.reboot(); 
	}); 

	soundManager.onready(function() { 
		soundInit();
	});
	
	function soundInit() {
		//Load sounds
	 	soundManager.createSound({
			id:'Theme',
			url:'Sound/StayNeutral.wav',
			stream: true,
			loops: 666
		});
		
		soundManager.createSound({
			id:'Voop',
			url:'Sound/voop.ogg',
			stream: true
		});
		
		soundManager.createSound({
			id:'darkMatter',
			url:'Sound/darkMatter.ogg',
			stream: true
		});
		
		soundManager.createSound({
			id:'lightMagic',
			url:'Sound/magicSoundGood.ogg',
			stream: true
		});
		
		soundManager.createSound({
			id:'gloveSound',
			url:'Sound/glovesssss.ogg',
			stream: true
		});
	
		soundManager.createSound({
			id:'Door',
			url:'Sound/door.ogg',
			stream: true
		});
		
		soundManager.createSound({
			id:'coinSound',
			url:'Sound/coinSound.ogg',
			stream: true
		});
		
		soundManager.createSound({
			id:'Attack',
			url:'Sound/shbupp.ogg',
			stream: true
		});
		
		soundManager.play('Theme');
	}
//------------------- SOUND MANAGER FINISH --------------------------- 
	
	var getX = function() {
		return x;
	}
	
	var getY = function() {
		return y;
	}
	var getGloveState = function(){
		return wearingGloves;
	}
	var toggleGloveState = function(){
		soundManager.play('gloveSound');
		if(wearingGloves){
			wearingGloves = false;
		} else if(!wearingGloves){
			wearingGloves = true;
		} 
	}
	var getPowerUps = function() {
		return powerUps;
	}
	
	var getMind = function() {
		return mind;
	}

	var setX = function(tX) {
		x = tX;
	}

	var setY = function(tY) {
		y = tY;
	}

	var setHealth = function(tH) {
		if(tH > health){
			soundManager.play('magicSoundGood');
		}
		health = tH;
	}
	
	var setMind = function(tM) {
		mind = tM;
	}

	var getPos = function() {
		return tileIndex;
	}
	var getPosForExplosion = function(){
		soundManager.play('darkMatter');
		return tileIndex;
		
		
	}
	var getHealth = function() {
		return health;
	}
	
	var setTileIndex = function(tTileIndex) {
		tileIndex = tTileIndex;
	}
	
	var setPowerUps = function(tPowerUps) {
		powerUps = tPowerUps;
	}
	
	var addCoin = function(howMany) {
		coins += howMany;
		soundManager.play('coinSound');
	}
	
	var subtractCoin = function(howMany) {
		coins -= howMany;
		soundManager.play('coinSound');
	}
	var getCoin = function(){
		return coins;
	}
	
	var update = function(tx, ty, map) {				
		if(tx < x+120 && tx > x+60 && ty > y && ty < y+60 && !dead) {
			right();
		}else if(tx < x && tx > x-60 && ty > y && ty < y+60 && !dead) {
			left();
		}else if(ty < y+120 && ty > y+60 && tx > x && tx < x+60 && !dead) {
			down();
		}else if(ty < y && ty > y-60 && tx > x && tx < x+60 && !dead) {
			up();
		}
		if(tileIndex === map.getExit()) {
			roomCount+= 1;
			setMessage("Room "+String(roomCount));
			health++;
			x = 60;
			y = 60;
			tileIndex=15;
			var roomNumber = map.getRoom();
			roomNumber++;
			soundManager.play('Door');
			if(roomNumber >= map.getRoomsLength()){
				roomNumber = 0;
			}
			console.log(wearingGloves);
			wearingGloves = false;
			map.setRoom(roomNumber);
			if(this.getHealth() === 0){
				setMessage('You have died!');
				dead = true; //implement further
			}
		}
	}

	var up = function() {
		tileIndex-=14;
		if(!map.getCollision(tileIndex, "Player")) {
			y-=moveAmount;
			playerImage = gameAssets.getCharacter();
		} else {
			tileIndex+=14;
		}
		if(tileIndex === map.getExit()) {
			health++;
			x = 60;
			y = 60;
			tileIndex=15;
			var roomNumber = map.getRoom();
			roomNumber++;
			if(roomNumber >= 6){
				roomNumber = 0;
			}
			map.setRoom(roomNumber);
		}
	}
	
	var down = function() {
		tileIndex+=14;
		if(!map.getCollision(tileIndex, "Player")) {
			y+=moveAmount;
			playerImage = gameAssets.getTomBack();
		} else {
			tileIndex-=14;
		}
		if(tileIndex === map.getExit()) {
			health++;
			x = 60;
			y = 60;
			tileIndex=15;
			var roomNumber = map.getRoom();
			roomNumber++;
			if(roomNumber >= 6){
				roomNumber = 0;
			}
			map.setRoom(roomNumber);
		}		
	}
	
	var right = function() {
		tileIndex++;
		if(!map.getCollision(tileIndex, "Player")) {
			x+=moveAmount;
			playerImage = gameAssets.getTomRight();
		} else {
			tileIndex--;
		}
		if(tileIndex === map.getExit()) {
			health++;
			x = 60;
			y = 60;
			tileIndex=15;
			var roomNumber = map.getRoom();
			roomNumber++;
			if(roomNumber >= 6){
				roomNumber = 0;
			}
			map.setRoom(roomNumber);
		}		
	}
	
	var left = function() {
		tileIndex--;
		if(!map.getCollision(tileIndex, "Player")) {
			x-=moveAmount;
			playerImage = gameAssets.getTomBack();
		} else {
			tileIndex++;
		}
		if(tileIndex === map.getExit()) {
			health++;
			x = 60;
			y = 60;
			tileIndex=15;
			var roomNumber = map.getRoom();
			roomNumber++;
			if(roomNumber >= 6){
				roomNumber = 0;
			}
			map.setRoom(roomNumber);
		}
	}
	 
	var guiUpdate = function() {
		//HEALTH BAR
		if(health <= 0) {
			healthPosX = 300;
			dead = true;
			soundManager.play('Sad Death', 'Sound/sad death.ogg');
		} else if(health == 1){
			healthPosX = 240;
		} else if(health == 2) {
			healthPosX = 180;
		} else if(health == 3) {
			healthPosX = 120;
		} else if(health == 4) {
			healthPosX = 60;
		} else if(health == 5) {
			healthPosX = 0;
		}
		
		//MIND METER
		if(mind <= 0) {
			mindPosX = 540;
		} else if(mind == 1) {
			mindPosX = 480;
		} else if(mind == 2) {
			mindPosX = 420;
		} else if(mind == 3) {
			mindPosX = 360;
		} else if(mind == 4) {
			mindPosX = 300;
		} else if(mind == 5) {
			mindPosX = 240;
		} else if(mind == 6) {
			mindPosX = 180;
		} else if(mind == 7) {
			mindPosX = 120;
		} else if(mind == 8) {
			mindPosX = 60;
		} else if(mind == 9) {
			mindPosX = 0;
		}
	}

	var exitCheck = function() {
		if(tileIndex === map.getExit()) {
			soundManager.play('Door');
			wearingGloves = false;
			x = 60;
			y = 60;
			tileIndex=15;
			if(map.getRoom() === map.getRoomsLength)
				map.setRoom(0);
			else
				map.setRoom(map.getRoom() + 1);
		}
	}

	var draw = function(ctx, guiCtx) {
		//POWER UPS
		guiCtx.drawImage(gameAssets.getBorderImage(), 852, 22, 80, 80);
		guiCtx.drawImage(gameAssets.getBorderImage(), 852, 122, 80, 80);
		guiCtx.drawImage(gameAssets.getBorderImage(), 852, 222, 80, 80);
		guiCtx.drawImage(gameAssets.getBorderImage(), 852, 322, 80, 80);
		guiCtx.drawImage(gameAssets.getBorderImage(), 852, 422, 80, 80);
		var powPosY = 30; 
		for(var i = 0; i < powerUps.length; i++) {
				switch(powerUps[i]) {
					case 0: powPosY += 100;
							break;
					case 1: guiCtx.drawImage(gameAssets.getFebreeze(), 862, powPosY);
							powPosY += 100;
							break;
					case 2: guiCtx.drawImage(gameAssets.getGlove(), 862, powPosY);
							powPosY += 100;
							break;
					case 3: guiCtx.drawImage(gameAssets.getLightMagic(),0,0,60,60,862,powPosY,60,60);
							powPosY += 100;
							break;
					case 4: guiCtx.drawImage(gameAssets.getDarkMagic(),0,0,60,60,862,powPosY,60,60);
							powPosY += 100;
							break;
					case 5: guiCtx.drawImage(gameAssets.getGrenade(), 862, powPosY);
							powPosY += 100;
							break;
				}
		}
		
		//HEALTH & MENTAL BAR 
		guiCtx.drawImage(gameAssets.getBorderImage(), 18, 548, 68, 69);
		guiCtx.drawImage(gameAssets.getHealthMeter(), healthPosX, 0, 60, 60, 20, 550, 60, 60);
		guiCtx.drawImage(gameAssets.getBorderImage(), 94, 548, 69, 69);
		guiCtx.drawImage(gameAssets.getMindMeter(), mindPosX, 0, 60, 60, 100, 558, 60, 60);
		
		
		//Coin Count
		guiCtx.drawImage(gameAssets.getBorderImage(), 172, 548, 69, 69);
		guiCtx.fillText("Coins", 190, 570);
		guiCtx.fillText("$ "+coins, 190, 585);
		guiCtx.fillText("HP " +health, 190,595);
		
		//TERMINAL
		guiCtx.drawImage(gameAssets.getBorderLongLeft(), 532, 548);
		guiCtx.drawImage(gameAssets.getBorderLongMiddle(), 592, 548);
		guiCtx.drawImage(gameAssets.getBorderLongMiddle(), 652, 548);
		guiCtx.drawImage(gameAssets.getBorderLongMiddle(), 712, 548);
		guiCtx.drawImage(gameAssets.getBorderLongRight(), 772, 548);
		
		guiCtx.fillText(terminal[0], 540, 565);
		guiCtx.fillText(terminal[1], 540, 575);
		guiCtx.fillText(terminal[2], 540, 585);
		guiCtx.fillText(terminal[3], 540, 595);
		guiCtx.fillText(terminal[4], 540, 605);
		
		if(!dead && mind > 0) {
			if(lastMove > 250) {
				if(tick < moveTimer) {
					tick++;
				}
				if(tick === moveTimer) {
					if(spriteX === spriteLength) {
						spriteX = 0;
						lastMove = 0;
					} else {
						spriteX += 60;
					}
					tick = 0;
					ctx.drawImage(gameAssets.getCharacter(),spriteX,0,60,60,x,y,60,60);
				}
			} else {
				lastMove++;
				spriteX = 0;
			}
			
			//CHARACTER
			ctx.drawImage(playerImage,spriteX,0,60,60,x,y,60,60);
			
			//DRAW ATTK
			if(attackDraw && attackTimer < 15) {
				attackTimer++;
				ctx.drawImage(attackImage, x, y);
			} else {
				attackTimer = 0;
				attackDraw = false; 
			}
		}else if(dead && mind > 0){
			console.log("dead");
			ctx.drawImage(gameAssets.getDeadTom(),x,y);
		} else if(mind < 1){
			console.log("mental");
			ctx.drawImage(gameAssets.getCrazyTom(),x,y);
		}
	}


	var drawAttack = function(direction) {
		soundManager.play('Attack');
		switch(direction) {
				case "left": attackImage = gameAssets.getAtkArrowRightToLeft();
				break;
			case "right": attackImage = gameAssets.getAtkArrowLeftToRight();
				break;
			case "up": attackImage = gameAssets.getAtkArrowDownToUp();
				break;
			case "down": attackImage = gameAssets.getAtkArrowUpToDown();
				break;
		}
		attackDraw = true;
	}

	var moved = function() {
		lastMove = 0;	
	}
	
	var getName = function() {
		return name;
	}
	
	var isDead = function() {
		return dead;
	}
	
	var setMessage = function(message) {
		if(terminal[0] === "") {
			terminal[0] = message;
		} else if(terminal[1] === "") {
			terminal[1] = message;
		} else if(terminal[2] === "") {
			terminal[2] = message;
		} else if(terminal[3] === "") {
			terminal[3] = message;
		} else if(terminal[4] === "") {
			terminal[4] = message;
		} else {
			terminal[0] = terminal[1];
			terminal[1] = terminal[2];
			terminal[2] = terminal[3];
			terminal[3] = terminal[4];
			terminal[4] = message;
		}
	} 
	
	return {
		setMessage: setMessage,
		drawAttack: drawAttack,
		left: left,
		right: right,
		up: up,
		down: down,
		getMind: getMind,
		getName: getName,
		getGloveState:getGloveState,
		toggleGloveState:toggleGloveState,
		getX: getX,
		getY: getY,
		getHealth: getHealth,
		getPowerUps: getPowerUps,
		setMind: setMind,
		setX: setX,
		setY: setY,
		setHealth: setHealth,
		setPowerUps: setPowerUps,
		getPos: getPos,
		addCoin: addCoin,
		getCoin: getCoin,
		subtractCoin: subtractCoin,
		setTileIndex: setTileIndex,
		update: update,
		guiUpdate: guiUpdate,
		getPosForExplosion: getPosForExplosion,
		moved: moved,
		exitCheck: exitCheck,
		isDead: isDead,
		draw: draw
	}
}

