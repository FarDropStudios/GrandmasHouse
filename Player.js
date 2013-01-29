/*
 *	Player.js
 *	Tyler St. Onge
 *
 *	Takes the parameters startX and startY, which initialize where the player is
 */

var Player = function(startX, startY) {
	var x = startX,
		y = startY,
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
			map.setTileIndex(1);
			if(!map.getCollision()) {
				x+=moveAmount; //Right
			} else {
				map.setTileIndex(-1);
			}
		}else if(tx < x && tx > x-60 && ty > y && ty < y+60) {
			map.setTileIndex(-1);
			if(!map.getCollision()) {
				x-=moveAmount; //Left
			} else {
				map.setTileIndex(1);
			}
		}else if(ty < y+120 && ty > y+60 && tx > x && tx < x+60) {
			map.setTileIndex(14);
			if(!map.getCollision()) {
				y+=moveAmount; //Down
			} else {
				map.setTileIndex(-14);
			}
		}else if(ty < y && ty > y-60 && tx > x && tx < x+60) {
			map.setTileIndex(-14);
			if(!map.getCollision()) {
				y-=moveAmount; //Up
			} else {
				map.setTileIndex(14);
			}
		}
	}

	var draw = function(ctx) {
			ctx.fillStyle = 'purple';
			ctx.fillRect(x, y, 60, 60); 
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
