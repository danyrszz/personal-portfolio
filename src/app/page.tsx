'use client'

import homeStyles from './home.module.css'
import Image from 'next/image'
import mac from '../../public/mac.png'
import { useGlobalLanguage } from './context/LanguageContext'

export default function Home() {
  const {language} = useGlobalLanguage()

  return (
    <main className={homeStyles.container}>
      <section className={homeStyles.textContainer}>
        {language==='EN' ? WelcomeMessageEN : WelcomeMessageES}
      <section className={homeStyles.paragraphRow}>
      {language==='EN' ? descriptionEN : descriptionES}
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

// languages

const descriptionES = 
<p className={homeStyles.welcomeParagraph}>
  Soy Daniel Ramírez.😎 <br/> 
  Ingeniero en sistemas apasionado en el desarrollo y la programación radicando en el estado de Veracruz. 💻 <br/> 
  Bienvenido a mi pequeño portafolio. ¡Siéntete libre de echar un vistazo y contactarme!
</p>

const descriptionEN = 
<p className={homeStyles.welcomeParagraph}>
  I'm Daniel Ramírez.😎 <br/> 
  Computer systems engineer in love with development and programming, living in Veacruz state, MX. 💻 <br/> 
  Welcome to my little portfolio. Feel free to take a look around and contact me! 
</p>

const WelcomeMessageES = <span className='title-decorated title-white title-huge'>¡Bienvenido!</span>
const WelcomeMessageEN = <span className='title-decorated title-white title-huge'>Welcome!</span>
