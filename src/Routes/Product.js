import React from 'react'
import Slider from '../components/Slider'
import content from '../assets/content.json'
import '../styles/product.scss'
import InfoProduct from '../components/InfoProduct'
import Collapse from '../components/Collapse'

export default function product() {

  let contentEquipement ='';

  const setEquipement = (x)=> {
    contentEquipement =<ul className='ul_product'> {
        x.map((each) => <li>   {each}  </li>
      )}</ul>
  }

  setEquipement(content[1].equipments)

  return (
    <div className='product'>
      <Slider picture={content[1].pictures}/>
      <InfoProduct infos ={content[1]}/>
      <div className='collapses_product'>
        <Collapse title='Description' content={content[1].description}/>
        <Collapse title = 'Equipements' content={contentEquipement} />
      </div>
    </div>
  )
}
