import React from 'react'
import { useState } from 'react'
import arrow_down from '../assets/arrow_down.svg'
import arrow_up from '../assets/arrow_up.svg'


export default function Collapse({title , content}) {

    const  [open, setOpen] = useState(1);

    const change = () => {
        if (open===0){
            setOpen(open+1)
            console.log(open);
        }else{
            setOpen(open-1);
            console.log(open);
        }
        console.log(open);
    }

  return (

        <div className='item'>
            <div className='title' onClick={change}> 
                <h1 className='h_collapse'> {title} </h1> 
                <img src = {open === 0 ?  arrow_down  : arrow_up } className='arrow_collapse'/>
            </div>
            <div className= {open === 0 ? 'content_on' : 'content_off' }>   
                <p className='p_collapse'> {content} </p>
            </div> 
        </div>

  )
}
