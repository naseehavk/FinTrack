import React from 'react';

const ExpenseItem = ({ expense, deleteExpense , editExpense}) => {
  return (
    <>
    <div className='text-center'>
     
      <li className='p-3'>
        <span>{expense.description}</span>
        <span>{expense.amount}</span>
        <span>{expense.category}</span>
        <span>
        <button className='btn' onClick={editExpense} >
          <i className='fa-solid fa-edit'></i>
        </button>

        <button className='btn' onClick={deleteExpense}>
          <i className='fa-solid fa-trash' style={{ color: 'red' }}></i>
        </button>

        </span>
      </li>
    </div>
    </>
  );
};

export default ExpenseItem;