//**"use strict";
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */

//function("Hello, codeup!"){
//}
//**"use strict";
//
// function myNameIs(Rob) {
// var myNameIs = 'Rob';
// return Rob;
// // TODO: Fill in your name here.
// //
// // // TODO:
// // // Create a function called 'sayHello' that takes a
// // parameter 'name'.
// // // When called, the function should log a message that
// // says hello from the passed in name.
// function sayHello(name) {
// console.log("Hello, " + name) + "!");
// }
// // // TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
// //
// // // Don't modify the following line
// // // It generates a random number between 1 and 100 and stores it in random
// var random = Math.floor((Math.random()*100)+1);
// //
// // // TODO:
// // // Create a function called 'isOdd' that takes a number as a parameter.
// // // The function should use the ternary operator to log a message.
// // // The log should tell the number passed in and whether it is odd or not.
// function isOdd(num) {
// return number 2 === 1;
}
// // TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
//     var myName ="Rob"
//     comsole.log=
//     function sayHello(myName)
//     var myStr =""
//
//     let helloMessage = sayHello("Rob");
//     console.log(helloMessage);
// // /**
// //  * TODO:
// //  * Store your name as a string in a variable named 'myName', and pass that
// //  * variable to the 'sayHello' function. You should see the same output in the
// //  * console.
// //  */
//     let myName = "Rob";
//     console.log(sayHello(myName));
// // // Don't modify the following line, it generates a random number between 1 and 3
// // // and stores it in a variable named random
//  var random = Math.floor((Math.random() * 3) + 1);
// //
// // /**
// //  *
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
var random = Math.floor((Math.random() * 3) + 1);

    function isTwo(number){
        return number === 2;
    }
    console.log(isTwo(random));

//         function  swapBits(x, p1, p2, n)
//         {
//             // Move all bits of first set
//             // to rightmost side
//             let set1 = (x >> p1) & ((1 << n) - 1);
//
//             // Move all bits of second set
//             // to rightmost side
//             let set2 = (x >> p2) & ((1 << n) - 1);
//
//             // XOR the two sets
//             let xor = (set1 ^ set2);
//
//             // Put the xor bits back to
//             // their original positions
//             xor = (xor << p1) | (xor << p2);
//
//             // XOR the 'xor' with the original number
//             // so that the  two sets are swapped
//             let result = x ^ xor;
//
//             return result;    return number === 2;
//     }
//     console.log(isTwo(random));
// //  * Example
// //  * > isTwo(1) // returns false
// //  * > isTwo(2) // returns true
// //  * > isTwo(3) // returns false
// //  *
// //  * Call the function 'isTwo' passing the variable 'random' as a argument.
// //  *
// //  * console.log *outside of the function* to check your work (you should see a
// //  * different result everytime you refresh the page if you are using the random
// //  * number)
// //  */
// //
// // /**
// //  * TODO:
// //  * Create a function named 'calculateTip' to calculate a tip on a bill at a
// //  * restaurant. The function should accept a tip percentage and the total of the
// //  * bill, and return the amount to tip
// //  *
// //  * Examples:
// //  * > calculateTip(0.20, 20) // returns 4
// //  * > calculateTip(0.25, 25.50) // returns 6.375
// //  * > calculateTip(0.15, 33.42) // returns 5.013
// //  */
//     function calculateTip(tipPercentage, billTotal){
//         return billTotal * tipPercentage;
// // /**
// //  * TODO:
// //  * Use prompt and alert in combination with your calculateTip function to
// //  * prompt the user for the bill total and a percentage they would like to tip,
// //  * then display the dollar amount they should tip
// //  */
//         function applyDiscount(priceBeforeDiscount, discountPercentage) {
//             //return priceBeforeDiscount * (1 - discountPercentage);
//             return priceBeforeDiscount - (priceBeforeDiscount * discountPercentage);
//         }
// // /**
// //  * TODO:
// //  * Create a function named `applyDiscount`. This function should accept a price
// //  * (before a discount is applied), and a discount percentage (a number between 0
// //  * and 1). It should return the result of applying the discount to the original
// //  * price.
// //  *
// //  * Example:
// //  * > var originalPrice = 100;
// //  * > var discountPercent = .2; // 20%
// //  * > applyDiscount(originalPrice, discountPercent) // 80
// //  *
// //  * > applyDiscount(45.99, 0.12) // 40.4712
// //  */
//     function calculateCircumference(radius) {
//     const pi = 3.14159
//     return 2 * pi * radius;
// }
//     function convert(celciusToFarenheit) {
//     let celcius = (* 1.8 + 32 === farenheit){
//     return farenheit};
// }
//     function convertGallonstoLiters {
//     var gallon = ( * 3.785)
//     liters
//     return liters;
// }
//     function calculateKilometersToMiles {
//     let kilometers = ( * 3.785)Miles
//     return kilometers
// }
//
//     function toUpperCase ("asdf") {
//     return ("ASDF")}
//     console.log("ASDF");
//
//     function lowerCase(string) {
//     return string.toLowerCase ()}
//     console.log ();
//
//     function trimString(string){
//     return string.trim()}
//     console.log();
//
//     function stringLength(string){
//     return string.length;
// }
//
//     function length ("ASdf") {
//     return (4)}
//     console.log (4);
//
//     function index (){
//     return index()}
//     console.log();
//
//     function replace (threeStrings) {
//     return (firstString, firstInstance of secondString for charOfThirdString)}
//     console.log ();
//
//     function replace (allInstances secondString){
//     return (thirdString)}
//     console.log (thirdString);
//
//     function subset (string, 2 (numbers){
//     return (numbers)}
//     console.log (numbers);
//
//     function indexOfCharacter(char, string) {
//     return string.indexOf(char);}
//
//     }
// </script>
// </body>
