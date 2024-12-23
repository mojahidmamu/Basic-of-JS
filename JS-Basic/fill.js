// fill of Javascript
array.fill(value)

var fruits = ['banana', 'apple', 'orange', 'mango'];
fruits.fill("Kiwi");
// 
// fill()  fill a portion of an array 

array.fill(value, start, end);
var fruits = ['banana', 'apple', 'orange', 'mango'];
fruits.fill("Kiwi", 2, 4);
// 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.fill("Kiwi");