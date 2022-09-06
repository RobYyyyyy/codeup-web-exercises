// //define a function named is greater than that takes in two values and returns a true if the first argument is greater than the second argument otherwise it shiould return false.  If either argument is not a number, return false;
//
function isGreaterThan(arg1, arg2){
    if(typeof arg1 !== "number" || typeof arg2 !== "number"){
    return false;
} else if (arg2 > arg1 || arg1 === arg2){
    return false;
    } else {
        return true;
    }
}
// //define a function named isLessThan thst takes in two values and returns a true. If
function isLessThan(arg1, arg2){
        if(typeof arg1 !== "number" || typeof arg2 !== "number") {
                return false;
            } else if (arg2 < arg1 || arg1 === arg2) {
                 return false;
             } else {
         return true;
        }
}
//     //define a function named isEqualNumber
function isEqualNumber(arg1, arg2) {
    if (typeof arg1 !== "number" || typeof arg2 !== "number") {
        return false;
    } else if (arg1 === arg2) {
            return true;
        }
    }
// // //define a function named is equal that takes in two values and returns a true if the first argument has the same value and type as the second argument, otherwise it should return false.
///     if (arg1 === arg2) {
//         return true;
//     } else {
//         return false;
//     }
// }/ function isEqual() {

// //     //define a function named isNot
function isNot (boolean){
    if(boolean === null){
    return false;
    }
    return !boolean;
    }
// //     //named calcAbs
function calcAbs(number) {
    if (typeof number !== "number" || number === null) {
        return 0;}
        return Math.abs(number);
    }
// //     //calculate cube
function calcCube() {
    if (typeof number !== "number" || number === null) {
        return 0;
    }
    return number * number * number;
}
// //         // type match
function isTypeMatch(arg1, arg2) {
    if (typeof arg1 === typeof arg2) {
        return true;
    } else if (arg1 === null || arg2 === null) {
        return false;
    } else {
        return false;
    }
}
// ////define a function named findLongestString that accepts two string arguments  and returns the string
    function findLongestString(string1, string2);
            if(typeof string1 !== "string" && typeof string2 !== "string"); {
                return ("");
             else if (typeof string1 === "string" && typeof string2 !== "string") {
                (return string1);
            }
 else if (typeof string1 !== "string" && typeof string2 === "string") {
            return string2;
 }
 else if (string1.length > string2.length); {
                return string1;
 }
 else if (string2.length > string1.length); {
                return string2;
 }


//           //function named isFactor
   function isFactor(number1, number2){
    if(typeof number1 !== "number" || typeof number2 !== "number")
           return false};
{ else
    if (number2 % number1 === 0) {
        return true;
    }
    { else
        return false;
    }
// }
// //    //working with values, variables and data types
// //        //Using assignment and comparison operators
// //        //String and array manipulation
// // //Writing functions
// //Math.max(12, 6, 2)
// //