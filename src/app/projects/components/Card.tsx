'use client'
import React from 'react'
import '../projects.css'
import Image from 'next/image'
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

const info:string[][]=[
  ['title', 'text title here'],
  ['text','all text content here omfg.'],
  ['text','more text come on motherfucker.'],
  ['subtitle','title example'],
  ['image','url'],
  ['caption','this is caption']
]

export default function Card (props:propsType) {

  const {language} = useGlobalLanguage()

  const liveSiteButton : string = language==='EN' ?  'Live Site' : 'Ir a sitio'
  const moreButton : string = language==='EN' ?  'More...' : 'Más...'

  return (
    <div className='card'>

      <Image 
        alt='screenshot'
        src = {props.imageURL}
        style={{objectFit: "cover"}}
        fill={true}
      />

      <div className="inside-card">
        <span className='card-name'>{props.name}</span>
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
      </div>
    </div>
  )
}

