const products = [
  { name: 'shirt', price: 500, quantity: 5 },
  { name: 'bag', price: 1000, quantity: 2 },
  { name: 'jing', price: 700, quantity: 4 },
  { name: 'belt', price: 200, quantity: 1 },
  // { name: 'tissue', price: 50, quantity: 4 },
  // { name: 'bonus', price: 100, quantity: 4 },
]

function cartTotal (products){
  let total = 0;
  for(const product of products){
    const motkoroc = product.price * product.quantity;
      // the next line is very important,,so be careful----------------------
      total = total + motkoroc;
  }
  return total;
}
const TotalCost = cartTotal(products);
console.log('ami pokir hoye geci:', TotalCost);