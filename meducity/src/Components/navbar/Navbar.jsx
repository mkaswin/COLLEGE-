import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  
  const [stickey, setstickey] = useState(false);
 useEffect(() => {
   window.addEventListener('scroll',()=>{
    window.scrollY > 50 ?setstickey(true) :setstickey(false)
   })
 }, [])
 const [mobilemenu, setMobileMenu] = useState(false)
 const toggleMenu =()=>{
  mobilemenu?setMobileMenu(false):setMobileMenu(true);
 }
 
  return (
    <nav className={`container ${stickey ? 'dark-nav':''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobilemenu? '':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='prgrm' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='camp' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='test' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
        <li><Link to='cntct' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar