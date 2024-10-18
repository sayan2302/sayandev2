import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
// import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

const Skills = () => {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>


            <div className={styles.skillIconContainer}>
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=js&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=ts&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=python&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=nodejs&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=express&theme=${theme}`} alt="" />
            </div>
            <hr />
            <div className={styles.skillIconContainer}>
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=react&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=mui&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=css&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=tailwind&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=bootstrap&theme=${theme}`} alt="" />
            </div>
            <hr />
            <div className={styles.skillIconContainer}>
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=mongodb&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=mysql&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=sqlite&theme=${theme}`} alt="" />
                <img className='skillIcon' src={`https://skillicons.dev/icons?i=redux&theme=${theme}`} alt="" />
            </div>
        </section>
    )
}

export default Skills
