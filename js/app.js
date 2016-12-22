/*
	ASSIGNMENT REQUIREMENTS:

	The program should print out each number (not 'one' for 1, but 1 for 1), from 1 to 100, replacing numbers divisible by both 3 and 5 with "fizz buzz", those divisible by 3 with "fizz", and those divisible by 5 with "buzz".

	Pseudocode:

	for (some var representing int 1-100) {
	
		if ((it's divisible by 5) AND (it's divisible by 3)) {
			append a new line that says "fizz buzz"
		} else if (it's divisible by 3) {
			append a new line that says "fizz"
		} else if (it's divisible by 5) {
			append a new line that says "buzz"
		} else {
			append a new line with the int value
		}
		
	}
*/

$(function() {

	for (var i = 1; i <= 100; i++) {
			
		if ((i%5==0) && (i%3==0)) {
			$( "body" ).append( "<p>fizz buzz</p>" );
		} else if ((i%3==0)) {
			$( "body" ).append( "<p>fizz</p>" );
		} else if ((i%5==0)) {
			$( "body" ).append( "<p>buzz</p>" );
		} else {
			$( "body" ).append( "<p>"+i+"</p>" );
		}

	}

});

