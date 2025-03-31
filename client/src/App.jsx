import React from 'react'
import Login from './pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import LandingPage from './pages/LandingPage/LandingPage'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App