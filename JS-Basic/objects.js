// JacaScript Objects
//  Let 
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
// console.log( car);

//objectName["property"]
// let age = person["age"];

// objects Method
const myname = {
  firstName: "abdullah",
  lastName: "mojahid",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
// console.log(myname);

// JS Object Display
// Create an Object
const friends = {
  name: "asadujjaman",
  age: 30,
  city: "New York",
};
// console.log( friends);


// JS Object Instructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const person1 = new Person('Abdullah', 'mojahid', 30, 'red');
// console.log( person1);

// This is my practise turn
function Friends(first, last) {
  this.firstName = first;
  this.lastName = last;
}
const  friends1 = new Friends("mojahid", 'abdullah')
console.log( friends1);


// //// ///
const myCV = {
  name: "mojahid",
  age: 30,
  class: 'frist-semester',
  marital: 'unmarried',
  id: 5566,
  sex: 'Male',
  CGPA: 3.35,
  city: 'Dhaka',
  homeland: 'Bangladesh',

}
// console.log(myCV.id);
// console.log(myCV);


 


const obj1 = {
  a: 1,
  b: 2,
  c: 3,
}
const obj2 = {
  p: 1,
  q: 2,
  r: 3,
}
const obj3 = {
  x: 1,
  y: 2,
  z: 3,
}

const objFinal = Object.assign({}, obj1, obj2, obj3);
// // // const objFinal = {obj1, obj2 };
// console.log( objFinal);

// my turn
const num1 = {
  d: 4,
  e: 2,
  f: 6,
}
const num2 = {
  g: 1,
  h: 9,
  i: 8,
}
const num3 = {
  j: 7,
  k: 5,
  l: 3,
}
const numfinal = Object.assign({}, num1, num2, num3);
// console.log( numfinal);