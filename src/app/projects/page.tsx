'use client'
import { useGlobalLanguage } from '../context/LanguageContext'

import './projects.css'

export default function Projects() {

  const {language} = useGlobalLanguage()
  return (
    <>
    <div className='title-big title-white title-decorated title-centered bg-deep-blue'>
      {language === 'EN' ? titleEn : titleEs}
    </div>
    <section className="projects-container">
      <div className='card'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam sequi nisi officia animi dolor optio perspiciatis similique ad quia inventore ea, vitae odio nostrum libero tempora voluptatum dolorem id!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, incidunt laborum! Atque iure minus doloremque veritatis odit tempora eos! Voluptas sequi assumenda maxime eaque possimus dolore qui saepe architecto repellat!
      </div>
      <div className='card'>2</div>
      <div className='card'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam sequi nisi officia animi dolor optio perspiciatis similique ad quia inventore ea, vitae odio nostrum libero tempora voluptatum dolorem id!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, incidunt laborum! Atque iure minus doloremque veritatis odit tempora eos! Voluptas sequi assumenda maxime eaque possimus dolore qui saepe architecto repellat!

      </div>
      <div className='card'>4</div>
      <div className='card'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veniam sequi nisi officia animi dolor optio perspiciatis similique ad quia inventore ea, vitae odio nostrum libero tempora voluptatum dolorem id!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, incidunt laborum! Atque iure minus doloremque veritatis odit tempora eos! Voluptas sequi assumenda maxime eaque possimus dolore qui saepe architecto repellat!

      </div>
    </section>
    </>
  )
}

const titleEs : string = 'Mis Proyectos.'
const titleEn : string = 'My Projects.'