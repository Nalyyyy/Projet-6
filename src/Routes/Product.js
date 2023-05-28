import React from 'react'
import Slider from '../components/Slider'
import content from '../assets/content.json'
import '../styles/product.scss'
import InfoProduct from '../components/InfoProduct'
import Collapse from '../components/Collapse'

export default function product() {

  let contentEquipement ='';
  let num = '0'

  const setEquipement = (x)=> {
    contentEquipement =<ul className='ul_product'> {
        x.map((each, index) => <li key={`${each}-${index}`}>   {each}  </li>
      )}</ul>
  }

  setEquipement(content[num].equipments)

  return (
    <div className='product'>
      <Slider picture={content[num].pictures}/>
      <InfoProduct infos ={content[num]}/>
      <div className='collapses_product'>
        <Collapse title='Description' content={content[num].description}/>
        <Collapse title = 'Equipements' content={contentEquipement} />
      </div>
    </div>
  )
}
