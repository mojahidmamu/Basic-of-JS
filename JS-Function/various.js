/* * 
 * for a given string tell me whether it has even number of characters or not
 *
*/

function evensizedstring(str){
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0){
    console.log('even size');
    return true;
  }
  else{
    console.log('odd size');
    return false;
  }
}

// evensizedstring('dhaka');
// evensizedstring('mojahid');

function triple(number, mojahid){
  if(mojahid === true){
    const result = number *2;
    return result;
  }
  else{
    const result = number * 3;
    return result;
  }
}

// console.log(triple(50,true));
console.log(triple(50,false));

