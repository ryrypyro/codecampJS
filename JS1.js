/* Data Types in JS: 

Undefined: Somthing that hasn't been defined | variable that hasn't been defined

Null: Nothing | setting something to have something, but that something is nothing

Boolean: True/False statement 

String: Any sort of text

Number: Something with a numerical value (So a number)

Symbol: A primitave value that is unique 

Object: Something that can store key-valued pairs 

Argument: object accessible inside functions that contains the values of the arguments passed to that function
*/

var  myName = "Ryan"
console.log(myName);


var yourName = "Nub"
console.log(yourName)
// a var is able to be used throughout your own program

yourName = 10
console.log(yourName)

let ourName = "Family"
// statement "let" will only be used within the scope of where we declared it 

const pi = 3.1415926535 
// const should never change, whilst var can. you will get an error if you try to change it 
//----------------------------------------------

var a; 
var b = 2;
console.log(a); // will show "undefined" in the console because during this time, "a" didn't have a value. 
a = 7;

b = a; 
console.log(a); // will show 7 because during this time, a = 7 as you can see in like 36

//----------------------------------------------
// Initializing these three variables.. 
var a;
var b; 
var c; 
// basically give them a variable to store. so you do.. 
var a = 5; 
var b = 10; 
var c = "I am a";  

// dont change the code below this line 
a = a * 5; 
b = b * 10; 
c = c + " string.";
/* console.log(a);
console.log(b);
console.log(c); */ 
// The only way the results of the code will show up in the console is if i do "console.log()", meaning that the code will log inside of the console. As you can see, i commented out the console.logs hence it will not work until i uncomment them. 
// Capitalization/Uppercase | Lowercase matters in Javascript
//----------------------------------------------
var product = 100 * 100;
console.log(product);

var quotient = 100 / 100; 
console.log(quotient); 

var sum = 1000000 + 100; 
console.log(sum);

var difference = 1000000000000000000 - 0;
console.log(difference); 
//----------------------------------------------
// incrementing | decrementing by 1 
var myNum = 99; 
console.log(myNum); 
myNum++ 
console.log(myNum); 
/* myNum++ 
console.log(myNum); 
myNum++ 
console.log(myNum); 
myNum++ 
console.log(myNum); 
myNum++ 
console.log(myNum); 
myNum++ 
console.log(myNum); 
myNum++ 
console.log(myNum); 
myNum++ 
console.log(myNum); 
myNum++ 
console.log(myNum); 
myNum++ 
console.log(myNum); 
myNum++ 
console.log(myNum); 
*/
myNum--
console.log(myNum);
/* myNum--
console.log(myNum);
myNum--
console.log(myNum);
myNum--
console.log(myNum);
myNum--
console.log(myNum);
myNum--
console.log(myNum);
myNum--
console.log(myNum);
myNum--
console.log(myNum);
myNum--
console.log(myNum);
myNum--
console.log(myNum); */
//----------------------------------------------
var Decimal = 5.38390; 
// ↕ are both decimals. the number has a "." in them.
var DDecimal = 4.5083

var product = 4.384 * 4.3958; 
console.log(product);

var remainder; 
remainder = 20 % 4;
console.log(remainder)
//----------------------------------------------
// Augmented Addition 
var a = 3;
var b = 17;
var c = 12;
// easier way to do this is "+="
a = a + 12; 
b = 9 + b; 
c = c + 7; 
// ^ turns into.. 
a += 12;
b += 9;
c += 7; 

// Augmented Subtraction 
var a = 11;
var b = 9;
var c = 3; 
// easier way to do this is "-="
a = a - 6;
b = b - 15;  
c = c - 1; 
// ^ turns into.. 
a -= 6; 
b -= 15; 
c -= 1; 
// Augmented Multiplication  
var a = 5;
var b = 12; 
var c = 4.6;
// easier way to do this is "*="

a = a * 5 ;
b = 3 * b;
c = c * 10; 
// ^ turns into.. 
a *= 5; 
b *= 3;
c *= 10;

// Augmented Division 
var a = 48; 
var b = 108; 
var c = 33; 
// easier way to do this is "/="
a = a / 12; 
b = b / 4; 
c = c / 11; 
// ^ turns into..
a /= 12; 
b /= 4; 
c /= 11; 
//----------------------------------------------
// Example of declaring string variables 
var fName = "Ryan";
var lName = "Chowdhry"; 

var myFirstName = "Jonah";
var myLastName = "Lee"; 

