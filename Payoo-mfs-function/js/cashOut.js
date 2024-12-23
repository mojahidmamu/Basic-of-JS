// console.log( 'cash out file');

document.getElementById('btn-cash-out').addEventListener('click', function(event){
   event.preventDefault();

   const cashOut = getInputFieldValueById('btn-cash-out');
   const pinNumber = getInputFieldValueById('input-cash-out-pin');
  //  console.log( 'inside the handler', cashOut, pinNumber);
  if(pinNumber === 1234){
    const balance = getTextFieldValueById('account-balance');
    // console.log('balance here' balance);
    const newBalance = balance - cashOut;
    document.getElementById('account-balance').innerText = newBalance;

  }
  else{
    alert('Dore gia mor')
  }
})