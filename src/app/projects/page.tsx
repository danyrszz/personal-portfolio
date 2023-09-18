'use client'
import { useState } from 'react'
import { useGlobalLanguage } from '../context/LanguageContext'
import Card from './components/Card'
import MoreInfo from './components/MoreInfo'
//type
import { Projects } from './projects'
import { projectsEN, projectsES } from './projects'
import './projects.css'

export default function Projects() {

  const {language} = useGlobalLanguage()
  const [showMore, setShowMore] = useState<boolean> (false)
  const [modalInfo, setModalInfo] = useState<string[][]> ([['text','select something']])

  const close = () : void =>  { setShowMore(false) }

  //fill the modal with the info got from card component, and show it.
  function showModal (modalContent : string[][]) : void{
    setModalInfo(modalContent)
    setShowMore(true)
  }

  function getCards (data : Projects[]) : React.ReactNode{
    return data.map((element)=>{
      const imageUrl : string = `/screenshots/${element.id}.png`
      return(
        <Card 
          name={element.name}
          tags={element.tags}
          imageURL={imageUrl}
          description={element.shortDescription}
          siteURL={element.siteURL}
          githubURL={element.githubURL}
          showModal = {showModal}
          more = {element.more}
        />
      )
    })
  }

  return (
    <>
      <div className='projects-title title-white title-decorated title-centered bg-deep-blue'> {language === 'EN' ? titleEn : titleEs} </div>
      <section className="projects-container">
      {language==='EN' ? getCards(projectsEN) : getCards(projectsES)}
      </section>
      <MoreInfo 
        visible = {showMore}
        close = {close}
        info = {modalInfo}
      />
    </>
  )
}

const titleEs : string = 'Mis Proyectos.'
const titleEn : string = 'My Projects.'