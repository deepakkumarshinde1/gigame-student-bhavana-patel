// Destructuring.
// It's nothing but like extracting a data.from an array or object.
let array = [10, 20, 30, 40, 50];
// let numOne = array[0];
// let numTwo = array[1];
// let remainingElement = array.slice(2);

let [numOne, numTwo, ...remainingElement] = array;

console.log(numOne, numTwo, remainingElement);

let student = {
  name: "Arun",
  age: 36,
};

console.clear();
let { name: studentName, age } = student;
// let studentName = student.name;
// let age = student.age;
console.log(studentName, age);

// A spread operator.
// It can be used to merge two arrays.or two objects.
// creates a copy also. So we can create a copy of array or object.

console.clear();
let array1 = [10, 20, 30];
let array2 = [100, 200, 300];

let array3 = [...array1, [...array2]];
array2[0] = 1000;
console.log(array2);
console.log(array3);

let studentOne = {
  name: "Deeepkkumar",
};

let _location = {
  city: "Nashik",
  pin_code: 421100,
};

let studentDetails = {
  ...studentOne,
  ..._location,
};

console.clear();
console.log(studentDetails);

// // object literals
let price = 3000;
let quantity = 30;
let product = {
  name: "Dell Mouse",
  price,
  quantity,
};

console.clear();
console.log(product);

// rest parameter
function add(...list) {
  //   let result = a + b;
  let result = list.reduce((p, c) => {
    return p + c;
  }, 0);
  console.log("result = ", result);
}

add(10, 20);

// symbols
let id = Symbol("userId");
let car = {
  name: "Amaze",
  brand: "Honda",
  [id]: 1000,
};

console.log(car[id]);
console.log(Object.entries(car));

console.clear();
// Iterator
let array5 = [10, 20, 30];
let iterator = array5[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// custom iterator
let itr = {
  data: [],
  [Symbol.iterator]() {
    let index = -1;
    let _data = this.data;
    return {
      next() {
        if (index === _data.length - 1) {
          index = 0;
        } else {
          index++;
        }
        return { value: _data[index], done: false };
      },
      prev() {
        if (index === -1) {
          index = _data.length - 1;
        } else {
          index--;
          if (index === -1) index = 0;
        }
        return { value: _data[index], done: false };
      },
    };
  },
};
console.clear();

itr.data = [10, 20];
let myItr = itr[Symbol.iterator]();

console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());

// Generators

// redux thunk
// redux saga
