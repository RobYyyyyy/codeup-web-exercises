//delaring an array literal:
// each item in an array is called an element

let grocerylist = ["creamer", 'butter', 'salsa', 'milk'];

 for(let i = 0; < groceryList.length; i++ )
 {
     if (i === groceryList.length - 1) {
         console.log("I have to buy " + groceryList[i] + ".");
     } else {
        console.log("I have to buy " + groceryList[i] + " and ")
     }
 } else
     console.log("I also have to get " + groceryList[i] + " and ")
     }
 } else {
     console.log("I am done shopping " + groceryList[i] + " That's it! ")
 }
// let texasCities = ["San Antonio", "Houston", "Dallas", "El Paso"];
// for(let i =; i < texasCities.length; i++)
//     if (i % 2 === 1) {
//         console.log(texasCities[i] + " is an odd city")
//     } else {
//         console.log(texasCities[i]);
//     }
//
// function  outputArray(array){
//         for (let i = 0; i < array.length; i++){
//             console.log(array[i])
//         }
// }
//
// outputArray(texasCities);
//
// let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.00];
//
// prices.forEach(function(price, index){
//     console.log("item number" + (index + 1) + " costs " + price)
// });
// prices.forEach((price, index) => {
//     console.log(price)
// })
//declare an array with 4 strings
groceryList.push("potatoes", "serranos");
console.log(groceryList);
groceryList.pop();
console.log(groceryList);

groceryList.unshift("sliced cheddar");
console.log(groceryList);
groceryList.shift();
console.log(groceryList);

let indexOfCreamer = groceryList.indexOf("creamer")
console.log(indexOfCreamer);

groceryList.indexOfCreamer = "heavy creamer")
console.log(groceryList);

//let butter = groceryList[0];
groceryList[0] = "avocado's";
console.log(groceryList);

let firstHalfOfGroceryList = groceryList.slice(0, 2);
console.log(firstHalfOfGroceryList);
let secondHalfOfGrocefryList = groceryList.slice(2);
console.log(secondHalfOfGroceryList);

firHalfOfGroceryList.push("butter");

groceryList = firstHalfOfGrocerylist.comcat(secondHalfOfGroceryList);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList);

prices.sort(function(a, b){
    return a-b;

})
console.log(prices);

groceryList[3] = "Blueberries";
console.log(groceryList);
console.log(groceryList.sort());

groceryList.forEach((item, index, array) => {
    array[index] = item.toLowerCase();
})

console.log(groceryList);
}