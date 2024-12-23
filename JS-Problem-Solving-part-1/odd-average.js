/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 * 
 */

/** 
 * 1. put odd numbers in an array
 */

function mojahid(numbers){
  const odd = [];
   for(const number of numbers) {
     if(number % 2 === 1){
        // console.log(number);
        odd.push(number);
     }
   }
  //  console.log(odd);
  let sum = 0;
  for (const number of odd ){
      sum = sum + number;
  } 
  const total = odd.length;
  console.log(sum, total);
  const avg = sum / total;
  return avg;
}

const numbers = [45,62,12,89,76,10,45,30,55,54];
const avg = mojahid(numbers);
console.log('average of the odd numbers:', avg);

// 
