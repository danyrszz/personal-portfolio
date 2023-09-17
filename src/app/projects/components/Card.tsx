'use client'
import React from 'react'
import { useState } from 'react';
import '../projects.css'
import 'material-icons/iconfont/filled.css';
import Tag from './Tag'
import Button from './Button'
import { useGlobalLanguage } from '@/app/context/LanguageContext'

interface propsType {
  name : string,
  description : string,
  imageURL : string,
  tags : string[],
  siteURL : string | null,
  githubURL : string | null,
  more? :  string[][],
  showModal( modalInfo : string[][]) : void
}

export default function Card (props:propsType) {

  const {language} = useGlobalLanguage()
  const [insideCard, setInsideCard] = useState<boolean>(false)

  const liveSiteButton : string = language==='EN' ?  'Live Site' : 'Ir a sitio'
  const moreButton : string = language==='EN' ?  'More...' : 'Más...'

  return (
    <div className='card' style={{backgroundImage:`url(${props.imageURL})`, backgroundSize:'cover'}}>

      <div className={`inside-card inside-card-${ insideCard ? 'enabled' : 'disabled' }`} >

        <span className='card-name' onClick={()=>setInsideCard(!insideCard)} > {props.name} </span>
        <div className="card-element-container">
          {props.tags.map(element => <Tag name={element}/>)}
        </div>
        <p className='card-description'>{props.description}</p>
        <div className="card-element-container">
          <Button
            title='Github'
            URL= {props.githubURL}
          />
          <Button
            title={liveSiteButton}
            URL={props.siteURL}
          />
          {props.more && <button className='button' onClick={()=>props.showModal(props.more!)}>{moreButton}</button> }   
        </div>
        <span className="material-icons close-arrow" onClick={()=>setInsideCard(!insideCard)} >arrow_drop_down</span>
      </div>
    </div>
  )
}