// var myString = "This is a "double quoted string" inside "double quotes""
// ^^ THIS IS NOT A WAY TO INCLUDE QUOTES INSIDE A STRING, YOU MUST USE A "\" BLACKSLASH BEFORE THE QUOTE SYMBOLS IN A STRING SO THAT JAVASCRIPT KNOWS THAT THOSE QUOTES IN THE STRING AREN'T ACTUALLY THERE TO END THE STRING. 
// instead try.. 
var myString = "This is a \"double quoted\" string inside of \"double quotes\""
console.log(myString); 
// bam, it works! 
// or, to make things easier, instead of using "" to create your string, use '', that way, you can use literal quotes within your string and you don't need to use the backslash everytime. 
var myString2 = 'This is a string that can use "" inside its text without needing a backslash'; 
console.log(myString2);
// also, using BACKTICKS `` AS YOUR QUOTE ON STRINGS CAN LET YOU USE "" and/or '' inside your string. 
var myString3 = `testing testing lol 'hello there' (see? i put it in a single quote). "now this is a double quote!" No backslashes needed.`;
console.log(myString3);  
//----------------------------------------------
// Escape Sequences in Strings. . .
/* 
CODE OUTPUT 
\' SINGLE QUOTE
\"" DOUBLE QUOTE
\\ BACKSLASH 
\n NEWLINE 
\r CARRIAGE RETURN 
\t TAB 
\b BACKSPACE
\f FORM FEED
*/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine\t\n\"FourthLine\""
console.log(myStr); 

var theString = "I come first. " + "I come second.";
var theeString = "First sentence. " + "Second sentence."; 
console.log(theString); 
console.log(theeString);
//the "+" sign is used to concatenate two sentences together in strings.
var theStr = "Number 1. "; 
theStr += "Number 2. ";
console.log(theStr); 
//you can also use "+=" to join together two different sentences with the same string. like this: 
var name = "Ryan Chowdhry the Great"; 
var ryanGreet = "Hi there, my name is Ryan. But you shall call me " + name + ", for I am your master."; 
console.log(ryanGreet);
//----------------------------------------------
// appending variables to strings. . .  
var oneWord = " fun!"; 
var threeWords = "Coding is very"; 
 var Print = threeWords += oneWord;  
console.log(Print); 
//----------------------------------------------
var firstNameLength = 0; 
var firstName = "Supercalifragilisticexpialidocious";

firstNameLength = firstName.length 
console.log(firstNameLength); 

var longassNameLength = 0; 
var longassName = "Hubert Blaine Wolfe­schlegel­stein­hausen­berger­dorff Sr."; 

longassNameLength = longassName.length 
console.log(longassNameLength); 

var how = "yo wtf this nigga got " + longassNameLength + " letters in his name!"; 
console.log(how); 
// bracket notation
var letterIndexOfNames = ""; 
randomName = "Gregory Smith Clementine III"; 
letterIndexOfNames = randomName[25]; // the 25th index of string "randomName" is "I". 
console.log(letterIndexOfNames); 
// you can have any index # shown as long as that index in the words exist. 
randomName2 = "Bob"; 
randomm =  randomName2[2]; 
console.log(randomm); 
// you can also find the last letter in the string.
var randomName3 = "Timothy"; 
var Letters = randomName3[randomName3.length - 1]; 
console.log(Letters); 
//----------------------------------------------
var misspelledWord = "I love bucks"; // "b" is not supposed to be there, instead, a "d" is. 
misspelledWord = "I love ducks"; 
console.log(misspelledWord);  
// word blanks | mad-libs 
function wordBlanks(Noun, Adjective, Adverb, Verb) {
    var result = ""; 
    result += "The " + Adjective + " " + Noun + " " + Adverb + " " + "drank some milk cause he was thirsty from " + Verb + " too much."; 
    return result; 
}

console.log(wordBlanks("cat", "small", "slowly", "eating")); 
console.log(wordBlanks("burrito", "gargantuous", "steadily", "breathing")); 
/* The Array object lets you store multiple values in a single variable
 It stores a fixed-size sequential collection of elements of the same type */
