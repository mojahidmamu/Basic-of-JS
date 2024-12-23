function add(price1,price2){
  const total = price1 + price2;
  return total;

}
const bill =add(5,80);

function add2(price1,price2){
  return price1 + price2;
}

const bill2 = add(5,80);
console.log(bill, bill2);
function doMath(num1,num2){
  const sum = num1 + num2;
  const dif = num1 - num2;
  const multiply = num1 * dif;
  const result = multiply / 2;
  return result;
}

const result = doMath(100,50);
console.log(result);