import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import CV from '../../assets/CV.pdf'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import { FaGithub, FaHackerrank, FaLinkedin, FaMedium } from 'react-icons/fa6'
import { useTheme } from '../../common/ThemeContext'

const Hero = () => {

    const { theme, toggleTheme } = useTheme()
    const themeIcon = theme === 'light' ? sun : moon

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="dp of sayan" />
                <img className={styles.colorMode} src={themeIcon} alt="theme icon" onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>
                    Sayan
                    <br />
                    Pramanick
                </h1>
                <h2>Frontend Developer</h2>
                <span>

                    <a href="https://linkedin.com/in/sayanpramanick/" rel="noreferrer" target='_blank'>
                        <FaLinkedin className={`${theme === "dark" ? styles.socialIconsDark : styles.socialIconsLight}`} />
                    </a>
                    <a href="https://github.com/sayan2302" rel="noreferrer" target='_blank'>
                        <FaGithub className={`${theme === "dark" ? styles.socialIconsDark : styles.socialIconsLight}`} />
                    </a>
                    <a href="https://medium.com/@sayanpramanick" rel="noreferrer" target='_blank'>
                        <FaMedium className={`${theme === "dark" ? styles.socialIconsDark : styles.socialIconsLight}`} />
                    </a>
                    <a href="https://hackerrank.com/profile/sayan_pro_id" rel="noreferrer" target='_blank'>
                        <FaHackerrank className={`${theme === "dark" ? styles.socialIconsDark : styles.socialIconsLight}`} />
                    </a>
                </span>
                <p className={styles.description}>With a passion for developing modern React web apps for commercial businesses.</p>
                <a href={CV} download="Sayan's Resume">
                    <button className='hover' >Resume</button>
                </a>
            </div>
        </section>
    )
}

export default Hero
