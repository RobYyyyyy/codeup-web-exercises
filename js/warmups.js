//write a function that accepts an array of numbers and returns its average
//bonus if there are any non-numeric values in the array, return false. numeric strings should count as numeric values
//write a function that accepts an array of strings and returns the longest string. If there are two strings of equal length it returns the one with the lowest index.
//bonus: if there are any values that are not strings, return false
// isNumber function <script>
// function isNumber(value){
//      return !(isNaN(value) ||

// function arrayOfNumbers(){
//     const dollars = ["$1","$2","3"]
//     let dollars1 = "$1"
//     let dollars2 = "$2"
//     let dollars3 = "$3"
// }
// function arrayOfStrings(){
//
// }
let array = [5, 10, 15];

function arrayAverage(array) {
    let total = 0;
    array.forEach(number => {
        total += number
    for (let i = 0; i < array.length; i++){
    if (!isNumber(array[i])){return false;}
    total += array[i];
    }
    return total/array.length;
}
}

let stringArray = ["jabba", "Darth Maul", "Hondo"];
    let longest ='';
    for (let i = 0; i < arrayOfStrings.length; i++){
    if (arrayOfStrings [i].length > longest.length){
    longest = arrayOfStrings[i];
    }
    return longest;
    }
