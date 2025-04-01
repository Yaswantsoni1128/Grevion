import React from 'react'
import Login from './pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import LandingPage from './pages/LandingPage/LandingPage'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SpocDashBoard from './pages/SpocDashBoard/SpocDashBoard'
import PowerPlantDashboard from './pages/PowerPlantDashboard/PowerPlantDashboard'
import { LoginContextProvider } from './context'

const App = () => {
  
  return (
    <LoginContextProvider value={{}}>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/spoc-dashboard" element={<SpocDashBoard />} />
        <Route path="/powerplant-dashboard" element={<PowerPlantDashboard />} />
        
      </Routes>
      <Footer/>
    </LoginContextProvider>
  )
}

export default App