alert("About Splice");
//Example 1:
var Pulses = ["Green gram", "Red gram", "Black gram", "Millets"];
Pulses.splice(2, 0, "Bajra", "Wheat");
console.log(Pulses)
/*The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items:*/

//Example 2:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits)
/*Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:*/

//Example 3:
var languages = ["C++", "Oracle", "Java", "Python"];
//slice(start, end)
languages.splice(0, 2);   
console.log(languages);
// Removes the first element of fruits
/*The first parameter (0) defines the position where new elements should be added (spliced in).
The second parameter (1) defines how many elements should be removed.
The rest of the parameters are omitted. No new elements will be added.*/
alert("About Slice");
//Example 1:
var fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits1.slice(1);
console.log(citrus)
/*The slice() method creates a new array. It does not remove any elements from the source array.
This example slices out a part of an array starting from array element 3 ("Apple"):*/
//Example 2:
var fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citru = fruits2.slice(3);
console.log(citru);
/*The slice() method can take two arguments like slice(1, 3).
The method then selects elements from the start argument, and up to (but not including) the end argument.*/
//Example 3:
var fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citr = fruits3.slice(1, 3);
console.log(citr);

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

//Example
alert("About Replace");
str = "Please visit Microsoft and Microsoft!";
var s = str.replace("Microsoft", "VS code");
console.log(s)

//To replace case insensitive, use a regular expression with an /i flag (insensitive):

//Example
str1 = "Please visit BANGALORE as it is clean and beautiful city";
var c = str1.replace(/Bangalore/i, "VIZAG");
console.log(c)
//Note that regular expressions are written without quotes.
//To replace all matches, use a regular expression with a /g flag (global match):

//Example
str2 = "Please take tea as tea is healthy";
var x = str2.replace(/tea/g, "Coffee");
console.log(x)

alert("About Substring");
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res);
//The result of res will be:Banana
//If you omit the second parameter, substring() will slice out the rest of the string.
alert("About Substr");
var g = "Apple,Ramya, Kiwi";
var result = g.substr(7, 6);
console.log(result);
//The result of res will be:Banana
//If you omit the second parameter, substr() will slice out the rest of the string.

//Example
var a = "Apple, Tenali,Paris";
var re = a.substr(7);
console.log(re);
//The result of res will be:Banana, Kiwi
//If the first parameter is negative, the position counts from the end of the string.

//Example
var st = "Apple,Green,Red";
var resu = st.substr(-4);
console.log(resu)
//The result of res will be:Kiwi
alert("About Trim");
//Example
var trim = "       Hello World!        ";
console.log(trim.trim())


