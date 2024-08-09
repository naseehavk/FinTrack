import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import { deleteExpense, editExpense } from '../redux/slices/expenseSlice';
import Header from '../Components/Header';

const ExpenseList = () => {
  const expenses = useSelector(state => state.expenses.items);
  const dispatch = useDispatch();


  return (
    <>
    <ul className='w-100 mt-4'>
       <li className='p-3 text-center'>
        <span>Description</span>
        <span>Amount</span>
        <span>Category</span>
        <span>Action</span>
      </li>
      {expenses.map(expense => (
<ExpenseItem
          key={expense.id}
          expense={expense}
          editExpense={()=> dispatch(editExpense(expense.id))}
          deleteExpense={() => dispatch(deleteExpense(expense.id))}
        />
      ))}
    </ul>
    </>
  );
};

export default ExpenseList;