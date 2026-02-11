// prototyping
// So in JavaScript we can use prototype.
// Prototyping can be used for two things. First we can use prototyping to create a oop Operation.
// we can add a function to an existing class with a prototype.

String.prototype.getMoreData = function () {
  let text = this.toString();
  return {
    len: text.length,
    uc: text.toUpperCase(),
    text: text,
  };
};

let text = "deepak";
console.log(text.getMoreData());

// before es6 was constructor function.
// So they were exactly used to create a features like object oriented programming.

// function Human(name) {
//   this.name = name;
// }

// Human.prototype.running = function () {
//   console.log(`${this.name} is running`);
// };

// This concept is called as class logic.
// Classes are basically a sugaritic syntax in JavaScript for constructor functions.
class Human {
  constructor(name, age = 18) {
    this.name = name;
    this._age = age;
  }
  running() {
    console.log(`${this.name} is running`);
  }

  get age() {
    return this._age;
  }
  //   set age(value) {
  //     this._age = value;
  //   }
}

// Inheritance in JavaScript.

class Boy extends Human {
  constructor(name) {
    super(name); // So basically super calls a constructor of parent.
  }
}

class Girl extends Human {
  constructor(name, age = 18) {
    super(name, age); // So basically super calls a constructor of parent.
  }

  static InitGirl(name, age = 18) {
    return new Girl(name, age);
  }
}

let boy = new Boy("Rahul");
boy.running();

let girl = Girl.InitGirl("Neha", 12);
girl.running();
girl.age = 50; // So as a setter is not used here, you will not able to use or you will not able to update that value.
console.log(girl.age);

// So basically in object oriented programming we have a concept called the static method.
// The static method are used to call a function without an object. You can directly call it with the help of Class Name.

// get length
// get upper letter
// get original

// oop
// functional programming

//  Functions as First-Class Citizens
const greet = (name) => {
  return `Hello ${name}`;
};

const sayHello = (fn) => {
  fn("Surya");
};

console.log(sayHello(greet)); // Hello Surya

let total = 0;
const addToTotal = (num) => {
  total = total + num;
  return total;
};

// Higher order function.
// case-1
function fun(callback) {
  callback();
}

fun(function () {});

// case-2
function parent() {
  return function () {
    console.log("hello");
  };
}

function add(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

function composition(fn1, fn2, a, b) {
  return fn1(fn2(a, b), b);
}

let result = composition(add, multi, 10, 20);
console.log(result);

let result1 = composition(multi, add, 10, 20);
console.log(result1);

// curring function
function fun1(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// dynamic Curring function.
function fun1(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    } else {
      return fun1(a + b);
    }
  };
}

console.log(fun1(10)(20)(30)(40)(50)());
