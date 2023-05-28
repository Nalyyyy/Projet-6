import React from 'react'
import '../styles/home.scss'
import Card from '../components/Card'
import content from '../assets/content.json'
import { Link } from 'react-router-dom'
 
 export default function Home() {
    
  let yo 
  let test = () => yo = document.querySelector('.about')
  

   return (
     <div>
          <div className='baneer'> 
            <p className='p_baneer'>Chez vous, partout et ailleurs</p>
          </div>
          <div className='gallery'>
            {content.map((each, index) => 
            <Link to='/Product'  num='3' className='card' key = {`${each}-${index}`} >
              <Card x={each.title}/>
            </Link>
            )}
          </div>
     </div>
   )
 }
 