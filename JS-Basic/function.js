// // JavaScript Functions
// function myfunction(fullname, age, dateofbirth = 2001) {
//   console.log('hello' + '! ' + fullname + 'I am' + ' ' + age, + ' ' +
//     'date of birth' + ' ' + dateofbirth
//   );
// }
// myfunction('mojahid', 30);
// myfunction('asad', 45);


// // function isSubscribed(){
// //   console.log('sunlwo'); 
// // }

// // This is function expression, This is my first function programm,,,,,
// let maths = function (x, y) {
//   return x + y;
// }
// console.log(maths(3, 4));
// console.log(maths(45, 4));

// // return undefined 

// function newfun() {
//   let firstname = 'mojahid';
//   console.log(firstname);
// }
// newfun();

// let numbers = [4, 54, 54, 54, 12,];
// let sqnumbers = numbers.map{function (number){
//   return number * number;
// }
// }
// console.log( sqnumbers);

// arrow function
// let add = function (x, y) => x + y;
// console.log(add(5, 6));

// Nested Function

function greed(firstName){
  function sayhello(){
    alert ('Hello' + firstName);
  }
  return sayhello();
}
console.log( greed('mojahi'));