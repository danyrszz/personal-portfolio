import homeStyles from './home.module.css'
import Image from 'next/image'
import mac from '../../public/mac.png'

export default function Home() {
  return (
    <main className={homeStyles.container}>
      <section className={homeStyles.textContainer}>
        {WelcomeMessageEN}
      <section className={homeStyles.paragraphRow}>
        {descriptionEN}
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
  Ingeniero en sistemas apasionado en el desarrollo y la programación radicando en el estado de Veracruz. <br/> 
  Bienvenido a mi pequeño portafolio. ¡Siéntete libre de echar un vistazo y contactarme!
</p>

const descriptionEN = 
<p className={homeStyles.welcomeParagraph}>
  I'm Daniel Ramírez.😎 <br/> 
  Computer systems engineer in love with development and programming, living in Veacruz state, MX. <br/> 
  Welcome to my little portfolio. Feel free to take a look around and contact me!
</p>

const WelcomeMessageES = <span className={homeStyles.welcomeMessage}>¡Bienvenido!</span>
const WelcomeMessageEN = <span className={homeStyles.welcomeMessage}>Welcome!</span>
