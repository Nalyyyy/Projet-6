import React from 'react'
import starGrey from '../assets/star_grey.svg'
import starPink from '../assets/star_pink.svg'


export default function Stars({rate}) {

    let stars = [];


    const tryy = ()=>{ 
        for(let x = 0; x<5 ; x++){
           if(x<rate){
            stars.push(<img className='star' src={starPink} key={x} alt='etoiles rose '/>)
           }  
           else{
            stars.push(<img className='star' src={starGrey} key={x} alt='etoiles grisée '/> )
           }
        }
    }

    tryy();

    


  return (

    <div className='stars'>{stars}</div>
  )
  }
