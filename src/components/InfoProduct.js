import React from 'react'

export default function InfoProduct({infos}) {

console.log(infos);


  return (

    <div className='infos'>
        <div className='right_side'>
            <h1 className='title_product'>{infos.title}</h1>
            <h2 className='place'>{infos.location}</h2>
            <div className='tags'> {infos.tags} </div>
        </div>
        <div className='left_side'>
            <div className='proprio'>
                <p>{infos.host.name}</p>
                <img src={infos.host.picture}/>
            </div>
            <div className='stars'>{infos.rating}</div>
        </div>
    </div>
  )
}
