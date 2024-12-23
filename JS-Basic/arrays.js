//  Array of JavaScript

// const variable
// const cars = ["Saab", "Volvo", "BMW"];
//  console.log( cars);
// const hablu = ['bondo', 'gonda', 'locca', 'cheaterless'];
// console.log( hablu);
// const mojahid2 = ['mojahid', 'asad', 'purnima', 'saida', 'simo', 'orpita']
// console.log( mojahid2);

// let variables  
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
// console.log( car1, '-', car2, '-', car3);
// This is my practise task
let mojahid3  = 'mojahid';
let mojahid4 = 'sadia';
let mojahid5 = 'salma';
// console.log('"""',  mojahid3, '"',  mojahid4, '"',  mojahid5, '"');


// array at  and sort used in this array
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let fruit = fruits.sort();
// fruits.sort();
// console.log( fruit);
const buses = ['Marsa', 'Hanif', 'Shadin', 'Salam', 'Igol', 'Airplane', 'Biman']
let bus = buses.sort();
// console.log( bus);
const garis = ['bis', 'saikel', 'motor', 'gorar', 'comolakko']
// console.log( garis)


//Get the third element of fruits using []:
const colors = ["Banana", "Orange", "Apple", "Mango", "Lemon"];
let color = colors[4];
// console.log( color);

// this is my practise task
let brand = ['apex', 'lotto', 'apox', 'panda'];
// console.log( brand[2]);

// array indexOf()
const friends = ["Apple", "Orange", "Apple", "Mango", 'komla'];
// console.log(friends.indexOf('Orange') + 45);

// this is my practise task
let mojahid = ['asad', 'sameli', 'sadia', 'tasmira', 'salma'];
const opso = mojahid.indexOf('sameli');
// console.log(opso);

// Sorting an array
const favourite = ["Banana", "Orange", "Apple", "Mango"];
favourite.sort();
// console.log( favourite);

// This is my practise turn
var mojahi = ['maa', 'baba', 'bon', 'dadi', 'caci'];
// let mojo = mojahi.indexOf('baba') + 150;
// console.log( mojahi.indexOf('caci') + 100);


// arrray iretation
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
// console.log( numbers);

// Elements can be re Reassigned
// --------------->>>>>>>>>>>>

// You can create a constant array:
const car = ["Saab", "Volvo", "BMW"];
// console.log( car[1]);

// You can change an element:
// car[3] = "Toyota";
// console.log( car3);

// You can add an element:
car.unshift('mojahid');
// console.log( car);


// This is my practise turn
const mama = ['Delower', 'Anwer', 'Manik'];
mama[3] = 'Saiful'; //it can change
mama.push('Showkot'); const lang =  // it can add
  mama.pop();  // it can delete
// console.log( mama); //



// ---------------------------------------
// This is class of object from Procoder BD
//  --------------------------------------
// -------> Arrays of JavaScript <---------
const lang1 = 'HTML';
const lang2 = 'CSS';
const lang3 = 'JavaScript';
const lang4 = 'React';
const lang5 = 'Node.Js';
const lang6 = 'Mongo DB';

 const language2 = new Array('html', 'css', 'javascript', true, 884913);
 const language = ['html', 'css', 'javascript', 'PHP', true, 884913];
// language[4] = 'Tailwind CSS';
// language[5] = 'Daisy Ui';
//  language[6] = 'jkdjlf'; 
// language.push('lsjdfk');
//  console.log( language.join(' = '));        

//  console.log( language);

//  concat
const x = [5, 4, 9, 4];
const y = [5, 4, 9, 4];
const p = [2, 4, 6, 8]
const z = x.concat(y, p);
// console.log(z);


const a = [ 
  [1,2,3], 
  [1,2,3], 
  [1,2,3], 
];
console.log( a);
console.log( a.flat());

