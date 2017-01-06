/*
	REFACTORING REQUIREMENTS:

	* When page loads,  user should be prompted to supply a number. Use either the prompt() function or a simple text input with instructions telling the user to input a number.
	// DONE. Also pre-populated the field.

	* Write a named function that takes an int as argument,  then counts from 1 to the argument value, substituting "fizz", "buzz", and "fizzbuzz" accordingly.
	// DONE

	* Convert the value the user supplies from a string to a number. Remember that the value that you get from prompt() or the val() on your form will by default be a string. To convert this to an integer you can use the + operator to convert a string to an integer. For instance, if you had the string "22", you could convert that to a number with +"22".
	// DONE by assigning the user-entered value to a var and passing the var into parseInt(). 
	// Q: How could I have used the +"22" approach when the string is a variable, not explicitly known to me?

	* Validate user input to ensure the user is submitting a number. You can use the parseInt() function in JavaScript to convert a string into an integer. For example, parseInt('597a') will return 597 where parseInt('hello') will return NaN. Read more about parseInt() on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt.
	// DONE. Validation prints result to the console using parseInt().

	* Optionally, you can also write code to ensure that the user has not supplied a decimal value. For an easy way to do this, check out http://stackoverflow.com/questions/2304052/check-if-a-number-has-a-decimal-place-is-a-whole-number/2304062#2304062

	* DO NOT spend any time thinking about design for this app. 

	* As usual, use Git to store your changes. When you've completed this assignment, push it up to GitHub pages, and share a link with your mentor and fellow students.
*/

$(function() {

	var x = prompt("Please supply a number:","42");

	x = parseInt(x);

	console.log(x);

	for (var i = 1; i <= x; i++) {
			
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
