import React from 'react'
import Image from '../assets/about_baneer.svg'
import '../styles/about.scss'
import Collapse from '../components/Collapse'
import collapse_content from '../assets/collapse_content.json'

export default function About() {
  return (
    <div>
      <img src={Image} className='about_baneer' alt="Photo d'une chaine de montagne avec une forêt au premier plan et une rivière qui traverse les montagnes"/>
      <div className='collapses'>
            {collapse_content.map((each, index) => 
                <Collapse content={each.content} title={each.title} key = {`${each}-${index}`} /> 
            )}   
      </div>
    </div>
  )
}
  