import React from 'react'
import Logo from '../assets/LOGO_footer.svg'
import '../styles/footer.scss'


export default function Footer() {
  return (
    <div className='footer'>
        <img src={Logo} alt='Logo de Kasa' className='logo_kasa_footer'/>
        <p className='p_footer'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