var ourArray = ["Ryan", 15]; 
var myArray = ["Haji Mansour", 42]; 
console.log(myArray); 
// when one of the elements in an array is another array, it's called a nested/multi-dimensional array.  
var nestedArray = [["Ryan Krunker LVL", 15], ["Adam Krunker LVL", 60]]; 
console.log(nestedArray); 
// array data from indexes 
var Arrray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; 
var ArrrayIndex = Arrray[4]; // it is 50, because it is in the fourth index.  
console.log(ArrrayIndex); 
var Arrray2 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]; 
var Arrray2Index = Arrray2[4]; // it is 500, because it is also in the fourth index.
console.log(Arrray2Index); 
var arrray3 = [1, 3, 3, 4, 5]; 
arrray3[1] = 2; 
console.log(arrray3); 
// access multi-dimensional array w/ indexes. (kinda tricky though!)
var multiArray = [[1, 2, 3], [2, 4, 6,], [4, 8, 12], [[8, 16, 24], 25, 26]]; 
var arrayData = multiArray[3][2]; 
console.log(arrayData); 
// the push feature allows you to ADD new items to your array 
var pushArray = ["Cake", "Ice Cream", "Donuts"]; 
pushArray.push = (["Hapiness!", "Delicious!"]);
console.log(pushArray); 

// the pop feature allows you to REMOVE the LAST element from your array 
var popArray = ["Collared Greens", "Spinach", "Broccoli", "Sugary Foods"]; 
var removedElement = popArray.pop();
console.log(removedElement);  
console.log(popArray); 
/* removedElement is now Sugary Foods, (because i popped popArray) 
and popArray is now ["Collared Greens", "Spinach", "Broccoli"]. */ 
// one more time . . 

var popArray2 = [["Ryan", 15], ["Jonah San", 15]]; 
var removedElement2 = popArray2.pop(); 
console.log(removedElement2); 
console.log(popArray2); 

// the shift feature allows you to REMOVE the FIRST element from your array
var shiftArray = ["Alex", "Jonah", "Ryan", "Grant", "Arvin"]; 
var shiftedElement = shiftArray.shift(); 
console.log(shiftedElement); 
console.log(shiftArray); 

var shiftArray2 = [["Ryan", 15], ["Jonah San", 15]]; 
var shiftedElement2 = shiftArray2.shift(); 
console.log(shiftedElement2); 
console.log(shiftArray2); 

var unshiftArray = ["re", "re", "mi", "fa"]; 
unshiftArray.shift();
unshiftArray.unshift("do"); 
console.log(unshiftArray); 
// the push feature allows you to ADD new items to your array 
// the pop feature allows you to REMOVE the LAST element from your array 
// the shift feature allows you to REMOVE the FIRST element from your array
// the unshift feature allows you to ADD an element to the beginning of your array

// nested array - example - shopping list 
var myList = [["milk", 1], ["bananas", 10], ["Coka Cola", 12], ["cereal", 12]];
var indexMyList = myList[2]; 
console.log(myList);
console.log(indexMyList); 

// USING FUNCTIONS! 
// functions allow us to create RESUABLE code in JavaScript. 
function reusableFunction() {
    console.log("what up foo!"); 
}

reusableFunction(); 
// reusableFunction(); 
// reusableFunction(); 

function reusableFunction2() {
    console.log("how ya doin' foo?");
}

reusableFunction2();
// reusableFunction2();
// reusableFunction2();

// pass values to functions using arguments 
/* parameters are variables that act as place holders for the values 
that are to be input to a function when it is called */ 
function ourFunctionWithARGS(a, b) {
    console.log(a - b);
}
ourFunctionWithARGS(23096878763254, 23096878763253); // outputs 1 because the numbers' difference = 1, the first number = a and the second number = b (a - b)

function ourFunctionWithARGS2(c, d) {
    console.log(c + d); 
}
ourFunctionWithARGS2(-573838472378, 573838472378); // outputs 0 because theyre the same number, but the first one (c) is negative whilst the second one (d) is a positive.

// scope refers to the visibility of variables that are defined outside of a function block that are called global scope
// global scope - they can be seen everywhere in your JavaScript code 

// declare variable here 
var myGlobal = 10;

function function1() {
    // assign number 5 to oopsGlobal here
    oopsGlobal = 5;  
}

// change code above this text
function function2() {
    var output = ""; 
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
}
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal; 
    }
    console.log(output); 
}
function1(); 
function2();

// variables declared within a function are a local scope, they are only visible within a function 
// example... 
function localScope() {
    var varr = 5;
    console.log(varr);
}
localScope(); 

// console.log(varr); 

