import React from 'react'

export default function InfoProduct({infos}) {

const tags = infos.tags
console.log(tags);


  return (

    <div className='infos'>
        <div className='right_side'>
            <h1 className='title_product'>{infos.title}</h1>
            <h2 className='place'>{infos.location}</h2>
            <div className='tags'> {tags.map((each, index) => 
                <div className='tag' key = {`${each}-${index}`} >  {each}  </div> )}
            </div> 
          </div>
        <div className='left_side'>
            <div className='proprio'>
                <p className='proprio_name'>{infos.host.name}</p>
                <img className='proprio_img' src={infos.host.picture}/>
            </div>
            <div className='stars'>{infos.rating}</div>
        </div>
        </div>
  )
}
