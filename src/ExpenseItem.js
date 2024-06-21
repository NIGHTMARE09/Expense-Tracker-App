import React from 'react'

const ExpenseItem = ({expense, deleteExpense}) => {
  return (
    <li>
        {expense} - ${expense.amount}
        <button
            onClick = {() => deleteExpense(expense.id)}> Delete
        </button>
    </li>
  );
};

export default ExpenseItem;