/* SO, if i were to uncomment that code on line 411 and let it register, I would get an error.
that error would be.. "JS1.js:411 Uncaught ReferenceError: varr is not defined
    at JS1.js:411". BECAUSE, that code is OUTSIDE of the function, it's a global scope. not a local scope.  */ 

// local/global variables can have the same name 

var Outfit = "T-shirt"; // NOTE: This is a global variable, because it is outside of the function.

function myOutfit() {
    var Outfit = "Pants"; 
    var Outfit = "Socks"; 
    var Outfit = "Shoes"; 
    return Outfit
}
 
console.log(myOutfit()); 
console.log(Outfit); 
// local variables can take over global variables if present. 

function minusSeven(num) {
    return num - 7
}
console.log(minusSeven(10)); 

function times10(num) {
    return num * 10
}
console.log(times10(10));  

// functions do not have to have return statements 
    var sum = 0; 
    function add10000000() {
        sum += 10000000;
    }
function add5() {
    sum += 5 
}

var changed = 0; 
function change(num) {
    return (num + 10) / 5; 
}

changed = change(10); 
console.log(change(10)); 
//--- 

var processed = 0; 

function processArg(num) {
    return (num - 10) * 5;  
}
// processed = processArg(20); 
console.log(processArg(20)); 
// In computer science, a "Queue" is an abstract data structure where items are kept in order.

function nextUp(array, item) {
    array.push(item);
    return array.shift(); 
}

var testArray = [2, 4, 6, 8, 10]; 

console.log("Before: " + JSON.stringify(testArray)); 
console.log(nextUp(testArray, 12)); 
console.log("After: " + JSON.stringify(testArray)); 

/* The JSON. stringify() method converts a JavaScript object or value to a 
JSON string, optionally replacing values if a replacer function is specified 
or optionally including only the specified properties if a replacer array is specified */

//  LET'S LEARN SOME BOOLEANS!
// there are only TWO values in booleans: True or False. T
// They are basically on/off switches. 
function welcomeToBooleans() {
    return false; 
}

// an IF statement can be used to make decisions in code '
function trueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true! \"quotes tho lol\"";   
    }  
        return "No, it's false!"; 
}
function trueOrFalse2(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true."; 
    }
    return "No, that was false.";
}
console.log(trueOrFalse2(false));

function testEqual(val) {
if (val == 12) { 
    return "Cheeseburger."; 
} 
    return "Hamburger."; 
}
console.log(testEqual(10)); 

/* == in JavaScript is used for comparing two variables, 
but it ignores the datatype of variable. === is used for comparing two variables
but this operator also checks datatype and compares two values.*/

function testStrict(val) {
    if (val === 7) { 
        return "Equal"; 
    }
        return "Not Equal"; 
}
// change this value to test  
console.log(testStrict(7)); 

/* 
3 === 3 
3 === '3'
*/ 

function compareEquality(c, d) {
    if (c == d) { 
        return "Equal"; 
    }
    return "Not Equal"; 
}
// change this value to test! 
console.log(compareEquality(10, 9)); 
// obviously, 10 ≠ 9, hence it will return with "NOT EQUAL". 
function testNotEqual(val) {
    if (val != 99)  {
    return "Not Equal"; 
    }
    return "Equal"; 
}

// change this value to test 
console.log(testNotEqual(98)); 

function testStrictNotEqual(val) {
    if(val !== 17) {
    
    return "Not Equal"; 
    }
    return "Equal"; 
}
console.log(testStrictNotEqual(10)); 

function greaterThanVal(val) {
    if (val > 100)  {
        return "Greater than 100"; 
    }
    if (val > 10) {
        return "Greater than 10"; 
    }
    return "Lower than 10"; 
} 

console.log(greaterThanVal(101));
//* this will result in "Greater than 100", because in the "val", we passed down a 101 inside of it that means that 101 > 100, hence it will tell the computer to return "Greater than 100".

// we can use the >= operator as well. 
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or greater"; 
    }
    if (val >= 10) {
        return "10 or greater";
    }
        return "Lower than 10";
}

console.log(testGreaterOrEqual(10)); 

function testLessThan(val) {
    if (val < 10) {
    return "Under 10"; 
}
    if (val < 100) {
    return "Under 100"; 
    }
    if (val < 1000) {
        return "Under 1000"; 
    }
    return "Over 1000";
}

console.log(testLessThan(1001)); 

