//sum function

function sum(...args){
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total+= args[i];
  }
  return total;
}

//mybind

Function.prototype.myBind = function (context, ...bindArgs) {
  // const ctx = this;
  // let args = Array.from(arguments);
  // args.shift();
  return () => {

    return this.apply(context, bindArgs);
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");
let boundfunc = markov.says.myBind(breakfast, "meow", "Kush");
// boundfunc();



function curriedSum(numsToSum) {
  let total = [];
  let sum = 0;
  return function _curriedSum (newNum) {
    total.push(newNum);
    if (total.length === numsToSum) {
      total.forEach( (num) => {
        sum += num;
      });
      return sum;
    } else {
      return _curriedSum;
    }
  };
  // return _curriedSum;
}

const summation = curriedSum(4);
// console.log(summation);


Function.prototype.curry = function(numArgs) {
  const total = [];
  const that = this;
  return function _curry(newNum) {
    total.push(newNum);
  if (total.length === numArgs) {
     return that.apply(that, total);
  } else {
    return _curry;
  }
};
};

let sumAll = function (numbers) {
  let newNums = Array.from(arguments);
  let sum = 0;
  newNums.forEach( (number) => {
    sum += number;
  });
  return sum;
};

// console.log(sumAll.curry(3)(1)(2)(3));
