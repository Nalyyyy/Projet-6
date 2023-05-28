import React from 'react'
import { useState } from 'react'
import arrow_down from '../assets/arrow_down.svg'
import arrow_up from '../assets/arrow_up.svg'


export default function Collapse({title , content}) {

    const  [open, setOpen] = useState(1);

    const change = () => {
        if (open===0){
            setOpen(open+1)
        }else{
            setOpen(open-1);
        }
    }
    console.log(title);

  return (

        <div className='item' id={title}>
            <div className='title' id={`title_${title}`} onClick={change}> 
                <div className='h_collapse'> {title} </div> 
                <img src = {open === 0 ?  arrow_up  : arrow_down }  className='arrow_collapse' alt="flèches qui permettent d'ouvrir ou de fermer le contenu" />
            </div>
            <div className= {open === 0 ? 'content_on' : 'content_off' } id={`content_${title}`}>   
                <div className='p_collapse' id={`p_${title}`}> {content} </div>
            </div> 
        </div>

  )
}