function testLessThanOrEqual(val) {
    if (val <= 90) {
        return "Smaler than or equal to 90";
}
    if (val <= 900) {
       return "Smaller than or equal to 900";   
    }
    if (val <= 9000) {
        return "Smaller than or equal to 9000"; 
    }   
        return "It's over 9000!!!! (funny kek)"; 
}
console.log(testLessThanOrEqual(9999));  
// comparisons with the logical and operator 
function testingLogicalAndOperator(val) {
    if (val <= 50 && val >= 25) {
        return "Yes"; 
    }
        return "No"; 
}   
console.log(testingLogicalAndOperator(30)); 
console.log(testingLogicalAndOperator(100));
/* instead of doing this: 
 if(val <= 50) {
    if (val >= 25) {
        return "Yes";
}, delete the nested if statement, and make it easier. add a && (and) operator!*/ 

function testingLogicalOrOperator(val) {
    if (val < 10 || val > 20) {
        return "Your chosen value is either less than 10 or more than 20.";
    }
    return "Your chosen number ranges from 10-20"; 
}
console.log(testingLogicalOrOperator(9.999999));

// when an if statement is true, the block of code after the if statement is evaluted, and if it's not true, nothing happens.
// with an else statement an alternate block of code can be executed if the if statement is not true. 
function testElseStatement(val) {
    var result;  
if (val > 100) {
    result = "Value is larger than 100"; 
} else { 
    result = "Value is smaller than 100";
}
    return result;
}
console.log(testElseStatement(99)); 
// else if statements are ways of chaining if statements together, if you wan

console.log(testingLogicalOrOperator(9.999999));

// when an if statement is true, the block of code after the if statement is evaluted, and if it's not true, nothing happens.
// with an else statement an alternate block of code can be executed if the if statement is not true. 
function testElseStatement(val) {
    var result;  
if (val > 100) {
    result = "Value is larger than 100"; 
} else { 
    result = "Value is smaller than 100";
}
    return result;
}
console.log(testElseStatement(99)); 
// else if statements are ways of chaining if statements together, if you want more than one if statement, use else if!
function testElseIfStatement(val) {
    if (val > 1000) {
        return "Your number is greater than 1000"; 
    } else if (val < 500) {
        return "Your number is smaller than 500"; 
    } else {
        return "Your number is between 500 and 1000"; 
    }

}
console.log(testElseIfStatement(1001)); 
console.log(testElseIfStatement(499.9));
// order is very important in else-if statements 
function orderMyLogicPls(val) {
    if (val < 5) {
    return "Your number is less than 5"; 
} else if (val < 10) {
    return "Your number is less than 10";
} else {
    return "Your number is larger than 10"; 
    }
}
console.log(orderMyLogicPls(4));

function testSize(num) {
    if (num < 5) {
    return "Tiny";
     } else if (num < 10) {
         return "Small";
     } else if (num < 15) {
        return "Medium";
     } else if (num < 20) {
        return "Large";
     } else (num > 20) 
         return "Huge";
     
}
console.log(testSize(999.999)); 


//  changing if-else statements.. 
/* write chaines if/else if statements to fullfill the following conditions: 
num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/ 

// MINIGAME - Golf 
var golfNames = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double-Bogey", "Go Home Nigga!!!"]; 
function golfScore(par, strokes) {
    if (strokes == 1) {
        return golfNames[0]
    } else if (strokes <= par - 2) {
        return golfNames[1]
    } else if (strokes == par - 1) {
        return golfNames[2]
    } else if (strokes == par) {
        return golfNames[3]
    } else if (strokes == par + 1) {
        return golfNames[4]
    } else if (strokes == par + 2) {
        return golfNames[5]
    } else if (strokes >= par + 3) {
        return golfNames[6]
    }
}
console.log(golfScore(5, 5)); 
//! this was a bit confusing learning, but i will come back to it and try to learn soon!
// switch statements . . . 
function switchStatementLearning(val) {
    var answer = "";  
    switch(val) {   
    case 1: 
    answer = "You";
        break; // break means that we are at the end of that case statement. 
    case 2: 
    answer = "Are"; 
    break;
    case 3: 
    answer = "Very";
    break; 
    case 4: 
    answer = "Cute";
    break; 
    }
    return answer;
}
console.log(switchStatementLearning(4)); 

switchStatementLearning(1); 
/* 
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/ 

// default option in switch statement 
// the default code will give whatever you give it if the thing you put inside the logger is not there (i think lol)
function switchOfStuff(val) {
    var answer = ""; 
    switch (val) {
        case "a": 
        answer = "aardvark";
        break; 
        case "b":
        answer = "bear"; 
        break; 
        case "c": 
        answer = "cat"; 
        break; 
        case "d": 
        answer = "dog"; 
        break; 
        default: 
        answer = "The character(s) " + val + ", was not a-d!"; 
        break; 
    }   
    return answer; 
    }
    console.log(switchOfStuff("a")); 
    console.log(switchOfStuff("g")); 
// multiple identical options in switch statements
// sometimes you'd want a switch statement where multiple inputs give the same output.
function sequentialSizes(val) {
    var aswer = ""; 
    switch(val) {
        case 1: 
        case 2: 
        case 3: 
        answer = "Low"; 
        break; 
        case 4: 
        case 5: 
        case 6: 
        answer = "Medium"; 
        break;
        case 7: 
        case 8: 
        case 9: 
        answer = "Large"; 
        break; 
    }
    return answer; 
}
console.log(sequentialSizes(4)); 
// somtimes a switch statement can be easier 2 write and understand than a chain of if-else statements 
/* function chainToSwitch(val) {
    var answer = ""; 

    if (val === "bob") {
        amswer = "Marley"; 
    } else if (val === 42) {
        answer = "Fourty-Two"; 
    } else if (val === 1) {
        answer = "One"; 
    } else if (val === 99) {
        answer = "Ninety-Nine"
    } else if (val === God) {
        answer = "ZILLA!"; 
    }
    return answer; */ 

