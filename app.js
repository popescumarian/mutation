function mutation(arr) {

	var toSearch = arr[0].toLowerCase();
	var letters  = arr[1].toLowerCase().split('');
	var found = true;

	letters.forEach(function(element) {
		if(toSearch.indexOf(element) < 0) {
			found = false;
		}
	});

	return found;	
	
}
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));


/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
 */