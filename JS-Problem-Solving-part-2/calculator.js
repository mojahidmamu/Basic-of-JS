function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiple(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(a, b, operation) {
  if (operation === 'add') {
    const result = add(a, b);
  }
  else if (operation === 'subtract') {
    const result = subtract(a, b);
  }
  else if (operation === 'multiple') {
    const result = multiple(a, b);
    return result;
  }
  else if (operation === 'divide') {
    return divide(a, b);
  }
  else {
    return "Only 'add', 'subtract', 'multiple', 'divide' operation is allowed."
  }
}

const result = calculator(10, 5, 'add');
console.log('This is my result:', result); 

  