import React from 'react'
import '../styles/home.css'
import Card from '../components/Card'
import content from '../assets/content.json'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
 
 export default function Home() {
    
  const scroll = () => {window.scrollTo({ top:0, left:0 } )};
  scroll();

   return (
     <div>
      <Navbar/>
          <div className='baneer'> 
            <p className='p_baneer'>Chez vous, partout et ailleurs</p>
          </div>
          <div className='gallery'>
            {content.map((each, index) => 
            <Link to={`/Product/${index}`}  num='3' className='card' key = {`${each}-${index}`} style={ {background : `linear-gradient(to top, black ,40%, transparent), url( ${each.cover})`, backgroundPosition: 'center' , backgroundSize: 'cover'}}>
              <Card x={each.title}/>
            </Link>
            
            )}
          </div>
     </div>
   )
 }
 