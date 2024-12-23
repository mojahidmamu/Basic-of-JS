/**
 * chair---> 3 cft
 * table---> 10 cft
 * bed---> 50 cft
 */
function woodquantity(chairquantity, tablequantity, bedquantity) {
  const perchairwood = 3;
  const pertablewood = 10;
  const perbedwood = 50;

  const totalchairwood = chairquantity * perchairwood;
  const totaltablewood = tablequantity * pertablewood;
  const totalbedwood = bedquantity * perbedwood;
 
  const totalwood  = totalbedwood + totalchairwood + totaltablewood;
  
  return totalwood;

}

const wood =woodquantity(5, 2, 1);
console.log('wood neded', wood);