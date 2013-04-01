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
		darkMagicExplosion = loader.addImage('images/MiscImages/blackMagicExplosion.png');
		explosion = loader.addImage('images/MiscImages/explosion.png');
		borderImage = loader.addImage('images/MiscImages/border.png'),
		tommy = loader.addImage('images/houseOccupants/tomScratchSheet.png'),
		tiles = loader.addImage('images/MiscImages/MedallionTiles.png'),
		rat = loader.addImage('images/houseOccupants/rat.png'),
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
		startPoster = loader.addImage('images/MiscImages/posterTom.png');
		dog = loader.addImage('images/houseOccupants/dog.png');
		grandma = loader.addImage('images/houseOccupants/grandMa.png');
		shopKeeperMan = loader.addImage('images/houseOccupants/shopAtHomeMan.png');
		nickel = loader.addImage('images/MiscImages/purchaseBlock.png');
		penny = loader.addImage('images/MiscImages/penny.png');
		shopSign = loader.addImage('images/MiscImages/shopSign.png');
		doorRight = loader.addImage('images/wallsFloor/doorRight.png');
		tomLeft = loader.addImage('images/houseOccupants/thomasLeft.png');
		tomBack = loader.addImage('images/houseOccupants/thomasBack.png');
		tomRight = loader.addImage('images/houseOccupants/thomasRight.png');
		bedLeft = loader.addImage('images/houseObjects/bedLeft.png');
		bedRight = loader.addImage('images/houseObjects/bedRight.png');
		deskLeft = loader.addImage('images/houseObjects/deskLeft.png');
		deskRight = loader.addImage('images/houseObjects/deskRight.png');
		deskLeftWithPC = loader.addImage('images/houseObjects/deskLeftWithPC.png');
		deskRightWithPC = loader.addImage('images/houseObjects/deskRightWithPC.png');
		nightStand = loader.addImage('images/houseObjects/nightStand.png');
		chair = loader.addImage('images/houseObjects/chair.png');
		nightStand = loader.addImage('images/houseObjects/nightStand.png');
		boxA0 = loader.addImage('images/houseObjects/boxA0.png');
		laundryBasket = loader.addImage('images/houseObjects/laundryBasket.png');   
		box = loader.addImage('images/houseObjects/box.png');
		mindMeter = loader.addImage('images/MiscImages/mind.png');
		healthMeter = loader.addImage('images/MiscImages/Health.png');
		darkMagic = loader.addImage('images/powerUps/darkMagic.png');
		lightMagic = loader.addImage('images/powerUps/lightMagic.png');
		febreeze = loader.addImage('images/powerUps/powerUpPedestalWithFebreeze.png');
		grenade = loader.addImage('images/houseOccupants/statueOfJoe.png');
		glove = loader.addImage('images/powerUps/powerUpPedestalWithGloves.png');
		gmaNote = loader.addImage('images/MiscImages/gmaNote.png');
		pcTopLeft = loader.addImage('images/wallsFloor/pcTopLeft.png');
		pcTopRight = loader.addImage('images/wallsFloor/pcTopRight.png');
		atkArrowLeftToRight = loader.addImage('images/MiscImages/AtkArrowLeftToRight.png');
		atkArrowRightToLeft = loader.addImage('images/MiscImages/AtkArrowRightToLeft.png');
		atkArrowDownToUp = loader.addImage('images/MiscImages/AtkArrowDownToUp.png');
		atkArrowUpToDown = loader.addImage('images/MiscImages/AtkArrowUpToDown.png');
		deadCat = loader.addImage('images/houseOccupants/deadCatSheet.png');
		deadDog = loader.addImage('images/houseOccupants/deadDogSheet.png');
		deadRat = loader.addImage('images/houseOccupants/deadRatSheet.png');
		oppositeRat = loader.addImage('images/houseOccupants/oppositeRat.png');
		oppositeCat = loader.addImage('images/houseOccupants/oppositeCat.png');
		oppositeDog = loader.addImage('images/houseOccupants/oppositeDog.png');
		deadTom = loader.addImage('images/houseOccupants/deadThomas.png');
		oven = loader.addImage('images/houseObjects/oven.png');
		wallOutletRight = loader.addImage('images/wallsFloor/basicWallRightWithPowerOutlet.png');
		linolium = loader.addImage('images/wallsFloor/linolium.png');
		stairs = loader.addImage('images/wallsFloor/stairs.png');
		counterBasicWithSink = loader.addImage('images/wallsFloor/counterBasicWithSink.png');
		crazyTom = loader.addImage('images/houseOccupants/thomasCrazy.png');
		borderLongLeft = loader.addImage('images/MiscImages/borderLongLeft.png');
		borderLongRight = loader.addImage('images/MiscImages/borderLongRight.png');
		borderLongMiddle = loader.addImage('images/MiscImages/borderLongMiddle.png');
		tvBottomLeft = loader.addImage('images/houseObjects/televisionBottomLeft.png');
		tvBottomRight = loader.addImage('images/houseObjects/televisionBottomRight.png');
		tvTopLeft = loader.addImage('images/houseObjects/televisionTopLeft.png');
		tvTopRight = loader.addImage('images/houseObjects/televisionTopRight.png');
		
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
	var getCrazyTom = function(){
		return crazyTom;
	}
	var getAtkArrowLeftToRight = function(){
		return atkArrowLeftToRight;
	}
	var getAtkArrowRightToLeft = function(){
		return atkArrowRightToLeft;
	}
	var getShopMan = function(){
		return shopKeeperMan;
	}
	var getTVBottomLeft = function(){
		return tvBottomLeft;
	}
	var getTVBottomRight = function(){
		return tvBottomRight;
	}
	var getTVTopLeft = function(){
		return tvTopLeft;
	}
	var getTVTopRight = function(){
		return tvTopRight;
	}
	var getBorderLongLeft = function(){
		return borderLongLeft;
	}
	var getBorderLongRight = function(){
		return borderLongRight;
	}
	var getBorderLongMiddle = function(){
		return borderLongMiddle;
	}
	var getShopSign = function(){
		return shopSign;
	}
	var getNickel = function(){
		return nickel;
	}
	var getPenny = function(){
		return penny;
	}
	var getAtkArrowUpToDown = function(){
		return atkArrowUpToDown;
	}
	var getAtkArrowDownToUp = function(){
		return atkArrowDownToUp;
	}
	var getCounterBasicWithSink = function() {
		return counterBasicWithSink;
	}
	var getOven = function() {
		return oven;
	}
	var getExplosion = function() {
		return explosion;
	}
	var getDarkExplosion = function(){
		return darkMagicExplosion;
	}
	var getWallOutletRight = function(){
		return wallOutletRight;
	}
	var getBoxA0 = function() {
		return boxA0;
	}
	var getChair = function() {
		return chair;
	}
	var getLaundryBasket = function() {
		return laundryBasket;
	}
	var getStairs = function(){
		return stairs;
	}
	var getLinolium = function(){
		return linolium;
	}
	var getDeadDog = function() {
		return deadDog;
	}
	var getDeadCat = function() {
		return deadCat;
	}
	var getDeadTom = function() {
		return deadTom;
	}
	var getDeadRat = function() {
		return deadRat;
	}
	var getOppositeRat = function() {
		return oppositeRat;
	}
	var getOppositeCat = function() {
		return oppositeCat;
	}
	var getOppositeDog = function() {
		return oppositeDog;
	}
	var getGmaNote = function() {
		return gmaNote;
	}
	var getPCTopLeft = function() {
		return pcTopLeft;
	}
	var getPCTopRight = function() {
		return pcTopRight;
	}
	var getDarkMagic = function(){
		return darkMagic;
	}
	var getLightMagic = function(){
		return lightMagic;
	}
	var getFebreeze = function(){
		return febreeze;
	}
	var getGlove = function(){
		return glove;
	}
	var getGrenade = function(){
		return grenade;
	}
	var getStartPoster = function(){
		return startPoster;
	}
	var getHealthMeter = function(){
		return healthMeter;
	}
	var getMindMeter = function(){
		return mindMeter;
	}
	var getBox = function(){
		return box;
	}
	var getBorderImage = function(){
		return borderImage;
	}
	var getBedLeft = function(){
		return bedLeft;
	}
	var getBedRight = function(){
		return bedRight;
	}
	var getDeskLeft = function(){
		return deskLeft;
	}
	var getDeskRight = function(){
		return deskRight;
	}
	var getDeskLeftWithPC = function(){
		return deskLeftWithPC;
	}
	var getDeskRightWithPC = function(){
		return deskRightWithPC;
	}
	var getNightStand = function(){
		return nightStand;
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
	//returns the back of Tom
	var getTomBack = function(){
		return tomBack;
	}
	var getTomLeft = function(){
		return tomLeft;
	}
	var getTomRight = function(){
		return tomRight;
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
		return rat;
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
	//returns right door
	var getRightDoor = function(){
		return doorRight;
	}
	return {
		loader: loader,
		loadingStart: loadingStart,
		getIsComplete: getIsComplete,
		getPCTopRight: getPCTopRight,
		getPCTopLeft: getPCTopLeft,
		getDarkExplosion: getDarkExplosion,
		getExplosion: getExplosion,
		getLaundryBasket: getLaundryBasket,
		getChair: getChair,
		getBoxA0: getBoxA0,
		getBorderImage:getBorderImage,
		getDeadTom:getDeadTom,
		getDeadCat:getDeadCat,
		getDeadDog:getDeadDog,
		getDeadRat:getDeadRat,
		getOppositeRat:getOppositeRat,
		getOppositeCat:getOppositeCat,
		getOppositeDog:getOppositeDog,
		getHealthMeter: getHealthMeter,
		getMindMeter:getMindMeter,
		getDarkMagic:getDarkMagic,
		getLightMagic:getLightMagic,
		getFebreeze:getFebreeze,
		getShopSign: getShopSign,
		getPenny: getPenny,
		getNickel: getNickel,
		getGlove:getGlove,
		getGrenade:getGrenade,
		getNightStand:getNightStand,
		getBedLeft: getBedLeft,
		getBedRight:getBedRight,
		getDeskLeft:getDeskLeft,
		getDeskRight:getDeskRight,
		getDeskLeftWithPC: getDeskLeftWithPC,
		getDeskRightWithPC: getDeskRightWithPC,
		getRightDoor:getRightDoor,
		getGrandma:getGrandma,
		getDog:getDog,
		getCat:getCat,
		getWallOutletRight: getWallOutletRight,
		getBox:getBox,
		getAtkArrowLeftToRight: getAtkArrowLeftToRight,
		getAtkArrowRightToLeft: getAtkArrowRightToLeft,
		getAtkArrowDownToUp: getAtkArrowDownToUp,
		getAtkArrowUpToDown: getAtkArrowUpToDown,
		getCharacter: getCharacter,
		getTomLeft: getTomLeft,
		getTomBack: getTomBack,
		getTomRight: getTomRight,
		getTiles: getTiles,
		getRat: getRat,
		getCouch: getCouch,
		getGmaNote: getGmaNote,
		getShopMan: getShopMan,
		getCouchLeft: getCouchLeft,
		getCouchRight: getCouchRight,
		getFloorTile: getFloorTile,
		getCrazyTom: getCrazyTom,
		getWigDemon: getWigDemon,
		getLinolium: getLinolium,
		getTVTopRight: getTVTopRight,
		getTVBottomRight: getTVBottomRight,
		getTVBottomLeft: getTVBottomLeft,
		getTVTopLeft: getTVTopLeft,
		getBorderLongLeft: getBorderLongLeft,
		getBorderLongRight: getBorderLongRight,
		getBorderLongMiddle: getBorderLongMiddle,
		getBasicWallBottom: getBasicWallBottom,
		getBasicWallTop: getBasicWallTop,
		getBasicWallLeft: getBasicWallLeft,
		getBasicWallRight: getBasicWallRight,
		getUpperWallLeft: getUpperWallLeft,
		getUpperWallRight: getUpperWallRight,
		getBottomWallRight: getBottomWallRight,
		getBottomWallLeft: getBottomWallLeft,
		getStairs: getStairs,
		getStartPoster: getStartPoster,
		getOven: getOven,
		getCounterBasicWithSink: getCounterBasicWithSink,
		getBasicWallWindow: getBasicWallWindow
	}	
}
