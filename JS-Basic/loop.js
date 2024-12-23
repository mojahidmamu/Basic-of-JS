// JavaScript Loop
let car = ['volvo', 'toto', 'tesla', 'bmw', 'tata'];
car.push('asdf');
car.pop();
// console.log( car(0));  
// console.log( car(1));

for (let i = 0; i < car.length; i++){
//  console.log( car[i]);
}

// for in loop
let person = {
  name: 'Ali',
  age: 62,
  country: 'Bangladesh',
  birth: 3001,

}

for(let i in person){
  CapLetter = i.charAt(0).toUpperCase() + i.slice(1);
  // console.log(CapLetter + ' : ' + person[i]);
}
// ForEach Method
car.forEach(function (i){
  // console.log( i);
});
// For of
for(let i of car){
  // console.log( i);
}

// while loop
let mojahid = 0;
while(mojahid < 10){
console.log(mojahid);
mojahid++;
}
