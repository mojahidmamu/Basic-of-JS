/**
 * array has some duplicate elements
 * 
 */
const pitakhor = ['mojahid', 'asad', 'asraf', 'asad', 'mojahid', 'asad', 'galib', 'sonamoni'];
const number = [5, 10, 40, 10, 50, 40, 10];

function nodouble(array){
  const unique = [];
   for(const item of array){
      if(unique.includes(item) === false){
         unique.push(item);
      }
   }
   return unique;
}
const onlyone = nodouble(pitakhor);
console.log(onlyone);
