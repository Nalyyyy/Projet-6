import React from 'react'
import Image from '../assets/about_baneer.svg'
import '../styles/about.css'
import Collapse from '../components/Collapse'
import collapse_content from '../assets/collapse_content.json'
import Navbar from './Navbar'

export default function About() {

  const scroll = () => {window.scrollTo({ top:0, left:0 } )};
  scroll();

  return (
    <div>
      <Navbar/>
      <img src={Image} className='about_baneer' alt="Photo d'une chaine de montagne avec une forêt au premier plan et une rivière qui traverse les montagnes"/>
      <div className='collapses'>
            {collapse_content.map((each, index) => 
                <Collapse content={each.content} title={each.title} key = {`${each}-${index}`} /> 
            )}   
      </div>
    </div>
  )
}
  