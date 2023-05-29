import React from 'react'
import Slider from '../components/Slider'
import content from '../assets/content.json'
import '../styles/product.scss'
import InfoProduct from '../components/InfoProduct'
import Collapse from '../components/Collapse'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

export default function Product() {

  const scroll = () => {window.scrollTo({ top:0, left:0 } )};
  scroll();

  
  let id = useParams();
  let num = `${id.id}`;


  let contentEquipement ='';

  const setEquipement = (x)=> {
    contentEquipement =<ul className='ul_product'> {
        x.map((each, index) => <li key={`${each}-${index}`}>   {each}  </li>
      )}</ul>
  }

  setEquipement(content[num].equipments)

  

  return (
    <div className='product'>
      <Navbar/>
      <Slider picture={content[num].pictures}/>
      <InfoProduct infos ={content[num]}/>
      <div className='collapses_product'>
        <Collapse title='Description' content={content[num].description}/>
        <Collapse title = 'Equipements' content={contentEquipement} />
      </div>
    </div>
  )
}
