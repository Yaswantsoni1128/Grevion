import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import Login from './pages/Login/Login.jsx'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup/Signup.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Spoc_dashboard from './pages/Spoc_dashboard.jsx'
import PowerplantDashboard from './pages/PowerplantDashboard.jsx'
import { LoginContextProvider } from './context'

const App = () => {
  
  return (
    <LoginContextProvider value={{}}>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/landingPage' element={<LandingPage/>} />
        <Route path='/spoc-dashboard' element={<Spoc_dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/powerplant-dashboard" element={<PowerplantDashboard />} />
      </Routes>
      <Footer/>
    </LoginContextProvider>
  )
}

export default App