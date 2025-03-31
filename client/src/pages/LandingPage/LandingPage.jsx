import React from 'react'
import Review from '../../components/LandingPage/Review'
import AboutUsSection from '../../components/LandingPage/About'
import GrevionEnergyTrade from '../../components/LandingPage/GrevionEnergyTrade'
import LandingImage from '../../components/LandingPage/LandingImage'

const LandingPage = () => {
  return (
    <div>
      <GrevionEnergyTrade/>
      <LandingImage/>
     
      <AboutUsSection />
      {/* <Review/> */}
    </div>
  )
}

export default LandingPage