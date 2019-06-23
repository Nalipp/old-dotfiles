**************************************************************
regex

	function myFunction(str, var1, var2) {
	 regex = new RegExp(var1, "g");  
	 console.log(str.replace(regex, var2));
	} 

	str = 'the dog went to the dogpark';
	var1 = 'dog';
	var2 = 'cat';

	myFunction(str, var1, var2)  // "the cat went to the catpark"


