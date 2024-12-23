// 
const numbers = [12, 45, 65, 35, 89, 99];
// console.log( Math.min(...numbers));

// biggest number

// let biggest = numbers[0];
// for(let i = 1; i < numbers.length; i++) {
//   if(numbers[i] > biggest){
//     biggest = numbers[i]
//   }
//   return biggest;
// }
// // console.log( 'after loop:', biggest);;

// This is a problem ,,,,,,,,,,,

// function showInfo(info){
//   const result = 'amar nam ' + info.name + 'amar basa' + info.address;
//   return result;
// }
// const person = {
//   name: 'mojahid',
//   address: 'Illishia',
// }
// const x = showInfo(person);
// console.log(x)

// I want to output mojahid@gmail.com
const person = {
    name: 'mojahid',
    address: 'Illishia',
  }
  function createEmail(info) {
    const result = info.name + "@" + info.address + ".com";
    return result;
  }
  // console.log( createEmail(person));


// problem l
function calculate(income) {
  if (typeof income !== 'number' ) {
    return 'invalid';
  }
  const house = 5000;
  const millcost = 3000;
  const personalcost = 2000;
  const total = house + millcost + personalcost;

  const savings = income - total;
  return savings;

}
 console.log( calculate(10500));
 

// problem 3
const x = [1, 45, true, 'hello', 65];
function boolean (array){
  if(!Array.isArray(x)){
    return 'please input a valid array'
  }
  let count = 0;
  for(let item of array){
   if(typeof item === 'boolean'){
    count ++
   }
  }
  return count;
  }
// console.log(boolean(x));

// problem 4
function garibara(peoples){
   const bus = 50;
   const micro = 15;
   const rickshowcost = 20;
   const remaingbus = peoples % bus;
    
   const remaingmicto = remaingbus % micro;
   return remaingmicto * rickshowcost;
}
console.log(garibara(120) );


// const person2 = {
//   name: 'tasmira sifat',
//   age: 19,
// }
// function email(data){
//   const result = data.name + " " + data.age + " " + "@"  + "gmail" + ' ' + ".com"
//   return result;
// }
// console.log( email(person2));