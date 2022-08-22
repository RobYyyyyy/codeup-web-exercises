// let currentWeather = {
//     humidity ; 77,
//     temp: 82.33,
//     feels _like: 88. 79,
//     clouds: "Sct",
//     description: "cloudy"
// }
// // Use dor notation to access object property values under most circumstances
//
// console.log(currentWeather.clouds);
//
// // Use bracket notation to access object variables
// console.log(currentWeather[userChoice]);
// userChoice = "temp"
//
// console.log("The current weather is " + currentWeather.temp);
// if (currentWeather.temp > 95) {
//     console.log("It's blazing out chear");
// } else {
//     console.log("It's aight");
// }
//
// for (let property in currentWeather) {
//     console.log(property + ": " + currentWeather[property]);
// }
//
// currentWeather.uvIndex = 9.79
// console.log(currentWeather.uvIndex);
//
// //Arrays of objects
//
//
// let hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];
//
// //loop over array
//
// for (let i = 0; i < hourlyWeather.length; i++){
//     console.log('At ${hourlyWeather[i].time} the temperature will be' +
//         ${hourlyWeather[i).temperature}');
// }
// hourlyWeather.forEach(function(forecast){
//     console.log('At ${forecast.time} the temperature will be' +
//         '${forecast.temperature} and feel like ${forecast.feels_like}');
// });
//
// var fighter = {
//     name: "Arata",
//     hitPoints: 18,
//     maxDamage: 8,
//     attack: function () {
//         console.log('${opponent.name} has ${opponent.hitPoints} hit points.');
//     }
//         console.log(this.name + " attacks!");
//         let damge = Math.ceil(Math.random() * this.maxDamage);
//         console.log('${this.name} does ${damage} point of damage!');
//         opponent.hitPoints -+ damage;
//         console.log('{opponent.name} now has ${opponent.hitPoints} hit points.')
//     }
//controller object//
// Let's create a controller object to handle anything players or game objects do that affects the state of the game.  The controller might handle taking user input and calculating the input's effect on the game.
//
 let controller = {
     attack: function(attacker, defender){
         let defenderHPBeforeAttack = defender.hitPoints;
         let damage = Math.ceil(Math.random() * attacker.maxDamage);
         defender.hitPoints -= damage;
         view.displayAttackResults(attacker, defender, defenderHPBeforeAttack, damage);
     }
 }
//
 // The view object handles output

 let view = {
     displayAttackResults: function(attacker, defender, defenderHPBeforeAttack, damage){
         console.log(`${defender.name} has ${defenderHPBeforeAttack} hit points`);
         console.log(attacker.name + " attacks!");
         console.log(`${attacker.name} does ${damage} hit points of damage!`);
         console.log(`${defender.name} now has ${defenderHPBeforeAttack - damage} hit points.`);
         console.log("-----------------");
     }
 }

 let model = {
     fighter: {name: "Arata",
         hitPoints: 18,
         maxDamage: 8
    }

    monster: {
        name: "Goblin",
        hitPoints: 8,
        maxDamage: 6
    }
}

// fighter.attack(monster);
// fighter["attack"](monster);

controller.attack(model.fighter, model.monster);
controller.attack(model.monster, model.fighter);let model = {

