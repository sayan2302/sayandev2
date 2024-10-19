import styles from './SkillsStyles.module.css'
import { useTheme } from '../../common/ThemeContext'

const Skills = () => {
    const { theme } = useTheme();
    return (
        <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>


            <div className={styles.skillIconContainer}>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=js&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>JS</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=ts&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>TS</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=python&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>Python</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=nodejs&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>Node</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=express&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>Express</span>
                </div>
            </div>
            <hr />
            <div className={styles.skillIconContainer}>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=react&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>React</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=mui&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>MUI</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=css&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>CSS</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=tailwind&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>Tailwind</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=bootstrap&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>Bootstrap</span>
                </div>
            </div>
            <hr />
            <div className={styles.skillIconContainer}>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=mongodb&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>MongoDB</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=mysql&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>MySql</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=sqlite&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>Sqlite</span>
                </div>
                <div className={styles.skillBox}>
                    <img className={styles.skillIcon} src={`https://skillicons.dev/icons?i=redux&theme=${theme}`} alt="" />
                    <span className={styles.skillName}>Redux</span>
                </div>
            </div>
        </section>
    )
}

export default Skills
