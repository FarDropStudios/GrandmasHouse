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

	var update = function(tx, ty) {
		if(tx < x+120 && tx > x+60 && ty > y && ty < y+60) {
			x+=moveAmount;
		}else if(tx < x && tx > x-60 && ty > y && ty < y+60) {
			x-=moveAmount;
		}else if(ty < y+120 && ty > y+60 && tx > x && tx < x+60) {
			y+=moveAmount;
		}else if(ty < y && ty > y-60 && tx > x && tx < x+60) {
			y-=moveAmount;
		}
	
		
		/*WASD Controls
		var prevX = x,
		prevY = y;

		if(keys.up) {
			y -= moveAmount;
		} else if(keys.down) {
			y += moveAmount;
		}

		if(keys.left) {
			x -= moveAmount;
		} else if(keys.right) {
			x += moveAmount;
		}
		return (prevX != x || prevY != y) ? true : false;
		*/
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
