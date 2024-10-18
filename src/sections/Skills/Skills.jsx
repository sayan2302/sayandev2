import styles from './SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

const Skills = () => {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>


            <div className={styles.skillIconContainer}>
                <img className='skillIcon' src="https://skillicons.dev/icons?i=java&theme=light" alt="" />
                <img className='skillIcon' src="https://skillicons.dev/icons?i=kotlin&theme=light" alt="" />
                <img className='skillIcon' src="https://skillicons.dev/icons?i=react&theme=light" alt="" />
                <img className='skillIcon' src="https://skillicons.dev/icons?i=nodejs&theme=light" alt="" />
            </div>
            <hr />
            <div className={styles.skillIconContainer}>
                <img className='skillIcon' src="https://skillicons.dev/icons?i=java&theme=light" alt="" />
                <img className='skillIcon' src="https://skillicons.dev/icons?i=kotlin&theme=light" alt="" />
                <img className='skillIcon' src="https://skillicons.dev/icons?i=figma&theme=light" alt="" />
                <img className='skillIcon' src="https://skillicons.dev/icons?i=nodejs&theme=light" alt="" />
            </div>
            <hr />
            <div className={styles.skillIconContainer}>
                <img className='skillIcon' src="https://skillicons.dev/icons?i=java&theme=light" alt="" />
                <img className='skillIcon' src="https://skillicons.dev/icons?i=kotlin&theme=light" alt="" />
                <img className='skillIcon' src="https://skillicons.dev/icons?i=figma&theme=light" alt="" />
                <img className='skillIcon' src="https://skillicons.dev/icons?i=nodejs&theme=light" alt="" />
            </div>
        </section>
    )
}

export default Skills
