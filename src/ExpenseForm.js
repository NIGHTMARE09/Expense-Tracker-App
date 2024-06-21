import React, { useState } from 'react'

const ExpenseForm = ({addExpense}) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense({ id: Date.now(), title, amount });
        setTitle('');
        setAmount('');
      };
  
    return (
    <form onSubmit = {handleSubmit}>
    <input
        type = "text"
        value = {title}
        onChange ={(e) => setTitle(e.target.value)}
        placeholder = "Title"
    />
    <input
        type = "text"
        value = {amount}
        onChange ={(e) => setAmount(e.target.value)}
        placeholder = "Amount"
    />

    <button type = "submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
