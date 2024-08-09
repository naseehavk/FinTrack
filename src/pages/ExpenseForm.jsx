import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addExpense } from '../redux/slices/expenseSlice'
import ExpenseList from './ExpenseList'
import { toast } from 'react-toastify'
import Header from '../Components/Header'

function ExpenseForm() {

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addExpense({
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      category
    }))
    toast.success("Expense Added Successfully!!")
 setDescription(''),
      setAmount(''),
      setCategory('')
  }

  const dispatch = useDispatch()

  return (
    <>
            <Header/>

      <div className='w-100  '  style={{backgroundColor:' linear-gradient(to right, #4facfe, #00f2fe'}} >
        <form onSubmit={handleSubmit} className='form-control d-flex flex-column align-items-center p-5 border border-3 ' 
         style={{backgroundColor:'linear-gradient(to right, #4facfe, #00f2fe)'}} >

          <input
            className='form-control w-25'
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            className='form-control w-25'
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <input
            className='form-control w-25'
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <button className='btn cta-button  mt-4' type="submit" style={{color:'white'}}>Add Expense</button>
          <ExpenseList />

        </form>

        <div className='w-100'>
        </div>

      </div>

    </>
  )
}

export default ExpenseForm
