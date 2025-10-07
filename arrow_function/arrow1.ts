// https://sqlpey.com/javascript/how-to-use-async-arrow-functions-in-javascript/

// https://www.w3schools.com/Js/js_arrow_function.asp

/*
Arrow functions were introduced in ES6.

Arrow functions allows a shorter syntax for function expressions.

You don't need the function keyword, the return keyword, and the curly brackets:
 */
let myFunction = (a, b) => a * b;

/*
Before Arrow:
Function to compute the product of a and b
 */
let myFunction2 = function (a, b) {
    return a * b
}

/*
With arrow
 */
let myFunction3 = (a, b) => a * b;

/*
Before arrow
 */
let hello = function () {
    return "Hello World!";
}

let hello2 = () => {
    return "Hello World!";
}

let hello3 = () => "Hello World!";

/*
Arrow Function Without Parentheses
 */

let hello4 = (val) => "Hello " + val;
let hello5 = (val)=> (val) => "Hello " + val;

console.log(myFunction(1, 2));
console.log(myFunction2(1, 2));
console.log(myFunction3(1, 2));
console.log(hello());
console.log(hello2());
console.log(hello3());
console.log(hello4('World!'));
console.log(hello5('World!')); // Does not work

// foo();
// await const z = foo3(2).then(r => r);
//
// function foo() {
//     console.log('function1');
// }
//
// // The syntax for defining an async arrow function is quite simple:
// const foo2 = async () => {
//     // Do something asynchronously
//     return null;
// }
//
// // When you’re working with a single parameter, the syntax can be particularly streamlined:
// const foo3 = async evt => {
//
//     console.log('foo3: ' + evt);
//     // Handle the event
//     return 4;
// }
