import React, { useState } from 'react'
import arrowLeft from '../assets/arrow_left.svg'
import arrowRight from '../assets/arrow_right.svg'


const Slider = ({picture}) => { 

    const [index, setIndex] =useState(0) ;

   console.log(index);
   console.log(picture.length);

    const previous = () =>{
        const isFirst = index === 0;
        console.log(isFirst);
        const newIndex = isFirst ? picture.length -1 : index -1 ;
        setIndex (newIndex)
    };

    const next = () =>{
        const isLast = index === picture.length -1 ;
        console.log(isLast);
        const newIndex = isLast ? 0 : index +1 ;
        setIndex (newIndex)
    };

    const backImage =  {
        backgroundImage : `url( ${picture[index]})`
    };

   

  return (
    <div className='slider'>
        <img className='arrow_left arrow' src={arrowLeft} onClick={previous}/>
        <img className='arrow_right arrow' src={arrowRight} onClick={next}/>
        <div className='img' style={backImage} > 

        </div>
     </div>

  )
  }

  export default  Slider;