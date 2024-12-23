function getInputFieldValueById(id){
     const inputtaka = document.getElementById(id).value;
     const inputNumber = parseFloat(inputtaka);

     console.log( id, inputtaka, inputNumber);
     return inputNumber;
 }

 function getTextFieldValueById(id){
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
  
 }


