const phones = [
  { name: 'walton', price: 10000,  camere: '10mp', color: 'red'},
  { name: 'iphone', price: 100000, camere: '10mp', color: 'red'},
  { name: 'oppo',   price: 15000,  camere: '10mp', color: 'red'},
  { name: 'vivo',   price: 20000,  camere: '10mp', color: 'red'},
  { name: 'itel',   price: 5000,   camere: '10mp', color: 'red'},
]

function getbestphone(phones){
   const min = phones[0];
   for(const phone of phones){
       if(phone < min){
        min = phone
       }
   }
}
const mobileiva = getbestphone(phones);
console.log('this is the best phone of the market', mobileiva);