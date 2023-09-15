'use client'

import homeStyles from './home.module.css'
import Image from 'next/image'
import mac from '../../public/mac.png'
import { useGlobalLanguage } from './context/LanguageContext'

interface content {
  welcomeMessage : string,
  description : string[]
}
interface lang {
  es : content,
  en : content
}

const content : lang = {
  es :  {
    welcomeMessage : '¡Bienvenido!',
    description : [
      'Soy Daniel Ramírez.😎',
      'Ingeniero en sistemas apasionado en el desarrollo y la programación radicando en el estado de Veracruz. 💻',
      'Bienvenido a mi pequeño portafolio. ¡Siéntete libre de echar un vistazo y contactarme!'
    ]
  },
  en :  {
    welcomeMessage : 'Welcome!',
    description : [`I'm Daniel Ramírez.😎`,
    'Computer systems engineer in love with development and programming, living in Veacruz state, MX. 💻',
    'Welcome to my little portfolio. Feel free to take a look around and contact me!'
    ]
  }
}

export default function Home() {
  const {language} = useGlobalLanguage()
  return (
    <main className={homeStyles.container}>
      <section className={homeStyles.textContainer}>
        <span className={homeStyles.welcomeMessage + ' title-decorated title-white'}>
          {language==='EN' ? content.en.welcomeMessage : content.es.welcomeMessage}
        </span>

        <section className={homeStyles.paragraphRow}>
          <p className={homeStyles.welcomeParagraph}>
          { language==='EN'?
            content.en.description.map( element => (<> {element} <br/></>)) :
            content.es.description.map( element => (<> {element} <br/></>)) 
          }
          </p>
          <Image
            src={mac}
            alt='mac computer home page'
            className={homeStyles.image}
          />
        </section>
      </section>
    </main>
  )
}