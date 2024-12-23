const products = [
  { name: 'shirt', price: 500 },
  { name: 'bag', price: 1000 },
  { name: 'jing', price: 700 },
  { name: 'belt', price: 200 },
  { name: 'tissue', price: 50 },
  { name: 'bonus', price: 100 },
]

function gettotalshoping (products){
  let total = 0;
     for(const product of products){
      // the next line is very important,,so be careful----------------------
       total = total + product.price;
     }
     return total;
}
const total = gettotalshoping(products);
console.log('This is my total cost:', total);