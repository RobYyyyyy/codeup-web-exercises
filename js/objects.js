// // let currentWeather = {
// //     humidity ; 77,
// //     temp: 82.33,
// //     feels _like: 88. 79,
// //     clouds: "Sct",
// //     description: "cloudy"
// // }
// // // Use dor notation to access object property values under most circumstances
// //
// // console.log(currentWeather.clouds);
// //
// // // Use bracket notation to access object variables
// // console.log(currentWeather[userChoice]);
// // userChoice = "temp"
// //
// // console.log("The current weather is " + currentWeather.temp);
// // if (currentWeather.temp > 95) {
// //     console.log("It's blazing out chear");
// // } else {
// //     console.log("It's aight");
// // }
// //
// // for (let property in currentWeather) {
// //     console.log(property + ": " + currentWeather[property]);
// // }
// //
// // currentWeather.uvIndex = 9.79
// // console.log(currentWeather.uvIndex);
// //
// // //Arrays of objects
// //
// //
// // let hourlyWeather = [
// //     {
// //         time: "08:00",
// //         temperature: 78.91,
// //         feels_like: 78.91
// //     },
// //     {
// //         time: "09:00",
// //         temperature: 79.57,
// //         feels_like: 79.57
// //     },
// //     {
// //         time: "10:00",
// //         temperature: 81.46,
// //         feels_like: 86.04
// //     },
// //     {
// //         time: "11:00",
// //         temperature: 84.49,
// //         feels_like: 89.24
// //     }
// // ];
// //
// // //loop over array
// //
// // for (let i = 0; i < hourlyWeather.length; i++){
// //     console.log('At ${hourlyWeather[i].time} the temperature will be' +
// //         ${hourlyWeather[i).temperature}');
// // }
// // hourlyWeather.forEach(function(forecast){
// //     console.log('At ${forecast.time} the temperature will be' +
// //         '${forecast.temperature} and feel like ${forecast.feels_like}');
// // });
// //
// // var fighter = {
// //     name: "Arata",
// //     hitPoints: 18,
// //     maxDamage: 8,
// //     attack: function () {
// //         console.log('${opponent.name} has ${opponent.hitPoints} hit points.');
// //     }
// //         console.log(this.name + " attacks!");
// //         let damge = Math.ceil(Math.random() * this.maxDamage);
// //         console.log('${this.name} does ${damage} point of damage!');
// //         opponent.hitPoints -+ damage;
// //         console.log('{opponent.name} now has ${opponent.hitPoints} hit points.')
// // //     }
// // //controller object//
// // // Let's create a controller object to handle anything players or game objects do that affects the state of the game.  The controller might handle taking user input and calculating the input's effect on the game.
// // //
// //  let controller = {
// //      attack: function(attacker, defender){
// //          let defenderHPBeforeAttack = defender.hitPoints;
// //          let damage = Math.ceil(Math.random() * attacker.maxDamage);
// //          defender.hitPoints -= damage;
// //          view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
// //      }
// //  }
// // //
// //  // The view object handles output
// //
// //  let view = {
// //      displayAttackResults: function(attacker, defender, defenderHPBeforeAttack, damage){
// //          console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
// //          console.log(attacker.name + " attacks!");
// //          console.log(`${attacker.name} does ${damage} hit points of damage!`);
// //          console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points.`);
// //          console.log("-----------------");
// //      }
// //  }
// //
// //  let model = {
// //      fighter: {name: "Arata",
// //          hitPoints: 18,
// //          maxDamage: 8
// //     }
// //
// //     monster: {
// //         name: "Goblin",
// //         hitPoints: 8,
// //         maxDamage: 6
// //     }
// // }
// //
// // // fighter.attack(monster);
// // // fighter["attack"](monster);
// //
// // controller.attack(model.fighter, model.monster);
// // controller.attack(model.monster, model.fighter);let model = {
//
// (function() {
//     "use strict";
//
// // /**
// //  * TODO:
// //  * Create an object with firstName and lastName properties that are strings
// //  * with your first and last name. Store this object in a variable named
// //  * `person`.
// //  *
// //  * Example:
// //  *  > console.log(person.firstName) // "Rick"
// //  *  > console.log(person.lastName) // "Sanchez"
// //  */
// //      var person = {}
// //          person.firstName = {"Rob"};
// //          person.lastName = {"Yoas"};
// //
// //     person.logfirstNamelastName = function () {
// //         console.log("My first and last name is: "
// //         + this.firstName + " " + this.lastName);
// //     };
// //
// //     person.logfirstNamelastName();
//     let person = {
//     firstName: "Rob";
//     lastName: "Yoas"
//     }
// }
//
// // /**
// //  * TODO:
// //  * Add a sayHello method to the person object that returns a greeting using
// //  * the firstName and lastName properties.
// //  * console.log the returned message to check your work
// //  *
// //  * Example
// //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
// //  */
//     sayHello: function() {
//
//     }
//       var sayHello = {"What up fam"};
//       console.log(person.sayHello());
//       person.sayHello = function () {
//           alert("What up fam");
//       })
// //
// // /** TODO:
// //  * HEB has an offer for the shoppers that buy products amounting to
// //  * more than $200. If a shopper spends more than $200, they get a 12%
// //  * discount. Write a JS program, using conditionals, that logs to the
// //  * browser, how much Ryan, Cameron and George need to pay. We know that
// //  * Cameron bought $180, Ryan $250 and George $320. Your program will have to
// //  * display a line with the name of the person, the amount before the
// //  * discount, the discount, if any, and the amount after the discount.
// //  *
// //  * Uncomment the lines below to create an array of objects where each object
// //  * represents one shopper. Use a foreach loop to iterate through the array,
// //  * and console.log the relevant messages for each person
// //  */
// //
//  var shoppers = [
//      {name: 'Cameron', amount: 180},
//      {name: 'Ryan', amount: 250},
//      {name: 'George', amount: 320}
//     // if discount >200;
//  ];
// shoppers.forEach(function(shopper){
//     let discount = shopper.amount > 200 ? shopper.amount * .12 : 0),toFixed(2);
// let total = (shopper.amount - discount).toFixed(2)
// console.log($[shopper.name);
// }
//      var shoppers = ['Cameron', 'Ryan', 'George']
//      Cameron.amount = 180;
//      Ryan.amount = 250;
//      George.amount = 320;
//      shoppers.discount = function ((* .12)) = "discount"
//      if <200 apply discount
//      "total" = shopper.amount -- "discount"
//
// //
// // /** TODO:
// //  * Create an array of objects that represent books and store it in a
// //  * variable named `books`. Each object should have a title and an author
// //  * property. The author property should be an object with properties
// //  * `firstName` and `lastName`. Be creative and add at least 5 books to the
// //  * array
// //  *
// //  * Example:
// //  * > console.log(books[0].title) // "The Salmon of Doubt"
// //  * > console.log(books[0].author.firstName) // "Douglas"
// //  * > console.log(books[0].author.lastName) // "Adams"
// //  */
// var 'books' = ['recent1', 'recent2', 'recent3']
//     recent1.title = "The Salmon of Doubt";
//     recent2.title = "Unforgettable";
//     recent3.title = "Forgotten"
//
//     recent1.author=(firstName + lastName){
//         console.log(books[0].author.firstName);
//         firstName = Douglas;
//         console.log(books[0].author.lastName);
//         lastName = Adams;
//     }
//     recent1.author=(firstName + lastName)
//     {
//         console.log(books[1].author.firstName);
//         firstName = Whodis;
//         console.log(books[1].author.lastName);
//         lastName = Whodat;
//     }
//     recent1.author=(firstName + lastName){
//         console.log(books[2].author.firstName)
//         firstName = Saywut
//         console.log(books[2].author.lastName)
//         lastName = Sayhuh
//
// let books = [
//
//     {
//         title: "The Salmon of Doubt",
//         author: {
//             firstName: "Douglas"
//             lastName: "Adams"
//         }
//     {
//         title: "","Unforgettable"
//         author: {
//             firstName: "Yo"
//             lastName: "Mama"
//         }
//     {
//         title: "Forgotten",
//         author: {
//             firstName: "Who"
//             lastName: "Dis"
//         }
//     }
// ]
// // /**
// //  * TODO:
// //  * Loop through the books array and output the following information about
// //  * each book:
// //  * - the book number (use the index of the book in the array)
// //  * - the book title
// //  * - author's full name (first name + last name)
// //  *
// //  * Example Console Output:
// //  *
// //  *      Book # 1
// //  *      Title: The Salmon of Doubt
// //  *      Author: Douglas Adams
// //  *      ---
// //  *      Book # 2
// //  *      Title: Walkaway
// //  *      Author: Cory Doctorow
// //  *      ---
// //  *      Book # 3
// //  *      Title: A Brief History of Time
// //  *      Author: Stephen Hawking
// //  *      ---
// //  *      ...
// //  */
// for (let = i)
//     books.forEach(function(book, index){
//     console.log("Book # " + (index + 1));
//     console.log("Title: " + book.title);
//     console.log("Author: ${book.author.firstName} ${book.author.lastName)"0;
//     console.log("----")
//     });
//     for (let i = 0; i < books.length; i++){
//         console.log("Book #" + (i + 1));
//         console.log("Title: " + books[i].title);
//         console.log('Author: ${books[i'.author.firstName) ${book.author.lastName}');
//             console.log("-----");
//     }
//     function createBook(title, firstName, lastName)
//     return {
//         title: title,
//         author: {
//             firstName: firstName,
//             lastName: lastName
//         }
//     }
//    books.push createBook("The Great Gatsby", "F. Scott, "Fitzgerald");
// // /**
// //  * Bonus:
// //  * - Create a function named `createBook` that accepts a title and author
// //  *   name and returns a book object with the properties described
// //  *   previously. Refactor your code that creates the books array to instead
// //  *   use your function.
// //  * - Create a function named `showBookInfo` that accepts a book object and
// //  *   outputs the information described above. Refactor your loop to use your
// //  *   `showBookInfo` function.
// //  */
// //
//     function showBookInfo(book, index){
//        if (index !== undefined) {
//            console.log("Book # " + (index + 1))
//        }
//     }
//         console.log("Book #" + (i + 1));
//         console.log("Title: " + books[i].title);
//         console.log('Author: ${books[i'.author.firstName) ${book.author.lastName}');
//         console.log("-----");
//     }
//
//     }
//     //object destructuring
// const car = {
//             make : "Toyota",
//     model: "Tacoma",
//     year: 2019,
//     mileage: 12657
//
// }
// // let make = car.make;
// //         let carModel = car.model;
// //
// //         console.log(make);
// //         console.log(carModel);
// //
// //         const {make, model, year, mileage} = car;
// //         console.log(make)
// // console.log(model);
// //         console.log(year);
// //         console.log(mileage);
// //
// //         const outputCarInfo = ({make, model, year, mileage} = car) =>
// //         {console.log('${year} ${make} ${model} with ${mileage}')}
// // outputCarInfo(car);