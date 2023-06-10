import React from 'react'
import '../styles/error.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

export default function Error () {

  const scroll = () => {window.scrollTo({ top:0, left:0 } )};
  scroll();

  return (
    <div className='errordiv'>
      <Navbar/>
        <h1 className='error'>404</h1>
        <h2 className='oups non_mobile'>Oups! La page que vous demandez n'existe pas.</h2>
        <h2 className='oups mobile'>Oups! La page que <br/> vous demandez n'existe pas.</h2>
        <p className='retour'>
            <Link to='/' >Retourner sur la page d’accueil</Link>
        </p>
    </div>
  )
}
