import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.scss'
import Logo from '../assets/LOGO.svg'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={Logo} alt='Logo de Kasa' className='logo_kasa'/>
        <nav>
            <Link to="/" className='item_nav'>Accueil</Link>
            <Link to="/about" className='item_nav'>A propos</Link>
        </nav>
    </div>
  )
}
