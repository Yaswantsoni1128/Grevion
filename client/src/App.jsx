import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import { LoginContextProvider } from './context';

import LandingPage from './pages/LandingPage/LandingPage.jsx';
import Sustainability from './pages/LandingPage/Sustainability.jsx';
import WhatWeDo from './pages/LandingPage/WhatWeDo.jsx';
import WhoWeAre from './pages/LandingPage/WhoWeAre.jsx';

import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';

import Dashboard from './pages/Dashboard.jsx';

import Spoc_dashboard from './pages/spoc/Spoc_dashboard.jsx';
import AddFarmer from './pages/spoc/AddFarmerPage.jsx';
import FarmerListing from './pages/spoc/FarmerListingPage.jsx';
import ParalisRequest from './pages/spoc/ParalisRequestsPage.jsx';
import SpocProfile from './pages/spoc/SpocProfilePage.jsx';

import PowerplantDashboard from './pages/powerplant/PowerplantDashboard.jsx';
import MakePayment from './pages/powerplant/MakePaymentPage.jsx';
import MyOrdersPage from './pages/powerplant/MyOrdersPage.jsx';
import SpocsListing from './pages/powerplant/SpocsListingPage.jsx';

const App = () => {
  return (
    <LoginContextProvider value={{}}>
      <Navbar />
      <Routes>
        
          <Route path='/' element={<LandingPage />} />
          <Route path='/landingPage' element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Landing Page Routes */}
          <Route path="/landingPage/sustainability" element={<Sustainability />} />
          <Route path="/landingPage/whatwedo" element={<WhatWeDo />} />
          <Route path="/landingPage/whoweare" element={<WhoWeAre />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* SPOC Routes */}
          <Route path="/spoc/dashboard" element={<Spoc_dashboard />} />
          <Route path="/spoc/add-farmer" element={<AddFarmer />} />
          <Route path="/spoc/farmer-listing" element={<FarmerListing />} />
          <Route path="/spoc/paralis-request" element={<ParalisRequest />} />
          <Route path="/spoc/profile" element={<SpocProfile />} />

          {/* Powerplant Routes */}
          <Route path="/power_plant/dashboard" element={<PowerplantDashboard />} />
          <Route path="/power_plant/make-payment" element={<MakePayment />} />
          <Route path="/power_plant/my-orders" element={<MyOrdersPage />} />
          <Route path="/power_plant/spocs-listing" element={<SpocsListing />} />
        
      </Routes>
      <Footer />
    </LoginContextProvider>
  );
};

export default App;
