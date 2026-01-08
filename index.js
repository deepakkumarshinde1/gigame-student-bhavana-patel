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
