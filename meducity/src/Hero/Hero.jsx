import React from 'react'
import './hero.css'
import dark_arrow from '../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for better world</h1>
        <p>Our cutting-edgr curriculm is designed to empower students with rhe knowlwdge,skills, and experince needed to excel on the dynamic field of education</p>
        <button className='btn'>Explore Now <img src={dark_arrow}alt="" /></button>
      </div>
    </div>
  )
}

export default Hero