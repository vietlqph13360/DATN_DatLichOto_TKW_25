import './App.css'
import React  from "react"
import RegisterPage from './Page/RegisterPage'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './Page/AdminPage'
import LoginPage from './Page/LoginPage'
import PageNotFound from './Page/PageNotFound'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AdminPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/404' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
