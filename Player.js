/*
 *	Player.js
 *	Tyler St. Onge
 *
 *	Takes the parameters startX and startY, which initialize where the player is.
 */

var Player = function(startX, startY, image) {
	var x = startX,
		sprite = image,
		y = startY,
		tileIndex = 15,
		moveAmount = 60;

	var getX = function() {
		return x;
	}

	var getY = function() {
		return y;
	}

	var setX = function(tX) {
		x = tX;
	}

	var setY = function(tY) {
		y = tY;
	}

	var update = function(tx, ty, map) {
		if(tx < x+120 && tx > x+60 && ty > y && ty < y+60) {
			tileIndex+=1;
			if(!map.getCollision(tileIndex)) {
				x+=moveAmount; //Right
			} else {
				tileIndex-=1;
			}
		}else if(tx < x && tx > x-60 && ty > y && ty < y+60) {
			tileIndex-=1;
			if(!map.getCollision(tileIndex)) {
				x-=moveAmount; //Left
			} else {
				tileIndex+=1;
			}
		}else if(ty < y+120 && ty > y+60 && tx > x && tx < x+60) {
			tileIndex+=14;
			if(!map.getCollision(tileIndex)) {
				y+=moveAmount; //Down
			} else {
				tileIndex-=14;
			}
		}else if(ty < y && ty > y-60 && tx > x && tx < x+60) {
			tileIndex-=14;
			if(!map.getCollision(tileIndex)) {
				y-=moveAmount; //Up
			} else {
				tileIndex+=14;
			}
		}
		console.log(tileIndex);
	}

	var draw = function(ctx) {
			ctx.drawImage(sprite,x,y,60,60);
	}

	return {
		getX: getX,
		getY: getY,
		setX: setX,
		setY: setY,
		update: update,
		draw: draw
	}
}
