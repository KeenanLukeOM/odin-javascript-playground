"use strict";

const container = document.querySelector("#container")

const redText = document.createElement("p")
redText.classList.add('redText')
redText.style.color = "red"
redText.textContent = "Hi, i'm red!"

container.appendChild(redText)

const blueHeaderThree = document.createElement("h3")
blueHeaderThree.classList.add('blueHeaderThree')
blueHeaderThree.style.color = "blue"
blueHeaderThree.textContent = "I'm a blue h3!"

container.appendChild(blueHeaderThree)

const borderDiv = document.createElement("div")
borderDiv.classList.add('borderDiv')
borderDiv.style.borderColor = "black"
borderDiv.style.backgroundColor = "pink"

const headerInDiv = document.createElement("h1")
headerInDiv.classList.add('headerInDiv')
headerInDiv.textContent = "I'm in a div!"

const paraInDiv = document.createElement("p")
paraInDiv.classList.add('paraInDiv')
paraInDiv.textContent = "ME TOO!"

borderDiv.appendChild(headerInDiv)
borderDiv.appendChild(paraInDiv)

container.appendChild(borderDiv)

// BUTTON

const btn = document.querySelector("#btn")
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

// const str1 = "Hello";
// const str2 = "World!";
// const message = str1.push(str2);

// function helloWorld() {
//     console.log "Hello World!"
//   }

// const a = 5;
// const b = 10;

// function add() {
//   return c;
// }

// function print() {
//   add();
// }

// print();

// const a = "Hello";
// const b = "World";

// console.log(c);

//////////////////
// Understanding errors^^^
//////////////////

// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i = 1; i <= answer; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

// function lastLetter(text) {
//     return text.substr(-1)
// }

// console.log(lastLetter("Hello"))

// function capitaliize(lowercase) {
//     let firstLetter = lowercase.substring(0,1).toUpperCase()
//     let remainingLetters = lowercase.substr(1).toLowerCase()
//     return firstLetter + remainingLetters
// }

// console.log(capitaliize("hEy tHerE!"))

// function multiply(a, b) {
//     return a * b
// }

// console.log(multiply(3,10));

// function add7(number) {
//     return number + 7
// }

// console.log(add7(7))

// function min(a, b) {
//     if (a > b) {
//         return a
//     } else {
//         return b
//     }
// }

// console.log(min(18, 15))

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?')
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?') // Truthy implied by code stopping
// }


// console.log(checkAge(19))


// function favoriteAnimal(animal) {
//     return animal + " is my favorite animal!"
// }

// console.log(favoriteAnimal("Gecko"))

// let age = 11;

// if (age >= 14 && age <= 90) {
//     alert("You are in the range!")
// } else {
//     alert("You are not in the range")
// }

// if (!(age >= 14 && age <= 90))

// alert( !true ); // false
// alert( !0 ); // true

// alert( !!"non-empty string" ); // true
// alert( !!null ); // false

// alert( Boolean("non-empty string") ); // true
// alert( Boolean(null) ); // false

// && Finds the first falsy value

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// true || alert("not printed");
// false || alert("printed");

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) { // Finds the first truthy value
//   alert( 'The office is closed.' ); // it is the weekend
// }

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

// let greeting;
// let hour = 2;

// if (hour < 18) {
//     greeting = "Good day";
//   } else if (hour < 20) {
//     greeting = "Good evening";
//   } else {
//     greeting = "Nighty night";
// }

// alert(greeting)

// alert( undefined > 0 ); // false (1)
// alert( undefined < 0 ); // false (2)
// alert( undefined == 0 ); // false (3)

// const badQuotes = "She said "I think so!""; // ERROR, can't double use quotes, use other option

// const song = "The Best Days";
// const score = 99;
// const highestScore = 100;
// const output = `I like the song ${song}. I gave it a score of ${
//   (score / highestScore) * 100
// }%.`;

// console.log(output);

// const name = "Keenan";
// const greeting = `Hello, ${name}`;

// console.log(greeting);

// const one = "Hello, ";
// const two = "how are you?";
// const joined = `${one}${two}`;

// console.log(joined);

////

// const single = 'Single quotes';
// const double = "Double quotes";
// const backtick = `Backtick`;

// console.log(single);
// console.log(double);
// console.log(backtick);

////

// const string = "The revolution will not be televised.";
// console.log(string);

// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

// console.log(badString1, badString2, badString3);

/////////////////
//// Numbers playground
/////////////////

// const MAX = 57;
// let actual = MAX - 13;
// let percentage = actual / MAX

// console.log(percentage)

// let a = 10;
// let b = 7 * a;

// console.log(b);

// console.log((4+6+9) / 77)

// console.log(1+4+6+7+8+23)

// console.log(23 + 97)

////////

// let x = 250 % 251

// alert (x)

////////

// let myNumber = "74";
// myNumber += 3;

// typeof myNumber;

////////

// let x = 100 / "Apple";
// alert(isNaN(x));

// let x = NaN;
// let y = 5;
// let z = x + y;

// alert(z)

// alert(typeof Infinity)

////////

// let x = 10;
// let y = 20;
// let z = x + y;

// let x = "10";
// let y = "20";
// let z = x + y;

// let x = 10;
// let y = "20";
// let z = x + y;

// let x = "10";
// let y = 20;
// let z = x + y;

// let x = 10;
// let y = 20;
// let z = "The result is: " + x + y;

// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z;

// alert(result);


/////////////////
// Javascript Variables
/////////////////

// let admin;
// let alias;

// alias = "John";

// admin = alias;

// alert(admin);

////////

// // Example of const for difficult to remember values, uppercase and underscored

// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// let color = COLOR_BLUE;
// alert(color);

////////

// const myBirthday = "03.20.2000";

// myBirthday = "30.02.0002"; //This causes an error, const are unchanging variables

////////

// let hello = "Hello world!";

// let message;

// message = hello;

// alert(hello);
// alert(message);

////////

// let message = "Hello";

// message = "World";

// alert(message);