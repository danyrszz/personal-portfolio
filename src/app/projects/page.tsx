'use client'
import { useState } from 'react'
import { useGlobalLanguage } from '../context/LanguageContext'
import Card from './components/Card'
import MoreInfo from './components/MoreInfo'
import Footer from '../components/Footer'
import 'material-icons/iconfont/filled.css';
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
          key = {element.id}
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
      <div className='common-title title-white title-decorated title-centered bg-deep-blue'> {language === 'EN' ? titleEn : titleEs} </div>
      <section className="projects-container">
        {language==='EN' ? getCards(projectsEN) : getCards(projectsES)}
      </section>
      <MoreInfo 
        visible = {showMore}
        close = {close}
        info = {modalInfo}
      />

      <div className={`floating-button button-up ${showMore? 'button-up-disabled':''}`} onClick={()=>document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
        <span className='material-icons'>keyboard_double_arrow_up</span>
      </div>
      <Footer />
    </>
  )
}

const titleEs : string = 'Mis Proyectos.'
const titleEn : string = 'My Projects.'