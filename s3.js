// promises
// definition: promises are used to handle asynchronous operations in JavaScript.
// A promise represents a value that may be available now,
// in the future, or never.

// function promise() {
//   return new Promise((resolve, reject) => {
//     reject("bad message");
//   });
// }

// async function promise() {
//   return Promise.reject("Bad Message");
// }

// promise()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function div(a, b) {
  if (b === 0) {
    return Promise.reject("Can't divide by zero");
  } else {
    return a / b;
  }
}

div(10, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

async function p1() {
  console.log("p1");
}
async function p2() {
  console.log("p2");
}
async function p3() {
  return Promise.reject("Issue");
  console.log("p3");
}
async function p4() {
  console.log("p4");
}

async function runPromises() {
  try {
    let resolveResult = await p1();
    let resolveResult2 = await p2();
    let resolveResult3 = await p3();
    let resolveResult4 = await p4();
  } catch (error) {
    console.log(error);
  }
}

runPromises();

async function getData() {
  try {
    let url = `https://jsonplaceholder.typicode.com/users`;

    let response = await fetch(url, {
      method: "get",
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();

// run promise parallel
// 1. all promise must get resolve
// 2. from all promise i want to run fast one (resolve or reject)
// 3. all fail and resolve promise
