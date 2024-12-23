// 
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function () {

  const income = parseFloat(document.getElementById('income').value);
  const software = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value);
  const internet = parseFloat(document.getElementById('internet').value);

  const totalExpenses = software + internet + courses;
  const balance = income - totalExpenses;

  const totalExpensesElement = document.getElementById('total-expenses');
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = balance.toFixed(2);

  const result = document.getElementById('results');
  result.classList.remove("hidden");

});

const calculateSavingButton = document.getElementById('calculate-savings');
calculateSavingButton.addEventListener('click', function () {

  const savingsPersentise = parseFloat(document.getElementById('savings').value);
  const income = parseFloat(document.getElementById('income').value);
  const software = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value);
  const internet = parseFloat(document.getElementById('internet').value);

  const totalExpenses = software + internet + courses;
  const balance = income - totalExpenses;

  const savingsAmount = (savingsPersentise * balance) / 100;
   
  const remainingsBalance = balance - savingsAmount;

  const savingsElement = document.getElementById('savings-amount');
  savingsElement.innerText = savingsAmount.toFixed(2);
  
  const remainingsElement = document.getElementById('remaining-balance');
  remainingsElement.innerText = remainingsBalance.toFixed(2);
  
});

// history tob functionality

const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function () {
  
    historyTab.classList.add(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500", 
      "to-purple-600"
    );
    historyTab.classList.remove('text-gray-600 ')

    assistantTab.classList.remove(
      "text-white",
      "bg-gradient-to-r",
      "from-blue-500", 
      "to-purple-600"
    );
    assistantTab.classList.add('text-gray-600');
          
})
