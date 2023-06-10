import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import Logo from '../assets/LOGO.svg'

export default function Navbar() {
  
  let url = window.location.pathname;
  console.log(url);

  return (
    <div className='navbar'>
        <Link to="/" className='logo_kasa'>
            <img src={Logo} alt='Logo de Kasa' className='logo_kasa'/>
        </Link>
        <nav>
            <Link to="/" className='item_nav '  id={url === '/' ?  'underline' : ''} >Accueil</Link>
            <Link to="/about" className='item_nav '  id={url === '/about' ?  'underline' : ''} >A propos</Link>
        </nav>
    </div>
  )
}
