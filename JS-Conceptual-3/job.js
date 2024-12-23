// 
const person1 = {
   name: 'mojahid',
   hsc: 30,
   honors: 40,
   isFFfamily: true
}
const person2 = {
   name: 'asad',
   hsc: 305,
   honors: 43,
   isFFfamily: false
}
function jobinterning(info){ 
  if(typeof info !== 'object'){
    return 'invalid'
  }
  const total = info.honors + info.hsc;
  return total;
}
// console.log( person);

// This is my problem 1
function jataodfee(lookjon){
  noha = 15;
  tomtom = 8;
  cngCost = 30;
  remaingnoha = lookjon % noha;
  remaingtomtom = remaingnoha % tomtom;
  return remaingtomtom *  cngCost;
}
 
console.log( jataodfee(25));