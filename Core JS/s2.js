// closures in javascript
// A closure is a function that retains access to its
// lexical scope even when the function is executed outside that scope.

function parentFunction() {
  let counter = 0; // lexical scope variable
  function childFunction() {
    counter++;
    console.log("Counter:", counter);
  }
  return childFunction;
}

let child = parentFunction(); // returns childFunction but does not execute it
console.log(child); // [Function: childFunction]

child(); // Counter: 1
child(); // Counter: 2
child(); // Counter: 3

// event loop and asynchronous behavior in javascript
// JavaScript is single-threaded, meaning it has a single call stack
// and can execute one task at a time. However, it can handle asynchronous
// operations using the event loop, which allows non-blocking behavior.

// setInterval and setTimeout
//setTimeout
setTimeout(() => {
  console.log("This message is shown after 2 seconds");
}, 2000); // executes after 2 seconds

//setInterval
setInterval(() => {
  console.log("This message is shown every 3 seconds");
}, 3000); // executes every 3 seconds