// YOU CAN TURN IF-ELSE CHAINS WITH SWITCHES! THAT CODE ^ THEN TURNS INTO..
function chainToSwitch(val) {
    var answer = ""; 
    switch(val) {
    case "bob": 
        answer = "Marley";
    break; 
    case "42": 
        answer = "Fourty-Two"; 
    break; 
    case "1": 
        answer = "One";
    break;  
    case "99": 
        answer = "Ninety-Nine"
    break; 
    case "God":  
        answer = "ZILLA!"; 
    break; 
    }
console.log(chainToSwitch(God));
return answer;
}
// Returning boolean values from functions
function functionsAndBooleans(a , b) {
    return a < b; 
}
 
// These values below can be changed to test 
console.log(functionsAndBooleans(20, 20.01));  
console.log(functionsAndBooleans(20, 19.99));
// Returning early pattern from functions. . . 
function abTest(c, d) {

    if (c < 0 || d < 0) {
        return undefined; 
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// The Math. pow() function returns the base to the exponent power. 
// The Math. round() function returns the value of a number rounded to the nearest integer
}
console.log(abTest(-10, -100)); 

// cards codes 
var count = 0; 

function cc(card) {
    switch(card) {
    case 2: 
    case 3: 
    case 4: 
    case 5: 
    case 6: 
        count++ 
        break; 
    case 10: 
    case "J": 
    case "Q":
    case "K":
    case "A": 
        count--;
        break;  
    } 
var holdbet = 'Hold'
if (count > 0) {
    holdbet = 'Bet'

    return count + " " + holdbet;
}
cc(2); cc(3); cc(7); cc('K'); cc('A'); 
}
console.log(cc(2)); 
// building javascript objects   
// objects are similar to arrys in JS, except that instead of using indexes, you use properties. 
var me = {
    "name": "Ryan",  
    "eye color": "Brown", 
    "height": "6'3", 
    "weight": "172.6 lbs", 
    "gender": "Male", 
    "tired": "Yes", 
}; 

console.log(me); 
// using DOT NOTATION to access object properties 
// this means we can specifically grab an individual value from our objects!
var testObj = {
    "name": "Ryan",  
    "eyes": "Brown", 
    "height": "6'3", 
    "weight": "180 lbs", 
    "gender": "Male", 
    "tired": "Yes", 
}; 
var eyes = testObj.eyes; 
console.log(eyes); 
var gender = testObj.gender;  
console.log(gender); 
// using BRACKET NOTATION to access object properties (meaning if the object has two worsds.)
var testObj = {
"My entree": "Chicken", 
"My side": "Mashed potatos and gravy",
"My drink": "A big orange belly-wash" 
}; 
var entreevalue = testObj["My entree"]; 
var drinkvalue = testObj["My drink"]; 
console.log(entreevalue);  
console.log(drinkvalue);
// using VARIABLES to access object properties 
var testObj = {
    1: "Los Angeles", 
    2: "Miami", 
    3: "New York City",
};

var LANumber = 1; 
var LA = testObj[LANumber]; 
console.log(LA); 
// you can even update object properties.. 
var RyanDescription = {
    "name": "Ryan",  
    "eyes": "Brown", 
    "height": "6'3", 
    "weight": "180 lbs", 
    "gender": "Male", 
    "tired": "Yes", 
}; 

RyanDescription.height = "6'4"; // got taller 
RyanDescription.tired = "Nope, not tired anymore!"; // not tired anymore :D 
console.log(RyanDescription.height); 
console.log(RyanDescription.tired); 
// These two objects above were updated! ^ 

// add new properties to an object with dot/bracket notation. 
var RyanDescription = {
    "name": "Ryan",  
    "eyes": "Brown", 
    "height": "6'3", 
    "weight": "180 lbs", 
    "gender": "Male", 
    "tired": "Yes", 
}; 
RyanDescription['Last Name'] = "Chowdhry"; // ADDING W/ BRACKET NOTATION.
console.log(RyanDescription);  
RyanDescription.hobby = "Coding and chillin with his friends"; // ADDING W/ DOT NOTATION. 
console.log(RyanDescription); 
// you can even DELETE properties!
var RyanDescription = {
    "name": "Ryan",  
    "eyes": "Brown", 
    "height": "6'3", 
    "weight": "180 lbs", 
    "gender": "Male", 
    "tired": "Yes", 
    "deleted": "This object will be deleted", 
}; 
delete RyanDescription.deleted; 
console.log(RyanDescription); 

function phoneLookup(val) {
var result = ""; 

var lookup = {
    "Samuel": "Adams", 
    "Barack": "Obama", 
    "Theodore": "Roosevelt", 
}; 
result = lookup[val]; 

return result; 
} 
console.log(phoneLookup("Samuel")); 
//  Testing objects for properties
var myObj = {
    Rap: "Drake", 
    Pop: "Michael Jackson", 
    Country: "Blake Shelton", 
}
function checkObj(checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]; 
    } else {
        return "Object not found."
    }
}
console.log(checkObj('Rap')); 
// you can do this ^ to check if an object has a property 

