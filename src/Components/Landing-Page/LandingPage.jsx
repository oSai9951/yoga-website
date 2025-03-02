import React from 'react'
import landingStyle from "./LandingPage.module.css"
import Hero from './Hero/Hero'
import HeroCommunity from './HeroCommunity/HeroCommunity'
const LandingPage = ({auth}) => {
  return (
    <main className={landingStyle.mainDiv}>
    <Hero/>
    <HeroCommunity auth={auth}/>
    </main>
  )
}

export default LandingPage