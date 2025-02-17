import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from './slices/expenseSlice'

const store = configureStore({
    reducer:{
expenses:expensesReducer
    }
})

export default store