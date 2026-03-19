// console.log(text3);
var text = 10; // function scope and global
const text2 = 10; // block scope
let text3 = 10; // block scope
var text = "Deepak";
if (true) {
  let text3 = "Deepak";
}

console.log(text);
console.log(text3);

function fun() {
  let text4 = "deepak";
  if (true) {
    let text4 = "Sai";
  }
  console.log(text4);
}

fun();

// functions definition
// a block of code which performs a specific task
function funName() {
  // function body
}

// 5 type of functions
// 1. Named function or function declaration
function add() {
  console.log("Named function called");
}

// 2. Anonymous function or function expression
let sub = function () {
  console.log("Anonymous function called");
};

// 3. Arrow function is sugar syntax of anonymous function
let multiply = () => {
  console.log("Arrow function called");
};

// 4. IIFE - Immediately Invoked Function Expression
(function (a, b, c) {
  console.log("IIFE function called");
})(1, 2, 3);

// 5. callback function - a function passed as an argument to another function
function div(a, b, callback) {
  let result = a / b;
  console.log("Callback function called");
  callback(result);
}

div(10, 5, function (result) {
  console.log("This is a callback function");
});
