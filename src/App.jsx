import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ExpenseForm from './pages/ExpenseForm'
import ExpenseList from './pages/ExpenseList'
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<ExpenseList />}/>
        <Route path='/form' element={<ExpenseForm />} />
      </Routes>
<ToastContainer/>
    </>
  )
}

export default App
