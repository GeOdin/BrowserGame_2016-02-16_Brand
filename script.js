/*
 * script.js
 * JavaScript file for a Random Fire Game
 * Made on 2016-02-17
 * by GeOdin
 * Last modified on 2016-02-18
 */

/*
 * This JavaScript-file contains the following functions:
 * main
 * collision (div1, div2)
 * collisionDetected (div1, div2)
 */

// Function to regulate the game
var main = function() {
	// Create variables
	var divs = new Object();
	var div1 = $("#flame");
	var div2 = $("#firehose");
	divs.div1 = div1;
	divs.div2 = div2;

	// Function to arrange up, right, down, left input
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				div1.animate({left: "-=20px"}, "fast");
				divs = collision(div1, div2);
				div1 = divs.div1;
				div2 = divs.div2;
				break;
			// Up Arrow Pressed
			case 38:
				div1.animate({top: "-=20px"}, "fast");
				divs = collision(div1, div2);
				div1 = divs.div1;
				div2 = divs.div2;
				break;
			// Right Arrow Pressed
			case 39:
				div1.animate({left: "+=20px"}, "fast");
				divs = collision(div1, div2);
				div1 = divs.div1;
				div2 = divs.div2;
				break;
			// Down Arrow Pressed
			case 40:
				div1.animate({top: "+=20px"}, "fast");
				divs = collision(div1, div2);
				div1 = divs.div1;
				div2 = divs.div2;
				break;
		}
	});
}

// Function to check whether 2 divs collide
var collision = function(div1, div2) {

	// Get the left, top, right and bottom coordinates of div1, relative to the document
	var div1left = div1.offset().left;
	var div1top = div1.offset().top;
	var div1height = div1.outerHeight();
	var div1width = div1.outerWidth();
	var div1bottom = div1top + div1height;
	var div1right = div1left + div1width;

	// Get the left, top, right and bottom coordinates of div2, relative to the document
	var div2left = div2.offset().left;
	var div2top = div2.offset().top;
	var div2height = div2.outerHeight();
	var div2width = div2.outerWidth();
	var div2bottom = div2top + div2height;
	var div2right = div2left + div2width;

	// Check wheter the divs collide
	if (div1left >= div2left) {
		if (div1left < div2right) {
			if (div1top >= div2top) {
				if (div1top < div2bottom) {
					divs = collisionDetected(div1, div2);
					div1 = divs.div1;
					div2 = divs.div2;
				}
			} else if (div1bottom <= div2bottom) {
				if (div1bottom > div2top) {
					divs = collisionDetected(div1, div2);
					div1 = divs.div1;
					div2 = divs.div2;
				}
			}
		}
	}
	if (div1right <= div2right) {
		if (div1right > div2left) {
			if (div1bottom <= div2bottom) {
				if (div1bottom > div2top) {
					divs = collisionDetected(div1, div2);
					div1 = divs.div1;
					div2 = divs.div2;
				}
			} else if (div1top >= div2top) {
				if (div1top < div2bottom) {
					divs = collisionDetected(div1, div2);
					div1 = divs.div1;
					div2 = divs.div2;
				}
			}
		}
	}

	// Return div1 and div2
	var divs = new Object();
	divs.div1 = div1;
	divs.div2 = div2;
	return divs;
}

// Function to deal with collision
var collisionDetected = function(div1, div2) {
	// Set variables
	var div2temp;
	var div1temp;
	var randomTop;
	var randomLeft;
	var div1top;
	var div1left;

	// Save the div2
	if ($("#firehose").is(":visible")) {
		div2temp = "#firehose";
	} else {
		div2temp = "#wood";
	}
	// Hide div2
	div2.hide(); // also sets picture back to upperleft corner
	// Change the image of the div2
	if (div2temp === "#firehose") {
		div2 = $("#wood");
	} else if (div2temp === "#wood") {
		div2 = $("#firehose");
	}
	// Give it random coordinates within the webpage borders
	randomTop = window.innerHeight * Math.random();
	while (randomTop < 0 || randomTop > (window.outerHeight - 65)) {
		randomTop = window.innerHeight * Math.random();
	}
	randomLeft = window.innerWidth * Math.random();
	while (randomLeft < 0 || randomLeft > (window.outerWidth - 75)) {
		randomLeft = window.innerWidth * Math.random();
	}
	div2.css({top: randomTop, left: randomLeft, position: "absolute"});
	// Show the div2
	div2.show();

	// Save the div1
	if ($("#flame").is(":visible")) {
		div1temp = "#flame";
	} else {
		div1temp = "#lighter";
	}
	// Get the left, top, right and bottom coordinates of div1, relative to the document
	div1left = div1.offset().left;
	div1top = div1.offset().top;
	// Hide div1
	div1.hide(); // also sets picture back to upperleft corner
	// Change the image of the div2
	if (div1temp === "#flame") {
		div1 = $("#lighter");
		document.getElementById("footerText").innerHTML = "Relight My Fire";
	} else if (div1temp === "#lighter") {
		div1 = $("#flame");
		document.getElementById("footerText").innerHTML = "Lopend Vuurtje";
	}
	// Give it the coordinates of the former div1
	div1.css({top: div1top, left: div1left, position: "absolute"});
	// Show the div1
	div1.show();

	// Return div1 and div2
	var divs = new Object();
	divs.div1 = div1;
	divs.div2 = div2;
	return divs;
}

$(document).ready(main);
