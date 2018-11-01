
//Exercitiul 1 -rezolvarea 1

function palindrome(string) {
	//exclude from the string all characters different than letters and numbers
	var excludeChar = /[^A-Za-z0-9]/g;

	//convert the string elements toLowerCase and take out all the 
	//unwanted characters, if there are any
	var strLowerCase = string.toLowerCase().replace(excludeChar, '');
	// console.log(strLowerCase);

	//create a var which stores the initial string but with the elements in reverse.
	var strReverse = strLowerCase.split('').reverse().join('');
	// console.log(strReverse);

	//compare those 2 strings
		if(strLowerCase === strReverse) {
			console.log('This is a palindrome.');
			} else {
				console.log('This is NOT a palindrome.');
			}
}

//call the function
palindrome('racecar');







//Exercitiul 1 -rezolvarea 2

function palindrome(string) {
	//exclude from the string all characters different than letters and numbers
	var excludeChar = /[^A-Za-z0-9]/g;

	//convert the string elements toLowerCase and take out all the 
	//unwanted characters, if there are any
	var initialString = string.toLowerCase().replace(excludeChar, '');

	//create a var which stores the number of string characters
	var ln = string.length;

	//with FOR, loop through the first half of the string and compare it
	//with the second half
	for(i = 0; i < ln/2; i++) {
		if(initialString[i] !== initialString[ln-1-i]) {
			return console.log("This is not a palindrome");
		}
	}
	return console.log("This is a palindrome");

}
//call the function 
palindrome('rhacecar');