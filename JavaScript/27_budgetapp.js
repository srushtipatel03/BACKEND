// JavaScript code for the budget app
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const addBtn = document.getElementById('add-btn');
const expenseList = document.getElementById('expense-list');
const totalExpenses = document.getElementById('total-expenses');

let expenses = [];

addBtn.addEventListener('click', () => {
  const expense = expenseInput.value;
  const amount = parseFloat(amountInput.value);

  if (expense && amount) {
    expenses.push({ expense, amount });
    updateExpenseList();
    updateTotalExpenses();
    expenseInput.value = '';
    amountInput.value = '';
  }
});

function updateExpenseList() {
  expenseList.innerHTML = '';
  expenses.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.expense}: $${item.amount}`;
    expenseList.appendChild(li);
  });
}

function updateTotalExpenses() {
  const total = expenses.reduce((acc, item) => acc + item.amount, 0);
  totalExpenses.textContent = `$${total}`;
}
