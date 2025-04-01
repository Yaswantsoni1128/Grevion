import React from 'react'
import Review from '../../components/LandingPage/Review'
import AboutUsSection from '../../components/LandingPage/About'
import GrevionEnergyTrade from '../../components/LandingPage/GrevionEnergyTrade'
import LandingImage from '../../components/LandingPage/LandingImage'
import WhoWeAreComp from '../../components/LandingPage/WhoWeAreComp'

const LandingPage = () => {
  return (
    <div>
      <GrevionEnergyTrade/>
      <LandingImage/>
     
      <AboutUsSection />
      <WhoWeAreComp/>
      {/* <Review/> */}
    </div>
  )
}

export default LandingPage