// manipulating complex objects 
var Music = [
{
    "artist": "ZillaKami x Sosmula", 
    "title": "Nuka Cola", 
    "release_year": "2018", 
    "format": [
        "Spotify", 
        "YouTube", 
        "SoundCloud"
    ], 
}, 
{ 
    "artist": "Elton John", 
    "title": "Tiny Dancer", 
    "release_year": "1971", 
    "format": [
        "Spotify", 
        "YouTube", 
        "SoundCloud"
    ],
}
]; 
console.log(Music); 

// Accessing nested objects 
var myCarStorage = {
    "car": {
        "inside": {
            "glove compartment": "Owner's Manual", 
            "passengers seat": "Chip crumbs from 1999 lel", 
        }, 
        "outside": {
            "trunk": "Jack and spare tire", 
        }
    }
};    
var InsideCarContents = myCarStorage.car.inside["passengers seat"]; 
console.log(InsideCarContents); 
// Accessing nested objects  
var myHobbies = [
    {
        type: "Digital", 
        list: [
            "YouTube", 
            "Netflix", 
            "Programming JS/HTML/CSS", 
        ]
}, 
{
    type: "Educational/Physical", 
    list: [
        "Dumbells/Ab Workouts", 
        "Running", 
        "Math/Science/STEM", 
    ]
    }
    ];
var thirdEducationalAndPhysicalHobby = myHobbies[1].list[2]; 
console.log(thirdEducationalAndPhysicalHobby); 
var collection = {
    "1": {
    "album": "Hell or High Water", 
    "tracks": [
        "PTSD", 
        "Downer", 
    ]
}, 
    "2": {
    "album": "Hell or High Water", 
    "tracks": [
        "Caligula", 
        "Nuka Cola", 
    ]
}, 
    "3": {
    "album": "Hell or High Water", 
    "tracks": [
        "SK8 HEAD", 
        "Snow on Da Bluff", 
    ]
}, 
}; 
var collectionCopy = JSON.parse(JSON.stringify(collection)); 

