// console.log( 'This is my first form');

document.getElementById('btn-add-money').addEventListener('click', function(event){
   event.preventDefault();

   const addMoney = document.getElementById('input-a dd-money').value;
   
   const pinNumber = document.getElementById('input-pin-number').value;
     console.log( pinNumber, addMoney);

    //  wrong way to verify pin
    if(pinNumber === '1234'){
       const balance = document.getElementById('account-balance').innerText;
       console.log( balance);

      //  change string to number,This is very important...so be careful...
      const balanceNumber = parseFloat(balance);
      const addMoneyNumber = parseFloat(addMoney);

      // Total of balanceNumber & addMoneyNumber
      const newBalance = balanceNumber + addMoneyNumber;
      document.getElementById('account-balance').innerText = newBalance;
      

    }
    else{
      alert('Failed to add money')
    }
  })