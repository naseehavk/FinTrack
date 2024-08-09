import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
   items: [],
   filter: ''
}

const expenseSlice = createSlice({
   name: 'expenses',
   initialState,
   reducers: {
      addExpense: (state, action) => {
         state.items.push(action.payload)
         // console.log(items);
         console.log(state.items);
          },
      deleteExpense: (state, action) => {
         state.items = state.items.filter(item => item.id !== action.payload)
         toast.error('Expense deleted succesfully!!')
      },
      editExpense: (state, action) => {
         const { id, updatedExpense } = action.payload;
         const index = state.expenses.findIndex(exp => exp.id === id);
         if (index !== -1) {
           state.expenses[index] = { ...state.expenses[index], ...updatedExpense };
         }
         toast.info('Expense Updated succesfully!!')
       }

   }

})

export const { addExpense, deleteExpense, setFilter,editExpense } = expenseSlice.actions
export default expenseSlice.reducer