function updatedRecords(id, prop, value) {
    if (value === "") {
    delete collection[id][prop]; 
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || ['This collection does not exist in your code.']; 
        collection[id][prop].push(value); 
    } else {
        collection[id][prop] = value;
    }
    return collection
} 
// You can alter the values below to test your code 
console.log(updatedRecords(1, "artist", "ZillaKami x SosMula")); 
// iterate with while loops 
// Loops allow you to run the same code multiple times 
// A while loop runs while a speicified condition is true and stops when it's no longer true 
var myArray = []; 
var i = 0; 
while(i < 10) {
    myArray.push(i); 
    i++ 
}
console.log(myArray); 
// iterate with for loops - most common JS loop 
// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination. Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties: value. The next value in the iteration sequence. done.
var myArray2 = []; 
for (var i = 0; i < 5; i++) {
    myArray2.push(i); 
}
console.log(myArray2); 
//---------
var myArray2 = []; 
for (var i = 1; i < 6; i++) {
    myArray2.push(i); 
}
console.log(myArray2); 

// iterate odd numbers with a for loop 

var myArray3 = []; 
for (var x = 0; x < 15; x += 2) {
    myArray3.push(x); 
}
console.log(myArray3); 

var myArray4 = []
for (var xyz = 1; xyz < 10; xyz += 3) {
    myArray4.push(xyz); 
}
console.log(myArray4); 
// counting backwords with for loop 
// basically the opposite of what we did above ^^ 
var myArrayBackwards = []; 
for (var i = 10; i > 0; i -= 1) {
    myArrayBackwards.push(i); 
}
console.log(myArrayBackwards); 

var myArrayBackwards2 = []; 
for (var a = 5; a > 0; a -= 2) { 
    myArrayBackwards2.push(a); 
}
console.log(myArrayBackwards2); 

// iterative through an array with for loop
var arrayForLoop = [2, 3, 4, 5, 6]; 
var total = 0; 
for (var i = 0; i < arrayForLoop.length; i++) {
    total += arrayForLoop[i]; 
}
console.log(total); 
// you can use nested for-loops
function multiplyAll(arr) {
var product = 1; 

for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
        product *= arr[i][j]; 
    }
}

return product; 
} 
var product = multiplyAll([[1,2], [3,4],[5,6,7]]);  

console.log(product); 

// Iterate with Do While loops
// the Do While loop will run at least one time, then it will check the condition 
var myArray = []; 
var abc = 10; 

// regular while loop - 
/* while (i < 5) {
    myArray.push(i); 
    i++;
}*/
// if you were to log the loop above ^, you would get "10,[]" because 10 was the abc var and the "[]" was the empty myArray. 
// A do-while loop.. (bottom) 
do {
    myArray.push(abc); 
    abc++; 
} while (abc < 5)
 
console.log(abc, myArray); 
// the do-while loop is going to first increment abc by one (11), then it give 10, which was the abc var. 
// you get "11, [10]" because you first logged abc (10 + 1 = abc), and myArray (10).

// profile lookup 
// we have this array ob objects in our list, they each come with a firt name, last name, and likings.
// In our function, we will pass in a name and the property in our arg and it will return the value of that property 
// EXAMPLE: If we pass in the firstname Terry and the property "address", it should return their address.
/* ^^ function profileLookup(name, prop) {    

}*/
// let's get started.. 
var peopleDescription = [
{
    "firstname": "Stewart",
    "lastname": "Kevrock",
    "address": "24293 Palmaire Dr. Lynchburg VA",  
    "hobbies": ["Fishing", "Skydiving", "Netflix"], 
}, 
{
    "firstname": "Owen",
    "lastname": "Lee",
    "address": "4553 Hockworth Ave. Greensboro NC",  
    "hobbies": ["Gaming", "Basketball", "Coding"], 
}, 
{
    "firstname": "Thomas",
    "lastname": "White",
    "address": "332 Valley View PL. Fargo ND",  
    "hobbies": ["Drawing", "Fishing", "Gaming"], 
}, 
{
    "firstname": "Bobby",
    "lastname": "Brown",
    "address": "93772 N. Cedar St. Glendale CA",  
    "hobbies": ["Coding", "YouTube", "Gaming"], 
}, 
]; 

function profileLookup(name, prop){
for (var i = 0; i < peopleDescription.length; i++) {
    if(peopleDescription[i].firstname === name) {
        return contacts[i][prop] || "This property doesn't exist.." // this will return the prop, if the name/prop exists.
    }
/* above ^ we are checking to see if the name I passed in inside the 
 profileLookup function is included inside of the peopleDescription var. 
 if it's not, null is returned because that name does not exist inside the var.*/ 
    }
    return "There is no such contact named " + name + "in this database."; 
}
var data = profileLookup("Bobby", "address");

console.log(data); 









 