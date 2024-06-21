import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addExpense, deleteExpense } from './features/expenses/expenseSlice';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {

  const expenses = useSelector((state)  => state.expenses);
  const dispatch = useDispatch();

  const handleAddExpense = (expense)=>{
    dispatch(addExpense(expense));
  }
  const handleDeleteExpense = (id) =>{
    dispatch(deleteExpense(id));
  }
  return (
    <div>
      <ExpenseForm addExpense = {handleAddExpense} />
      <ExpenseList expenses = {expenses} deleteExpense = {handleDeleteExpense} />
    </div>
  );
}

export default App;
