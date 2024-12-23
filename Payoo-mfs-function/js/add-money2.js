document.getElementById('btn-add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();
     

    const addMoney = getInputFieldValueById('inpu-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    // console.log('add money inside', addMoney, pinNumber);

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        // console.log( balance, addMoney);
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
        
    }
    else{
      alert('Failed to add mony')
    }
    
  })