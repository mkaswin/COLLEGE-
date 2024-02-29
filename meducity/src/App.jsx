import React, { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import Hero from './Hero/Hero'
import Program from './program/Program'
import Title from './tiltle/Title'
import About from './about/About'
import Campus from './campus/Campus'
import Testimonial from './testimonials/Testimonial'
import Contact from './contact/Contact'
import Footer from './foooter/Footer'
import Videoplayer from './videoplayer/Videoplayer'

const App = () => {
  const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='what We offer'/>
      <Program/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='GALLERY' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='what student says'/>
      <Testimonial/>
      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      <Videoplayer playState={playState}  setPlayState={setPlayState}/>
    </div>
  )
}

export default App