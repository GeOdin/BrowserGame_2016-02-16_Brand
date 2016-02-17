/*
 * script.js
 * JavaScript file for a Random Fire Game
 * Made on 2016-02-17
 * by GeOdin
 */

$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$("#flame").animate({left: "-=20px"}, "fast");
				break;
			// Up Arrow Pressed
			case 38:
				$("#flame").animate({top: "-=20px"}, "fast");
				break;
			// Right Arrow Pressed
			case 39:
				$("#flame").animate({left: "+=20px"}, "fast");
				break;
			// Down Arrow Pressed
			case 40:
				$("#flame").animate({top: "+=20px"}, "fast");
				break;
		}
	});
});

// Collision function?
//// http://stackoverflow.com/questions/5419134/how-to-detect-if-two-divs-touch-with-jquery
/*
function collision($div1, $div2) {
	var x1 = $div1.offset().left;
	var y1 = $div1.offset().top;
	var h1 = $div1.outerHeight(true);
	var w1 = $div1.outerWidth(true);
	var b1 = y1 + h1;
	var r1 = x1 + w1;
	var x2 = $div2.offset().left;
	var y2 = $div2.offset().top;
	var h2 = $div2.outerHeight(true);
	var w2 = $div2.outerWidth(true);
	var b2 = y2 + h2;
	var r2 = x2 + w2;

	if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
		return false;
	} else {
		return true;
	}
}
 */
