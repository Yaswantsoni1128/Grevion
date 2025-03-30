import React from 'react'
import Login from './pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import LandingPage from './pages/LandingPage/LandingPage'

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App