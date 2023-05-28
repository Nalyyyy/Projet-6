import React from 'react'
import '../styles/error.scss'
import { Link } from 'react-router-dom'

export default function Error () {
  return (
    <div className='errordiv'>
        <h1 className='error'>404</h1>
        <h2 className='oups non_mobile'>Oups! La page que vous demandez n'existe pas.</h2>
        <h2 className='oups mobile'>Oups! La page que <br/> vous demandez n'existe pas.</h2>
        <p className='retour'>
            <Link to='/' >Retourner sur la page d’accueil</Link>
        </p>
    </div>
  )
}
