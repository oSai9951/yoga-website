import React from 'react'
import Herostyle from "./Hero.module.css"
import {Link} from "react-router"
const Hero = () => {
  return (
    <main className={Herostyle.main}>
      <h1>Why Yoga?</h1>
      <p className={Herostyle.firstpara}>Yoga is a transformative journey that awakens your inner strength and nurtures your body, mind, and spirit. Through mindful movement and deep breathing, it turns everyday challenges into moments of growth and clarity. Embrace yoga to find balance, unlock self-discovery, and experience a profound sense of peace in every breath.</p>
    <p className={Herostyle.secondpara}>To know more about yoga poses, Click on button below...</p>
    <Link className={Herostyle.button} to="/yog-page">Yoga Poses</Link>
    </main>
  )
}

export default Hero